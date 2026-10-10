import { GoogleGenAI } from "@google/genai"
import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? "" })

const STYLE = `Photoreal architectural interior photography. Bright, airy, light-filled luxury Indian home.
Palette: pearl white, ebony black accents, soft brushed champagne-gold hardware. Soft diffused daylight, 35mm lens,
clean modern lines, calm and uncluttered. No text, no logos, no watermark, no people, no brand names.`

interface ImageSlot {
  id: string
  ratio: "16:9" | "4:5" | "3:2" | "1:1"
  width: number
  prompt: string
  alt: string
  refs?: Array<{ inlineData: { mimeType: string; data: string } }>
}

const SLOTS: ImageSlot[] = [
  {
    id: "hero-poster",
    ratio: "16:9",
    width: 1920,
    prompt:
      "Wide view of a luxury modular kitchen, white and ebony fluted cabinetry, brushed gold handles, long island, tall window with golden-hour light on the floor.",
    alt: "Luxury modular kitchen by EBONY — pearl white cabinetry with brushed gold hardware",
  },
  {
    id: "kitchen-card",
    ratio: "4:5",
    width: 900,
    prompt:
      "Close, elegant detail of a modular kitchen run, gold handle and ebony grain panel, shallow depth of field.",
    alt: "Luxury modular kitchen with ebony cabinetry and gold handles",
  },
  {
    id: "wardrobe-card",
    ratio: "4:5",
    width: 900,
    prompt:
      "Walk-in wardrobe with ebony fluted doors, gold rails, soft backlit shelves, pale daylight.",
    alt: "Walk-in wardrobe with ebony fluted doors and gold rails",
  },
  {
    id: "bedset-card",
    ratio: "4:5",
    width: 900,
    prompt:
      "Master bedroom with ebony upholstered headboard bed set and matching side tables, white linen, soft morning light.",
    alt: "Master bedroom with ebony upholstered headboard and gold accents",
  },
  {
    id: "process-engineering",
    ratio: "3:2",
    width: 1200,
    prompt:
      "Precision machining of a white laminate panel, clean modern workshop, German CNC machinery, no brand marks.",
    alt: "Precision engineering of modular interior panel in modern German CNC workshop",
  },
]

async function generateSlot(slot: ImageSlot) {
  console.log(`Generating slot ${slot.id}...`)
  try {
    const model = process.env.GEMINI_IMAGE_MODEL ?? "gemini-3.1-flash-image-preview"
    const response = await ai.models.generateContent({
      model,
      contents: [
        { text: `${STYLE}\n\n${slot.prompt}` },
        ...(slot.refs ?? []),
      ],
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: { aspectRatio: slot.ratio },
      },
    })

    const candidate = response.candidates?.[0]
    const part = candidate?.content?.parts?.find((p) => p.inlineData)
    if (!part?.inlineData?.data) {
      throw new Error(`No image payload returned for ${slot.id}`)
    }

    const buffer = Buffer.from(part.inlineData.data, "base64")
    const outDir = path.resolve(process.cwd(), "public/img")
    await fs.mkdir(outDir, { recursive: true })

    const outPath = path.join(outDir, `${slot.id}.webp`)
    await sharp(buffer)
      .resize({ width: slot.width })
      .webp({ quality: 80 })
      .toFile(outPath)

    console.log(`Saved ${outPath}`)
  } catch (error) {
    console.error(`Failed to generate ${slot.id}:`, error)
  }
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY not set. Using existing pre-generated imagery in public/img.")
    return
  }

  for (const slot of SLOTS) {
    await generateSlot(slot)
  }
}

main().catch(console.error)

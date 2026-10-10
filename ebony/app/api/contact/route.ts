import { NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, city, interest, message, honeypot } = body

    // 1. Spam check
    if (honeypot) {
      return NextResponse.json(
        { success: false, error: "Spam detected" },
        { status: 400 }
      )
    }

    // 2. Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required" },
        { status: 400 }
      )
    }

    const lead = {
      id: `lead_${Date.now()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email || "").trim(),
      city: String(city || "").trim(),
      interest: String(interest || "General Consultation").trim(),
      message: String(message || "").trim(),
      createdAt: new Date().toISOString(),
    }

    // 3. Save lead to local JSON storage for backup
    try {
      const dataDir = path.resolve(process.cwd(), "data")
      await fs.mkdir(dataDir, { recursive: true })
      const filePath = path.join(dataDir, "leads.json")

      let existingLeads = []
      try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        existingLeads = JSON.parse(fileContent)
      } catch {
        existingLeads = []
      }

      existingLeads.push(lead)
      await fs.writeFile(filePath, JSON.stringify(existingLeads, null, 2))
    } catch (fsErr) {
      console.warn("Could not save to local leads.json:", fsErr)
    }

    // 4. Optional webhook integration if configured in .env
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        })
      } catch (webhookErr) {
        console.error("Failed to post to webhook:", webhookErr)
      }
    }

    console.log("New EBONY Consultation Lead:", lead)

    return NextResponse.json({
      success: true,
      message: "Consultation enquiry received. Our design team will contact you shortly.",
      leadId: lead.id,
    })
  } catch (err) {
    console.error("Error processing contact form:", err)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "EBONY Modular Interiors Consultation API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  })
}

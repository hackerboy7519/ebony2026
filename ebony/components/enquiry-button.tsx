"use client"

import type { ReactNode } from "react"
import { openEnquiryModal, type EnquiryEventDetail } from "@/components/enquiry-modal"

/** A plain button that opens the enquiry form, so server-rendered pages can offer it. */
export function EnquiryButton({
  detail,
  className,
  children,
}: {
  detail?: EnquiryEventDetail
  className?: string
  children: ReactNode
}) {
  return (
    <button type="button" onClick={() => openEnquiryModal(detail)} className={className}>
      {children}
    </button>
  )
}

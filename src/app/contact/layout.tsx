import { type Metadata } from "next"
import { contactMetadata } from "./page"

export const metadata: Metadata = contactMetadata

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 
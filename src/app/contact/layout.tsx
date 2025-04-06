import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "연락처 - 신제용 포트폴리오",
  description: "신제용에게 연락하거나 메시지를 보내는 방법",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 
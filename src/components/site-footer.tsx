import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} 신제용. 모든 권리 보유.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
} 
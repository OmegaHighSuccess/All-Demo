import type { ReactNode } from "react"

export const metadata = { title: "inventive-background-780369.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

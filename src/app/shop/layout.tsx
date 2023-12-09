import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Shop Layout</h1>
      {children}
    </>
  )
}

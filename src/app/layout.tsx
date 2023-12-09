'use client'
import { Inter } from 'next/font/google'
import { store } from './store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <h1>Root Layout</h1>
          {children}</body>
      </html>
    </Provider>
  )
}

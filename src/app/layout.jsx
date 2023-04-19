import './globals.css'

export const metadata = {
  title: 'Marvel info',
  description: 'Informação da marvel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

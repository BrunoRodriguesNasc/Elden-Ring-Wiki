import Header from '@/components/Header'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-home-pattern bg-cover bg-fixed bg-center bg-no-repeat h-screen'>
      <Header/>
        {children}
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10"/>
        </body>
    </html>
  )
}

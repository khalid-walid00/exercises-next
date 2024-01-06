import { Inter } from 'next/font/google'
import './globals.css'
import '@/app/styles/css.css'
import Navbar from "@/app/Com/Navbar/padge"
import Footer from "@/app/Com/Footer/page"
import { Lightanddark } from './Com/Context/LightandDark'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'khalid_shop',
  description: 'buy products ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{height:"100vh",overflowX:"hidden"}}>   
    <Lightanddark >
       <Navbar/>
        {children}
        <Footer/>
      </Lightanddark></body>
        
    </html>
  )
}

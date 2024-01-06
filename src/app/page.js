import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div className="container grid grid-cols-2 h-screen items-center">
    <div className='text-cente'><h1 className='text-center uppercase text-7xl underline underline-offset-[5px] decoration-green-500 decoration-wavy'>your best online shop destination</h1>
     <p className=" capitalize px-40 leading-7 my-8">discover a world of endless shopping possibilities at our online store. browser choose, and order your favourite products from the comfort of your home</p>
   <div className='grid justify-items-center'><Link href={"/Com/Badge/Blog"} className=' bg-green-700 rounded-xl w-max text-lg font-bold text-white px-4 py-3 '>SHOP NOW</Link></div>
   
    </div>
    <div className='text-center'><Image src="/Img/images.jpeg" className=' rounded-xl' width={600} height={600} alt='khalidandhaidy'/></div>
  </div>
  )
}

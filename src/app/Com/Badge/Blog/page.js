"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  async function Dataa() {
    try {
      const x = await fetch("https://dummyjson.com/products");
      const res = await x.json();
      const products = res.products || [];

      const xml = products.map((item, key) => (
        
         <Link key={key} href={`${item.id}`} className='border z-10 border-sky-500 border-dashed rounded-2xl'>
          <div className='relative w-full h-80'>
        <Image  src={`${item.thumbnail}`}
    className='rounded-xl w-max'
     fill={true}
    alt='l'/>
    </div>
  <div className=' text-4xl p-4 my-2 break-all'>{item.title}</div>
  <div className='p-4  break-all'>{item.description}</div>
     </Link>


      ));

      return xml;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className='h-full'>
         <div className='container  my-10 px-80'>  
          <div className='grid grid-cols-4 gap-4'>
            <Dataa/>
            </div>
        
 
        </div>
        
    </div>
  )
}

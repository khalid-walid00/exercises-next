"use client"
import React, { useContext } from 'react'
import { Links } from './data'
import Link from 'next/link'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
export default function padge() {
  return (<>
    <nav className="lg:justify-between sticky top-0 z-50 font-bold px-20 bg-lime-600 sm:justify-center  sm:flex sm:flex-col lg:grid lg:grid-cols-2 ">
       <div className="sm:text-center  lg:text-start text-4xl animate-bounce">Khalid</div>
    <div className="flex  flex-wrap justify-around align-middle">
        {Links.map((e,key)=> <Link className="flex items-center transition duration-150 hover:scale-125 hover:text-slate-800" key={key} href={e.path}>{e.name}</Link>)}
    <Button/>
    </div>
  </nav>
  
    </>)
}

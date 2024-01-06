import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='grid grid-rows-2 h-60 bg-gradient-to-r from-lime-950 via-lime-600 to-lime-100'>
    <div className='grid grid-cols-2 text-center justify-between'>
      <div className=''>
        <div className='my-4'>The address is in Al-Bashmour, Minyat Al-Nasr Center, Dakahlia</div>
        <div className='my-12 text-6xl mode animate-bounce'>Get in touch</div>
      </div>
      <div className='grid grid-rows-4 justify-self-center'>
      <div className='grid grid-cols-2 space-x-0'><FontAwesomeIcon className='w-8' icon={faInstagram} /><a className='uppercase' target="_blank" href="https://instagram.com/khalidwalid00">instagram</a></div>
      <div className='grid grid-cols-2 space-x-0'><FontAwesomeIcon className='w-8' icon={faFacebook} /><a className='uppercase' target="_blank" href="https://www.facebook.com/profile.php?id=100012325211174&mibextid=ZbWKwL">facebook</a></div>
      <div className='grid grid-cols-2 space-x-0'><FontAwesomeIcon className='w-8' icon={faWhatsapp} /><a className='uppercase' target="_blank" href="https://wa.me/qr/E6VMKUW5K4RVO1">Whatsapp</a></div>
      <div className='grid grid-cols-2 space-x-0'><FontAwesomeIcon className='w-8' icon={faLinkedin} /><a className='uppercase' target="_blank" href="https://www.linkedin.com/in/khalid-walid-72460b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin</a></div>
      </div>
    </div>
    <div className='text-center justify-center items-end flex'> Copyright © 2023 Portfolio & CV | Powered by khalid & haidy</div>
   
    </div></>
  )
}

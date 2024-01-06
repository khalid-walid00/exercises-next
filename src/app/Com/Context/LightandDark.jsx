"use client"
import React, { createContext, useState } from 'react'
 export const Theme= createContext()
export const Lightanddark = ({children}) =>{
    const [mode,setmode] = useState('dark')
     const toggle = ()=>{
        setmode((prev)=>(prev === "light"?"dark": "light"))
     }
  return (
<>
 <Theme.Provider value={{toggle,mode}}>
    <div className={`${mode}`}> {children}</div>
   
 </Theme.Provider>
</>
    )
}
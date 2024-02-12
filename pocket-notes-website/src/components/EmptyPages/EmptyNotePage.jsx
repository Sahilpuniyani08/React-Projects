import React from 'react'
import Image from '../../assets/images/emptyImage.png'
import { useNote } from '../../Contexts/NoteContext'
import "./EmptyNotePage.css"
function EmptyNotePage({heading ,text, bottom=""}) {

  const{selectedGroup} = useNote();
  return (
    <div className={`flex flex-col gap-3 w-full h-screen items-center justify-center ${selectedGroup ? "sideBarhidden":"sideBarBlock"}`}>
   <img src={Image} className='w-1/2' alt="emptyImage" /> 
   <h1 className='font-bold text-2xl font-sans'>{heading}</h1>
   <p className='w-1/2  text-center'> {text}</p>
   <p className='w-1/2 absolute text-center bottom-5'>{bottom}</p>
    
    </div>
  )
}

export default EmptyNotePage

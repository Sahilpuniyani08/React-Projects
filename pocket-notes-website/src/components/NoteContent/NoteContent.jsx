import React from 'react'

function NoteContent({note,date,time}) {
  return (
    
<div className="block max-w-full pt-6 pb-3 px-6 mx-5 mb-5 bg-white border border-gray-200 rounded-lg drop-shadow-lg ">

<p className="font-md text-black-700 text-[18px] text-black text-5 ">{note}</p>
<div className='flex flex-row gap-2 mt-5 items-center w-full justify-end'>

<span >{date} </span>
<span style={{height:"0.3em" ,width:"0.3em" ,borderRadius:"100%",background:"#000"}}></span>
<span>{time}</span>
</div>


</div>
  )
}   

export default NoteContent

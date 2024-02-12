import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
const data = useLoaderData();
console.log(data);
    // const [data ,setData] = useState([]);
    // useEffect(() => {
    //   fetch("https://api.github.com/users/Sahilpuniyani08")
    //   .then(res =>  res.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
  
   <div className=' flex flex-coltext-center flex-wrap text-4xl bg-gray-700 text-white sm:text-3xl p-4 '>
   <img   src={data.avatar_url} alt='Git Picture' />
   <h6>  Github Followers : {data.followers}</h6>
    </div>
   
    
 
   
  )
}

export default GitHub

export const GitHubInfoLoader = async () =>{
    const reaponse =  await fetch("https://api.github.com/users/Sahilpuniyani08")
      return reaponse.json();
}
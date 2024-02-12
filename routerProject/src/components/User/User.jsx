import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function User({}) {
    const {userid} = useParams();
  return (
    <div className='text-center text-4xl bg-gray-700 text-white sm:text-3xl p-4'>
     User : {userid}
    </div>
  )
}

export default User

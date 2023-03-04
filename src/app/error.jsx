'use client';
import {useEffect} from 'react'

export default function error({error , reset}) {
    
  return (
    <div className='text-center mt-10 '>
      <h1>Something went wrong</h1>
      <button onClick={()=>reset()} className="hover:text-amber-500">Try again
      </button>
    </div>
  )
}

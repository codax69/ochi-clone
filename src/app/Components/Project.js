import React from 'react'
import Eyes from './Eyes'

const Project = () => {
    let textArray = ["ready","to start","the project?"]
  return (
    <>
    <div className=' relative h-full w-full flex items-center bg-[#cdea68] justify-center '>
        <div className='bg-[#cdea68] h-screen'>
            {
                textArray.map((text,index)=>{
                   return <h2 className=' pt-12 font-bold text-[9vw] text-center -mb-16 text-[#212121] tracking-tighter uppercase' key={index}>{text}</h2>
                })
            }
            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex gap-5'>
               <Eyes/>
               <Eyes/>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project
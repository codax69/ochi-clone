import React from 'react'

const Card = () => {
  return (
    <>
    <hr className='h-[1px] bg-white' />
    <div className=' relative w-full h-screen flex px-12 gap-5 mt-32'>
       <div className='w-1/2 h-[26rem]'>
        <div className=" relative h-full w-full rounded-xl bg-[#004d43] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" height={150} width={150} alt="" />
          <div className='absolute text bottom-8 left-8 border-2 border-[#cdea68] text-[#cdea68] px-4 py-2 tracking-tight rounded-3xl'>&copy;2019-2022</div>
        </div>
       </div>
       <div className='w-1/2 h-[26rem] flex gap-5'>
        <div className='relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" height={150} width={150} alt="" />
          <div className='absolute text bottom-8 left-8 border-2 border-white text-sm font-normal text-white px-4 py-2 tracking-tight rounded-3xl'>RATING 5.0 ON CLUTCH</div>

        </div>
        <div className='relative w-1/2 h-[26rem] rounded-xl bg-[#212121] flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" height={104} width={102} alt="" />
          <div className='absolute text bottom-8 left-8 border-2 border-white text-sm font-normal text-white px-4 py-2 tracking-tight rounded-3xl'>BUSINESS BOOTCAMP ALUMNI</div>

        </div>
       </div>
    </div>
    </>
  )
}

export default Card
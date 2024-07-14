import React from 'react'
import SocialICons from './socialICons'
import MessageICon from '../assets/image 50.svg'


export default function footer() {
  return (
    <div className='bg-[#160530] pt-[70px] pr-[69px] pb-[46px] pl-[69px]'>
      <h2 className='
        font-inter 
        text-[58px] 
        font-semibold 
        leading-[70.19px] 
        text-left 
        text-white
        mb-[11px]
      '>Let’s start working to build a brighter future.</h2>

      <div className='text-right mb-[67px]'>
        <input className='
            bg-inherit 
            w-[500px] 
            pt-[25px] 
            pb-[29px] 
            pl-[26px] 
            border 
            border-[#E0CFFC] 
            border-r-0
            placeholder:font-inter 
            placeholder:text-[21px] 
            placeholder:font-normal 
            placeholder:leading-[36px] 
            placeholder:text-left 
            placeholder:text-white
            text-white
            font-normal 
            text-[21px]' 
            type="text" 
            placeholder='Join our mailing list' 
        />
        <button className=' 
            border 
            border-[#E0CFFC]  
            bg-inherit 
            text-white 
            pt-[30.5px] 
            pr-[32px] 
            pb-[31px]
            border-l-0
        '>Submit</button>
      </div>

      <p className='
        font-inter 
        text-base 
        font-normal 
        leading-7 
        text-left 
        max-w-[456px] 
        text-white
        mb-[32px]
      '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.</p>

      <SocialICons />

      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
            <img src={MessageICon} alt="message icon" />
            <p className='
                font-inter 
                text-2xl 
                font-bold 
                leading-[38px] 
                tracking-wide 
                text-white
            '>New Business</p>
        </div>

        <div className='
            font-inter 
            text-base 
            font-normal 
            leading-[38px] 
            text-left 
            text-gray-200
        '>
            Copyright 2021. All rights reserved.
        </div>
      </div>
    
    </div>
  )
}

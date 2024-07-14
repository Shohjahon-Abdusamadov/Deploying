import React from 'react'
import MessageICon from '../assets/image 48.svg'

export default function header() {
  return (
    <div className='
        flex
        items-center
        justify-between
        pt-5
        pr-5
        pl-5
        mb-[138px]
    '>
      <div className="icon">
            <a href="./index.html" className='
                flex
                items-center
                gap-2
                font-inter
                font-bold
                text-xl
            '>
                <img src={MessageICon} alt="message icon"/>
                <span className='
                    font-inter
                    font-bold
                    text-purple-600
                    text-xl
                '>Talk</span>Business
            </a>
      </div>

      <div className="
        flex
        items-center
        gap-[29px]
      ">
        <nav>
            <ul className='
                flex
                items-center
                gap-[52px]
                font-semibold
                text-[16px]
            '>
                <li className='hover:border-b-2 border-black'><a href="./index.html">Home</a></li>
                <li className='hover:border-b-2 border-black'><a href="#">About</a></li>
                <li className='hover:border-b-2 border-black'><a href="#">Services</a></li>
                <li className='hover:border-b-2 border-black'><a href="#">Systems</a></li>
            </ul>
        </nav>

        <div className="contact_btn">
            <button className='
                border-2
                rounded-full
                px-[33px]
                py-[15px]
                border-[#6610F2]
                text-[#6610F2]
                font-semibold
                text-[16px]
            '>Contact us</button>
        </div>
      </div>
    </div>
  )
}

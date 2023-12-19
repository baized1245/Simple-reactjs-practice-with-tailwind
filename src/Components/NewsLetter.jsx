import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
       <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className="m-2">
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
            <span className='text-white'>Sign up our newsletter and stay up to date. </span>
        </div>
        <div className="m-2">
            <input type="text" className='sm:w-full rounded-lg mb-2 p-3 mr-2 text-slate-600' placeholder='Email' />
            <button className='bg-black text-white p-3 rounded-lg'>Get Started</button>
            <br />
            <p>We care about the protection of your data. Read our <br /> <span className='text-black'>Privacy policy</span></p>
        </div>
       </div>
    </div>
  )
}

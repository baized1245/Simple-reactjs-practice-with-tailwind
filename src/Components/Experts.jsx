import React from 'react';
import image from '../assets/img/image.jpg'

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
         <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={image} alt="" className='inline' />
         </div>
         <div className="col-span-1 flex flex-col items-center justify-center">
            <h1 className='text-[#00df9a] font-bold my-2'>Learn From Expert</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam dolore exercitationem corrupti ab voluptate maiores laboriosam, perspiciatis magni velit voluptas a quo laudantium similique ratione reprehenderit aut culpa excepturi ea hic nobis deleniti consequuntur praesentium neque. Modi consequatur illo nemo molestias alias, quasi dignissimos quam, ut corrupti eveniet qui deserunt ipsa magnam quaerat, libero blanditiis dolorem! Doloribus, consequuntur ipsum?</p>
            <button className='w-[30%] bg-black text-white p-3 rounded-lg'>Get Started</button>
         </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png';

// bg-[#091e22] 
// hover:text-[#00a896]

const Nav = () => {
    const [isScroll , setScroll] = useState(false);
    const bgheader = () => {
        let Scroll = window.scrollY > 50;
        console.log(Scroll)
        Scroll ? setScroll(true) : setScroll(false);
    };
    
    window.addEventListener('scroll', bgheader);

    
  return (
    <div className={`w-full py-4 px-16 transition-colors  z-[1000] fixed ${isScroll ? 'bg-[#091e22] shadow-lg' : 'bg-[#091e2200]'}`}>
      <div className='flex justify-between items-center '>
        <div className='w-16 h-16 items-center'  style={{ backgroundImage: `url(${logo})`, backgroundSize: 'contain', backgroundRepeat : 'no-repeat', backgroundPosition : 'center'}}></div>
        <div className='flex justify-center items-center gap-16 text-teal-50 text-lg font-semibold'>
            <h1 className='cursor-pointer hover:text-[#00a896] transition-[1s]'>Home</h1>
            <h1 className='cursor-pointer hover:text-[#00a896] transition-[1s]'>About</h1>
            <h1 className='cursor-pointer hover:text-[#00a896] transition-[1s]'>Work Process</h1>
            <h1 className='cursor-pointer hover:text-[#00a896] transition-[1s]'>Testimonals</h1> 
            <h1 className='cursor-pointer hover:text-[#00a896] transition-[1s]'>Contact </h1>   
        </div>
      </div>
    </div>
  )
}

export default Nav

import React from 'react'
import blog1 from '../images/bgHome.jpg';

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center relative' style={{ backgroundImage: `url(${blog1})`, backgroundSize: 'cover', backgroundRepeat : 'no-repeat', backgroundPosition : 'center'}}>
      <div className='z-[0] absolute w-full h-full bg-[#091e22] opacity-80'></div>

      <div className='z-50 py-4 px-8 '>
            <h1 className='text-teal-50 text-[3rem] font-edu tracking-[3px]'>We Provide the best <span className='font-bold text-[#00a896]'>Strategy</span> to <br /> grow up your <span className='font-bold text-[#00a896]'>Business</span></h1>
      </div>

        <duv className='absolute container bottom-[-20%] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center px-6'>
        <div className='w-[300px] bg-teal-50 h-[45vh] rounded-[1rem] '>Box1</div>
        <div className='w-[300px] bg-teal-50 h-[45vh] rounded-[1rem] '>Box1</div>
        <div className='w-[300px] bg-teal-50 h-[45vh] rounded-[1rem] '>Box1</div>
        </duv>
    </div>
  )
}

export default Home

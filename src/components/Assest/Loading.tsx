import React from 'react'
import laoding from "../../assets/1.png"
export const Loading: React.FC = () => {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center flex-col animate__animated animate__fadeInLeft overflow-hidden" >
      <div className='absolute top-8 w-screen text-center'><h1 className='text-4xl' id="logoN">LUFFY AN</h1></div>
      <img src={laoding} alt='none' className='w-3/4 animate__animated animate__fadeIn animate-deplay-2s' />
      <h1 className='m-6 text-xl'>Loading...</h1>
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

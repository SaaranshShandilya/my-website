import React from 'react'
import {useState} from 'react'

const Education = () => {
  const[edu, setEdu]  = useState(true)
  return (
    <div className='bg-slate-900 py-10' id='quali'>

      <div className='flex md:space-x-40 space-x-4 md:text-3xl text-xl ml-4 text-white md:mx-20 ' >
      <button className='font-bold focus:underline focus:text-pink-600 hover:text-pink-600 focus:underline-offset-8' onClick={()=>setEdu(true)}>Educational Qualifications</button>
      <button className='font-bold focus:underline focus:text-pink-600 hover:text-pink-600 focus:underline-offset-8' onClick={()=>setEdu(false)}>My Skills</button>
      </div>
     
        {
        edu ?(
          <div>
          <p className='md:flex text-white mt-6 md:mx-20 ml-4 text-xl md:text-2xl'>B.Tech in Computer Science Engineering  - <p className='md:ml-2 text-zinc-300'>G.D. Goenka University</p></p>
          <p className='text-zinc-300 mt-3 md:mx-20 ml-4 text-lg md:text-2xl'>2023 | 9.34 GPA</p>
          <p className='md:flex text-white mt-6 text-lg ml-4 md:mx-20 md:text-2xl'>Class 12th from Non Medical Stream  - <p className='md:ml-2 text-zinc-300'>Colonel's Central Academy</p></p>
          <p className='text-zinc-300 mt-3 text-lg ml-4 md:mx-20 md:text-2xl'>2019 | 93.4%</p>
          <p className='md:flex text-white mt-6 md:mx-20 md:text-2xl text-lg ml-4'>Class 10th  - <p className='md:ml-2 text-zinc-300'>Colonel's Central Academy</p></p>
          <p className='text-zinc-300 mt-3 md:mx-20 ml-4 text-lg md:text-2xl'>2017 | 10 CGPA</p> 
          </div>
        )
        :
        (
          <div>
            <p className='md:flex text-white mt-6 md:mx-20 text-lg ml-4 md:text-2xl'>Web Development - <p className='md:ml-2 text-zinc-300'>Full Stack</p></p>
            <p className='text-zinc-300 mt-3 md:mx-20 text-lg ml-4 md:text-2xl'>Using frameworks like Reactjs and Nodejs</p>
            <p className='md:flex text-white mt-6 md:mx-20 md:text-2xl text-lg ml-4'>Web Scraping and Automation</p>
            <p className='text-zinc-300 mt-3 md:mx-20 md:text-2xl ml-4 text-lg'>Using Selenium Framework</p>
            <p className='md:flex text-white mt-6 md:mx-20 text-lg ml-4 md:text-2xl'>Practicing and Implementing Deep Learning and AI</p>
            <p className='text-zinc-300 mt-3 md:mx-20 text-lg ml-4 md:text-2xl'>Using Tensorflow</p> 
          </div>
        )}
        
    </div>
  )
}

export default Education
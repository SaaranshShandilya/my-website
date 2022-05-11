import React, {useEffect, useRef} from 'react'
import WAVES from 'vanta/dist/vanta.waves.min.js'
import kd from '../koders.png';
import wilyer from '../Wilyer.png';
import pwf from '../pwf.png';
const Experience = () => {

    const vantaRef = useRef()
    useEffect(() =>{
        const vantaEffect = WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            waveSpeed: 0.60,
            color: 0x5090c

        })
        return () =>{
            if(vantaEffect) vantaEffect.destroy()
        }
    },[])

  return (
    <div ref={vantaRef} id='job'>
        <h1 className='text-rose-600 font-bold text-5xl py-10 text-center md:text-left md:ml-20'>Work Experience</h1>
        <div className='md:grid md:grid-cols-3 text-center mt-10 pb-16 md:mx-20  gap-6'>
            <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl mt-4 hover:bg-red-500 p-4 hover:text-white '>
                <img src={kd} className='h-10 mt-6 mb-4 rounded-lg mx-auto '></img>
                <h1 className='text-2xl font-semibold'>Koders.in</h1>
                <h1 className='text-lg  '>February 2021 - March 2021</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://drive.google.com/file/d/1UJnPPJMNYOtHhavTBQVS29EuZgUP0_Nn/view?usp=sharing'>View Certificate</a>
                <p className='mx-4 my-4'>Played a vita role in building a bot using Selenium Webdriver and Javascript Frameworks. The bot was responsible forlogging into the websites, and ordering products in bulk and make payment.</p>
            </div>
            <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl mt-4 p-4 hover:bg-red-500 hover:text-white '>
                <img src={wilyer} className='h-10 mt-6 mb-4 rounded-lg mx-auto'></img>
                <h1 className='text-2xl font-semibold'>Wilyer</h1>
                <h1 className='text-lg  '>April 2021 - May 2021</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://drive.google.com/file/d/1XMq7mfK9fsldt9nCxI9sa9c7uGVXFo8n/view?usp=sharing'>View Certificate</a>
                <p className='mx-4 my-4'>My job was to build the backend of a website using Django framework and RESTful API. The website had three interfaces, namely for the user, the provider and the superuser orthe authoritative who could control everything in the website.</p>
            </div>
            <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl mt-4 p-4 hover:bg-red-500 hover:text-white '>
                <img src={pwf} className='h-10 mt-6 mb-4 rounded-lg mx-auto'></img>
                <h1 className='text-2xl font-semibold'>PerroAyuda Welfare Foundation</h1>
                <h1 className='text-lg  '>January 2022 - February 2022</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://drive.google.com/file/d/1AA5MDovtuemPHTf54fWKLJKpi_Xp3KOn/view?usp=sharing'>View Certificate</a>
                <p className='mx-4 my-4'>My job was to build the frontend userinterface for PerroAyuda.org website using React.js and Tailwind CSS which was previously built on WordPress.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
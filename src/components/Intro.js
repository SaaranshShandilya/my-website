import React, {useEffect, useRef} from 'react'
import pic from '../my-photo.jpeg'
import {ParallaxLayer} from 'react-spring'
import Webdevtext from './Webdevtext'
import NET from 'vanta/dist/vanta.net.min.js'


const Intro = () => {

    const vantaRef = useRef()
    useEffect(() =>{
        const vantaEffect = NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x5050f,
            points: 6.00,

        })
        return () =>{
            if(vantaEffect) vantaEffect.destroy()
        }
    },[])

  return (
    <div ref={vantaRef}>
        <div className='md:grid md:grid-cols-3'>
            <div>
                <img className='md:h-4/6 h-60 pt-10  mx-auto  md:pt-0 md:mx-12 md:mt-12 rounded-xl' src={pic}></img>
            </div>
            <div className='col-span-2 md:mt-40 text-center md:text-left'>
                <h1 className='md:text-7xl text-3xl font-bold text-white my-8'>Greetings, Visitor 👋</h1>
                <h1 className='md:text-7xl text-3xl font-bold text-amber-400  md:text-pink-600 my-8'>I am Saaransh Shandilya</h1>
                <h1 className='md:text-7xl ml-16 md:ml-0 text-3xl font-bold text-teal-400 my-8'>{<Webdevtext/>}</h1>
                <p className='md:mt-32 mt-20 md:mx-0 mx-4 text-white text-3xl font-bold'>Welcome to my corner of web!</p>
                <p className='mt-4 text-white text-3xl font-bold pb-8 md:pb-96'>I am glad to have you here</p>
            </div>
        </div>
    </div>
  )
}

export default Intro
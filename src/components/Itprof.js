import React from 'react'
import Tilt from 'react-parallax-tilt';
import csvg from '../c-program.svg';
import cpp from '../c++.svg';
import java from '../java.svg';
import python from '../python.svg';
import js from '../js.svg';
import dj from '../django.svg';
import react from '../react-js.svg';
import ex from '../expressjs.svg';
import node from '../node-js.svg';
import bs from '../bs.svg';
import tf from '../google-tensorflow.svg';
import tc from '../tc.svg';
import sql from '../mysql.svg';
import mongo from '../mongodb.svg';
import html from '../html.svg';
const Itprof = () => {
    
  return (
    <div className='bg-stone-900' id='itprof'>
        <h1 className='text-white mx-20 text-center md:text-left text-5xl pt-10 font-bold'>IT Proficiency</h1>
        <div className=' mt-16 text-center '>
            <h1 className='text-amber-400 text-4xl font-bold'>Programming Languages</h1>
            <div className='mt-10 grid grid-cols-5 mb-20'>
                <div>
                    <Tilt className='md:h-28 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={csvg} alt='Image'></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-28 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={cpp}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-28 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={java}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-28 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={python}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-28 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={js}></img>
                    </Tilt>
                </div>
            </div>
            <h1 className='text-amber-400 text-4xl font-bold'>Frameworks</h1>
            <div className='mt-10 grid grid-cols-7 pb-12'>
            <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={dj}></img>
                    </Tilt>
                </div><div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={react}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto invert' src={ex}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={node}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={bs}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto ' src={tf}></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-10' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={tc}></img>
                    </Tilt>
                </div>
            </div>
            <h1 className='text-amber-400 text-4xl font-bold'>Databases and Others</h1>
            <div className='mt-10 grid grid-cols-3 pb-20'>
                <div>
                    <Tilt className='md:h-24 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={sql} alt='Image'></img>
                    </Tilt>
                </div>
                <div>
                    <Tilt className='md:h-24 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={mongo}></img>
                    </Tilt>
                </div>
                
                <div>
                    <Tilt className='md:h-24 h-16' tiltMaxAngleX={45} tiltMaxAngleY={45}>
                    <img className='h-full mx-auto' src={html}></img>
                    </Tilt>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Itprof
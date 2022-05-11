import React from 'react'

const Projects = () => {
  return (
    <div className='bg-gray-900 py-10 ' id='projects'>
        <h1 className='text-amber-500 md:mx-20 md:my-4 text-center md:text-left text-5xl font-bold'>Projects</h1>
        <div className='md:grid md:grid-cols-4 text-center mt-20 pb-16 md:mx-20 gap-4 '>
        <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl p-2 mt-4  hover:bg-red-500 hover:text-white '>
                <h1 className='text-2xl  font-semibold mt-2 p-2 '>Deepfake Detection Program</h1>
                <h1 className='text-lg  '>TensorFlow | OpenCV | Python</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://github.com/SaaranshShandilya/Deepfakes-Detection-Program'>Github Link</a>
                <p className='mx-4 my-4'>Created during my 1st internship, Python Application that detects the presence of a face morphed falsely over any other person’s videos orimage. It was made using a pre-trained tensorflow model.</p>
            </div>
            <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl p-2 mt-4  hover:bg-red-500 hover:text-white '>
                <h1 className='text-2xl font-semibold mt-4'>COWIN Slot Checker</h1>
                <h1 className='text-lg  '>Selenium | Python</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://github.com/SaaranshShandilya/CoWin-Vaccine-slot-checker'>Github Link</a>
                <p className='mx-4 my-4'>Created a Selenium Web bot that automates the availability of slots of COVID-19 vaccines and notifies the user wheneverit is available via a text message.</p>
            </div>
            <div className='bg-gray-100 md:w-full w-4/5 mx-auto rounded-xl p-2 mt-4 hover:bg-red-500 hover:text-white '>
                <h1 className='text-2xl font-semibold mt-4'>KRUMBLE</h1>
                <h1 className='text-lg mx-2 '>TensorFlow | Speech Recognition | Python | NLTK</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://github.com/SaaranshShandilya/Krumble'>Github Link</a>
                <p className='mx-4 my-4'>It is an interactive speech recognition based assistant that takes vocal commands from userto send whatsapp messages, play music, perform mathematical calculations and access the tools on the system. Moreover, the assistant is trained with a neural network to give out responses on the desired questions.</p>
            </div>
            <div className='bg-gray-100 w-4/5 mx-auto md:w-full rounded-xl p-2 mt-4 hover:bg-red-500 hover:text-white '>
                <h1 className='text-2xl font-semibold mt-4'>PerroAyuda Website</h1>
                <h1 className='text-lg mx-2 '>Reactjs | Tailwindcss | Javascript</h1>
                <a className='text-lg hover:text-amber-300 ' href='https://github.com/SaaranshShandilya/perroayuda-frontend'>Github Link</a>
                <p className='mx-4 my-4'>This project was a frontend website developed during 3rd internship. My job was to make a website on React JS framework.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
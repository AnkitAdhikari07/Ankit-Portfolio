import React, { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile.jpg'

const ReactTypingEffect = ({ text, speed = 100, eraseSpeed = 50, typingDelay = 500, eraseDelay = 2000, cursorRenderer }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = text[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), eraseDelay)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % text.length)
        }
      }
    }, isDeleting ? eraseSpeed : (displayText.length === 0 ? typingDelay : speed))

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, text, speed, eraseSpeed, typingDelay, eraseDelay])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const cursor = showCursor ? '|' : ''

  return (
    <span className="text-[#8245ec]">
      {displayText}
      {cursorRenderer ? cursorRenderer(cursor) : cursor}
    </span>
  )
}

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Ankit Adhikari
          </h2>

          {/* Skills heading with Typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'Python Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) =>(
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            ></ReactTypingEffect>
          </h3>


          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            Hi, I’m Ankit Singh Adhikari — a 4th-year JECRC Foundation student skilled in full-stack web development and Python.
            I build responsive MERN stack applications and enjoy working on both front-end and back-end.
            I’m currently exploring Artificial Intelligence and Machine Learning.
            I aim to create smart, real-world solutions through clean and efficient engineering.
          </p>

          {/* Resume button */}
          <a href="https://drive.google.com/file/d/1uJX_6Eueo3oz5sNantIlyJY0WKTVwDbC/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'  
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>DOWNLOAD RESUME</a>
        </div>


        {/* Right Side */}
        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end md:ml-8'>
            <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Ankit Singh Adhikari" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
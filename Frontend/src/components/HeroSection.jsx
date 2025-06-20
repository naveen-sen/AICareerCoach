import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import TextEffect from './TextEffect'

function HeroSection() {
  const imageRef = useRef(null)

  useEffect(() => {
    const imageElement = imageRef.current

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled')
      } else {
        imageElement.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className='w-full pt-16 md:pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-b-3xl shadow-xl transition-colors duration-300'
      id='home'
    >
      <div className='container mx-auto px-6'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
          {/* Text Section */}
          <div className='text-center md:text-left max-w-2xl'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 dark:text-white mb-6 leading-tight'>
              <TextEffect text="Hi, I'm Naveen" typingSpeed={100} pauseTime={1800} />
            </h1>
            <p className='text-lg sm:text-xl font-medium text-blue-800 dark:text-gray-300 mb-6 leading-relaxed'>
              I'm a passionate learner and aspiring software developer.<br />
              I build projects to explore web technologies and solve real-world problems.<br />
              Ready to bring energy, curiosity, and a fresh perspective to your team.
            </p>
            <div className="flex items-start gap-4 mb-6">
              <a href='#projects' className='inline-block'>
                <Button className='text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 shadow-md' >
                  View My Work
                </Button>
              </a>
              <a href="/Resume.pdf" download className='inline-block'>
                <Button variant="outline" className="text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 shadow-md">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className='flex-shrink-0'>
            <img
              ref={imageRef}
              src='/IMG_20241208_094753.jpg'
              width={300}
              height={300}
              alt='Profile'
              className='w-[250px] sm:w-[280px] md:w-[300px] h-auto rounded-full object-cover border-4 border-blue-200 dark:border-gray-700 shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

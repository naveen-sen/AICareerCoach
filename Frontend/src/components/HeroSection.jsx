import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import TextEffect from './TextEffect';

function HeroSection() {
    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    
  return (
    <section className='w-full pt-10 md:pt-28 pb-10 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 rounded-xl' id='home'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20'>
      
      {/* Text Section */}
      <div className='text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter font-serif text-black mb-3'>
          <TextEffect text="Hi, I'm Naveen" typingSpeed={100} pauseTime={1800} />
        </h1>
        <h3 className='text-md sm:text-lg md:text-xl font-semibold font-serif text-black leading-relaxed'>
          a passionate learner and aspiring software developer.<br />
          I build projects to explore web technologies and<br />
          solve real-world problems.<br />
          I'm ready to bring energy, curiosity, and fresh perspective to your team.
        </h3>
      </div>

      {/* Image Section */}
      <div>
        <img 
          ref={imageRef}
          src='/IMG_20241208_094753.jpg'
          width={300}
          height={300}
          alt='Profile Image'
          className='w-[
          300px] sm:w-[250px] md:w-[300px] h-auto rounded-full shadow-2xl border object-cover mr-10 md:mr-0 transition-transform duration-300 ease-in-out transform hover:scale-105'
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroSection
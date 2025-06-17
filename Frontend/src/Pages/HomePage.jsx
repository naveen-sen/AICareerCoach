import HeroSection from '@/components/HeroSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { faqs } from '@/data/faqs';
import { features } from '@/data/features';
import { howItWorks } from '@/data/HowItWorks';
import { testimonial } from '@/data/testimonial';
import { ArrowRight } from 'lucide-react';
import React from 'react'

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className='w-full py-12 md:py-24 lg:py-32 bg-background' id='projects'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl font-bold tracking-tighter text-left mb-12'>PROJECTS</h2>

          <div className='grid md:grid-cols-2 gap-6'>
            {/* Project 1 */}
            <Card className='border hover:border-primary transition-transform hover:scale-[1.02] duration-300'>
              <CardContent className='pt-6 text-center flex flex-col items-center'>
                <img
                  src='/Screenshot 2025-06-17 110611.png'
                  alt='AI Career Guide Screenshot'
                  className='w-full max-h-[200px] object-cover rounded-lg mb-5 border shadow-md'
                />
                <h3 className='text-xl font-bold mb-3'>AI Career Guide</h3>
                <p className='text-muted-foreground text-sm leading-relaxed mb-6'>
                  Developed an AI-powered career support platform that generates tailored resumes and cover letters, delivers domain-specific interview quizzes, and provides weekly personalized insights. Used Gemini API, Ingest, Prisma, and Clerk.
                </p>
                <div className='flex gap-4'>
                  <a href='https://careerguide-nine.vercel.app/'><Button>View</Button></a>
                  <a href='https://github.com/naveen-sen/Ai-career-guide'><Button variant='outline'>Source</Button></a>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className='border hover:border-primary transition-transform hover:scale-[1.02] duration-300'>
              <CardContent className='pt-6 text-center flex flex-col items-center'>
                <img
                  src='/Screenshot 2025-06-17 112126.png'
                  alt='Ecommerce Screenshot'
                  className='w-full max-h-[200px] object-cover rounded-lg mb-5 border shadow-md'
                />
                <h3 className='text-xl font-bold mb-3'>E-Commerce Website</h3>
                <p className='text-muted-foreground text-sm leading-relaxed mb-6'>
                  Developed a full-stack e-commerce platform with user auth, cart, secure checkout, Razorpay integration. Tech stack: React, Tailwind CSS, Node.js, MongoDB.
                </p>
                <div className='flex gap-4'>
                  <a href='https://thetrendycart.onrender.com/'><Button>View</Button></a>
                  <a href='https://github.com/naveen-sen/Ecommerce-website'><Button variant='outline'>Source</Button></a>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className='border hover:border-primary transition-transform hover:scale-[1.02] duration-300'>
              <CardContent className='pt-6 text-center flex flex-col items-center'>
                <img
                  src='/Screenshot 2025-06-17 113341.png'
                  alt='Chatify Screenshot'
                  className='w-full max-h-[200px] object-cover rounded-lg mb-5 border shadow-md'
                />
                <h3 className='text-xl font-bold mb-3'>Chatify (Real-time Chat App)</h3>
                <p className='text-muted-foreground text-sm leading-relaxed mb-6'>
                  Real-time chat app with Socket.io, MERN stack, JWT-based auth, responsive UI and optimized schema.
                </p>
                <div className='flex gap-4'>
                  <a href='https://chat-app-j0ak.onrender.com/'><Button>View</Button></a>
                  <a href='https://github.com/naveen-sen/Chat-App'><Button variant='outline'>Source</Button></a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50" id="about">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A passionate Full-Stack Developer with a focus on building scalable, user-friendly web applications. Recently completed my B.Tech in Computer Science. Hands-on with React, Next.js, Node.js, and Python. I enjoy turning complex problems into elegant solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-background shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">B.Tech in Computer Science<br />2025 | Medi-Caps University</p>
            </div>
            <div className="bg-background shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <p className="text-muted-foreground">React • Node.js • MongoDB • Prisma • Python • HTML • CSS • JavaScript • SQL</p>
            </div>
            <div className="bg-background shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-muted-foreground">Full-stack projects, AI tools, learning system design.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background" id="contact">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I’m always open to discussing new opportunities, collaborations, or freelance work. Feel free to drop me a message!
          </p>

          <div className="flex justify-center gap-6 mt-6 text-muted-foreground">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=naveennapit@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
            <a href="https://github.com/naveen-sen" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.3 7.9 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.2 2.8.9.1-.7.3-1.2.6-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 .9.9-.3 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.1-1.2 3-.9 3-.9.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.8v2.7c0 .4.2.8.8.6A10.5 10.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/naveen-sen-27660b279" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;

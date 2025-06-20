import React from 'react'

const skills = [
  { name: 'React', imgSrc: '/react.jpg' },
  { name: 'Node.js', imgSrc: '/node.png' },
  { name: 'MongoDB', imgSrc: '/mongo.png' },
  { name: 'Prisma', imgSrc: '/prisma.png' },
  { name: 'Python', imgSrc: '/download.png' },
  { name: 'HTML', imgSrc: '/html.png' },
  { name: 'CSS', imgSrc: '/css.png' },
  { name: 'JavaScript', imgSrc: '/javascript.png' },
  { name: 'SQL', imgSrc: '/sql.png' },
]

function SkillsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50" id="skills">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Here are some of my technical skills.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center bg-background shadow-lg rounded-2xl p-3 sm:p-4 md:p-6 hover:scale-105 transform transition-transform duration-300">
              <img src={skill.imgSrc} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 md:mb-4 object-contain" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

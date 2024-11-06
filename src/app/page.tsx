"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from '@/components/project-card'
import SkillBadge from '@/components/skill-badge'
import ContactForm from '@/components/contact-form'
import { Button } from '@/components/ui/button'

const titles = [
  "Welcome to My Portfolio",
  "Crafting Digital Experiences",
  "Bringing Ideas to Life",
  "Innovating Through Code",
  "Full-Stack Developer"
]

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000) // Change title every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      imageUrl: "/placeholder.svg?height=200&width=400",
      techStack: ["React", "Next.js", "TypeScript"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      imageUrl: "/placeholder.svg?height=200&width=400",
      techStack: ["Node.js", "Express", "MongoDB"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/yourusername/project2"
    },
  ]

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git"]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section 
        id="hero" 
        className="text-center py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-[60px] mb-4"> {/* Fixed height container for text animation */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTitleIndex}
              className="text-4xl md:text-5xl font-bold font-heading text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">I'm a full-stack developer passionate about creating amazing web experiences.</p>
        <motion.div
          className="relative w-64 h-64 mx-auto mb-8"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10, 
            ease: "easeInOut" 
          }}
        >
         <Image
  src="/profile-pic.png"
  alt="Shahab Quresh"
  width={300} // Adjust this to match your image width
  height={300} // Adjust this to match your image height
  className="rounded-full"
/>
        </motion.div>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Get in Touch
        </Button>
      </motion.section>

      <motion.section 
        id="projects" 
        className="py-20"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-heading text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-heading text-primary">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            I'm a passionate full-stack developer with experience in building modern web applications. 
            I love learning new technologies and solving complex problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new programming languages.
          </p>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-heading text-primary">My Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-heading text-primary">Contact Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <ContactForm />
        </div>
      </motion.section>
    </div>
  )
}
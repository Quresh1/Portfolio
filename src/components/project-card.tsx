import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
}

export default function ProjectCard({ title, description, imageUrl, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <Image src={imageUrl} alt={title} width={400} height={200} className="w-full object-cover h-48" />
        <CardHeader>
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Badge variant="secondary" className="text-xs">{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Button>
          <Button asChild variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
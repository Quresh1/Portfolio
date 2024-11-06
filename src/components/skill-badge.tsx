import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge 
        variant="outline" 
        className="text-sm font-medium bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log({ name, email, message })
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
      />
      <Textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={isSubmitting ? 'submitting' : 'idle'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </AnimatePresence>
    </form>
  )
}
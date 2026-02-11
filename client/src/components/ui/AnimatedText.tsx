import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  delay?: number
  className?: string
  variant?: 'stagger' | 'fade' | 'glitch'
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  className = '',
  variant = 'stagger',
}) => {
  if (variant === 'fade') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {text}
      </motion.div>
    )
  }

  if (variant === 'glitch') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className={`relative ${className}`}
      >
        <span>{text}</span>
      </motion.div>
    )
  }

  const letters = text.split('')

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * 0.03,
              },
            },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText

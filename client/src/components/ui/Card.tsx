import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  hoverEffect?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  borderColor = '#ffed4e',
  hoverEffect = true,
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, boxShadow: `0 20px 25px rgba(255, 237, 78, 0.2)` } : {}}
      transition={{ duration: 0.3 }}
      className={`
        border-3 p-6 bg-white
        transition-all duration-300
        ${className}
      `}
      style={{
        borderColor: borderColor,
        boxShadow: `6px 6px 0px rgba(0, 0, 0, 0.08)`,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Card

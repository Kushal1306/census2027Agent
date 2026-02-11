import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'font-bold transition-all duration-300 relative overflow-hidden'
  
  const variantStyles = {
    primary: 'bg-neo-accent border-2 border-neo-accent text-neo-black hover:shadow-lg active:scale-95',
    secondary: 'bg-transparent border-2 border-neo-accent text-neo-accent hover:bg-neo-accent hover:text-neo-black',
    outline: 'bg-transparent border-3 border-neo-white text-neo-white hover:bg-neo-white hover:text-neo-black',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {children}
    </motion.button>
  )
}

export default Button

import React from 'react'
import { motion } from 'framer-motion'

interface GeometricShapesProps {
  variant?: 'square' | 'circle' | 'line' | 'triangle'
  size?: number
  color?: string
  position?: { top?: string; right?: string; bottom?: string; left?: string }
  animate?: boolean
}

const GeometricShapes: React.FC<GeometricShapesProps> = ({
  variant = 'square',
  size = 100,
  color = '#ffed4e',
  position = {},
  animate = true,
}) => {
  const baseClass = 'absolute'

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const animationVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const positionStyle = {
    ...position,
    position: 'absolute' as const,
  }

  switch (variant) {
    case 'square':
      return (
        <motion.div
          initial="hidden"
          animate={animate ? ['visible', 'animate'] : 'visible'}
          variants={shapeVariants}
          style={positionStyle}
          className={baseClass}
        >
          <motion.div
            animate={animate ? animationVariants.animate : {}}
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              border: `3px solid ${color}`,
            }}
          />
        </motion.div>
      )

    case 'circle':
      return (
        <motion.div
          initial="hidden"
          animate={animate ? ['visible', 'animate'] : 'visible'}
          variants={shapeVariants}
          style={positionStyle}
          className={baseClass}
        >
          <motion.div
            animate={animate ? animationVariants.animate : {}}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: color,
              border: `3px solid ${color}`,
            }}
          />
        </motion.div>
      )

    case 'line':
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          style={positionStyle}
          className={baseClass}
        >
          <motion.div
            animate={animate ? { scaleX: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              width: size,
              height: '4px',
              backgroundColor: color,
            }}
          />
        </motion.div>
      )

    case 'triangle':
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          style={positionStyle}
          className={baseClass}
        >
          <motion.div
            animate={animate ? { rotate: [0, 360] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
          />
        </motion.div>
      )

    default:
      return null
  }
}

export default GeometricShapes

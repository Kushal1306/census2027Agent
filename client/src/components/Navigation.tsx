import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = ['About', 'Features', 'Participate', 'Contact']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-xs border-b-3 border-neo-accent z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl sm:text-3xl font-black text-black"
          >
            <span className="gradient-text">CENSUS</span>
            <span className="text-black">2027</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={itemVariants}
                whileHover={{ color: '#1a1a1a' }}
                className="font-bold text-sm uppercase tracking-wider text-black transition-colors duration-300 hover:text-black opacity-70 hover:opacity-100"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div className="hidden sm:block">
            <Button variant="primary" size="sm">
              START SURVEY
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-2 border-neo-accent"
          >
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-bold text-black hover:text-neo-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="primary" size="md" onClick={() => setIsOpen(false)}>
                START SURVEY
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

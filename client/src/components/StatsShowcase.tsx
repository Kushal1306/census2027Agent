import React from 'react'
import { motion } from 'framer-motion'

interface AdvancedStatProps {
  label: string
  value: string
  colors: {
    primary: string
    secondary: string
  }
  delay: number
}

const AnimatedStat: React.FC<AdvancedStatProps> = ({ label, value, colors, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-lg"
        style={{
          background: `conic-gradient(${colors.primary}, ${colors.secondary}, ${colors.primary})`,
          opacity: 0.1,
        }}
      />
      <div
          className="relative border-2 p-8 rounded-lg bg-white/50 backdrop-blur"
        style={{ borderColor: colors.primary }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-center"
        >
          <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>
            {value}
          </div>
          <div className="text-sm font-bold uppercase tracking-wider text-black/70">
            {label}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const StatsShowcase: React.FC = () => {
  const stats = [
    {
      label: 'Responses Expected',
      value: '1.3B+',
      colors: { primary: '#ffed4e', secondary: '#00d9ff' },
    },
    {
      label: 'Data Points Collected',
      value: '∞',
      colors: { primary: '#39ff14', secondary: '#ffed4e' },
    },
    {
      label: 'Communities Represented',
      value: '13K+',
      colors: { primary: '#00d9ff', secondary: '#b700ff' },
    },
    {
      label: 'Languages Supported',
      value: '59',
      colors: { primary: '#b700ff', secondary: '#ffed4e' },
    },
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.02) 35px, rgba(0, 0, 0, 0.02) 70px)'
    }}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #ffed4e 1px, transparent 1px), linear-gradient(#ffed4e 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 border-2 border-neo-orange text-neo-orange font-bold uppercase text-sm mb-6">
            📊 IMPACT BY THE NUMBERS
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">SCALE & REACH</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Comprehensive coverage. Massive impact. Your data drives national decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} delay={index * 0.15} />
          ))}
        </div>

        {/* Flowing Data visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="border-2 border-neo-accent p-12 bg-white/80 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{ 
                    y: [-20, 20, -20],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 3 + idx * 0.5, 
                    repeat: Infinity,
                    delay: idx * 0.2
                  }}
                  style={{
                    background: `linear-gradient(135deg, ${['#ffed4e', '#00d9ff', '#39ff14', '#b700ff'][idx]}, transparent)`,
                    borderColor: ['#ffed4e', '#00d9ff', '#39ff14', '#b700ff'][idx],
                  }}
                  className="aspect-square rounded-lg border-2"
                />
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-black/60 font-bold uppercase tracking-wider">
              ~ Real-time data flow visualization ~
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsShowcase

import React from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import GeometricShapes from './ui/GeometricShapes'

const ParticipationCTA: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Access Survey',
      description: 'Click the button and get instant access to your personalized census survey.',
    },
    {
      number: '02',
      title: 'Complete Quickly',
      description: 'Answer 10+ questions about household, income, employment, and demographics.',
    },
    {
      number: '03',
      title: 'Submit & Done',
      description: 'Your encrypted data is instantly submitted. You\'re making history.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section id="participate" className="relative py-32 bg-white overflow-hidden" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.02) 35px, rgba(0, 0, 0, 0.02) 70px)'
    }}>
      {/* Geometric Background */}
      <GeometricShapes
        variant="triangle"
        size={150}
        color="#ffed4e"
        position={{ top: '10%', right: '5%' }}
        animate={false}
      />
      <GeometricShapes
        variant="circle"
        size={200}
        color="#39ff14"
        position={{ bottom: '5%', left: '2%' }}
        animate={true}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">READY TO PARTICIPATE?</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto mb-12">
            Three simple steps to make your voice heard and shape the future of our nation.
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg">
              START CENSUS SURVEY NOW
            </Button>
          </motion.div>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-1 bg-neo-cyan/30" />
              )}

              <div className="border-4 border-neo-accent p-8 bg-white/50 backdrop-blur-sm relative z-10">
                <motion.div
                  className="text-6xl font-black mb-4 gradient-text"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-2xl font-black mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-2 border-neo-lime p-12 bg-neo-lime/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-black mb-4 text-neo-lime">
                ✓ Why It Matters
              </h3>
              <ul className="space-y-3">
                {[
                  '🏛️ Direct impact on Congressional representation',
                  '💰 Affects $1.5 trillion in annual federal funding',
                  '🗳️ Your data shapes policy for the next decade',
                  '🌍 Represents diverse communities nationwide',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg font-bold text-black/80"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4 text-neo-violet">
                ⚡ Quick Facts
              </h3>
              <ul className="space-y-3">
                {[
                  '⏱️ 8-12 minutes to complete',
                  '📱 Works on all devices',
                  '🔒 100% confidential and secure',
                  '🌐 Available in 59 languages',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg font-bold text-black/80"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParticipationCTA

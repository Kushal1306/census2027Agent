import React from 'react'
import { motion } from 'framer-motion'
import Card from './ui/Card'
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Smartphone,
  Lock,
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Complete your survey in under 10 minutes. Designed for speed without sacrificing accuracy.',
      color: '#39ff14',
    },
    {
      icon: Shield,
      title: 'Your Privacy First',
      description: 'Military-grade encryption. Your data is secure, anonymous, and protected by law.',
      color: '#00d9ff',
    },
    {
      icon: Users,
      title: 'Represent Your Community',
      description: 'Your voice shapes policy. Every response contributes to national decision-making.',
      color: '#ffed4e',
    },
    {
      icon: TrendingUp,
      title: 'Real Impact',
      description: 'Census data drives funding, representation, and resource allocation nationwide.',
      color: '#b700ff',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Survey on any device. Start on your phone, continue on your computer.',
      color: '#ffd700',
    },
    {
      icon: Lock,
      title: 'Legally Protected',
      description: 'Title 13 protection ensures your information cannot be shared with other agencies.',
      color: '#ff6b35',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.02) 35px, rgba(0, 0, 0, 0.02) 70px)'
    }}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neo-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 border-2 border-neo-lime text-neo-lime font-bold uppercase text-sm mb-6">
            ✨ WHY PARTICIPATE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">FEATURES THAT MATTER</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Designed with you in mind. Fast, secure, and impactful.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  borderColor={feature.color}
                  className="h-full hover:border-neo-accent"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 mb-6 flex items-center justify-center border-3"
                    style={{ borderColor: feature.color }}
                  >
                    <Icon size={32} style={{ color: feature.color }} />
                  </motion.div>
                  <h3 className="text-2xl font-black mb-3 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t-3 border-neo-accent grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { stat: '99.9%', label: 'Data Security' },
            { stat: '<10min', label: 'Avg. Completion' },
            { stat: '100%', label: 'Anonymous' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-4xl font-black gradient-text">{item.stat}</div>
              <div className="text-sm font-bold text-black/60 uppercase">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

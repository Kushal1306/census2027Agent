import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Zap } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'FAQ', href: '#' },
  ]

  const socialLinks = [
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-white border-t-3 border-neo-accent overflow-hidden" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.02) 35px, rgba(0, 0, 0, 0.02) 70px)'
    }}>
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-neo-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-2xl font-black">
              <Zap className="text-neo-accent" size={28} />
              <span className="gradient-text">CENSUS 2027</span>
            </div>
            <p className="text-black/60 leading-relaxed">
              Shape the future. Your voice, your data, your impact. Join millions in making history.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-black text-neo-accent">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  className="text-black/70 hover:text-neo-accent transition-colors"
                >
                  <a href={link.href} className="font-bold">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-black text-neo-accent">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 border-2 border-neo-accent flex items-center justify-center text-black hover:bg-neo-accent hover:text-black transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-neo-accent/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-black/50"
            >
              © {currentYear} Census 2027. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-neo-cyan uppercase tracking-wider"
            >
              Built with <span className="text-neo-accent">❤️</span> for impact
            </motion.div>
          </div>
        </div>

        {/* Bottom Accent Bars */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neo-accent via-neo-cyan to-neo-lime"
        />
      </div>
    </footer>
  )
}

export default Footer

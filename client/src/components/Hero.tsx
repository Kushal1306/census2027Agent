import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import GeometricShapes from './ui/GeometricShapes'
import { X } from 'lucide-react'

const DISPATCH_API_BASE = import.meta.env.VITE_DISPATCH_API_URL || 'http://localhost:3001'

const COUNTRY_CODES = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'USA / Canada (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+81', label: 'Japan (+81)' },
  { value: '+86', label: 'China (+86)' },
  { value: '+971', label: 'UAE (+971)' },
  { value: '+65', label: 'Singapore (+65)' },
]

const LANGUAGES = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'gujarati', label: 'Gujarati' },
  { value: 'kannada', label: 'Kannada' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'marathi', label: 'Marathi' },
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'odia', label: 'Odia' },
]

const Hero: React.FC = () => {
  const [showSurveyModal, setShowSurveyModal] = useState(false)
  const [countryCode, setCountryCode] = useState('+91')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [language, setLanguage] = useState('english')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleGetCall = async () => {
    const raw = `${countryCode}${phoneNumber}`.replace(/\s/g, '')
    const phone_number = raw.startsWith('+') ? raw : `+${raw}`
    if (!phone_number || phone_number === '+') {
      setError('Please enter a valid phone number')
      return
    }
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`${DISPATCH_API_BASE}/dispatch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number, language }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `Request failed: ${res.status}`)
      }
      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to request call')
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    setShowSurveyModal(false)
    setError(null)
    setSuccess(false)
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20 flex items-center" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.03) 35px, rgba(0, 0, 0, 0.03) 70px)'
    }}>
      {/* Geometric Shapes Background */}
      <GeometricShapes
        variant="square"
        size={150}
        color="#ffed4e"
        position={{ top: '-40px', right: '-80px' }}
        animate={false}
      />
      <GeometricShapes
        variant="circle"
        size={150}
        color="#1a1a1a"
        position={{ bottom: '-60px', left: '-60px' }}
        animate={false}
        className="hidden lg:block"
      />
      <GeometricShapes
        variant="line"
        size={400}
        color="#ffed4e"
        position={{ top: '50%', left: '10%' }}
        animate={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 items-center justify-items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8 flex flex-col items-center text-center mx-auto">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-6xl sm:text-8xl lg:text-8xl font-black text-transparent" style={{
                WebkitTextStroke: '2px #1a1a1a',
                letterSpacing: '-0.02em',
              }}>
                CENSUS 2027
              </h1>
              {/* <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-transparent" style={{
                WebkitTextStroke: '3px #1a1a1a',
                letterSpacing: '-0.02em',
              }}>
                2027
              </h1> */}
            </motion.div>

            {/* Yellow Box with Tagline - Neobrutalist Style */}
            <motion.div
              variants={itemVariants}
              className="relative bg-neo-accent border-[3px] border-black p-2 sm:p-3 max-w-xs"
              style={{
                boxShadow: '4px 4px 0px 0px #000000'
              }}
            >
              <h3 className="text-xs sm:text-sm font-bold text-black leading-tight">
                What if we deploy an{' '}
                <span className="bg-[#ff6b6b] px-1 py-0.5">AI voice agent</span>
                {' '}for the{' '}
                <span className="bg-[#4ecdc4] px-1 py-0.5">2027 census survey</span>?
              </h3>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-auto"
            >
              <Button variant="primary" size="md" onClick={() => setShowSurveyModal(true)}>
                Take a Dummy Survey
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t-3 border-black"
            >
              {[
                { number: '1.3B+', label: 'CITIZENS' },
                { number: '2027', label: 'YEAR' },
                { number: '∞', label: 'IMPACT' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-black">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-black/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Dummy Survey Modal */}
      <AnimatePresence mode="wait">
        {showSurveyModal && (
          <motion.div
            key="survey-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-[5px] border-black p-6 max-w-md w-full shadow-[8px_8px_0px_0px_#000000]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-black text-black">Request dummy survey call</h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-1 hover:bg-black/10 rounded"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2 min-w-0">
                  <label className="sr-only" htmlFor="country-code">Country code</label>
                  <select
                    id="country-code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-[7.5rem] sm:w-[8.75rem] flex-shrink-0 border-2 border-black px-2 sm:px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-neo-accent"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                  <label className="sr-only" htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="min-w-0 w-full border-2 border-black px-3 py-2 font-medium placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-neo-accent"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="language">Language</label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border-2 border-black px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-neo-accent"
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>

                <p className="text-sm text-black/70">You will get a dummy survey call.</p>

                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}
                {success && (
                  <p className="text-sm text-green-700 font-medium">Call requested. You will receive the call shortly.</p>
                )}

                <button
                  type="button"
                  onClick={handleGetCall}
                  disabled={loading}
                  className="w-full bg-neo-accent border-[3px] border-black px-4 py-3 font-bold text-black hover:bg-black hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Requesting…' : 'Get call'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-black uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-neo-accent flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-black"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  )
}

export default Hero
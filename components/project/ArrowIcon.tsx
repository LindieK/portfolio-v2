import React from 'react'
import { motion } from 'framer-motion'

interface ArrowIcon {
  variant: any;
  hover: string;
}

const ArrowIcon = ({variant, hover}: ArrowIcon) => {
  return (
    <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" variants={variant}  whileHover={hover}>
       <defs>

        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">

          <stop offset="0%"   stopColor="#00c9ff" stopOpacity="1.0" />

          <stop offset="100%" stopColor="#92fe9d" stopOpacity="1.0" />

        </linearGradient>

      </defs>
      <motion.path d="M1.78577 48.2143L48.2143 1.78577" stroke="url(#linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <motion.path d="M30.3572 1.78577H48.2143V19.6429" stroke="url(#linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  )
}
export default ArrowIcon
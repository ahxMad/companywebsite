import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Brain } from "lucide-react"

interface Product {
  name: string
  icon: React.ReactNode
}

interface LogoArmsProps {
  products?: Product[]
}

export function LogoArms({ products = [] }: LogoArmsProps) {
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(1)
  const [leftZoomed, setLeftZoomed] = useState(false)

  useEffect(() => {
    if (products.length < 2) return // Don't animate if there aren't enough products

    const interval = setInterval(() => {
      setLeftZoomed((prev) => !prev)
      if (!leftZoomed) {
        setLeftIndex((prev) => (prev + 2) % products.length)
        setRightIndex((prev) => (prev + 2) % products.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [leftZoomed, products.length])

  if (products.length < 2) {
    return (
      <div className="relative w-80 h-80">
        <Image
          src="/mindaide-logo.jpg"
          alt="MindAide Labs Logo"
          width={160}
          height={160}
          className="rounded-2xl opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    )
  }

  return (
    <div className="relative w-80 h-80">
      <Image
        src="/mindaide-logo.jpg"
        alt="MindAide Labs Logo"
        width={160}
        height={160}
        className="rounded-2xl opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-0.5 bg-slate-400"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-0.5 bg-slate-400"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.5 }}
      />
      <AnimatePresence>
        <motion.div
          key={`left-${leftIndex}`}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: leftZoomed ? 1.2 : 0.8, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            {products[leftIndex]?.icon || <Brain className="h-8 w-8" />}
          </div>
        </motion.div>
        <motion.div
          key={`right-${rightIndex}`}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: leftZoomed ? 0.8 : 1.2, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            {products[rightIndex]?.icon || <Brain className="h-8 w-8" />}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


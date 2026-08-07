'use client'

import { useState } from 'react'
import { GraduationCap } from 'lucide-react'

interface UniversiteLogoProps {
  logo: string
  name: string
  size?: number
}

export default function UniversiteLogo({ 
  logo, 
  name, 
  size = 80 
}: UniversiteLogoProps) {
  const [error, setError] = useState(false)

  if (error || !logo) {
    return (
      <div 
        className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <GraduationCap 
          className="text-primary-600" 
          style={{ width: size * 0.5, height: size * 0.5 }}
        />
      </div>
    )
  }

  return (
    <div 
      className="bg-white rounded-xl p-2 flex items-center justify-center border border-gray-200 flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <img
        src={logo}
        alt={`${name} logosu`}
        className="max-w-full max-h-full object-contain"
        onError={() => setError(true)}
      />
    </div>
  )
}

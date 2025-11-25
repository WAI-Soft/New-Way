'use client'

import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  position: string
  company: string
}

export function TestimonialCard({ quote, author, position, company }: TestimonialProps) {
  return (
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#50af9b] to-[#3b9482] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur" />
      
      {/* Card content */}
      <div className="relative bg-card border-l-4 border-l-primary border-r border-t border-b border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="w-10 h-10 text-primary/40" />
        </div>

        {/* Quote text */}
        <p className="text-lg text-foreground/80 leading-relaxed mb-6 italic">
          "{quote}"
        </p>

        {/* Author info */}
        <div className="border-t border-border/40 pt-4">
          <p className="font-bold text-foreground mb-1">
            {author}
          </p>
          <p className="text-sm text-foreground/60">
            {position}
          </p>
          <p className="text-sm text-primary font-medium">
            {company}
          </p>
        </div>
      </div>
    </div>
  )
}

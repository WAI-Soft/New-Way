'use client'

import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
}

export function ServiceCard({ icon: Icon, title, description, features, gradient }: ServiceCardProps) {
  return (
    <div className="group relative w-full h-full">
      {/* Gradient Border Effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur`}
      />

      {/* Card Content */}
      <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} mb-6`}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{title}</h3>

        {/* Description */}
        <p className="text-foreground/60 leading-relaxed mb-6">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6 flex-grow">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Button with Arrow Animation */}
        <div className="mt-auto flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-semibold">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}

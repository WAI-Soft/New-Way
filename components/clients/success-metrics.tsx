'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { CheckCircle2, Target, TrendingUp, Award } from 'lucide-react'

interface Metric {
  value: string
  label: string
  icon: React.ElementType
  suffix?: string
}

const metrics: Metric[] = [
  {
    value: '1000',
    label: 'Projects Completed',
    icon: CheckCircle2,
    suffix: '+'
  },
  {
    value: '98',
    label: 'Client Satisfaction',
    icon: Target,
    suffix: '%'
  },
  {
    value: '95',
    label: 'Project Success Rate',
    icon: TrendingUp,
    suffix: '%'
  },
  {
    value: '24',
    label: 'Support Availability',
    icon: Award,
    suffix: '/7'
  }
]

function MetricCard({ metric, isVisible }: { metric: Metric; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const targetValue = parseInt(metric.value)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = targetValue / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= targetValue) {
          setCount(targetValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, hasAnimated, targetValue])

  const Icon = metric.icon

  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur" />
      
      {/* Card content */}
      <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Animated value */}
        <div className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            {count}{metric.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-sm text-foreground/60 font-medium">
          {metric.label}
        </p>
      </div>
    </div>
  )
}

export function SuccessMetrics() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Success <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Metrics</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Delivering measurable results and exceptional value to our clients
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-1000`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <MetricCard metric={metric} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

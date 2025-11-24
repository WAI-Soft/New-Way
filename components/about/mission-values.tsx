'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'
import { Target, Eye, Heart } from 'lucide-react'

export function MissionValues() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  const mission = {
    title: t('about.mvv.mission.title'),
    description: t('about.mvv.mission.description'),
    icon: Target,
    gradient: 'from-primary via-cyan-400 to-primary',
    bgGradient: 'from-primary/5 via-cyan-400/5 to-primary/5'
  }

  const vision = {
    title: t('about.mvv.vision.title'),
    description: t('about.mvv.vision.description'),
    icon: Eye,
    gradient: 'from-cyan-500 via-teal-400 to-cyan-500',
    bgGradient: 'from-cyan-500/5 via-teal-400/5 to-cyan-500/5'
  }

  const values = {
    title: t('about.mvv.values.title'),
    description: t('about.mvv.values.description'),
    icon: Heart,
    gradient: 'from-teal-500 via-cyan-500 to-primary',
    bgGradient: 'from-teal-500/5 via-cyan-500/5 to-primary/5'
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden" ref={elementRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {language === 'en' && t('about.mvv.title')}
            {language === 'en' && t('about.mvv.title') && t('about.mvv.highlight') && ' '}
            {t('about.mvv.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('about.mvv.highlight')}</span>}
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            {t('about.mvv.subtitle')}
          </p>
        </div>

        {/* Custom Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line with gradient and decorative elements */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0" style={{ transform: 'translateX(-50%)' }}>
            {/* Main gradient line */}
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-primary via-cyan-400 to-primary opacity-30" />
            
            {/* Glowing effect */}
            <div className="absolute inset-0 w-2 bg-gradient-to-b from-primary/20 via-cyan-400/20 to-primary/20 blur-sm" />
            
            {/* Decorative dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-lg shadow-primary/50" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-primary shadow-lg shadow-cyan-400/50" />
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-lg shadow-primary/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-primary shadow-lg shadow-cyan-400/50" />
          </div>

          {/* Cascading layout */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 relative">
            {/* Mission - Left */}
            <div
              className={`lg:w-[calc(50%-1.5rem)] transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="group relative">
                {/* Gradient glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${mission.gradient} rounded-xl opacity-10 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                
                {/* Card */}
                <div className={`relative border border-foreground/10 bg-gradient-to-br ${mission.bgGradient} backdrop-blur-sm rounded-xl p-6 lg:p-7 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/30`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <mission.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r ${mission.gradient} bg-clip-text text-transparent`}>
                    {t('about.mvv.mission.title')}
                  </h3>
                  <p className="text-foreground/70 text-center leading-relaxed text-sm">
                    {mission.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`mt-4 h-0.5 w-16 bg-gradient-to-r ${mission.gradient} rounded-full mx-auto`} />
                </div>
              </div>
            </div>

            {/* Vision - Right (starts from middle of Mission) */}
            <div
              className={`lg:w-[calc(50%-1.5rem)] lg:ml-auto lg:mt-72 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              } ${language === 'ar' ? 'lg:mr-6' : ''}`}
            >
              <div className="group relative">
                {/* Gradient glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${vision.gradient} rounded-xl opacity-10 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                
                {/* Card */}
                <div className={`relative border border-foreground/10 bg-gradient-to-br ${vision.bgGradient} backdrop-blur-sm rounded-xl p-6 lg:p-7 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vision.gradient} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <vision.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r ${vision.gradient} bg-clip-text text-transparent`}>
                    {t('about.mvv.vision.title')}
                  </h3>
                  <p className="text-foreground/70 text-center leading-relaxed text-sm">
                    {vision.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`mt-4 h-0.5 w-16 bg-gradient-to-r ${vision.gradient} rounded-full mx-auto`} />
                </div>
              </div>
            </div>

            {/* Values - Left (starts from middle of Vision) */}
            <div
              className={`lg:w-[calc(50%-1.5rem)] lg:mt-0 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="group relative">
                {/* Gradient glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${values.gradient} rounded-xl opacity-10 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                
                {/* Card */}
                <div className={`relative border border-foreground/10 bg-gradient-to-br ${values.bgGradient} backdrop-blur-sm rounded-xl p-6 lg:p-7 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-teal-500/30`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${values.gradient} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <values.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r ${values.gradient} bg-clip-text text-transparent`}>
                    {t('about.mvv.values.title')}
                  </h3>
                  <p className="text-foreground/70 text-center leading-relaxed text-sm">
                    {values.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`mt-4 h-0.5 w-16 bg-gradient-to-r ${values.gradient} rounded-full mx-auto`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

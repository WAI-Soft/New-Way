'use client'

import { useLanguage } from '@/lib/language-context'

export function Logo() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Logo Icon - Two Circles */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#50af9b] to-[#3b9482]" />
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#60c9b3] to-[#50af9b]" />
      </div>

      {/* Logo Text */}
      <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
        <span className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
          {isRTL ? 'نيو واي' : 'New Way'}
        </span>
        <span className="text-xs sm:text-sm text-primary font-medium leading-tight">
          {isRTL ? 'للحلول التقنية' : 'Solutions'}
        </span>
      </div>
    </div>
  )
}

'use client'

import { useState, FormEvent } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
}

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Allow various phone formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('form.error.nameRequired')
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t('form.error.emailRequired')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('form.error.emailInvalid')
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = t('form.error.companyRequired')
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t('form.error.phoneRequired')
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('form.error.phoneInvalid')
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('form.error.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('form.error.messageMinLength')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
      setIsSuccess(true)
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="bg-card border border-border/40 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3">
          <CheckCircle2 className="text-primary" size={24} />
          <p className="text-primary font-medium">
            {t('contact.form.success')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t('contact.form.name')} <span className="text-destructive">{t('form.required')}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-card border rounded-lg p-3 focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                : 'border-border/40 focus:border-primary focus:ring-primary/20'
            }`}
            placeholder={t('contact.form.name.placeholder')}
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t('contact.form.email')} <span className="text-destructive">{t('form.required')}</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-card border rounded-lg p-3 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                : 'border-border/40 focus:border-primary focus:ring-primary/20'
            }`}
            placeholder={t('contact.form.email.placeholder')}
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            {t('contact.form.company')} <span className="text-destructive">{t('form.required')}</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full bg-card border rounded-lg p-3 focus:outline-none focus:ring-2 transition-all ${
              errors.company
                ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                : 'border-border/40 focus:border-primary focus:ring-primary/20'
            }`}
            placeholder={t('contact.form.company.placeholder')}
          />
          {errors.company && (
            <p className="text-destructive text-sm mt-1">{errors.company}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t('contact.form.phone')} <span className="text-destructive">{t('form.required')}</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-card border rounded-lg p-3 focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                : 'border-border/40 focus:border-primary focus:ring-primary/20'
            }`}
            placeholder={t('contact.form.phone.placeholder')}
          />
          {errors.phone && (
            <p className="text-destructive text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t('contact.form.message')} <span className="text-destructive">{t('form.required')}</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full bg-card border rounded-lg p-3 focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.message
                ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                : 'border-border/40 focus:border-primary focus:ring-primary/20'
            }`}
            placeholder={t('contact.form.message.placeholder')}
          />
          {errors.message && (
            <p className="text-destructive text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#50af9b] to-[#3b9482] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              {t('contact.form.sending')}
            </>
          ) : (
            t('contact.form.submit')
          )}
        </button>
      </form>
    </div>
  )
}

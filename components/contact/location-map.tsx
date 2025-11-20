'use client'

import { MapPin } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function LocationMap() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="mx-auto max-w-7xl">
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Our Location
              </span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Visit us at our San Francisco office or reach out through any of our contact channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border/40 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Office Address</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">New Way Solutions</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      123 Market Street, Suite 500<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <h4 className="font-semibold mb-2 text-sm">Getting Here</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      We're located in the heart of San Francisco's Financial District, easily accessible by BART, Muni, and major highways.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <h4 className="font-semibold mb-2 text-sm">Parking</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Visitor parking is available in the building garage. Street parking and nearby public garages are also available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border/40 rounded-xl overflow-hidden h-full min-h-[400px] relative">
                {/* Static Map Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="text-primary mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold mb-2">San Francisco, CA</h3>
                    <p className="text-foreground/60 mb-6">
                      123 Market Street, Suite 500
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+Market+Street+San+Francisco+CA+94103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#50af9b] to-[#3b9482] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <MapPin size={20} />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Optional: Uncomment to use embedded Google Maps */}
                {/* 
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977736788845!2d-122.39912368468208!3d37.79352797975771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4e3b7c8f%3A0x4b1f3b3b3b3b3b3b!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Way Solutions Office Location"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

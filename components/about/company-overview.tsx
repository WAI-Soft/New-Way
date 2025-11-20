'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function CompanyOverview() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Teal accent line */}
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To empower organizations with cutting-edge cybersecurity and IT solutions that protect their digital assets and enable business growth.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground/70 leading-relaxed">
                New Way Solutions is a leading provider of enterprise security and identity management solutions. 
                With over a decade of experience, we specialize in helping organizations secure their digital 
                infrastructure through innovative technologies and best practices.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                Our team of certified security professionals works closely with clients to understand their unique 
                challenges and deliver tailored solutions that meet their specific needs. From identity and access 
                management to comprehensive cybersecurity strategies, we provide end-to-end services that ensure 
                your organization stays protected in an ever-evolving threat landscape.
              </p>

              <p className="text-foreground/70 leading-relaxed">
                We partner with industry-leading technology providers to deliver best-in-class solutions that 
                integrate seamlessly with your existing infrastructure. Our commitment to excellence and customer 
                satisfaction has made us a trusted partner for organizations across various industries.
              </p>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative">
              {/* Gradient background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl blur-2xl" />
              
              {/* Card with stats or visual */}
              <div className="relative bg-card border border-border/40 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
                      <p className="text-foreground/60">
                        Over 10 years of experience delivering enterprise security solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                      <p className="text-foreground/60">
                        Dedicated to understanding and solving your unique security challenges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
                      <p className="text-foreground/60">
                        Leveraging cutting-edge technologies to stay ahead of emerging threats
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

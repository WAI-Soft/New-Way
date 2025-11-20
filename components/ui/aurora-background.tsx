"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-start bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora Background */}
        <div
          className={cn(
            `
            [--dark-gradient:repeating-linear-gradient(100deg,#101a29_0%,#101a29_7%,transparent_10%,transparent_12%,#101a29_16%)]
            [--aurora:repeating-linear-gradient(100deg,#50af9b_10%,#60c9b3_15%,#3b9482_20%,#70d9c3_25%,#2d7a6b_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-60 will-change-transform animate-aurora`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#50af9b]/20 to-[#60c9b3]/20 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#3b9482]/25 to-[#70d9c3]/25 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-[#60c9b3]/15 to-[#50af9b]/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '5s' }} />
      </div>
      {children}
    </div>
  );
};


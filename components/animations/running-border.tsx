'use client';

import { ReactNode } from 'react';

interface RunningBorderProps {
  children: ReactNode;
  className?: string;
}

export function RunningBorder({ children, className = '' }: RunningBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <style>{`
        @keyframes running-border {
          0% {
            background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%;
          }
          25% {
            background-position: 100% 0%, 100% 0%, 100% 100%, 0% 100%;
          }
          50% {
            background-position: 100% 100%, 100% 100%, 100% 100%, 0% 100%;
          }
          75% {
            background-position: 100% 100%, 0% 100%, 0% 100%, 0% 100%;
          }
          100% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }

        .running-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(90deg, rgb(34, 197, 94), rgb(34, 197, 94)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .running-border:hover::before {
          opacity: 1;
          animation: running-border 2s infinite linear;
        }
      `}</style>
      
      <div className="running-border relative">
        {children}
      </div>
    </div>
  );
}

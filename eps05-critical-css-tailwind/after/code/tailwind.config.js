/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        secondary: '#64748b',
        background: '#f8fafc',
        surface: '#ffffff',
        text: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
        },
        border: '#e2e8f0',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        '72px': '18rem',
        '32px': '0.8rem',
        '10px': '0.25rem',
        '12px': '0.3rem',
        '16px': '0.4rem',
        '14px': '0.35rem',
        '18px': '0.45rem',
        '22px': '0.55rem',
        '24px': '0.6rem',
        '36px': '0.9rem',
        '48px': '1.2rem',
        '56px': '1.4rem',
        '64px': '1.6rem',
        '80px': '2rem',
        '680px': '42.5rem',
        '500px': '31.25rem',
        '560px': '35rem',
        '360px': '22.5rem',
        '120px': '7.5rem',
      },
      backdropBlur: {
        '16': '16px',
      },
      zIndex: {
        '100': '100',
      },
      fontSize: {
        '0.75rem': '0.75rem',
        '0.85rem': '0.85rem',
        '0.8rem': '0.8rem',
        '0.9rem': '0.9rem',
        '0.95rem': '0.95rem',
        '1.125rem': '1.125rem',
        '2.5rem': '2.5rem',
      },
      letterSpacing: {
        '0.12em': '0.12em',
        '0.08em': '0.08em',
        '0.04em': '0.04em',
        '0.06em': '0.06em',
      },
      borderRadius: {
        '9px': '9px',
        '999px': '999px',
        '12px': '12px',
        '20px': '20px',
        '6px': '6px',
      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      transform: {
        'rotate-2deg': 'rotate(2deg)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeIn': 'fadeIn 1s ease-out 0.3s both',
        'slideInRight': 'slideInRight 0.6s ease-out both',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

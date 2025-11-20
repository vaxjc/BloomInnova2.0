import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      colors: {
        bloom: {
          navy: '#1C3661',
          blue: '#2764AF',
          purple: '#5E2264',
          pink: '#F5AEC5',
          gray: '#CBCBCB',
          surface: '#F8FAFC',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
      }
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B333C',
          deep: '#07242B',
          dark: '#092B33',
          surface: '#11424D',
          light: '#185563'
        },
        amber: {
          DEFAULT: '#4BF2A7',
          warm: '#3CEFA4',
          light: '#80F8C3',
          soft: '#E3FCF1'
        },
        canvas: {
          base: '#FAFAF8',
          muted: '#F3F6F5',
          card: '#FFFFFF',
          border: '#E2E8E6'
        },
        ink: {
          primary: '#0B333C',
          secondary: '#51686D',
          muted: '#8A9FA4'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        signature: ['Caveat', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      }
    },
  },
  plugins: [],
}

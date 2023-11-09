/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
         'neutral-10': 'var(--neutral-10, #486284)',
      }
    },
    spacing:{
        '3': '0.75rem', // 3rem
        '7.625': '7.625rem',
    },
    borderRadius:{
      'custom':'3.125rem'
    }
  },
  plugins: [],
}


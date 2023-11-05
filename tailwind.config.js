/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        'ourly-theme': '#ff4448',
        'base-color': '#F0F0FF',
        'purple-dark': '#3F4066',
        'purple-light': '#5A5B90',
      },
      borderColor: {
        'ourly-theme': '#ff4448',
      },
      fontSize: {
        sm: '8px',
        md: '14px',
        lg: '16px',
        xl: '40px',
      },
      screen: {
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};

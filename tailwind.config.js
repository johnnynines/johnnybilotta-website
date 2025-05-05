/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/strange-signal/layouts/**/*.{html,js}",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color palette here
        // You can extract these from your existing CSS
        'primary': '#0055b8',
        'secondary': '#6c757d',
        'accent': '#fd7e14',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  // Control dark mode with class rather than system preferences
  darkMode: 'class',
}
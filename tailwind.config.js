
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gruppo: ['Gruppo', 'sans-serif'],
        delius: ['Delius Unicase', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        foregroundprimary: 'var(--foreground-primary)',
        foregroundsecondary: 'var(--foreground-primary)',
        accent:'var(--accent)',
        disable: 'var(--disable)',
        black: 'var(--text)',

      }
    },
  },
  plugins: [],
}


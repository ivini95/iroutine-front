import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'background': '#FA3844',
      'contrast-color': '#404040',
      'fields-color': '#FBF8CC'
    },
  },
  plugins: [],
}
export default config

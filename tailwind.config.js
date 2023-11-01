/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
    theme: {
      screens: {
        'xs': '0px',
        // => @media (min-width: 0px) { ... }
  
        'sm': '600px',
        // => @media (min-width: 600px) { ... }
  
        'md': '900px',
        // => @media (min-width: 900px) { ... }

        'lg': '1200px',
        // => @media (min-width: 1200px) { ... }

        'xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ]
}


/** @type {import('tailwindcss').Config} */
export default
{
  darkMode: 'class',
  content:
  [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme:
  {
    extend:
    {
      colors:
      {
        light:
        {
          title:
          {
            primary: '#20123A',
            secondary: '#15141A',
            tertiary: '#592ACB'
          },
          paragraph: '#42414D',
          link:
          {
            color: '#0060DF',
            hover: '#0250BB'
          },
          button:
          {
            background:
            {
              primary: '#0250BB',
              secondary: '#CCCCCC'
            },
            color: '#FFFFFF',
            styles:
            {
              primary: '#0B1794',
              secondary: '#404648',
              success: '#2F844A',
              danger: '#A00F12'
            }
          },
          background:
          {
            primary: '#FFFFFF',
            secondary: '#20123A'
          },
          slider:
          {
            background: '#20123A',
            accent: '#15141A'
          },
          speed: '#20123A',
        },
        dark:
        {
          title:
          {
            primary: '#20123A',
            secondary: '#15141A',
            tertiary: '#592ACB'
          },
          paragraph: '#42414D',
          link:
          {
            color: '#0060DF',
            hover: '#0250BB'
          },
          button:
          {
            background:
            {
              primary: '#0250BB',
              secondary: '#CCCCCC'
            },
            color: '#FFFFFF',
            styles:
            {
              primary: '#0B1794',
              secondary: '#404648',
              success: '#2F844A',
              danger: '#A00F12'
            }
          },
          background:
          {
            primary: '#FFFFFF',
            secondary: '#20123A'
          },
          slider:
          {
            background: '#20123A',
            accent: '#15141A'
          },
          speed: '#20123A',
        },
      }
    }
  },
  plugins: [],
  safelist:
  [
    {
      pattern: /bg-/,
    }
  ],
}
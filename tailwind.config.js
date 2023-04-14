/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary_dark: '#111b21',
                secondary_dark: '#202c33',
                tertiary_dark: '#2a3942',
                primary_gray: '#7c8c95',
                font_color_light: '#f0ece9',
                green_accent: '#00a884',
                green_accent_dark: '#005c4b',
                green_highlight: '#25d366',
            },
        },
    },
    plugins: [],
};

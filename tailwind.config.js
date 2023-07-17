/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                green: '#C0F73F',
            },
            fontFamily: {
                'Dm-Sans': ['DM Sans', 'Montserrat'],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'Dm-Sans': ['DM Sans', 'Montserrat'],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#53458b',
                secondary: '#233142',
            },
            fontFamily: {
                serif: ['Josefin+Slab', 'serif'],
            },
            screens: {
                mobile: {
                    max: '768px',
                },
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    plugins: [],
};

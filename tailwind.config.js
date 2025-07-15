/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            // screens: {
            //     'lg': '1280px',
            // },
            colors: {
                'hijau-usu': '#0B6839',
                'background-gray-usu': '#FAFAFA',
                'text-gray-usu': '#556371',
                'hitam-usu': '#1E1E1E',
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                'hijau-usu': '#0B6839',
                'background-gray-usu': '#FAFAFA',
                'text-gray-usu': '#556371',
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

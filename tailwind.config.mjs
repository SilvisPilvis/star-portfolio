/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                text: '#e0fafe',
                background: '#090d0e',
                primary: '#69dffc',
                secondary: '#a9032f',
                accent: '#fbb325',
                red: "#ff0000",
            },
        },
    },
    plugins: [],
}

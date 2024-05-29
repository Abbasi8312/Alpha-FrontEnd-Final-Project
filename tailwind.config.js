/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], container: {
        center: true,
    }, theme: {
        extend: {
            colors: {
                'primary': "#2C7EF8",
                'primary-hover-light': "#075CD9",
                'on-primary-light': "#FFFFFF",
                'background-light': "#FFFFFF",
                'on-background-light': "#191C1E",
                'surface-light': "#FFFFFF",
                'neutral-1': "#000000",
                'neutral-2': "#323233",
                'neutral-3': "#646466",
                'neutral-4': "#7D7D7F",
                'neutral-5': "#AFAEB2",
                'neutral-6': "#C8C7CB",
                'neutral-7': "#E1E0E5",
                'neutral-8': "#E1E0E5",
                'neutral-9': "#F5F6F8",
                'neutral-10': "#FEFEFE",
                'neutral-11': "#FFFFFF",
                'errors': "#E63946",
                'success': "#90F677",
            }, fontFamily: {
                'yekanbakh': ['YekanBakh', 'sans-serif'],
            }, fontWeight: {
                regular: '400', medium: '900',
            }, fontSize: {
                '10': ['0.625rem', {lineHeight: '0.969rem'}],
                '11': ['0.6875rem', {lineHeight: '1.0669rem'}],
                '12': ['0.75rem', {lineHeight: '1.1625rem'}],
                '13': ['0.8125rem', {lineHeight: '1.2581rem'}],
                '14': ['0.875rem', {lineHeight: '1.3538rem'}],
                '16': ['1rem', {lineHeight: '1.55rem'}],
                '18': ['1.125rem', {lineHeight: '1.7438rem'}],
                '20': ['1.25rem', {lineHeight: '1.9375rem'}],
                '24': ['1.5rem', {lineHeight: '2.325rem'}],
                '28': ['1.75rem', {lineHeight: '2.7125rem'}],
                '32': ['2rem', {lineHeight: '3.1rem'}],
                '36': ['2.25rem', {lineHeight: '3.4875rem'}],
                '42': ['2.625rem', {lineHeight: '4.0688rem'}]
            }, screens: {
                'sm': '360px',
            },
        },
    }
}
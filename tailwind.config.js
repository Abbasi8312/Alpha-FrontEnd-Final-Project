/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': "#2C7EF8",
                "primary-hover-light": "#075CD9",
                "on-primary-light": "#FFFFFF",
                "background-light": "#FFFFFF",
                "on-background-light": "#191C1E",
                "surface-light": "#FFFFFF",
                "neutral-1": "#000000",
                "neutral-2": "#323233",
                "neutral-3": "#646466",
                "neutral-4": "#7D7D7F",
                "neutral-5": "#AFAEB2",
                "neutral-6": "#C8C7CB",
                "neutral-7": "#E1E0E5",
                "neutral-8": "#E1E0E5",
                "neutral-9": "#F5F6F8",
                "neutral-10": "#FEFEFE",
                "neutral-11": "#FFFFFF",
                'errors': "#E63946",
                'success': "#90F677",
            },
            fontFamily: {
                'yekanbakh': ['YekanBakh', 'sans-serif'],
            },
            fontWeight: {
                regular: '400',
                medium: '900',
            },
            fontSize: {
                '10': ['10px', {
                    lineHeight: '15.5px',
                }],
                '11': ['11px', {
                    lineHeight: '17.05px',
                }],
                '12': ['12px', {
                    lineHeight: '18.6px',
                }],
                '13': ['13px', {
                    lineHeight: '20.15px',
                }],
                '14': ['14px', {
                    lineHeight: '21.7px',
                }],
                '16': ['16px', {
                    lineHeight: '24.8px',
                }],
                '18': ['18px', {
                    lineHeight: '27.9px',
                }],
                '20': ['20px', {
                    lineHeight: '31px',
                }],
                '24': ['24px', {
                    lineHeight: '37.2px',
                }],
                '28': ['28px', {
                    lineHeight: '43.4px',
                }],
                '32': ['32px', {
                    lineHeight: '49.6px',
                }],
                '36': ['36px', {
                    lineHeight: '55.8px',
                }],
                '42': ['42px', {
                    lineHeight: '65.1px',
                }],
            },
            screens: {
                'sm': '360px',
            },
        },
    }
}
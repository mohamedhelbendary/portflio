/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Dark theme colors (default)
				dark: {
					bg: '#000000',
					card: '#0a0a0a',
					border: '#1a1a1a',
					text: '#e0e0e0',
					muted: '#808080',
				},
				// Light theme colors
				light: {
					bg: '#f0f4f8',
					card: '#ffffff',
					border: '#d0d8e0',
					text: '#1a1a1a',
					muted: '#606870',
				},
				// Brand colors - Light blue, black, gray
				brand: {
					blue: '#5ba3f5',
					navy: '#2c5282',
					cyan: '#7bb3f0',
					slate: '#4a5568',
				},
				// Cinematic gradient stops
				cinematic: {
					dark: '#0a0a0f',
					night: '#0f1729',
					blue: '#1e40af',
					cyan: '#0891b2',
					gray: '#374151',
				},
			},
			fontFamily: {
				'display': ['Mother Belinda Demo', 'serif'],
				'arabic': ['Tufuli Arabic DEMO', 'Noto Sans Arabic', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cinematic-dark': 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)',
				'cinematic-light': 'linear-gradient(180deg, #f0f4f8 0%, #e0e8f0 50%, #d0d8e0 100%)',
				'glass-dark': 'rgba(10, 10, 10, 0.8)',
				'glass-light': 'rgba(255, 255, 255, 0.8)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-slower': 'float 10s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
				'scroll-hint': 'scrollHint 2s ease-in-out infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
				'slide-in-right': 'slideInRight 0.8s ease-out forwards',
				'rotate-slow': 'rotate 20s linear infinite',
				'gradient-shift': 'gradientShift 8s ease infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				pulseGlow: {
					'0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
					'50%': { opacity: '0.8', filter: 'blur(60px)' },
				},
				scrollHint: {
					'0%, 100%': { transform: 'translateY(0)', opacity: '1' },
					'50%': { transform: 'translateY(10px)', opacity: '0.5' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glow-blue': '0 0 40px rgba(59, 130, 246, 0.3)',
				'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.3)',
				'glow-dark': '0 0 60px rgba(10, 10, 15, 0.8)',
				'card-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
				'card-light': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}

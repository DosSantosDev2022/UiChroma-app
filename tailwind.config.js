import animations from '@repo/animations-ui'
const baseConfig = {
	content: [
		'../../apps/*/src/**/*.{js,ts,jsx,tsx}', // Para aplicações no monorepo
		'../../packages/*/src/**/*.{js,ts,jsx,tsx}', // Para pacotes compartilhados
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',

				primary: 'var(--primary)',
				'primary-hover': 'var(--primary-hover)',
				'primary-foreground': 'var(--primary-foreground)',
				secondary: 'var(--secondary)',
				'secondary-hover': 'var(--secondary-hover)',
				'secondary-foreground': 'var(--secondary-foreground)',
				muted: 'var(--muted)',
				'muted-hover': 'var(--muted-hover)',
				'muted-foreground': 'var(--muted-foreground)',
				accent: 'var(--accent)',
				'accent-hover': 'var(--accent-hover)',
				'accent-foreground': 'var(--accent-foreground)',

				danger: 'var(--danger)',
				'danger-hover': 'var(--danger-hover)',
				'danger-foreground': 'var(--danger-foreground)',
				warning: 'var(--warning)',
				'warning-hover': 'var(--warning-hover)',
				'warning-foreground': 'var(--warning-foreground)',
				success: 'var(--success)',
				'success-hover': 'var(--success-hover)',
				'success-foreground': 'var(--success-foreground)',

				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',

				'chart-1': 'var(--chart-1)',
				'chart-2': 'var(--chart-2)',
				'chart-3': 'var(--chart-3)',
				'chart-4': 'var(--chart-4)',
				'chart-5': 'var(--chart-5)',
			},
			keyframes: {
				//accordion
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--accordion-content-height)' },
					to: { height: '0', opacity: '0' },
				},
				//dropdown
				'dropdown-in': {
					from: { height: '0', opacity: '0', transform: 'scale(0.95)' },
					to: {
						height: 'var(--dropdown-content-height)',
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'dropdown-up': {
					from: {
						height: 'var(--dropdown-content-height)',
						opacity: '1',
						transform: 'scale(1)',
					},
					to: { height: '0', opacity: '0', transform: 'scale(0.95)' },
				},
				// modal
				'modal-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'modal-out': {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0.95)' },
				},
				'sidebar-in': {
					from: { width: 'var(--sidebar-width)' },
					to: { width: 'var(--sidebar-width)' },
				},
				'sidebar-out': {
					from: { width: 'var(--sidebar-width)' },
					to: { width: 'var(--sidebar-width)' },
				},
			},
			animation: {
				//accordion
				'accordion-down': 'accordion-down 0.4s ease-out',
				'accordion-up': 'accordion-up 0.4s ease-out',
				// dropdown
				'dropdown-in': 'dropdown-in 0.4s ease-out',
				'dropdown-up': 'dropdown-up 0.4s  ease-out',
				// modal
				'modal-in': 'modal-in 0.25s cubic-bezier(.4, 0, .2, 1)',
				'modal-out': 'modal-out 0.25s cubic-bezier(.4, 0, .2, 1)',
				// sideBar
				'sidebar-in': 'sidebar-in 0.8s ease-out',
				'sidebar-out': 'sidebar-out 0.8s ease-out',
			},
		},
	},
	plugins: [require('tailwind-merge'), require('tailwind-scrollbar')],
}

export default baseConfig

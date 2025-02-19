#!/usr/bin/env node
import path from 'node:path'
import axios from 'axios'
import chalk from 'chalk'
import fs from 'fs-extra'
import inquirer from 'inquirer'

console.log(chalk.blue('🚀 UIChroma CLI - Setup iniciado...'))

const projectRoot = process.cwd()

const GITHUB_OWNER = 'DosSantosDev2022'
const GITHUB_REPO = 'UiChroma-app'
const GITHUB_BRANCH = 'main' // ou outro branch que você preferir

// Função para buscar um arquivo do GitHub
async function fetchFileFromGitHub(component) {
	try {
		const componentFolder = component.toLowerCase()
		const url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/packages/ChromaUI/src/components/${componentFolder}/${component}.tsx`
		const response = await axios.get(url)
		return response.data
	} catch (error) {
		console.error(
			chalk.red(`Erro ao buscar o arquivo ${component}: ${error.message}`),
		)
		throw error
	}
}

async function configureTailwind() {
	const tailwindPath = path.join(projectRoot, 'tailwind.config.ts')
	const globalCssPath = path.join(
		projectRoot,
		'src',
		'styles',
		'globals.css',
	)

	if (fs.existsSync(tailwindPath)) {
		console.log(chalk.yellow('Atualizando tailwind.config.js...'))
		fs.writeFileSync(
			tailwindPath,
			`
        const config = {
					content: [
						'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
						'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
						'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
								// accordion
								'accordion-down': {
									from: { height: '0', opacity: '0' },
									to: { height: 'var(--accordion-content-height)' },
								},
								'accordion-up': {
									from: { height: 'var(--accordion-content-height)' },
									to: { height: '0', opacity: '0' },
								},
								// dropdown
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
							},
							animation: {
								// accordion
								'accordion-down': 'accordion-down 0.4s ease-out',
								'accordion-up': 'accordion-up 0.4s ease-out',
								// dropdown
								'dropdown-in': 'dropdown-in 0.4s ease-out',
								'dropdown-up': 'dropdown-up 0.4s  ease-out',
								// modal
								'modal-in': 'modal-in 0.25s cubic-bezier(.4, 0, .2, 1)',
								'modal-out': 'modal-out 0.25s cubic-bezier(.4, 0, .2, 1)',
							},
						},
					},
					plugins: [require('tailwind-merge'), require('tailwind-scrollbar')],
				};

				export default config;
      `,
		)
	}

	if (fs.existsSync(globalCssPath)) {
		console.log(chalk.yellow('Atualizando globals.css...'))
		fs.writeFileSync(
			globalCssPath,
			`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer base {
          :root {
            --background: #ffffff;
            --foreground: #0A0C16;
            --primary: #121726;
            --primary-hover: #020617;
            --primary-foreground: #F5F9FF;
            --secondary: #94a3b8;
            --secondary-hover: #c2c2c2;
            --secondary-foreground: #121726;
            --muted: #f3f4f6;
            --muted-hover: #f3f4f6;
            --muted-foreground: #6b7280;
            --accent: #EEF4FD;
            --accent-hover: #c2c2c2;
            --accent-foreground: #121726;
            --danger: #F25555;
            --danger-hover: #e04848;
            --danger-foreground: #F5F9FF;
            --warning: #f5c542;
            --warning-hover: #e6b63c;
            --warning-foreground: #1a1a1a;
            --success: #5cb85c;
            --success-hover: #4cae4c;
            --success-foreground: #ffffff;
            --border: #DDE4F0;
            --ring: #0A0C16;
            --input: #f3f1f1;
            --chart-1: #EB7260;
            --chart-2: #2DA597;
            --chart-3: #235D6A;
            --chart-4: #CCEF8F;
            --chart-5: #DCE076;
          }

          .dark {
            --background: #0A0C16;
            --foreground: #F5F9FF;
            --primary: #F5F9FF;
            --primary-hover: #e8e8e8;
            --primary-foreground: #121726;
            --secondary: #1C202A;
            --secondary-hover: #181515;
            --secondary-foreground: #F5F9FF;
            --muted: #1C202A;
            --muted-hover: #4a4a4a;
            --muted-foreground: #9aa0a7;
            --accent: #1C202A;
            --accent-hover: #404041;
            --accent-foreground: #F5F9FF;
            --danger: #ff5a5a;
            --danger-hover: #e04848;
            --danger-foreground: #f8f8f8;
            --warning: #f5c542;
            --warning-hover: #e6b63c;
            --warning-foreground: #1a1a1a;
            --success: #5cb85c;
            --success-hover: #4cae4c;
            --success-foreground: #fafafa;
            --border: #1C202A;
            --ring: #D5E1F2;
            --input: #1C202A;
            --chart-1: #4A91F2;
            --chart-2: #35B384;
            --chart-3: #EDB64B;
            --chart-4: #C678DD;
            --chart-5: #EF4F77;
          }
        }
      `,
		)
	}
}

async function copyComponents() {
	const components = ['Button', 'Modal', 'Accordion']
	const answers = await inquirer.prompt([
		{
			type: 'checkbox',
			name: 'selectedComponents',
			message: 'Selecione os componentes que deseja instalar:',
			choices: components,
		},
	])

	const componentsPath = path.join(projectRoot, 'src', 'components', 'ui')
	fs.ensureDirSync(componentsPath)

	// Para cada componente selecionado, buscar no GitHub e salvar no projeto
	for (const component of answers.selectedComponents) {
		try {
			const componentCode = await fetchFileFromGitHub(component) // Busca o código do componente
			const destPath = path.join(componentsPath, `${component}.tsx`)

			// Salva o código do componente no destino
			fs.writeFileSync(destPath, componentCode)
			console.log(chalk.green(`✅ ${component} copiado para ${destPath}`))
		} catch (error) {
			console.error(chalk.red(`Erro ao copiar o componente ${component}`))
		}
	}
}

async function main() {
	await configureTailwind()
	await copyComponents()
	console.log(chalk.blue('🎉 Configuração concluída!'))
}

main()

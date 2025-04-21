import {
	AccordionAnswer,
	AccordionContainer,
	AccordionContent,
	AccordionQuestion,
	AccordionTrigger,
} from '@/components/packages'

const AccordionPreview = () => {
	const faqs = [
		{
			id: '0001',
			question: 'O que é a UIChroma?',
			answer:
				'A UIChroma é uma biblioteca de componentes de interface de usuário (UI) projetada para facilitar o desenvolvimento de aplicações web modernas com componentes reutilizáveis e estilizados.',
		},
		{
			id: '0002',
			question:
				'Quais são os principais componentes disponíveis na UIChroma?',
			answer:
				'A UIChroma inclui uma variedade de componentes como botões, modais, formulários, tabelas, menus de navegação, cards, ícones e muito mais.',
		},
		{
			id: '0003',
			question: 'Como posso instalar a UIChroma no meu projeto?',
			answer:
				'Você pode instalar a UIChroma usando npm ou yarn. Execute `npm install uichroma` ou `yarn add uichroma` no seu terminal para adicionar a biblioteca ao seu projeto.',
		},
		{
			id: '0004',
			question:
				'A UIChroma é compatível com todos os frameworks JavaScript?',
			answer:
				'A UIChroma foi projetada para ser compatível com os principais frameworks JavaScript, como React, Vue e Angular. Certifique-se de seguir a documentação específica do framework para uma integração suave.',
		},
	]

	return (
		<div className='w-full'>
			{faqs.map((faq) => (
				<AccordionContainer key={faq.id}>
					<AccordionTrigger>
						<AccordionQuestion>{faq.question}</AccordionQuestion>
					</AccordionTrigger>
					<AccordionContent>
						<AccordionAnswer>{faq.answer}</AccordionAnswer>
					</AccordionContent>
				</AccordionContainer>
			))}
		</div>
	)
}

export default AccordionPreview

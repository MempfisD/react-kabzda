import React from 'react'

function Accordion(props: any) {
	console.log('Accordion rendering')
	return (
		<>
			<AccordionTitle title={props.title} />
			<AccordionBody />
		</>
	)
}

function AccordionTitle(props: any) {
	console.log('AccordionTitle rendering')
	return <h3>{props.title}</h3>
}

function AccordionBody() {
	console.log('AccordionBody rendering')
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}

export default Accordion

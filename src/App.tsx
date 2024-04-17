import React from 'react'
import './App.css'
import { render } from '@testing-library/react'

// function declaration
function App() {
	console.log('App rendering')
	// что то полезное делает, обязана вернуть JSX
	return (
		<div>
			<AppTitle />
			<Rating />
			<Accordion />
			<Rating />
		</div>
	)
}

function AppTitle() {
	console.log('AppTitle rendering')
	return <>This is APP component</>
}

function Rating() {
	console.log('Rating rendering')
	return (
		<>
			<Star />
			<Star />
			<Star />
			<Star />
			<Star />
		</>
	)
}

function Accordion() {
	console.log('Accordion rendering')
	return (
		<>
			<AccordionTitle />
			<AccordionBody />
		</>
	)
}

function Star() {
	console.log('Star rendering')
	return <div>Star</div>
}

function AccordionTitle() {
	console.log('AccordionTitle rendering')
	return <h3>Меню</h3>
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

export default App

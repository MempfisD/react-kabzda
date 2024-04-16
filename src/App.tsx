import React from 'react'
import './App.css'

// function declaration
function App() {
	// что то полезное делает, обязана вернуть JSX
	return (
		<div>
			This is APP component
			<Rating />
			<Accordion />
		</div>
	)
}

function Rating() {
	return (
		<div>
			<Star />
			<Star />
			<Star />
		</div>
	)
}

function Accordion() {
	return (
		<div>
			<h3>Меню</h3>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
	)
}

function Star() {
	return <div>Star</div>
}

export default App

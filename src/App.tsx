import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import { Rating } from './components/Accordion/Rating'

// function declaration
function App() {
	console.log('App rendering')
	// что то полезное делает, обязана вернуть JSX
	return (
		<div>
			<PageTitle title={'This is APP component'} />
			<PageTitle title={'My frends'} />
			Article 1
			<Rating value={3} />
			<Accordion title={'1 заголовок'} />
			<Accordion title={'2 заголовок'} />
			Article 2
			<Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} />
		</div>
	)
}

function PageTitle(props: any) {
	console.log('PageTitle rendering')
	return <h1>{props.title}</h1>
}

export default App

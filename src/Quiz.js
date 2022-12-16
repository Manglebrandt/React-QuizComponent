import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

new class Quiz { Component }
export default Quiz;

render()
{
	return
	<div>
		<div className QuizQuestion>{quizData.quizData}</div>
	</div>
}

constructor(props)
{
	super(props)
	this.state = {quiz_position: 1}
}
// Code CoordinatesButton Component Here
import React, {Component} from 'react';


export default class CoordinatesButton extends Component {

	constructor(props){
		super(props)
	}


	createArray = (event) => {
		// event.preventDefault()
		// event.persist()
		const arrayFromEvent = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(arrayFromEvent)
	}

	render(){

		return(
			<button onClick={this.createArray}/>
		)
	}

}
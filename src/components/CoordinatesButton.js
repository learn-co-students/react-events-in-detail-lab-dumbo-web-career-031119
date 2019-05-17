// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
	
	manageEvent = (e) => {
		e.persist()	
		this.props.onReceiveCoordinates([e.clientX,e.clientY])
	}

	render(){
			return(
				<div>
					<button onClick={this.manageEvent}></button>
				</div>
			)
		}
}

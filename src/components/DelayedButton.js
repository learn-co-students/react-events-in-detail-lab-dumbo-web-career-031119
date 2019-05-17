// Code DelayedButton Component Here

import React, { Component } from 'react';

export default class DelayedButton extends Component {

	manageEvent = (e) => {
		e.persist()	
		
		this.props.onDelayedClick(e)
	}	
	render(){
		return(
			<div>
				<button onClick={this.manageEvent}></button>
			</div>
		)
	}
}

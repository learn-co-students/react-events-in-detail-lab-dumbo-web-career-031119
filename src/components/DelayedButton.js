// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    
    delayClickEvent = (event) => {
        event.persist()
        console.log(event) 
        setTimeout(
            // function(){ alert("Hello"); }, 3000 - (has to contain a callback with ref.to a func) 
            () => this.props.onDelayedClick(event), this.props.delay
            );

    }
    
    
    
    render() {
        return (
            <button
            onClick={this.delayClickEvent}
            >another button</button>
        )
    }
}
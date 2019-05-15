// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    createArray = (event) => {
        let myArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(myArr)
    }
    
    render() {
        return (
        
            <button 
            onClick={this.createArray}
            >button</button>
        )
    }
}
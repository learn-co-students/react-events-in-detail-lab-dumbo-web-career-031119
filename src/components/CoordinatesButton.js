// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component{
    constructor(props){
        super(props)
    }

    logPosition = (event) => {
        let save = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(save)
        return save;
    }

    render(){
        return (<button onClick={this.logPosition}></button>)
    }
}
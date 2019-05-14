// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  // handleClick = (event)=> this.props.onReceiveCoordinates([event.clickX,event.clickY])
  render(){
    return <button onClick={(event)=>this.props.onReceiveCoordinates([event.clientX,event.clientY])}>Coordinates</button>
  }
}

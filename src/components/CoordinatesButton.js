// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends React.Component {

  eventFunction = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {
    return (
      <button onClick={this.eventFunction}>Coordinates</button>
    );
  }

}

export default CoordinatesButton

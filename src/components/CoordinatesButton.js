// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    mousePosition = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {

        return(
            <button onClick={this.mousePosition}>Coordinates</button>
        )
    }
}
export default CoordinatesButton;
// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    
    
    buttonEvent =(e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }
    
    render(){
        return (
            <button
            onClick={this.buttonEvent}
            > 
            content 
            </button>
        )
    }

}

export default CoordinatesButton
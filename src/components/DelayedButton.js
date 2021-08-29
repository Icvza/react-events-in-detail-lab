// Code DelayedButton Component H

import { div } from 'prelude-ls'
import React, { Component } from 'react'


class DelayedButton extends Component {


    buttonClick = (e) => {
        e.persist()
        setTimeout(() =>
           this.props.onDelayedClick(e),this.props.delay )
    }

    render() {
        return(
            <div> 
            
            <button onClick={this.buttonClick}> Delayed Button </button>

            </div>
        )
    }

}

export default DelayedButton

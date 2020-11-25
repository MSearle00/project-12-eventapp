import React, { Component } from 'react';

export default class editEvent extends Component {
    
    editEvent(event) {
        this.setState({ currentEvent: event })
      }
    render(){
        return (
            <div>
                <p> Event editor </p>
            </div>
        )
    }
}
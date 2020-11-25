import React, { Component } from 'react'

export default class Form extends Component {

    submitHandler(e){
        e.preventDefault();
        let result
        if (this.props.currentEvent){
            result = this.props.client.editEvent(this.props.token, this.props.currentEvent._id, e.target.eventname.value, e.target.location.value, e.target.info.value, e.target.date.value) 
        } else{
             result = this.props.client.addEvent(this.props.token, e.target.eventname.value, e.target.location.value, e.target.info.value, e.target.date.value) }
        result.then(() => {
        document.getElementById("eventform").reset()
        this.props.refreshList()
        })
    
    }

    render() {
        return (
            <div>
                <form id="eventform" className="form" onSubmit={(e) => this.submitHandler(e)}>

                    <label htmlFor="eventname">Event Name</label>
                    <input
                    id="eventname"
                    type="text"
                    defaultValue={this.props.currentEvent?.eventname}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                    id="location"
                    type="text"
                    defaultValue={this.props.currentEvent?.location}
                    />
                    <label htmlFor="info">Information</label>
                    <input
                    id="info"
                    type="text"
                    defaultValue={this.props.currentEvent?.info}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                    id="date"
                    type="text"
                    defaultValue={this.props.currentEvent?.date}
                    />

                    <input type="submit"/>

                </form>
            </div>
        )
    }
}

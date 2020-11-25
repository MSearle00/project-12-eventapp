import React from 'react'
import APIClient from "./APIClient.js"
import './eventList.css'
import Form from "./form"


class EventList extends React.Component {
        constructor(props){
            super(props)
            this.state ={
            listItems: [],
            token: undefined,
            currentEvent: undefined
            }
            this.client = new APIClient();
        }

        refreshList() {
            this.client.getEvents(this.state.token)
            .then((res) => this.setState({listItems: res.data}))

        }

        componentDidMount(){
            const tokenString = localStorage.getItem("auth-token");
             this.setState(
            { token: tokenString || [] }, () => this.refreshList()
            )
        }

        editEvent(event) {
            this.setState({ currentEvent: event })
          }
        
        deleteEvent(id){
            this.client.deleteEvent(this.state.token,id)
            .then(() => this.refreshList())
        }

         buildList() {
            return this.state.listItems.map((current) => {
                return (<tr key={current._id}>
                    <td>{current.eventname}</td>
                    <td>{current.location}</td>
                    <td>{current.info}</td>
                    <td>{(current.date)}</td>
                    <td><button onClick={() => this.editEvent(current)}> Edit Event </button></td>
                    <td><button onClick={() => this.deleteEvent(current._id)}> Delete Event </button></td>
                    </tr>
                    )
            })
        }
        render() {
        return (
            <div>
                <p> Events: </p>
                <table>
                    <thead><tr>
                        <td>Event Name</td>
                        <td>Location</td>
                        <td>Information</td>
                        <td>Date</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        </tr></thead>
                    <tbody>
                        {this.buildList()} 
                    </tbody>
                        
                </table>
                <Form token={this.state.token} 
                client={this.client} 
                refreshList = { () => {
                    this.refreshList()
                    this.setState({
                    currentEvent: undefined
                    })
                }}
                currentEvent={this.state.currentEvent} />
            </div>
        )
    } 
}

export default EventList
import axios from 'axios';

const url = "http://localhost:5000/"

export default class APIClient{
    APICall(method, url, token, data){
        return axios({method, url, headers:{"x-auth-token": token} ,data})
    }
    getEvents(token){
        return this.APICall("get", `${url}events`, token)
    }
    addEvent(token, eventname, location, info, date){
        return this.APICall("post",`${url}events`, token,{eventname, location, info, date}  )
    }
    editEvent(token, id, eventname, location, info, date){
        return this.APICall("patch",`${url}events/${id}`, token,{eventname, location, info, date}  )
    }
    deleteEvent(token, id){
        return this.APICall("delete",`${url}events/${id}`, token)
    }
}

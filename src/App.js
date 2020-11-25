import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Axios from 'axios';
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import userAccount from "./components/pages/userAccount"
import eventList from "./components/pages/eventList"
import createEvent from "./components/pages/createEvent"
import editEvent from "./components/pages/editEvent"
import userContext from "./context/userContext"


export default function App() {
        const [userData, setUserData] = useState ({
            token: undefined,
            user: undefined
        });
        
        useEffect(() => {
            const checkLoggedIn = async () => {
              let token = localStorage.getItem("auth-token");
              if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
              }
              const tokenRes = await Axios.post(
                "http://localhost:5000/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
              );
              if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", {
                  headers: { "x-auth-token": token },
                });
                setUserData({
                  token,
                  user: userRes.data,
                });
              }
            };
        
            checkLoggedIn();
          }, []);

        return(
            <Router>
             <userContext.Provider value ={{userData, setUserData}}>
                <Navbar />
                <br/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/userAccount" component={userAccount} />
                    <Route path="/eventList" component={eventList} />
                    <Route path="/createEvent" component={createEvent} />
                    <Route path="/editEvent" component={editEvent} />
                </Switch>
             </userContext.Provider>
            </Router>
        )
    }


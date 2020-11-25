import React, {useContext} from 'react'
import {useHistory} from "react-router-dom"
import userContext from "../../context/userContext"


export default function Options() {

    const {userData, setUserData} = useContext(userContext);

    const history = useHistory();

    const register = () => history.push("/register")
    const login = () => history.push("/login")
    const eventList = () => history.push("/eventList")
    const userAccount = () => history.push("/userAccount")
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "")
        history.push("/")
    };

        return (
            <nav className = "authOptions">
                {
                    userData.user 
                    ? 
                    ( <> <button onClick ={eventList}> View Events </button>
                    <button onClick ={userAccount}> Account </button>
                    <button onClick ={logout}> Log Out </button> </>) 
                    :
                    ( <> <button onClick ={register}>Register</button>
                    <button onClick={login}>Log in</button> </>)
                }           
            </nav>
        )
    }

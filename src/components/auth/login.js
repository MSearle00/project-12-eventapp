import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../../context/userContext";
import Axios from "axios";
import errorNotice from "../errorHandling/errorNotice"

export default function Login(){

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(userContext);
    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();
      try {
        const loginUser = { username, password };
        const loginRes = await Axios.post(
          "http://localhost:5000/users/login",
          loginUser
        );
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    };

        return (
            <div>
                <h2>Login</h2>
                {error && (
                   <errorNotice message={error} clearError={() => setError(undefined)} />  
                )}
                    <form className="form" onSubmit={submit}>

                    <label htmlFor="login-username">Username</label>
                    <input
                    id="login-username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                    id="login-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" value="Login" />
                     </form>
            </div>
        )
    
}
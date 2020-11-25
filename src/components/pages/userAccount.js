import React, { useState, useContext } from "react";
import Axios from "axios";

export default function UserAccount(){
    const [username] = useState();
    const [password] = useState();
    const [email] = useState();

    const currentUser = {username, password, email}
    // const currentRes = Axios.get(
    //     `http://localhost:5000/users/${id}`,
    //     currentUser
    //   );

        return (

            <div>
                <p> User details: </p>

            </div>
        )
}
import React from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css"
import Options from '../auth/options'

export default class Navbar extends React.Component{
    render() {
        return (
            <nav>
                <div className ="navbar">
                    <Link to="/"> 
                    <h1 className ="title">Event App</h1>
                    </Link>
                
                    <Options />
                </div>
            </nav>
        );
    }
}
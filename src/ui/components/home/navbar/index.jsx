import React from "react";
import './styles.css';

class Navbar extends React.Component {
    render() {
        return <>
            <div className="navbar">
                <h1 className="logo">ConnEdu</h1>
                
                <ul className="navbar-list">
                    <li><a className="home" href="null">Home</a></li>
                    <li><a href="null">About Us</a></li>
                    <li><a href="null">Services</a></li>
                    <li><a href="null">Login</a></li>
                    <li className="sign-up"><a href="null">SIGN UP</a></li>
                </ul>
            </div>
        </>
    }
}

export default Navbar;
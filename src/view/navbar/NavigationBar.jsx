import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './NavigationBar.css'
import StateContext from "../../context/StateContext";


const NavigationBar = (props) => {

    const userDetails = useContext(StateContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>TaxiBooking</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to={"/about-us"}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/all-taxi-available"}>Taxi</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={"/all-taxi-available"}>{userDetails.user.userName}</Link>
                        </li>
                    </ul>

                </div>

                    <Link to={"/login"} ><button className={"btn-primary login-button navbar-brand"}>Login</button></Link>
            </div>
        </nav>
    )
}

export default NavigationBar;
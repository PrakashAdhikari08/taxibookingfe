import React from 'react';
import {Link} from "react-router-dom";


const NavigationBar = (props) => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>

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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
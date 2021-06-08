import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from "./view/navbar/NavigationBar";
import Home from "./view/home/Home";
import Footer from "./view/footer/Footer";


const Routing = () => {

    return(
        <>


        <Router>
            <NavigationBar />

            <Switch>
                <Route  exact path={"/"} component={Home}/>
            </Switch>
        </Router>

            <Footer />
        </>

    );
}

export default Routing;
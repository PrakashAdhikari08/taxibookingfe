import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from "./view/navbar/NavigationBar";
import Home from "./view/home/Home";
import Footer from "./view/footer/Footer";
import Login from "./view/form/login/Login";
import Taxi from "./view/taxi/Taxi";
import Register from "./view/form/register/Register";
import RegisterTaxi from "./view/taxi/register/RegisterTaxi";


const Routing = (props) => {

    return(
        <>


        <Router>
            <NavigationBar />

            <Switch>
                <Route  exact path={"/"}                       component={Home} />
                <Route        path={"/login"}                  component={Login} />
                <Route        path={"/register"}               component={Register} />
                <Route        path={"/taxi/register"}          component={RegisterTaxi} />
                <Route        path={"/all-taxi-available"}     component={Taxi} />

            </Switch>
        </Router>

            <Footer />
        </>

    );
}

export default Routing;
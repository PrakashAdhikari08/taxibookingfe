import React from "react";
import Routing from "./AppRouting";
import StateContext from "./context/StateContext";

function App(props) {

    const userState = {
        user : {
            userID : "Prakash",
            userName : "Adhikari",
            role : "ADMIN",
            name : "",
            jwt : ""
        },
        userLoggedIn: false
    };



    return (
        <div className="App">
            <StateContext.Provider value={userState}>
                <Routing/>
            </StateContext.Provider>
        </div>
    );
}

export default App;

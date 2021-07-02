import React, {useState} from "react";
import Routing from "./AppRouting";
import StateContext from "./context/StateContext";
import RegisterTaxi from "./view/taxi/register/RegisterTaxi";

function App(props) {

    const userState = {
        user : {
            userID : "1",
            userName : "ABC",
            role : "NONE",
            name : "",
            jwt : ""
        },
        userLoggedIn: false
    };

    const [loggedInUser, setLoggedInUser] = useState(userState);

    const [registerTaxiModalOpen, setRegisterTaxiModalOpen] = useState(false);

    const setRegisterModal =(value) =>{
        setRegisterTaxiModalOpen(value);
    }

    return (
        <div className="App">
            <StateContext.Provider value={{loggedInUser, setRegisterModal, registerTaxiModalOpen, setLoggedInUser}}>
                <Routing/>
                <RegisterTaxi />
            </StateContext.Provider>
        </div>
    );
}

export default App;

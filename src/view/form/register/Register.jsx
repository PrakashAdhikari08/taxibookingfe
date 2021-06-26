import React from "react";

import './Register.css'

const Register = () => {

    return(
        <>
            <form className={"text-center m-2"}>
                <input type="text"  placeholder={"First Name"} className={"m-1"}/>
                <br />
                <input type={"text"} placeholder={"Last Name"} className={"m-1"}/>
                <br />
                <input type={"email"} placeholder={"email address"} className={"m-1"}/>
                <br />
                <input  type={"password"} placeholder={"password"} className={"m-1"}/>

                <br />
                <input  type={"password"} placeholder={"re-enter password"} className={"m-1"}/>
                <br />
                <input  type={"password"} placeholder={"re-enter password"} className={"m-1"}/>

                <br />

                <button className={"btn-sm btn-primary m-1"}>Sign Up</button>

                <button className={"btn-sm btn-danger m-1"}>Cancel</button>

            </form>
        </>
    );

};

export default Register;

import React from "react";

import './Register.css'

const Register = () => {

    return(
        <>
            <form className={"text-center m-2"}>
                <input type="text"  placeholder={"First Name"}/>
                <br />
                <input type={"text"} placeholder={"Last Name"}/>
                <br />
                <input type={"email"} placeholder={"email address"}/>
                <br />
                <input  type={"password"} placeholder={"password"}/>

                <br />
                <input  type={"password"} placeholder={"re-enter password"}/>
                <br />
                <input  type={"password"} placeholder={"re-enter password"}/>

                <br />

                <button className={"btn-sm btn-primary m-1"}>Sign Up</button>

                <button className={"btn-sm btn-danger m-1"}>Cancel</button>

            </form>
        </>
    );

};

export default Register;

import React from 'react';

import './Login.css'

const Login = (props) => {

    return (
        <div className={"form-main"}>
            <form>
                <p>Enter your login Details</p>
                <input className={"form-input"} placeholder="enter username" type={"email"}/>
                <br/>
                <input className={"form-input"} placeholder="password" type={"password"}/>

                <br/>
                <button className={"login-btn"} type={"submit"}>login</button>
            </form>
        </div>
    );

}
export default Login;
import React, {useState} from 'react';

import './Login.css'
import {Link} from "react-router-dom";

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const loginClicked = () => {
        console.log(username + "   "+ password)
    }

    return (
        <div className={"form-main"}>
            <form>
                <p>Enter your login Details</p>
                <input className={"form-input"} placeholder="enter username" type={"email"} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <input className={"form-input"} placeholder="password" type={show !== true ?"password": "text"} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <Link>
                    <small onClick={() => setShow(!show)}>show password</small>
                </Link>
                <br/>
                <button className={"login-btn"} >login</button>
                <Link to={"/"} ><button className={"cancel-btn btn-danger"}>Cancel</button> </Link>
                <br />
                <small><Link to={"/register"}>Click here</Link> to create new account</small>
            </form>
        </div>
    );

}
export default Login;
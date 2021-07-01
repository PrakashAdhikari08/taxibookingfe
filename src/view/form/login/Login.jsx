import React, {useContext, useState} from 'react';

import './Login.css'
import {Link} from "react-router-dom";

import * as Yup from "yup";
import {useFormik} from "formik";
import StateContext from "../../../context/StateContext";

const Login = (props) => {

    const initialValues = {
        username : "",
        password : ""
    }

    const {setLoggedInUser} = useContext(StateContext);

    const onSubmit = async (values) => {
        const loginData = {
            username : values.username,
            password : values.password
        }
        //make api call to login and get token
        //user details
        const userData = {
            user : {
                userID : 1,
                userName : loginData.username,
                role : "CUSTOMER",
                name : "CUSTOMER",
                jwt : ""
            },
            userLoggedIn : true
        }
        setLoggedInUser(userData);
        props.history.push("/home");
    }

    const validationSchema = Yup.object(
        {
            username : Yup.string()
                .email("Invalid Email Address")
                .required("Username is required"),
            password: Yup.string()
                .required("Password Required")
                .min(6, "Password is too short"),
        }
    );

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    const [show, setShow] = useState(false);


    return (
        <div className={"form-main-login"}>
            <form className={"mt-5 text-sm-center w-100"} onSubmit={formik.handleSubmit} action={""}>
                <h5 className={"form-label"}>Enter your login Details</h5>
                <input className={"form-input mt-3"} placeholder="enter username/email" type={"email"}
                       id={"username"} {...formik.getFieldProps("username")} />

                {formik.touched.username && formik.errors.username ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.username}</p>
                ) : null}
                <br/>
                <input className={"form-input"} placeholder="password" type={show !== true ?"password": "text"}
                id={"password"} {...formik.getFieldProps("password")} />

                {formik.touched.password && formik.errors.password ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.password}</p>) : null}
                <br/>
                <Link>
                    <small onClick={() => setShow(!show)}>{!show ? "show password" : "hide password"}</small>
                </Link>
                <br/>
                <button className={"btn-sm border-1"} type={"submit"} >login</button>
                <Link to={"/"} ><button className={"btn btn-sm btn-danger m-2 border-1"}>Cancel</button> </Link>
                <br />
                <small><Link to={"/register"}>Click here</Link> to create new account</small>
            </form>
        </div>
    );

}
export default Login;
import React, {useState} from "react";

import './Register.css'
import {Link} from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";

const Register = (props) => {

    const initialValues = {
        firstName : "",
        lastName : "",
        emailAddress: "",
        password: ""
    }

    const onSubmit = (values) => {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            emailAddress: values.emailAddress,
            password: values.password,
        };

        console.log(data.firstName, data.lastName);
    }

        const validationSchema = Yup.object({
            name: Yup.string().required("Please Enter your full Name"),
            username: Yup.string()
                .email("Invalid Email Address")
                .required("Username is requied"),
            password: Yup.string()
                .required("Password Required")
                .min(6, "Password is too short"),
            password1: Yup.string()
                .required("Re-enter Password")
                .test("Password Matched", "Passwords must match", function (value) {
                    return this.parent.password === value;
                }),
        });

        const formik = useFormik({
            initialValues,
            onSubmit,
            // validationSchema,
        });


    //     const [userType, setUserType] = useState(0);
    //
    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     console.log("Hello World");
    //     console.log(userType);
    //     if(userType === 1){
    //         console.log("call driver api");
    //     }
    //     else if( userType === 2){
    //         console.log("call customer api");
    //     }
    //     else
    //         alert("Please select a user type");
    //
    //
    // }


    return (
        <div className={"text-center"}>
            <form className={"m-2 d-inline-block"} onSubmit={formik.handleSubmit} action={""}>
                <h4>Register User</h4>
                <input
                    type="text"
                    placeholder={"First Name"}
                    className={"m-1"}
                    id="firstName"
                    {...formik.getFieldProps('firstName')}
                />
                <input type={"text"} placeholder={"Last Name"} className={"m-1"} id={"lastName"} {...formik.getFieldProps('lastName')}/>
                <br/>
                <input type={"email"} placeholder={"email address"} className={"m-1 input-long"} id={"emailAddress"} {...formik.getFieldProps("emailAddress")}/>
                <br/>
                <input type={"password"} placeholder={"password"} className={"m-1 input-long"}/>

                <br/>
                <input type={"password"} placeholder={"re-enter password"} className={"m-1 input-long"}/>

                <br/>
                <select placeholder={"Chose the User type"} className={"m-1 border-2"}
                        // onChange={event => setUserType(event.target.value)}
                >
                    <option value={0} >SELECT USER TYPE</option>
                    <option value={1} >DRIVER</option>
                    <option value={2} >CUSTOMER</option>
                </select>
                <br/>

                <button className={"btn-sm btn-primary m-1"} type={"submit"}>Sign Up</button>

               <Link to={"/"}>
                <button className={"btn-sm btn-danger m-1"}>Cancel</button>
               </Link>

            </form>
        </div>
    );

};

export default Register;

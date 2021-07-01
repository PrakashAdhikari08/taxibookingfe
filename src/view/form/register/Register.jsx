import React from "react";

import './Register.css'
import {Link} from "react-router-dom";

import * as Yup from "yup";
import {useFormik} from "formik";
import {saveCustomer, saveDriver} from "../../../api/API";

const Register = (props) => {

    const initialValues = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        userType: ""
    }

    const onSubmit = async (values) => {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.emailAddress,
            password: values.password
        };

        const userType = values.userType;
        if (userType === "CUSTOMER") {
            try {
                const response = await saveCustomer(data);
                console.log(response);
                props.history.push("/login");
            } catch (error) {

            }
        } else {
            try {
                const response = await saveDriver(data);
                console.log(response);
                props.history.push("/login");
            } catch (error) {

            }
        }
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please Enter your First Name"),
        lastName: Yup.string().required("Please Enter your Last Name"),

        emailAddress: Yup.string()
            .email("Invalid Email Address")
            .required("Username is required"),
        password: Yup.string()
            .required("Password Required")
            .min(6, "Password is too short"),
        password1: Yup.string()
            .required("Re-enter Password")
            .test("Password Matched", "Passwords must match", function (value) {
                return this.parent.password === value;
            }),
        userType: Yup.string()
            .required("Please select a user type")
            .min(6, "Select a Type")
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

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
                {formik.touched.firstName && formik.errors.firstName ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.firstName}</p>
                ) : null}
                <input type={"text"} placeholder={"Last Name"} className={"m-1"}
                       id={"lastName"} {...formik.getFieldProps('lastName')}/>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.lastName}</p>
                ) : null}

                <br/>
                <input type={"email"} placeholder={"email address"} className={"m-1 input-long"}
                       id={"emailAddress"} {...formik.getFieldProps("emailAddress")}/>

                {formik.touched.emailAddress && formik.errors.emailAddress ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.emailAddress}</p>
                ) : null}
                <br/>
                <input type={"password"} placeholder={"password"} id={"password"} className={"m-1 input-long"}
                       autoComplete="off" {...formik.getFieldProps("password")} />
                {formik.touched.password && formik.errors.password ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.password}</p>) : null}
                <br/>
                <input type={"password"} placeholder={"re-enter password"} id={"password1"} className={"m-1 input-long"}
                       autoComplete="off" {...formik.getFieldProps("password1")}/>

                {(formik.touched.password1 && formik.errors.password1) ||
                formik.password !== formik.password1 ? (
                    <p className={"text-danger text-sm-center"}>
                        {formik.errors.password1}
                    </p>
                ) : null}

                <br/>
                <select placeholder={"Chose the User type"} className={"m-1 border-2"}
                        id={"userType"} {...formik.getFieldProps("userType")}
                    // onChange={event => setUserType(event.target.value)}
                >
                    <option value={""}>SELECT USER TYPE</option>
                    <option value={"DRIVER"}>DRIVER</option>
                    <option value={"CUSTOMER"}>CUSTOMER</option>
                </select>
                {formik.touched.userType && formik.errors.userType ? (
                    <p className={"text-danger text-sm-center"}>{formik.errors.userType}</p>) : null}
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

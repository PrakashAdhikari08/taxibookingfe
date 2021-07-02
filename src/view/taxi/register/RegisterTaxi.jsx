import React, {useContext} from "react";
import Modal from 'react-modal';
import './RegisterTaxi.css'
import StateContext from "../../../context/StateContext";

import * as Yup from "yup";
import {useFormik} from "formik";
import {saveTaxiForDriver} from "../../../api/API";

const RegisterTaxi = (props) => {


    const {setRegisterModal, registerTaxiModalOpen, loggedInUser,taxiAdded, setTaxiAdded} = useContext(StateContext);

    const initialValues = {
        taxiNumber: "",
        type: "",
    }

    const onSubmit = (values) => {
        console.log(loggedInUser)
        const data = {
            taxiNumber: values.taxiNumber.toUpperCase(),
            type: values.type,
        }
        const userID = loggedInUser.user.userID;

        registerTaxi(data, userID).then(r => console.log(r));
    }

    const validationSchema = Yup.object({
        taxiNumber: Yup.string()
            .required("Please enter taxi number")
            .min(6, "Must be 6 digit")
            .max(6, "Not a valid number"),
        type: Yup.string()
            .required("Select a type")
            .min(3, "Select a type")
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    const closeModal = () => {
        setRegisterModal(false);
    }

    const registerTaxi = async (data, userID) => {
        //make api call
        console.log(data, userID);

        try{
            const response = await saveTaxiForDriver(data, userID);
            console.log(response);
            closeModal();
            setTaxiAdded(!taxiAdded);
            formik.resetForm();
            alert("Taxi Saved \n"+ data.taxiNumber + "\n" + data.type);

        }
        catch (error){

        }


    }

    return (
        <Modal className={"taxi_register_modal_layout m-5 small text-sm-center position-sticky"}
        isOpen={registerTaxiModalOpen} ariaHideApp={false}>
            <form onSubmit={formik.handleSubmit} action={""}>
            <div className={"modal-header"}>
                <h4 className={"modal-title"}>Enter Taxi Details</h4>
            </div>
            <div className={"modal-body"}>
                    <small>Enter Taxi Number</small>
                    <input type={"text"} id={"taxiNumber"} {...formik.getFieldProps("taxiNumber")} className={"text-input-to-uppercase"}/>
                    {formik.touched.taxiNumber && formik.errors.taxiNumber ? (
                        <p className={"text-danger text-sm-center"}>{formik.errors.taxiNumber}</p>
                    ) : null}
                    <small>Vehicle Type</small>
                    <select className={"m-0 border-2"} id={"type"} {...formik.getFieldProps("type")}>
                        <option value={""}>SELECT TYPE</option>
                        <option value={"MINI"}>MINI</option>
                        <option value={"VAN"}>VAN</option>
                        <option value={"NANO"}>NANO</option>
                    </select>
                    {formik.touched.type && formik.errors.type ? (
                        <p className={"text-danger text-sm-center"}>{formik.errors.type}</p>) : null}
                    <br/>
            </div>
            <div className={"modal-footer"}>
                <button className={"btn-sm border-0"} type={"submit"}>Register</button>
                <button className={"btn-sm btn-danger border-0"} onClick={closeModal}>Cancel</button>
            </div>
        </form>

        </Modal>
    )
}
export default RegisterTaxi;
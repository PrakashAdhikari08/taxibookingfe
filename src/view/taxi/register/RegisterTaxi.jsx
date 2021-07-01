import React, {useContext, useState} from "react";
import Modal from 'react-modal';
import './RegisterTaxi.css'
import StateContext from "../../../context/StateContext";

const RegisterTaxi = (props) =>{


    const {setRegisterModal, registerTaxiModalOpen} = useContext(StateContext);

    const closeModal = () => {
        setRegisterModal(false);
    }

    const registerDriver = () => {
        closeModal();

    }

    return(
        <Modal className={"taxi_register_modal_layout m-5 small text-sm-center position-sticky"} isOpen={registerTaxiModalOpen} ariaHideApp={false}>
            <div className={"modal-header"}>
                <h4 className={"modal-title"}>Enter Taxi Details</h4>
            </div>
            <div className={"modal-body"}>
                <small>Enter Taxi Number</small>
                <input type={"text"}/>
                <small>Vehicle Type</small>
                <select className={"m-0 border-2"}>
                    <option>SELECT TYPE</option>
                    <option>MINI</option>
                    <option>VAN</option>
                    <option>NANO</option>
                </select>
            </div>
            <div className={"modal-footer"}>
                <button className={"btn-sm border-0"} onClick={registerDriver}>Register</button>
                <button className={"btn-sm btn-danger border-0"} onClick={closeModal} >Cancel</button>
            </div>

        </Modal>
    )
}
export default RegisterTaxi;
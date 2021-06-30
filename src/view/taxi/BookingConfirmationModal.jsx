import React, {useState} from "react";
import Modal from "react-modal";
import './Taxi.css'

const BookingConfirmationModal = (props) => {

    const[isOpen, setIsOpen] = useState(props.isOpen);

    const closeModal = () => {
        setIsOpen(false);
        props.method(false);
    }

    const confirmBooking = () => {
        console.log("Booking Made");
        //Make the rest call here
        closeModal();
    }


return(

            <Modal className={"small text-sm-center position-sticky modal_layout m-5"}  overlayClassName={"Overlay"} isOpen={isOpen} ariaHideApp={false}>
               <div className={"modal-header"}>
                   <h4>Are you sure you want to Book?</h4>
               </div>

                <h6>Booking details</h6>
                <p>Taxi Number : {props.selected.taxiNumber}</p>
                <p>Type : {props.selected.type} </p>
                <div className={"modal-footer"}>
                    <button className={"btn-sm border-0"} onClick={confirmBooking}>Submit</button>
                    <button className={"btn-sm btn-danger border-0"} onClick={closeModal}>Cancel</button>
                </div>

            </Modal>
        // </div>


    )
}
export default BookingConfirmationModal;
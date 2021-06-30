import React, {useState} from 'react';
import './Taxi.css'
import BookingConfirmationModal from "./BookingConfirmationModal";

const Taxi = (props) => {


    const listOfTaxi = [
        {
            taxiNumber: "VIC 123",
            type: "MINI",
            status: "AVAILABLE"
        },
        {
            taxiNumber: "VIC 111",
            type: "VAN",
            status: "AVAILABLE"

        },
        {
            taxiNumber: "NT 111",
            type: "TRUCK",
            status: "AVAILABLE"

        }
    ]

    const [selectedBooking, setSelectedBooking] = useState({taxiNumber :"", type:""});
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const bookTaxi = (taxiNumber, type) => {
        const selectedTaxi = {
            taxiNumber : taxiNumber,
            type : type
        }
        setSelectedBooking(selectedTaxi);
        setOpenConfirmModal(true);
    }

    return (
        <div className={"taxi-main-div text-center"}>
            <h2><em>All Available Taxis </em></h2>
            <table className={"table table-striped m-2"}>
                <thead>
                <th>Taxi Number</th>
                <th>Type</th>
                <th>Status</th>
                </thead>

                <tbody>
                {
                    listOfTaxi.map(taxi => (
                        <tr key={taxi.taxiNumber} className={"tr-margin"}>
                            <td>{taxi.taxiNumber}</td>
                            <td>{taxi.type}</td>
                            <td>{taxi.status}</td>
                            <td><button className={"btn btn-sm btn-warning m-1"} onClick={() => bookTaxi(taxi.taxiNumber, taxi.type)}>Book</button></td>
                            <br/>
                        </tr>
                    ))


                }


                </tbody>
            </table>
            {openConfirmModal ? <BookingConfirmationModal isOpen={openConfirmModal} method={setOpenConfirmModal} selected={selectedBooking}/> : "" }
        </div>


    );
}
export default Taxi;
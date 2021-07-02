import React, {useEffect, useState} from 'react';
import './Taxi.css'
import BookingConfirmationModal from "./BookingConfirmationModal";
import {getAllAvailableTaxi} from "../../api/API";

const Taxi = (props) => {


    const [listOfTaxi, SetListOfTaxi] = useState([]);

    useEffect(  ()=>{
         async function fetchAllTaxi(){
              try{
                  const response = await getAllAvailableTaxi();
                  SetListOfTaxi(response.data)
                  console.log(response);
              }
              catch (error){
              }
        }
       fetchAllTaxi().then(r => null);
    },[]);

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
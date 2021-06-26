import React, {useState} from 'react';
import './Taxi.css'

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

    const [selectedBooking, setSelectedBooking] = useState("");

    const bookTaxi = (taxiNumber) => {
        setSelectedBooking(taxiNumber);
        console.log("the selected booking is ", taxiNumber);
        alert("Are you sure you want to book " + taxiNumber);
        //Make the rest call here
        console.log("Booking Made")
    }

    return (
        <div className={"taxi-main-div text-center "}>
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
                            <td><button className={"btn btn-sm btn-warning m-1"} onClick={() => bookTaxi(taxi.taxiNumber)}>Book</button></td>
                            <br/>
                        </tr>
                    ))

                }


                </tbody>
            </table>

        </div>


    );
}
export default Taxi;
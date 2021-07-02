import Axios from 'axios';
Axios.defaults.baseURL = "http://localhost:8081/";

//save a customer user
export const saveCustomer = (data) => {
    return Axios.post("taxi/user/register", data);
};

//save a driver
export const saveDriver = (data) => {
    return Axios.post("taxi/user/register/driver", data);
}

//save a taxi for a driver
export const saveTaxiForDriver = (data, userID) => {
    return Axios.post("taxi/v1/save/"+userID, data);
}

//get All available taxi
export const getAllAvailableTaxi = () => {
    return Axios.get("taxi/v1/all/available");
}
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
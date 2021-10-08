import Axios from 'axios';
// Axios.defaults.baseURL = "http://localhost:8000";

Axios.defaults.baseURL = "https://truckee-dev.com";

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

const data = {'grant_type' : 'client_credentials'};
const params = new URLSearchParams();
let config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers' : "Authorization"
    },
    auth : {
        username : "Truckee-Service",
        password : "Truckee-Service"
    }
}
params.append('grant_type', 'client_credentials');
export const getAllAvailableTaxi = () => {
    console.log("hello")
    return Axios.request(
        {
            url: "/oauth/token",
            method: "post",
            baseURL: Axios.defaults.baseURL,
            auth: {
                username: "Truckee-Service", // This is the client_id
                password: "Truckee-Service" // This is the client_secret
            },
           params
        }

    );
}
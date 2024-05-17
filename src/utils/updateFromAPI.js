import axios from "axios";

// Construct URL with query parameters
const BASE_URL = 'https://dtfsappbackend-production.up.railway.app'

export const updateFromAPI = async ( url, inputData ) => {
  const options = {
    method: 'patch', // Specify the method (patch)
    headers: {
        "Content-Type": "application/json"
    },
    // The attribute Nmae of the data object should mmatch with the backend sechema we definded
    // here can cause the bad request 400, if the attribute Name mismatch
    data: {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      email: inputData.email
    }
  };
    try {
      // console.log(`the data we recorded firstNmae is: ${options.data.firstName}, 
      // lastNmae is: ${options.data.lastName} email is: ${options.data.email}`);
      // Fetch data from backend API using axios with options/parameters, both ways work
      const response = await axios(`${BASE_URL}/${url}`, options);
    //   const response = await axios.get(`${BASE_URL}/${url}`, params);
      const data = response;
  
      // Assuming data.contacts is a list of objects with properties id, firstname, lastname, email
      console.log("updateFromAPI");
      return data; // Return the contacts data
    } catch (error) {
      console.error("Error updating contacts:", error);
      return {}; // Return an empty array in case of error
    }
  };

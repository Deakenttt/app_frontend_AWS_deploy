import axios from "axios";

// Construct URL with query parameters
const BASE_URL = 'https://dtfsappbackend-production.up.railway.app'

const options = {
    method: 'get', // Specify the method (get)
    // data: {
    //     id: 'example_id',
    //     firstName: 'example_firstname',
    //     lastName: 'example_lastname',
    //     email: 'example@example.com'
    //   }
  };

 // Assuming schema contains parameters like id, firstname, lastname, email
// const params = {
//     id: 'example_id',
//     firstname: 'example_firstname',
//     lastname: 'example_lastname',
//     email: 'example@example.com'
//   };
export const fetchFromAPI = async (url) => {
    try {
    //   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
      // Fetch data from backend API using axios with options/parameters, both ways work
      const response = await axios(`${BASE_URL}/${url}`, options);
    //   const response = await axios.get(`${BASE_URL}/${url}`, params);
      const data = response.data;
  
      // Assuming data.contacts is a list of objects with properties id, firstname, lastname, email
      console.log("fetchFromAPI");
    //   use the following code to get the response of the entire object, and find our attribute of our database
      /*
      const promise = axios.get('url from backend API')
        promise.then(response => {
        console.log(response)
        })
        */
      console.log(data.contacts);
      return data; // Return the contacts data
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return []; // Return an empty array in case of error
    }
  };



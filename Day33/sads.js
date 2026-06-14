import axios from 'axios';
import axios from "axios"
async function fetchUserData() {
  try {
    // Execution pauses here until the promise resolves
    const response = await axios.get('https://jsonplaceholder.typicode.com/');
    
    // Axios automatically parses JSON data into response.data
    console.log(response.data); 
  } catch (error) {
    // Handles network errors, 4xx, and 5xx responses
    console.error('Error fetching data:', error.message);
  }
}

fetchUserData();
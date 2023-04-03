import axios from "axios";

const testUrl = "http://localhost:8080/api/";
const baseUrl = "http://localhost";
export const postData = async(data) => {
  try {
    await  axios
    .post(testUrl, data)
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;
    }
  }
  catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return error.response.data;
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.response.data;
    }
    
  }

  
};

export const getData = async (query) => {
  try {
    const response = await axios.get(testUrl + query);
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return error.response.data;
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.response.data;
    }
  }
};

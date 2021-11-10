import axios from "axios";
import HttpError from "../HttpError/HttpError";
export const loginapi =async (postData) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  try{
    console.log(process.env.REACT_APP_BACKEND_URL)
      const resdata=await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}user/login`, postData, axiosConfig)
      return resdata.data
  }catch(err){
      console.log(err.response)
      throw new HttpError(`${err.response.data.message}`,err.response.status)
  }
};

export const signupapi = async (postData) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  try{
      console.log(postData)
  const resdata = await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}user/signup`, postData, axiosConfig)
    return resdata.data;
  }catch(err){
    throw new HttpError(`${err.response.data.message}`,err.response.status) 
  }
  
};

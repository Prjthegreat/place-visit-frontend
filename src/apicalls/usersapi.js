import axios from "axios";
import HttpError from "../HttpError/HttpError";

export const getuserapi =async(token,uid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}user/${uid}`, axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const followuserapi =async(token,uid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
    
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}user/follow/${uid}`, axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const fetchmydetailsapi =async(token) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
    
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}user/me`, axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };
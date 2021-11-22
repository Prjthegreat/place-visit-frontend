
import axios from "axios";
import HttpError from "../HttpError/HttpError";


export const getallpostapi =async(token) => {
  console.log(token)
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}post/getallposts`, axiosConfig)
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  

  export const savepostapi =async(token,postid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}post/savepost/${postid}`, axiosConfig)
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const unsavepostapi =async(token,postid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}post/unsavepost/${postid}`, axiosConfig)
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const getsavedpostsapi =async(token) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}post/getsavedposts`, axiosConfig)
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const getmypostsapi =async(token) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}post/mypost`, axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const createpostsapi =async(token,postdata) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}post/createpost`, postdata,axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };

  export const deletepostsapi =async(token,pid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}post/deletepost/${pid}`,axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };


  export const getfollowinguserpostsapi =async(token,uid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":`Bearer ${token}`
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}user/followinguserpost/${uid}`,axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        throw new HttpError(`${err.response.data.message}`,err.response.status)
    }
  };
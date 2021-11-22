import React, { useEffect ,useContext,useState} from 'react'
import UserProfile from './UserProfile'
import {getuserapi} from '../../apicalls/usersapi'
import { AuthContext } from '../../authcontext/AuthContext'
import { useParams } from 'react-router'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router'

const UserProfilePage = () => {
   //const isfollowing=false
   const auth=useContext(AuthContext)
   const params=useParams()
   const [isfollowing,setisfollowing]=useState(false)
   const [userdetails,setuserdetails]=useState(null)
   const history=useHistory()
   useEffect(()=>{

    if(auth.token ){
        console.log(params.uid)
        const {userid}=jwt_decode(auth.token)
        if(userid===params.uid){
            history.replace('/myprofile')
            return;
        }

     const fetchuser=async()=>{
          try{
            const response= await getuserapi(auth.token,params.uid)
            console.log(response)
            setuserdetails(response.user)
            setisfollowing(response.isfollowing)
          }catch(err){
              console.log(err) 
          }
     }
     fetchuser()
    }

   },[auth.token])

    return (
        <div>
          { userdetails && <UserProfile isfollowing={isfollowing} userdetails={userdetails} setisfollowing={setisfollowing} />}
        </div>
    )
}

export default UserProfilePage

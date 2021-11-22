import React,{useEffect, useState,useContext} from 'react'
import FollowerList from './lists/FollowerList'
import FollowingList from './lists/FollowingList'
import MyProfile from './MyProfile'
import {getmypostsapi} from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext'
import {fetchmydetailsapi} from '../../apicalls/usersapi'

const MyProfilePage = () => {
    const auth=useContext(AuthContext)
    const [userdetails,setuserdetails]=useState()
    const [followerslist,setfollowerslist]= useState(false)
    const [followinglist,setfollowinglist]= useState(false)
   
   
    useEffect(()=>{

        if(auth.token){
            const fetchmydetails=async()=>{
                try{
               const response= await fetchmydetailsapi(auth.token)
               console.log(response)
               setuserdetails(response.user)
                }catch(err){
                    console.log(err)
                }
   
          }
          fetchmydetails()
        }
 
     },[auth.token])
 


    const followingList=[
        { id:1, name:'Prajwal' },
        { id:2, name:'Rohit-topper'},
        { id:3, name:'Parag'  },
        { id:4, name:'Satvik-madar' }
    ]

    const followerList=[
        { id:1, name:'Prajwal_Batra' },
        { id:2, name:'Rohit_Codr'},
        { id:3, name:'Parag__piro_coder'  },
        { id:4, name:'Satvik-badia_bacha' }
    ]

    return (
        <div>
           { userdetails &&  <MyProfile userdetails={userdetails}  setfollowinglist={setfollowinglist} setfollowerslist={setfollowerslist}
      />}
            { followinglist && <FollowingList followingList={userdetails.following}  /> }
            {followerslist &&  <FollowerList  followerList={userdetails.followers} /> }
        </div>
    )
}

export default MyProfilePage

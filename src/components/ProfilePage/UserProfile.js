import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './MainProfileCard.css'
import {followuserapi} from '../../apicalls/usersapi'
import { AuthContext } from '../../authcontext/AuthContext'
import user from '../../images/user_2.png'
import post from '../../images/post.png'
import followers from '../../images/followers.png'
import following from '../../images/following.png'
import home from  '../../images/home.png'
import follow from '../../images/follow_2.png'

const UserProfile = ({isfollowing,userdetails,setisfollowing}) => {
  
   const auth=useContext(AuthContext) 


   const followUserHandler=async()=>{
      try{
       const response= await followuserapi(auth.token,userdetails._id)
       console.log(response)
       if(response.message==='You follow this user now !!'){
        setisfollowing(true)
       }
      }catch(err){
         console.log(err)
      }
   }


    return (
        <div>
                 <div className="profile-card">
            <header className="profile-card-header">
                <div className="hello">
                <img className="profile-image" src={user} alt="" />
                <div className="heading-box">
                <h1>{userdetails.name}</h1>
                <h3> <span><i className="material-icons">Kindness is a language which the deaf can hear and blind can see.</i> </span></h3>
                </div>
                </div>
                <div className="button-box">
                <a className="follow-btn" href="#"><i className="material-icons"  > { isfollowing ? <img src={home} height="100px" width="100px" />: <img src={follow} height="100px"  
                onClick={followUserHandler}  width="100px" />  }  </i></a>
                </div>
            </header>
            <main className="profile-card-main">
                <div className="activity">
                <i className="material-icons"> <img src={followers} height="20px" width="20px" /> </i>
                <span className="activity-name">Followers</span>
                <span className="indexed">{userdetails.followers.length}</span>
                </div>
                <div className="activity">
                <i className="material-icons"> <img src={following} height="20px" width="20px" /></i>
                <span className="activity-name">Following</span>
                <span className="indexed">{userdetails.following.length}</span>
                </div>
                <div className="activity">
                <i className="material-icons"><img src={post} height="20px" width="20px" /></i>
                <span className="activity-name">  <Link style={{ fontSize:'18px',color:'black' }} to={`/post/${userdetails.name}/${userdetails._id}`}>Posts</Link></span>
                <span className="indexed">{userdetails.posts.length}</span>
                </div>
            </main>
            </div>
        </div>
    )
}

export default UserProfile

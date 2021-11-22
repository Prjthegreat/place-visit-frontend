import React,{useEffect} from 'react'
import './MainProfileCard.css'


import user from '../../images/user_2.png'
import post from '../../images/post.png'
import followers from '../../images/followers.png'
import following from '../../images/following.png'
import home from  '../../images/home.png'
import { Link } from 'react-router-dom'


// card ->  profile-card
// card-header -> profile-card-header  
// card-main -> profile-card-main
// index -> indexed
const MyProfile = (props) => {

    return (
        <div>
                <div className="profile-card-2">
            <header className="profile-card-header">
                <div className="hello">
                <img className="profile-image" src={user} alt="" />
                <div className="heading-box">
                <h1 style={{color:'rgb(78, 78, 104)'}} >{props.userdetails.name}</h1>
                <h3> <span><i className="material-icons">Kindness is a language which the deaf can hear and blind can see.</i> </span></h3>
                </div>
                </div>
                <div className="button-box">
                <a className="follow-btn" href="#"><i className="material-icons"  ><img src={home} height="100px" width="100px" /></i></a>
                </div>
            </header>
            <main className="profile-card-main">
                <div className="activity" onClick={ ()=>{props.setfollowerslist(prev=>!prev); props.setfollowinglist(false) } } >
                <i className="material-icons"> <img src={followers} height="20px" width="20px" /> </i>
                <span className="activity-name">Followers</span>
                <span className="indexed">{props.userdetails.followers.length}</span>
                </div>
                <div className="activity" onClick={()=>{props.setfollowinglist(prev=>!prev); props.setfollowerslist(false)} } >
                <i className="material-icons"> <img src={following} height="20px" width="20px" /></i>
                <span className="activity-name">Following</span>
                <span className="indexed">{props.userdetails.following.length}</span>
                </div>
                <div className="activity">
               
                    <i className="material-icons"><img src={post} height="20px" width="20px" /></i>
                    <span className="activity-name"  > <Link style={{ fontSize:'18px',color:'black' }} to="/myposts"> Posts </Link> </span>
                    <span className="indexed">{props.userdetails.posts.length}</span>
                </div>
            </main>
            </div>
        </div>
    )
}

export default MyProfile

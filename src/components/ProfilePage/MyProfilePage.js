import React,{useState} from 'react'
import FollowerList from './lists/FollowerList'
import FollowingList from './lists/FollowingList'
import MyProfile from './MyProfile'

const MyProfilePage = () => {
    const [followerslist,setfollowerslist]= useState(false)
    const [followinglist,setfollowinglist]= useState(false)


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
            <MyProfile   setfollowinglist={setfollowinglist} setfollowerslist={setfollowerslist}  />
            { followinglist && <FollowingList followingList={followingList}  /> }
            {followerslist &&  <FollowerList  followerList={followerList} /> }
        </div>
    )
}

export default MyProfilePage

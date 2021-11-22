import React,{useContext,useState,useEffect} from 'react'
import PostCard from './PostCard'
import './PostPage.css'
import saved from '../../images/saved.png'
import { AuthContext } from '../../authcontext/AuthContext'
import {getsavedpostsapi} from '../../apicalls/postapi'
import SearchBar from '../SearchBar/SearchBar'
const SavedPostPage = () => {
    const [savedposts,setsavedposts]=useState([])
    const auth=useContext(AuthContext)
    const [searchedcity,setsearchedcity]=useState("")
    useEffect(()=>{
        if(auth.token){
         const fetchposts=async()=>{
             try{
              const postresponse= await getsavedpostsapi(auth.token)
              console.log(postresponse)
              setsavedposts(postresponse.posts)
             }catch(err){
              console.log(err)
             }
        }
        fetchposts()
        }
     },[auth.token])
     const search=(places)=>{
        if(!places ||  places.length===0)
        return []
      const arr= places.map( place=>{
       
            if(  place && place.placename && place.placename.toLowerCase().indexOf(searchedcity.toLowerCase()) >=0 )
             return place

        } )

        return arr
    }

    return (
        <div className="post-page-background"  >
            <h1>My Saved Posts  <img src={saved} height="30px" width="30px"  />   </h1>

            <SearchBar searchedcity={searchedcity}  setsearchedcity={setsearchedcity} />
            <div className="card-container" >
            { search(savedposts).length>0 && search(savedposts).map( post=>{

                if(!post)
                return
                else{
                    return (  
                    <PostCard 
                    _id={post._id} 
                    placename={post.placename}
                    description={post.description} 
                    location={post.location}
                    creator={post.creator} 
                    images={post.images}
                    issaved={true}
                    />
                    )
                }  
                } )}


               { search(savedposts).length===0  && <div> No posts Found </div> }

            </div>

        </div>
    )
}

export default SavedPostPage

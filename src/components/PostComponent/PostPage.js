import React, { useEffect,useState,useContext } from 'react'
import PostCard from './PostCard'
import './PostPage.css'
import {getallpostapi} from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext'
import SearchBar from '../SearchBar/SearchBar'

const PostPage = () => {
    const auth=useContext(AuthContext)
    const [allposts,setallposts]=useState([])
    const [searchedcity,setsearchedcity]=useState("")
    //console.log(auth)   
    useEffect(()=>{
       if(auth.token){
        const fetchposts=async()=>{
            try{
             const postresponse= await getallpostapi(auth.token)
             console.log(postresponse)
             setallposts(postresponse.posts)
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
            <h1>All Posts</h1>
            {/* <div className="search-bar" > */}
                {/* <input className="search-bar" value={searchedcity} onChange={ (event)=>setsearchedcity(event.target.value) }
                  placeholder="Search Place here...." /> */}
                  <SearchBar searchedcity={searchedcity}  setsearchedcity={setsearchedcity} />
            {/* </div> */}
            <div className="card-container" >
               { search(allposts).length>0 && search(allposts).map( post=>{

                   if(!post)
                     return
                   else{
                       return (  
                        <PostCard 
                        _id={post._id} 
                        placename={post.placename}
                        description={post.description}
                        rating={post.rating} 
                        location={post.location}
                        creator={post.creator} 
                        images={post.images}
                        issaved={post.issaved}
                          />
                       )
                   }  
               } )}

            </div>

        </div>
    )
}

export default PostPage

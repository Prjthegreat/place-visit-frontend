import React,{useEffect, useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { getfollowinguserpostsapi } from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext'
import PostCard from './PostCard'
import SearchBar from '../SearchBar/SearchBar'
// this page is for the posts of a user that I follow
const UserPostsPage = () => {
    const [usedetails,setuserdetails]=useState(null)
    const [userposts,setuserposts]=useState([])
    const [searchedcity,setsearchedcity]=useState("")
    const params=useParams()
    const auth=useContext(AuthContext)
    useEffect(()=>{

    if(auth.token){
            const fetchdata=async()=>{
              try{
                const response= await getfollowinguserpostsapi(auth.token,params.uid)
                console.log(response)
                setuserposts(response.posts)
              }catch(err){
                console.log(err)
              }
        }

               fetchdata()
    }


    },[auth.token])

    const search=(places)=>{
      if(!places ||  places.length===0)
      return []
    const arr= places.map( place=>{
          if(  place && place.post.placename && place.post.placename.toLowerCase().indexOf(searchedcity.toLowerCase()) >=0 )
           return place

      } )

      return arr
  }

    return (
        <div className="post-page-background"  >
        <h1>{params.name}'s Posts</h1>
        {/* <div className="card-container" >
           { userposts.length>0 && userposts.map( post=>(

             <PostCard 
              _id={post.post._id} 
              placename={post.post.placename}
              description={post.post.description} 
              location={post.post.location}
              creator={post.post.creator} 
              images={post.post.images}
              issaved={post.issaved}
                />
              
           ) )}

        </div> */}
        <SearchBar searchedcity={searchedcity}  setsearchedcity={setsearchedcity} />
                <div className="card-container" >
                { search(userposts).length>0 && search(userposts).map( post=>{

                if(!post)
                return
                    else{
                    return (  
                        <PostCard 
                        _id={post.post._id} 
                        placename={post.post.placename}
                        description={post.post.description} 
                        location={post.post.location}
                        creator={post.post.creator} 
                        images={post.post.images}
                        issaved={post.issaved}
                        />
                            )
                        }  
                        } )}
                {search(userposts).length==0  && <div className="no-post" > <h1>No posts Found</h1>  </div> }

                </div>

    </div>
    )
}

export default UserPostsPage

import React,{useState,useContext,useEffect} from 'react'
import PostCard from '../PostComponent/PostCard'
import {getmypostsapi,deletepostsapi} from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext'
import SearchBar from '../SearchBar/SearchBar'
const MyPostPage = () => {
  
    const [myposts,setmyposts]=useState([])
    const [searchedcity,setsearchedcity]=useState("")
    const auth=useContext(AuthContext)
    
    const deleteposthandler=async(pid)=>{
          
        try{
         const response=await deletepostsapi(auth.token,pid)
         console.log(response)
         setmyposts(myposts.filter( post=>post.post._id!==pid ))  
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(auth.token){
         const fetchposts=async()=>{
             try{
              const postresponse= await getmypostsapi(auth.token)
              console.log(postresponse.posts)
              setmyposts(postresponse.posts)
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
            if(  place && place.post.placename && place.post.placename.toLowerCase().indexOf(searchedcity.toLowerCase()) >=0 )
             return place

        } )

        return arr
    }


    return (
        <React.Fragment>
            <div className="post-page-background"  >
                <h1>My Posts    </h1>
                <SearchBar searchedcity={searchedcity}  setsearchedcity={setsearchedcity} />
                <div className="card-container" >
                { search(myposts).length>0 && search(myposts).map( post=>{

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
                        rating={post.post.rating}
                        images={post.post.images}
                        issaved={post.issaved}
                        crud={true}
                        deleteposthandler={deleteposthandler}
                        />
                            )
                        }  
                        } )}
                {search(myposts).length==0  && <div className="no-post" > <h1>No posts Found</h1>  </div> }

                </div>

            </div>
      </React.Fragment>
    )
}

export default MyPostPage

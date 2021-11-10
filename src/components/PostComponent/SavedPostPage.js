import React,{useContext,useState,useEffect} from 'react'
import PostCard from './PostCard'
import './PostPage.css'
import saved from '../../images/saved.png'
import { AuthContext } from '../../authcontext/AuthContext'
import {getsavedpostsapi} from '../../apicalls/postapi'
const SavedPostPage = () => {
    const [savedposts,setsavedposts]=useState([])
    const auth=useContext(AuthContext)
    
    useEffect(()=>{
        if(auth.token){
         const fetchposts=async()=>{
             try{
              const postresponse= await getsavedpostsapi(auth.token)
              console.log(postresponse.posts)
              setsavedposts(postresponse.posts)
             }catch(err){
              console.log(err)
             }
        }
        fetchposts()
        }
     },[auth.token])
    const dummy_posts=[
        {
            id:1,
            placename:'Manali',
            description:'A very beautifull place. A must visit Place.Capture the stunning essence of the early morning sunrise in the Californian wilderness',
            location:'Himachal',
            creator:'Prajwal',
            images:[
                {id:1,img:'https://s.abcnews.com/images/Business/jaguar-ht-jt-200217_hpMain_16x9_1600.jpg'},
                {id:2,img:'https://www.carscoops.com/wp-content/uploads/2021/02/Jaguar-Sports-Carsa-1024x555.jpg'},
                {id:3,img:'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/lamborghini-huracan.jpg'}
            ]
        },
        {
            id:2,
            placename:'Amritsar',
            description:'A very beautifull place. A must visit Place...',
            location:'Punjab',
            creator:'Rohit',
            images:[
                {id:1,img:'https://s.abcnews.com/images/Business/jaguar-ht-jt-200217_hpMain_16x9_1600.jpg'},
                {id:2,img:'https://www.carscoops.com/wp-content/uploads/2021/02/Jaguar-Sports-Carsa-1024x555.jpg'},
                {id:3,img:'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/lamborghini-huracan.jpg'}
            ]
        },
        {
            id:3,
            placename:'Goa',
            description:'A very beautifull place. A must visit Place...',
            location:'Goa',
            creator:'Siddhart',
            images:[
                {id:1,img:'https://s.abcnews.com/images/Business/jaguar-ht-jt-200217_hpMain_16x9_1600.jpg'},
                {id:2,img:'https://www.carscoops.com/wp-content/uploads/2021/02/Jaguar-Sports-Carsa-1024x555.jpg'},
                {id:3,img:'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/lamborghini-huracan.jpg'}
            ]
        }
    ]

    return (
        <div className="post-page-background"  >
            <h1>My Saved Posts  <img src={saved} height="30px" width="30px"  />   </h1>
            <div className="card-container" >
               {savedposts.length>0 && savedposts.map( post=>(

                 <PostCard
                   _id={post._id}   
                  placename={post.placename}
                  description={post.description} 
                  location={post.location}
                  creator={post.creator} 
                  images={post.images}
                  issaved={post.issaved}
                    />
                  
               ) )}
               { savedposts.length==0  && <div> No posts Found </div> }

            </div>

        </div>
    )
}

export default SavedPostPage

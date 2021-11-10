import React, { useEffect,useState,useContext } from 'react'
import PostCard from './PostCard'
import './PostPage.css'
import {getallpostapi} from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext'
const PostPage = () => {
    const auth=useContext(AuthContext)
    const [allposts,setallposts]=useState([])
    //console.log(auth)   
    useEffect(()=>{
       if(auth.token){
        const fetchposts=async()=>{
            try{
             const postresponse= await getallpostapi(auth.token)
             console.log(postresponse.posts)
             setallposts(postresponse.posts)
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
            <h1>All Posts</h1>
            <div className="card-container" >
               {allposts.map( post=>(

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

            </div>

        </div>
    )
}

export default PostPage

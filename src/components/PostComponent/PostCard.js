import React,{useContext,useState} from 'react'
import DropDown from '../Dropdown/DropDown';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import 'swiper/swiper.scss'
import '../../../node_modules/swiper/swiper.min.css'
import '../../../node_modules/swiper/swiper-bundle.min.css'
import './PostCard.css'
import {savepostapi,unsavepostapi} from '../../apicalls/postapi'
import { AuthContext } from '../../authcontext/AuthContext';
import like from '../../images/liked.png'
import cmnt from '../../images/chat-bubble.png'
import save from '../../images/saved.png'
import saved from '../../images/saved_2.png'
import {Link} from 'react-router-dom'
SwiperCore.use([Pagination])
const PostCard = (props) => {
    // const [issaved,setissaved]=useState()
    const auth=useContext(AuthContext)
    const [isSaved,setISaved]=useState(props.issaved)
   const savePostHandler=async()=>{

      if(isSaved==false){
          //request is made to unsaves this post
          try{
            const response= await savepostapi(auth.token,props._id)
            console.log(response)
            setISaved(true)
          }catch(err){
            console.log(err)
          }
        
      }
      else if(isSaved==true){
          //request is made to save this post..
          try{
            const response= await unsavepostapi(auth.token,props._id)
            console.log(response)
            setISaved(false)
          }catch(err){
            console.log(err)
          }
        
      }

   }
    return (
        <div>
           
            <div className="card-body" >
                   <div className="card-slider" >
                  
                   <div className="image__slider" >
                            {/* <ImageGallery originalHeight="20px" originalWidth="20px" showNav={false} items={imagesarray} />;        */}
                            
                                <Swiper
                                    slidesPerView={1}
                                    pagination={{
                                        "dynamicBullets": true
                                    }}
                                    effect="flip"  
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        { props.images.map(image=>(
                                            <SwiperSlide className="slide" > 
                                                    <div className="slide-content" >
                                                        <img src={image.secure_url}   /> 
                                                    </div>
                                            </SwiperSlide>

                                        )) }
                                            
                
                                
                                
                                </Swiper>

                            </div>
                          {props.crud && <div style={{display:'flex',justifyContent:'flex-end'}} >
                              <DropDown deleteposthandler={props.deleteposthandler} id={props._id}  /> 
                              </div>}
                            
                   </div>
                   <div id="triangle1" ></div>
                   {/* <div id="triangle2" ></div> */}
                   <div className="class-content" >
                    <div className="card-header" >
                        <h3>{props.placename}</h3>
                    </div>
                    <div className="card-description" >
                        <p>{props.description}</p>
                    </div>
                    <div className="card-lower-section" >
                    <span> Post by &nbsp;<Link style={{fontSize:'11px', color:'rgb(233, 72, 43)'}} to={`/profile/user/${props.creator ? props.creator._id:null}`}>{ props.creator && props.creator.name }</Link></span>
                       <span> Rating: {props.rating}/5 </span>
                        <span style={{maxWidth:'100px'}} > Location: {props.location}</span>
                    </div>
                    <hr />
                    <div className="card-lowest-section" >
                       <img src={like} height="20px" width="20px"   />
                       <img src={cmnt} height="20px" width="20px"   />
                       <img src={ isSaved==true?saved:save} onClick={savePostHandler} height="20px" width="20px"   />
                    </div>
                   </div>
            </div>
            
        </div>
    )
}

export default PostCard

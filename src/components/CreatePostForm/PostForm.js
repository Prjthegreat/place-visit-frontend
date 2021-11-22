import react, { useState,useContext } from "react"
import "./PostForm.css"
import ImageUploading from 'react-images-uploading'
import {createpostsapi} from '../../apicalls/postapi'
import {AuthContext} from '../../authcontext/AuthContext'
function PostForm(){
    
    const auth=useContext(AuthContext) 
    const[values,setValues]=useState({
        placeName:"",
        description:"",
        location:"",
        rating:"",
    });

    const [image,setImage]=useState([])
    const onChange = (imageList, addUpdateIndex) => {
     // data for submit
     console.log(imageList, addUpdateIndex);
     setImage(imageList);
   };
    const maxNumber=5;
  
   const handlePlaceNameChange = (event)=> {
      setValues({...values,placeName:event.target.value})
    }
  
    const handleDescriptionChange=(event)=> {
        setValues({...values,description:event.target.value})
      }
    
    const handleLocationChange=(event)=> {
        setValues({...values,location:event.target.value})
      }
      const handleRatingChange=(event)=> {
        setValues({...values,rating:event.target.value})
      }

      const [submitted,setSubmitted]=useState(false)
      
//       const handleSubmit=(event)=>{
//     setSubmitted(true)
// }

           const createPostHandler=async()=>{
            setSubmitted(true)
               const postObj={
                 placename:values.placeName,
                 description:values.description,
                 location:values.location,
                 rating:values.rating,
                 images:image.map( img=>{
                   return img.data_url
                 } )
               }

               console.log(postObj)

              //  try{
              //   const response= await createpostsapi(auth.token,postObj)
              //   console.log(response)
              //  }catch(err){
              //   console.log(err)
              //  }

           }

            return(
             <div>  
              <div className ="form-root">
                
        <form  className="react-form" >
            
          {submitted?  <div className ="submitted">Successfully submitted </div>:null}
          <h1>Enter the details of Place</h1>
          <hr/>
          <div className="form-main-body" >  
          <input 
            className="inputSection1 inputSection"
            onChange={handlePlaceNameChange}
            value={values.palceName}
            placeholder="Placename"
            />
             <div  clasName="imageUploaderMenu" style={{display:'inline',textAlign:'justify',margin:'10px'}} >
          {/* <input name="image" value={image} type="text" tabindex="3" required hidden />  */}
              <ImageUploading
                multiple
                value={image}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                required
              >
        
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <label  >Upload Images</label><br/><br/>
                  <button  className="imageBtn"
                    style={isDragging ? { color: 'red' } : undefined}
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select Image
                  </button>
                  &nbsp;
                <div className="image-preview-container" >
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button  className="imageBtn" onClick={() => onImageUpdate(index)}>Update</button>
                        <button  className="imageBtn" onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                 </div> 
                </div>
              )}
            </ImageUploading>
          </div>

           {/* <input 
            className=" inputSection1 inputSection"
            onChange={handleDescriptionChange}
            value={values.descriptipn}
            placeholder="Description"
            /> */}
            <textarea
            style={{height:'100px'}}
             className=" inputSection1 inputSection"
             onChange={handleDescriptionChange}
             value={values.descriptipn}
             placeholder="Description" 
            />

            <input 
            className="inputSection1 inputSection"
            onChange={handleLocationChange}
            value={values.location}
            placeholder="Location"
            />

            {/* <input 
            className="inputSection1 inputSection"
            onChange={handleRatingChange}
            value={values.rating}
            type="number"
            min={1}
            max={5}
            placeholder="Rating"
            /> */}

            <select  placeholder="Rating" defaultValue={0} className="inputSection1 inputSection" value={values.rating} onChange={handleRatingChange} >
            <option value={0}  >Rating</option>
                <option value={1} onClick={ (event)=> setValues({...values,rating:1}) } >Poor</option>
                <option value={2} onClick={ (event)=> setValues({...values,rating:2})} >fine</option>
                <option value={3} onClick={ (event)=> setValues({...values,rating:3})} >Good</option>
                <option value={4} onClick={ (event)=> setValues({...values,rating:4})} >Great</option>
                <option value={5} onClick={ (event)=> setValues({...values,rating:5})} >Excellent</option>
            </select>

            <input
          className="inputSection1 btn "
          placeholder="Create Post"
          onClick={createPostHandler}
          readOnly
        />
        </div>
        </form>
        </div>
        </div> 
    )
  }
  export default PostForm
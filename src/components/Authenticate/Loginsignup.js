import React, { useState,useContext } from 'react';
import "./Authenticate.css"
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthContext } from '../../authcontext/AuthContext';
import {loginapi,signupapi} from '../../apicalls/authapi'
import jwt_decode from "jwt-decode";

const Loginsignup = () => {

    const auth=useContext(AuthContext)
    console.log(auth)
    const[verify,setverify]=useState(false)
    const [formState,setFormState]=useState({
        newUser: true,
        right: 0,
      })

    const [formData,setFormData]=useState({
        name:null,
        email:null,
        password:null
    })  

    const handleClick=(button)=> {
        if(formState.newUser && button != 'signUp') {
            setFormState({  newUser: false})
        } else if(!formState.newUser && button != 'signIn') {
            setFormState({newUser: true})
        }
      }


    const submitHandler=async()=>{
        console.log(formData)
        
        if(formState.newUser){
            //signup request......
            const signupdata={
               name:formData.name, 
               email:formData.email,
               password:formData.password 
            }
            try{
               await signupapi(signupdata)
               //auth.login(token)
               setverify(true)
            }catch(err){
               console.log(err.message)
            }

        }else{
            const logindata={
                email:formData.email,
                password:formData.password 
             }
             try{
              const response= await loginapi(logindata)
              console.log(response)
              let {exp} = jwt_decode(response.token);
              console.log(exp)
              exp+=Date.now()
              auth.login(response.token,(new Date(exp)))
             }catch(err){
                console.log(err)
             }
            
        }

    }  

    return (
    <div className='formContainer'>
        <div className='formHeader'>
            <div 
              className={ formState.newUser ? 'headerActive' : 'headerInActive' } 
              onClick={() => handleClick('signUp')}
              >
              <button className='headerButton'> Sign Up </button>
            </div>
            <div 
              className={ formState.newUser ? 'headerInActive' : 'headerActive' } 
              onClick={() => handleClick('signIn')}
              >
              <button className='headerButton'> Sign In </button>
            </div>
        </div>
        <div className='formBody'>
          {
            formState.newUser ? <SignUp verify={verify} formData={formData} setFormData={setFormData}  />:
             <SignIn formData={formData} setFormData={setFormData} />
          }
        </div>
        <div className='formFooter'>
          <button className='saveForm' onClick={submitHandler} > { formState.newUser ? 'Submit' : 'Login'} </button>
        </div>
     </div>
    )
}

export default Loginsignup


// class Loginsignup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       newUser: true,
//       right: 0,
//     }
//   }

//   handleClick(button) {
//     if(this.state.newUser && button != 'signUp') {
//       this.setState({newUser: false})
//     } else if(!this.state.newUser && button != 'signIn') {
//       this.setState({newUser: true})
//     }
//   }
  
  
//   render() {
//     return(
//            <div className='formContainer'>
//               <div className='formHeader'>
//                   <div 
//                     className={ this.state.newUser ? 'headerActive' : 'headerInActive' } 
//                     onClick={() => this.handleClick('signUp')}
//                     >
//                     <button className='headerButton'> Sign Up </button>
//                   </div>
//                   <div 
//                     className={ this.state.newUser ? 'headerInActive' : 'headerActive' } 
//                     onClick={() => this.handleClick('signIn')}
//                     >
//                     <button className='headerButton'> Sign In </button>
//                   </div>
//               </div>
//               <div className='formBody'>
//                 {
//                   this.state.newUser ? <SignUp />: <SignIn />
//                 }
//               </div>
//               <div className='formFooter'>
//                 <button className='saveForm'> { this.state.newUser ? 'Submit' : 'Login'} </button>
//               </div>
//            </div>
//     ) 

//   }
// }


// const SignUp= props =>{
   
//   return(      
//     <div className='signUpContainer'>
//       <h4 className='headerText'>Join Us Today</h4>
//       <div className='inputSectionSplit'>
//         <input type='text' className='firstName' required/>
//         <label className='inputLabel'>Your Name</label>
//       </div>
//       <div className='inputSectionSplit'>
//         <input type='text' className='lastName' required/>
//         <label className='inputLabel'>Last Name</label>
//       </div>
//       <div className='inputSection'>
//         <input type='text' className='emailAddress' required/>
//         <label className='inputLabel'>Email Address</label>
//       </div>
//       <div className='inputSection'>
//         <input type='password' className='password' required/>
//         <label className='inputLabel'>Password</label>
//       </div>
//     </div>
//   )
//   }

//   const SignIn= props =>{
//     return(
//       <div className='signInContainer'>
//         <h4 className='headerText'>Welcome Back</h4>
//             <div className='inputSection'>
//                 <input type='text' className='emailAddress' required/>
//                 <label className='inputLabel'>Email Address</label>
//             </div>
//             <div className='inputSection'>
//                 <input type='text' className='password' required/>
//                 <label className='inputLabel'>Password</label>
//             </div>
        
//       </div>
//     )
  
// }
//export default Loginsignup
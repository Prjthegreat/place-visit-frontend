import React from 'react'
import './Authenticate.css'
const SignIn = ({formData,setFormData}) => {
    return (
     <div className='signInContainer'>
        <h4 className='headerText'>Welcome Back</h4>
            <div className='inputSection'>
                <input value={formData.email} 
                  onChange={(event)=>setFormData({...formData,email:event.target.value})}
                  type='text' className='emailAddress' required/>
                <label className='inputLabel'>Email Address</label>
            </div>
            <div className='inputSection'>
                <input value={formData.password} 
                   onChange={(event)=>setFormData({...formData,password:event.target.value})}
                   type='password' className='password' required/>
                <label className='inputLabel'>Password</label>
            </div>
        
      </div>
    )
}

export default SignIn

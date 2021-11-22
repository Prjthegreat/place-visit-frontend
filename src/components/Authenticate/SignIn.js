import React from 'react'
import './Authenticate.css'
const SignIn = ({formData,setFormData}) => {
    return (
     <div className='signInContainer'>
        <h4 className='headerText'>Welcome Back</h4>
            <div className='inputSection'>
                <input className="input_tag emailAddress" value={formData.email} 
                  onChange={(event)=>setFormData({...formData,email:event.target.value})}
                  type='text' required/>
                <label className='inputLabel'>Email Address</label>
            </div>
            <div className='inputSection'>
                <input className="input_tag password" value={formData.password} 
                   onChange={(event)=>setFormData({...formData,password:event.target.value})}
                   type='password'  required/>
                <label className='inputLabel'>Password</label>
            </div>
        
      </div>
    )
}

export default SignIn

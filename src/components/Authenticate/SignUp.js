import React from 'react'
import './Authenticate.css'
const SignUp = ({verify,formData,setFormData}) => {
    return (
     <div className='signUpContainer'>
            <h4 className='headerText'>Join Us Today</h4>
            <div className='inputSectionSplit'>
                <input  value={formData.name} onChange={(event)=>setFormData({...formData,name:event.target.value})}
                 type='text' className='firstName' required/>
                <label className='inputLabel'>Your Name</label>
            </div>
            {/* <div className='inputSectionSplit'>
                <input type='text' className='lastName' required/>
                <label className='inputLabel'>Last Name</label>
            </div> */}
            <div className='inputSection'>
                <input type='text' value={formData.email}
                 onChange={(event)=>setFormData({ ...formData, email:event.target.value})}  className='emailAddress' required/>
                <label className='inputLabel'>Email Address</label>
            </div>
            <div className='inputSection'>
                <input type='password' value={formData.password}  
                  onChange={(event)=>setFormData({...formData,password:event.target.value})} className='password' required/>
                <label className='inputLabel'>Password</label>
            </div>
           { verify && <div>You must have received an email from our Team. Kindly Verify Your Account</div>}
    </div>
    )
}

export default SignUp

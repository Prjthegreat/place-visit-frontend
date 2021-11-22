import React from 'react'
import dots from '../../images/dots.png'
import './DropDown.css'
const DropDown = (props) => {
    return (
        <label className="dropdown">

            <div className="dd-button">
            <img src={dots} height="20px" width="20px"   />
            </div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
                <li>Edit</li>
                <li onClick={ ()=>props.deleteposthandler(props.id) } >Delete</li>
            </ul>
        
        </label>
    )
}

export default DropDown

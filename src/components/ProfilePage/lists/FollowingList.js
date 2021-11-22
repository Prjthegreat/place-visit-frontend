import React from 'react'
import './List.css'
import following from  '../../../images/following.png'
import { Link } from 'react-router-dom'
const FollowingList = (props) => {
    return (
        <div className="main_table_container" >
            <h1> My Following  <img src={following} height="50px" width="50px" /> </h1>
            <table className="main__table" >
               

               <tbody>

                  { props.followingList.map( (user,i)=>{
                       if(i%2){
                            return  (<tr className="table_row_1" >
                                       <Link to={`/profile/user/${user._id}`}><td className="single_column" > {user.name} </td></Link>
                                    </tr>)
                       }else{
                            return  (<tr className="table_row_2" >
                                         <Link to={`/profile/user/${user._id}`}><td className="single_column" > {user.name} </td></Link>
                                    </tr>)
                       }

                     } ) }

               </tbody>
            </table>
        </div>
    )
}

export default FollowingList

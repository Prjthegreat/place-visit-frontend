import React from 'react'
import './List.css'
import following from  '../../../images/following.png'
const FollowingList = (props) => {
    return (
        <div className="main_table_container" >
            <h1> My Following  <img src={following} height="50px" width="50px" /> </h1>
            <table className="main__table" >
               

               <tbody>

                  { props.followingList.map( (user,i)=>{
                       if(i%2){
                            return  (<tr className="table_row_1" >
                                        <td className="single_column" > {user.name} </td>
                                    </tr>)
                       }else{
                            return  (<tr className="table_row_2" >
                                        <td className="single_column" > {user.name} </td>
                                    </tr>)
                       }

                     } ) }

               </tbody>
            </table>
        </div>
    )
}

export default FollowingList

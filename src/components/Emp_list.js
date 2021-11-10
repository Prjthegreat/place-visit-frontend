import react from "react";
import Emp_data from "./Emp_data";

function Emp_list (props){
   if(props.item&&props.item.length === 0){
   return(
       <h2>no user found</h2>
   )}
  return(
      <ul>
          {console.log(props)}
      {props.item.map(user =>(
          <Emp_data 
          key={user.id}
          id={user.id}
          image={user.image}
          name="rohit"
          description={user.description}

          />
      )

      )}
      </ul>
  )
      };
export default Emp_list;

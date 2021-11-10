import react from "react";

    const Emp_data= props =>{
            return(
                <li>

                    <div>
                        <h1>prajwal </h1>
                        <h2>{props.name}</h2>
                    </div>
                    <div>
                        <h3>{props.description}</h3> 
                    </div>

                </li>
            )
    }
    export default Emp_data;

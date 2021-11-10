import react from "react";
import Emp_list from "./Emp_list";

const Emp=()=>{
const USER=[{
    id:'a',
    key:'1',
    image:"",
    name:"rohit",
    description:"qwert"
}];

return <Emp_list  item={USER} />
}

export default Emp;
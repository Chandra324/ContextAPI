import React,{useContext,useState} from "react";
import { Store } from "./App";
const Display=()=>{
    const[data,setData]=useContext(Store);
    const[name,setName]=useState('');
    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
    return(
        <div className="card">
            <div className="card-body">
               {data.map(item=><h3 className="card-title">{item.brandname}</h3>)}
         <form className="form" onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
            <input type="submt" value="add"/>

         </form>

        </div>
        </div>
    )
}
export default Display;
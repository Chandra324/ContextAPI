import React,{useContext} from "react";
import { Store } from "./App";

const ComponentB=()=>{
    const[data,setData]=useContext(Store);
    return(
        <div>
            ComponentB {data}
        </div>
    )
}
export default ComponentB
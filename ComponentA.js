import React,{ useContext} from "react"
import { Store } from "./App"

const ComponentA =()=>{
    const [data,setData]=useContext(Store);
    return(
      <div>
        ComponentA {data}
      </div>
    );
}
export default ComponentA
import React,{creatContext,useState} from 'react'
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

import Count from './Count';
import Display from './Display';
export const Store=creatContext();

function App() {
  const [data,setData]=useState([
    {
      brandName:"Nokia"
    },
    {
      brandName:"redmi"
    },
    {
      brandName:"vivo"
    }
  ]);
  return (
    <Store.Provider value={[data,setData]}>
    <center>
     {/* <ComponentA/>
     <ComponentB/> */}

     <Count/>
     <Display/>

     <button onClick={()=>setData(data+1)}>increment</button>
    </center>
    </Store.Provider>
  );
}

export default App;

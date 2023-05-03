import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const App = () =>{
//     const [data, setData] = React.useState(true);

//     //DidMount
//     useEffect(()=>{
//         console.log("DidMount");
//     },[]);

//     let count = 0;
//     console.log(count++);
//     //DidUpdate
//     useEffect(()=>{
//         if(!data){
//             console.log("DidUpdate");
//             return setData(!data);
//         }
//     },[data])
//     const updateData =()=>{
//         setData(!data);
//     }
//     return (
//         <button onClick={updateData}>Action </button>
//     )
// }
 ReactDOM.render(<App/>,document.getElementById("root"));

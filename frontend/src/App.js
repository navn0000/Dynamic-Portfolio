import React from "react";
import RoutingPage from "./routes";

function App() {
 
  // useEffect(()=>{
  //   fetch("http://localhost:5001/api/skills/all").then(res=>res.json()).then((data)=>{
  //     console.log(data)
  //   })
  // }, [])
  return (
    <>
    <RoutingPage />
    </>
  );
}

export default App;

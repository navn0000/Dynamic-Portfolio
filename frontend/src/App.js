import React, { useEffect} from "react";

function App() {
  useEffect(()=>{
    fetch("http://localhost:5001/api/skills/all").then(res=>res.json()).then((data)=>{
      console.log(data)
    })
  }, [])
  return (
    <>
    </>
  );
}

export default App;

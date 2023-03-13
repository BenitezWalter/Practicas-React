import { useState , useEffect } from "react";
export const Form = () => {
  const [input, setinput] = useState("");

  useEffect(()=>{
    console.log("render")
  },[])

  return(


  <div>
    <input type="text" onChange={(e) => setinput(e.target.value)} />
    <button onClick={()=> alert(input)}>xd</button>
  </div>
  )
};

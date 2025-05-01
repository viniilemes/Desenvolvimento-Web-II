import { CSSProperties, useState } from "react"; 
 
export default function Ex01() { 
  const [count, setCount] = useState(0); 
 
  function increment() { 
    setCount((prev) => prev + 1); 
  } 
 
  function decrement() { 
    setCount((prev) => prev - 1); 
  } 
 
  return ( 
    <> 
      <h4>Valor: {count}</h4> 
      <div> 
        <Button action={increment} label="Incrementar" /> 
        <Button action={decrement} label="Decrementar" /> 
      </div> 
    </> 
  ); 
} 
 
const buttonStyle: CSSProperties = { 
  backgroundColor: "#567196", 
  color: "white", 
  padding: "10px 20px", 
  marginRight: "10px", 
  fontSize: "16px", 
  fontWeight: "bold", 
  border: "none", 
  borderRadius: "5px",  
  cursor: "pointer",  
};
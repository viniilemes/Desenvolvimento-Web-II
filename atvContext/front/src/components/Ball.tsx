import { CSSProperties } from "react";
import { BallProps } from "../types";
export function Ball({label}:BallProps){
    return <>
        <button style={ballStyle}>{label}</button>
    </>
}


const ballStyle: CSSProperties = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 10px",
    marginRight: "15px",
    fontSize: "17px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
  };

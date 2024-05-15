import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComponent(props)  { 
  const color = useContext(colorContext);
  console.log(color)
  return( 
  <p style={{ color: color }}>Color: {color}</p>
  )
};

export default GrandChildComponent;

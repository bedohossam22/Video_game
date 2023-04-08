import React from "react";
import Header from "./Header";
import Content from "./Content";
import Data from "./data";
import "../style.css/style.css"
import Nav from "./Nav";
export default function App() { 
  
const logic = Data.map(item => {
  return ( 
    <Content 
     key = {item.name}
    item = {item} />
  )
})
  return (
    <div>
 <Nav /> 
        <Header />
        
     {logic} 
      </div>
  );
}
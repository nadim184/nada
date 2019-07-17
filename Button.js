import React from "react" ;
import './App.css';
function Button(props){
  
    return (
        <div>
            
            <button onClick={props.onSimpleClick} >
               
            {props.btn}
         
        </button>  
   {(window.location==="#") && (alert("link is empty"))}
        </div>
    );
}
export default Button;
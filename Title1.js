import React from "react" ;
import './App.css';
function Title1(props){
    return (
        <h1 >
            {props.firstname + props.lastname}
           
        </h1>
    )
};
export default Title1;
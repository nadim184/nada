import React from "react" ;
import Title1 from './Title1';

function Wrapper(props){
    return(
        <p>
                <Title1 name="NADIM"  style={{color:"black"}}/>
                <Title1   name="CHIHAOUI"  />
                {props.name}
        </p>
    )
};
export default Wrapper ;
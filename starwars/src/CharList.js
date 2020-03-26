import React from "react";
import Cards from "./Cards";

const CharList = (props) => {
   return(
        <>
        {props.chars.map(item => {
            return (
                <Cards name={item.name}/>
            );
        })}
        </>
   )  
}

export default CharList;
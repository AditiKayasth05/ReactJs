import React from "react";
import { ChildN2 } from "./ChildN2";
export  function ChildN1({cd}){
    return(
        <>
        <h2> child Component 1</h2>
        <ChildN2 cd={cd}/>
        </>
    )
}
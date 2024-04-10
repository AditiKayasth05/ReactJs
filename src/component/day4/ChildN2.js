import React from "react";
import { ChildN3 } from "./childN3";
export  function ChildN2({cd}){
    return(
        <>
        <h2> child Component 2</h2>
        <ChildN3 cd={cd}/>
        </>
        )
    }
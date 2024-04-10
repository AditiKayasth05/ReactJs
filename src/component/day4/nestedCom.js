import React from "react";
import { ChildN1 } from "./childN1";

 export function NestedComp(){
     const cd=(data)=>{
        return data.toLowerCase();

     }
     return(
        <>
        <h1>Change Data</h1>
        <ChildN1 cd={cd} />
        </>
     )
 }
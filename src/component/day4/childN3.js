import React from "react";

export  function ChildN3({cd}){
    const originalData="Aditi"

    const changeData=cd(originalData)
    return(
        <>
        <h2> child Component 3</h2>
        <p> Original Data:{originalData}</p>
        <p>Manipulated Data:{changeData}</p>
        </>
    )
    }
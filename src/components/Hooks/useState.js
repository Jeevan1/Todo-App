import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const initialData  = 0;
    const [myNum, setMyNum] =  React.useState(initialData);

    return(
        <>
        <div className="center_div">
            <p>{myNum}</p>
            <button className="button" onClick={()=>setMyNum(myNum+1)}>
                Incr
            </button>
            <button className="button" onClick={()=>myNum > 0 ? setMyNum(myNum-1):setMyNum(0)}>
                Decr
            </button>
        </div>
        </>
    )
}
export default UseState;
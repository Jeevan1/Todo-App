import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
    // const initialData  = 0;
    const [myNum, setMyNum] =  useState(0);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    })
    return(
        <>
        <div className="center_div">
            <p>{myNum}</p>
            <button className="button" onClick={()=>setMyNum(myNum+1)}>
                Incr
            </button>
        </div>
        </>
    )
}
export default UseEffect;
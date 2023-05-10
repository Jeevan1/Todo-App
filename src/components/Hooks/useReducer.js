import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
const reducer = (state, action)=> {
    if(action.type ==="Incr"){
        state = state +1;
    }
    if(state>0 && action.type ==="Decr"){
        state = state -1;
    }
    return state;
}

const UseReducer = () => {
    const initialData  =10;
    // const [myNum, setMyNum] =  useState(0);
    const [state, dispatch] = useReducer(reducer,initialData);

    return(
        <>
        <div className="center_div">
            <p>{state}</p>
            <button className="button" onClick={()=>dispatch({type:"Incr"})}>
                Incr
            </button>
            <button className="button" onClick={()=>dispatch({type:"Decr"})}>
                Decr
            </button>
        </div>
        </>
    )
}
export default UseReducer;
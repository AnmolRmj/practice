import React from "react";
import WithCounter from "./WithCounter";
import Counter from "./Counter";
import PageNotFound from "../variables/PageNotFound";
const HOC =()=>{
 const HocCount=WithCounter(Counter)
    return(
        <div>
            <HocCount/>
            <div><PageNotFound/></div>
        </div>
    )
}
export default HOC;
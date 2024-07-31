 import React from "react";
import CallBackChild from "./CallBackChild";
 const Usecallbacks=()=>{
    const[upCount,setUpCount]=React.useState(0);
    const[downCount,setdowncount]=React.useState(20)
    
    const downcountupdate=React.useCallback(()=>{
        console.log('usecall',downCount)
        setdowncount(downCount-1)

    },[downCount])
    return(
        <div>
            Use Call back
            <div>call back down:{downCount}</div>
            
            <div><CallBackChild setUpCount={(e)=>setUpCount(e) }upCount={upCount}
            downcountupdate={downcountupdate}
            />
            <button onClick={downcountupdate}>Back</button></div>
           
        </div>
    )
}
export default Usecallbacks;
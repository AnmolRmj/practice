import React from "react"
const CallBackChild=({setUpCount,upCount,downcountupdate})=>{
    const handleup=()=>{
        setUpCount(upCount+1)
        downcountupdate(downcountupdate)
    }
    
    return(
        <div>
            Call Back Child:{upCount}
            <div>
                <button  onClick={handleup}>
                Child Up
            </button>
            </div>
        
        
            
        </div>
    )
}
export default CallBackChild

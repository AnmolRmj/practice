import React from 'react'

const WithCounter = (HocComponent) => {
    const[isCount,setIscount]=React.useState(0)
    return (props)=>{
        const upcountUpdate=()=>{
            setIscount(isCount+1)
        }
    

  return(
    <HocComponent
    setCount={upcountUpdate}
    count={isCount}{...props} />
  )
}}

export default WithCounter

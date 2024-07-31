import React from 'react'

const Counter = ({count,setCount}) => {

  return (
    <div>
      <div>Counter</div>
      <div>{count}</div>
      <div>
        <button onClick={setCount}>Up Count</button>
      </div>
    </div>
  )
}

export default Counter

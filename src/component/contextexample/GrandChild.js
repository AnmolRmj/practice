import React from 'react'
import { useAppContext } from '../ContextApi';

export const GrandChild = ({data}) => {
  const grandData={
    name:'grandchild'
  }
  const {appState} = useAppContext();
  console.log('appstate',appState)

  return (
    <div>
        <div>GrandChild</div>
        <div>grandname:{grandData?.name}</div>
        <div> nameGrandChild:{appState?.data?.name}</div>
    </div>
    
  )
}

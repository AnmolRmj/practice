import React from 'react'
import { GrandChild } from './GrandChild'
import { useAppContext } from '../ContextApi';

export const SubChild = ({data}) => {
  const {appState} = useAppContext();
  console.log('appstate',appState)
  return (
    <div>
        <div>SubChild</div>
        <div>nameSubChild:{data?.name}</div>
    <div> <GrandChild data={data}/></div>
  
    </div>
  )
}

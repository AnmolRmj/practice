import React from 'react'
import { SubChild } from './SubChild'
import { useAppContext } from '../ContextApi'

export const Child = ({data}) => {
  const {appState}=useAppContext()
  return (
    <div>
        <div>Child</div>
        <div> nameChild:{appState?.data?.name}</div>
        <div><SubChild data={data}/></div>

    </div>
  )
}

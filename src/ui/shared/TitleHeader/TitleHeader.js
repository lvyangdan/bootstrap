import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
const TitleHeader=({title})=>(
  <div>
    <Sidebar/>
    <div>{title}</div>
  </div>
)
export default TitleHeader

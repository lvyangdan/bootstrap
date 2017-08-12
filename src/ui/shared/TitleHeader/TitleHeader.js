import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './TitleHeader.css'
const TitleHeader=({title})=>(
  <div>
    <Sidebar/>
    <div className='title'>{title}</div>
  </div>
)
export default TitleHeader

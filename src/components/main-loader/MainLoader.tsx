import React from 'react'
import './MainLoader.scss'

export default function MainLoader() {
  return (
    <div className='main-loader'>
      <div className='main-loader__spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

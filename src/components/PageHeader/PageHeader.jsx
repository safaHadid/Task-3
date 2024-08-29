import React from 'react'
import './PageHeader.css'

const PageHeader = (props) => {
  return (
    <div className='pageheader'>
        <div className='pageheader-img'>
            <img src="/assets/page-heading-bg.jpg" />
        </div>
        <div className="text-container">
            <p className='text-title'>{props.title}</p>
            <h1 className='text'>{props.text}</h1>
        </div>
    </div>
  )
}

export default PageHeader
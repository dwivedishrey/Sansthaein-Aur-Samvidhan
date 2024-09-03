import React from 'react'
import Card from './Card.js'
import data from './data.js'
import './Navbar.css'

const Services = () => {
    const card = data.map((item) =>(
        <Card
        image={item.img}
        name={item.name}
        des={item.des} 
        link={item.link}
       />
     ))
     
  return (
    <div id='services' className='ser'>
      <h1 className='header'>Start Your Learning</h1>
      <p className='ser-content'>Grow your Constitutional confidence with videos and articles.</p>
        <div className='header_underline'></div>      
      <div className='wrapper'>{card}</div>
    </div>
  )
}

export default Services
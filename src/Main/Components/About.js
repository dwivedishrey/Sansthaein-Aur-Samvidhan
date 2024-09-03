import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import "./Navbar.css";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';


const About = () => {
    const style = {
        backgroundImage: `url("indian8.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        padding:0
        
      };
  return (
    <div id="about" className='about-container' style={style}>
      <div className='about-text'>
      <h1> Embark on Your Constitutional Journey</h1>
      <p style={{ width: "800px" }}>
  Embarking on your journey to understand the Constitution of India can feel overwhelming, but with the right tools and insights, you can explore this foundational document with clarity and ease. Sansthaein Aur Samvidhan is designed to guide you through the complexities of constitutional principles, offering an engaging and interactive experience. Our platform aims to simplify the key concepts of governance—Legislature, Executive, and Judiciary—through immersive games and activities, making learning both accessible and enjoyable. Dive into the essence of India's Constitution and discover how its principles shape our society and governance.
</p>
     
      </div>
    </div>
  )
}

export default About

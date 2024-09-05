import React from 'react';
import "./Navbar.css";

const About = () => {
    const style = {
        backgroundImage: `url("about.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
        textAlign: 'center',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    };

    const contentStyle = {
        zIndex: 2,
        maxWidth: '800px',
        padding: '20px',
    };

    return (
        <div id="about" className="about-container" style={style}>
            <div style={overlayStyle}></div>
            <div className="about-text" style={contentStyle}>
                <h1>Embark on Your Constitutional Journey</h1>
                <p>
                    Understanding the Constitution can be challenging, but <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Sansthaein Aur Samvidhan</span> makes it simple and fun. Our platform offers engaging games and activities that simplify key concepts like the Legislature, Executive, and Judiciary. Dive in and see how the Constitution shapes our society and governance!
                </p>
            </div>
        </div>
    );
}

export default About;

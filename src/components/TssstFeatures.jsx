import React, { useState, useEffect } from "react";
import tssstImg1 from "../assets/tssst_img1.png";
import tssstImg2 from "../assets/tssst_img2.png";
import tssstImg3 from "../assets/tssst_img3.png";
 
const TssstFeatures = () => {
  // State to track viewport width for responsive adjustments
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  // Update window width when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  // Responsive container style
  const containerStyle = {
    margin: "clamp(30px, 5vw, 50px) auto clamp(50px, 8vw, 100px) auto",
    maxWidth: "1200px",
    width: "calc(100% - 30px)",
    padding: "0 15px",
  };
 
  // Responsive heading style
  const headingStyle = {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "clamp(1.5rem, 4vw, 3rem)",
    color: "#252839",
    textAlign: "center",
    padding: "0 10px",
    lineHeight: 1.3,
  };
 
  // Responsive grid style
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: windowWidth < 768 ? "1rem" : "2rem",
    width: "100%",
  };
 
  // Responsive card style
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "1.5rem",
    padding: windowWidth < 480 ? "15px" : windowWidth < 768 ? "18px" : "20px",
    width: windowWidth < 480 ? "100%" : "auto",
    maxWidth: windowWidth < 480 ? "none" : "309px",
    minWidth: windowWidth < 480 ? "none" : "250px",
    flex: windowWidth < 480 ? "1 1 100%" : "1 1 300px",
    height: "auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease",
    margin: windowWidth < 480 ? "0.5rem 0" : "0.5rem",
  };
 
  // Responsive icon box style
  const iconBoxStyle = {
    backgroundColor: "#FF3131",
    borderRadius: "0.75rem",
    width: windowWidth < 480 ? "40px" : "48px",
    height: windowWidth < 480 ? "40px" : "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  };
 
  // Responsive icon style
  const iconStyle = {
    color: "#ffff",
    width: windowWidth < 480 ? "20px" : "24px",
    height: "40px",
    minWidth: "40px",
    maxWidth: "100%",
  };
 
  // Responsive title style
  const titleStyle = {
    fontSize: windowWidth < 480 ? "1.2rem" : windowWidth < 768 ? "1.4rem" : "1.6rem",
    fontWeight: 600,
    color: "#252839",
    lineHeight: 1.3,
  };
 
  // Responsive description style
  const descStyle = {
    fontSize: windowWidth < 480 ? "14px" : "16px",
    color: "#4F4F4F",
    lineHeight: 1.5,
  };
 
  // Features data
  const features = [
    {
      icon: <img style={iconStyle} src={tssstImg1} alt="Clean Interface Icon" />,
      title: "Clean and Minimalist Interface",
      description:
        "An intuitive design focused on essential communication, free from overwhelming features.",
    },
    {
      icon: <img style={iconStyle} src={tssstImg2} alt="Group Management Icon" />,
      title: "Easy Group management",
      description:
        "Create and manage your private conversations with uncomplicated tools.",
    },
    {
      icon: <img style={iconStyle} src={tssstImg3} alt="Signal Indicators Icon" />,
      title: "Clear TsssT Signal Indicators",
      description:
        "Understand message status at a glance with our simple visual cues.",
    },
  ];
 
  // Card hover state
  const [hoveredCard, setHoveredCard] = useState(null);
 
  return (
    
    <section style={containerStyle} id="testimonials">
      <div style={{height:"100px",width:"100%"}}></div>
      <h2 style={headingStyle}>
        TsssT Features: Simplicity Defines
      </h2>
 
      <div style={gridStyle}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredCard === index && windowWidth > 768 ? {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              } : {})
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="feature-card"
          >
            <div style={iconBoxStyle}>{feature.icon}</div>
            <h3 style={titleStyle}>{feature.title}</h3>
            <p style={descStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
};
 
export default TssstFeatures;
 
 
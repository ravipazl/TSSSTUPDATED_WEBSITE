import React, { useState } from 'react';
import rectangleImg from '../assets/Rectangle.svg';
import dottedShape from '../assets/Frame 1.svg';
import heart from "../assets/heart.png";
import bgimg from "../assets/Group 13.svg"
import star from "../assets/star.svg";
import Starr from "../assets/Starr.svg";

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Add responsive window resize listener
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // More precise breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;
  const isSmallDesktop = windowWidth <= 1366 && windowWidth > 1024;
  const isLargeDesktop = windowWidth > 1366;
  
  // Dynamic sizing based on screen width
  const getResponsiveSize = (mobile, tablet, smallDesktop, largeDesktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    if (isSmallDesktop) return smallDesktop;
    return largeDesktop;
  };
  
  return (
    <main id="home" style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      backgroundColor: "#FF3131",
      position: "relative",
      padding: getResponsiveSize("20px 15px", "30px 20px", "40px 30px", "60px 40px"),
      overflow: "hidden"
    }}>
      
      {/* Bottom Left Dotted Shape */}
      <div style={{
        position: "absolute",
        width: getResponsiveSize("60px", "80px", "100px", "120px"),
        height: getResponsiveSize("60px", "80px", "100px", "120px"),
        bottom: getResponsiveSize("-10px", "-15px", "-20px", "-25px"),
        left: getResponsiveSize("15px", "20px", "25px", "30px"),
        pointerEvents: "none",
        zIndex: 1
      }}>
        <img src={dottedShape} style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }} alt="Decorative shape" />
      </div>

      {/* Top Right Dotted Shape */}
      <div style={{
        position: "absolute",
        width: getResponsiveSize("60px", "80px", "100px", "120px"),
        height: getResponsiveSize("60px", "80px", "100px", "120px"),
        top: getResponsiveSize("-5px", "-10px", "-15px", "-20px"),
        right: getResponsiveSize("15px", "20px", "25px", "30px"),
        pointerEvents: "none",
        zIndex: 1
      }}>
        <img src={dottedShape} style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }} alt="Decorative shape" />
      </div>

      {/* Main Content Container */}
      <div style={{
        width: "100%", 
        maxWidth: getResponsiveSize("100%", "100%", "1200px", "1400px"),
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        position: "relative",
        zIndex: 2,
        gap: getResponsiveSize("25px", "30px", "40px", "60px"),
        flexDirection: isMobile ? "column" : "row",
        margin: "0 auto"
      }}>

        {/* Left Column - Text Content */}
        <div style={{
          flex: isMobile ? "none" : "1", 
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? "100%" : getResponsiveSize("400px", "450px", "500px", "550px"),
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "flex-start", 
          textAlign: "left",
          order: isMobile ? 2 : 1,
          minWidth: 0 // Prevent flex shrinking issues
        }}>
          <h5 style={{
            color: "white",
            fontSize: getResponsiveSize("11px", "12px", "14px", "16px"),
            marginBottom: getResponsiveSize("10px", "12px", "15px", "15px"),
            fontWeight: "400",
            margin: `0 0 ${getResponsiveSize("10px", "12px", "15px", "15px")} 0`,
            lineHeight: "1.3"
          }}>
            The World Simplest Non-Verbal Messenger
          </h5>
          
          <h1 style={{
            fontSize: getResponsiveSize("1.8rem", "2.2rem", "2.5rem", "3rem"),
            lineHeight: "1.2",
            fontWeight: "bold",
            textAlign: "left",
            color: "white",
            margin: `0 0 ${getResponsiveSize("15px", "18px", "20px", "25px")} 0`,
            wordBreak: "break-word"
          }}>
            TsssT: Your Personal Buzzer. Buzz. No Bug.
          </h1>
          
          <p style={{
            fontSize: getResponsiveSize("0.9rem", "1rem", "1.1rem", "1.2rem"),
            lineHeight: "1.6",
            color: "white",
            textAlign: "left",
            opacity: "0.95",
            margin: `0 0 ${getResponsiveSize("25px", "28px", "30px", "35px")} 0`,
            maxWidth: "100%"
          }}>
            In a world that constantly demands your attention, TsssT offers a revolutionary approach: your own personal buzzer for communication that's truly non-intrusive. We believe in the power of the subtle, the quiet, and the remarkably effective. With TsssT, you buzz, no bug.
          </p>
          
          <div style={{
            display: "flex",
            gap: getResponsiveSize("12px", "15px", "15px", "20px"),
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "flex-start",
            width: isMobile ? "100%" : "auto",
            alignItems: isMobile ? "stretch" : "flex-start",
            flexWrap: "wrap"
          }}>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: getResponsiveSize("12px 24px", "14px 28px", "14px 28px", "16px 32px"),
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                display: "inline-block",
                cursor: "pointer",
                fontSize: getResponsiveSize("14px", "15px", "16px", "16px"),
                letterSpacing: "0.5px",
                textAlign: "center",
                minWidth: getResponsiveSize("140px", "150px", "160px", "160px"),
                boxSizing: "border-box",
                background: hoveredButton === "getStarted" ? "#fff" : "transparent",
                color: hoveredButton === "getStarted" ? "#FF3131" : "#fff",
                border: "2px solid white",
                boxShadow: hoveredButton === "getStarted" ? "0 8px 20px rgba(255, 49, 49, 0.3)" : "0 4px 10px rgba(0, 0, 0, 0.1)",
                transform: hoveredButton === "getStarted" ? "translateY(-3px)" : "translateY(0px)",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={() => setHoveredButton("getStarted")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Get Started
            </a>
            
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: getResponsiveSize("12px 24px", "14px 28px", "14px 28px", "16px 32px"),
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                fontSize: getResponsiveSize("14px", "15px", "16px", "16px"),
                letterSpacing: "0.5px",
                textAlign: "center",
                minWidth: getResponsiveSize("140px", "150px", "160px", "160px"),
                boxSizing: "border-box",
                background: hoveredButton === "watchVideos" ? "white" : "transparent",
                color: hoveredButton === "watchVideos" ? "#FF3131" : "#fff",
                border: "2px solid white",
                boxShadow: hoveredButton === "watchVideos" ? "0 8px 20px rgba(255, 49, 49, 0.3)" : "0 4px 10px rgba(0, 0, 0, 0.1)",
                transform: hoveredButton === "watchVideos" ? "translateY(-3px)" : "translateY(0px)",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={() => setHoveredButton("watchVideos")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Watch Videos{" "}
              <span style={{
                color: hoveredButton === "watchVideos" ? "#FF3131" : "#fff",
                marginLeft: "5px"
              }}>
                ▶
              </span>
            </a>
          </div>
        </div>

        {/* Center Column - Star Icons and Heart (Desktop only) */}
        {!isMobile && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: getResponsiveSize("350px", "450px", "500px", "550px"),
            width: getResponsiveSize("120px", "150px", "180px", "200px"),
            order: 2,
            zIndex: 3,
            position: "relative",
            flexShrink: 0,
          }}>
            {/* Star 1 - Top Right */}
            <div style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              flex: "1"
            }}>
              <div style={{
                width: getResponsiveSize("45px", "55px", "65px", "70px"),
                height: getResponsiveSize("45px", "55px", "65px", "70px"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img src={star} alt="Star decoration" style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }} />
              </div>
            </div>
            
            {/* Star 2 - Center */}
            <div style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "1"
            }}>
              <div style={{
                width: getResponsiveSize("25px", "30px", "35px", "40px"),
                height: getResponsiveSize("25px", "30px", "35px", "40px"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img src={Starr} alt="Small star decoration" style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }} />
              </div>
            </div>
            
            {/* Heart - Bottom Left */}
            <div style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              flex: "1"
            }}>
              <div style={{
                width: getResponsiveSize("35px", "40px", "45px", "50px"),
                height: getResponsiveSize("35px", "40px", "45px", "50px"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))"
              }}>
                <img src={heart} alt="Heart decoration" style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }} />
              </div>
            </div>
          </div>
        )}

        {/* Right Column - Rectangle and Background Image */}
        <div style={{
          flex: isMobile ? "none" : "1",
          width: isMobile ? "80%" : "auto",
          maxWidth: isMobile ? "100%" : getResponsiveSize("350px", "400px", "450px", "500px"),
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: getResponsiveSize("250px", "300px", "400px", "500px"),
          order: isMobile ? 1 : 3,
          aspectRatio: isMobile ? "1/1" : "auto"
        }}>
          <img src={bgimg} alt="Background decoration" style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }} />
          <img src={rectangleImg} alt="Main product visual" style={{ 
            width: getResponsiveSize("65%", "60%", "55%", "60%"),
            height: "auto",
            maxHeight: "100%",
            objectFit: "contain",
            position: "relative",
            zIndex: 1
          }} />
        </div>

        {/* Mobile Center Icons */}
        {isMobile && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: getResponsiveSize("20px", "25px", "30px", "30px"),
            order: 3,
            padding: getResponsiveSize("15px 0", "20px 0", "20px 0", "20px 0"),
            width: "100%"
          }}>
            <div style={{
              width: getResponsiveSize("30px", "35px", "40px", "40px"),
              height: getResponsiveSize("30px", "35px", "40px", "40px"),
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img src={star} alt="Star" style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }} />
            </div>
            
            <div style={{
              width: getResponsiveSize("35px", "40px", "45px", "45px"),
              height: getResponsiveSize("35px", "40px", "45px", "45px"),
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img src={heart} alt="Heart" style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }} />
            </div>
            
            <div style={{
              width: getResponsiveSize("25px", "30px", "35px", "35px"),
              height: getResponsiveSize("25px", "30px", "35px", "35px"),
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img src={Starr} alt="Small star" style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }} />
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default Home;
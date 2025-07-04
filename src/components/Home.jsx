import React, { useState, useEffect } from 'react'
import rectangleImg from '../assets/Rectangle.svg'
import dottedShape from '../assets/Frame 1.svg'
import heart from '../assets/heart.png'
import bgimg from '../assets/Group 13.svg'
import star from '../assets/star.svg'
import Starr from '../assets/Starr.svg'
import arrow from '../assets/arrow.svg'

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null)
  // Initialize windowWidth to a default desktop size to prevent SSR errors
  const [windowWidth, setWindowWidth] = useState(1200)

  useEffect(() => {
    // Guard against running on the server where 'window' is not defined
    if (typeof window === 'undefined') return

    const handleResize = () => setWindowWidth(window.innerWidth)
    // Set initial width
    handleResize()
    
    window.addEventListener('resize', handleResize)
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth > 768 && windowWidth <= 1024
  const isSmallDesktop = windowWidth > 1024 && windowWidth <= 1366

  const getResponsiveSize = (mobile, tablet, smallDesktop, largeDesktop) => {
    if (isMobile) return mobile
    if (isTablet) return tablet
    if (isSmallDesktop) return smallDesktop
    return largeDesktop
  }

  return (
    <main
      id="home"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#FF3131',
        position: 'relative',
        // padding: getResponsiveSize('50px 20px', '40px 30px', '50px 40px', '60px 50px'),
        overflowX: 'hidden',
        paddingInline: '20px',
      }}
    >
      {/* Decorative Shapes */}
      <span style={{ position: 'absolute', width: getResponsiveSize('60px', '80px', '80px', '80px'), height: getResponsiveSize('60px', '80px', '80px', '80px'), bottom: getResponsiveSize('10px', '15px', '20px', '0px'), left: getResponsiveSize('15px', '20px', '25px', '5px'), zIndex: 1 }}>
        <img src={dottedShape} style={{ width: '100%', height: '100%' }} alt="Decorative shape" />
      </span>
      <span style={{ position: 'absolute', width: getResponsiveSize('60px', '80px', '80px', '80px'), height: getResponsiveSize('60px', '80px', '80px', '80px'), top: getResponsiveSize('10px', '15px', '20px', '0px'), right: getResponsiveSize('15px', '20px', '25px', '5px'), zIndex: 1 }}>
        <img src={dottedShape} style={{ width: '100%', height: '100%' }} alt="Decorative shape" />
      </span>

      {/* Main Flex Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          gap: getResponsiveSize('40px', '30px', '40px', '60px'),
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Left Column (Text + Buttons) */}
        <div
          style={{
            flex: 1,
            width: '100%',
            maxWidth: isMobile ? '100%' : '550px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            order: isMobile ? 2 : 1,
          }}
        >
          <h5 style={{ color: 'white', fontSize: getResponsiveSize('14px', '12px', '16px', '16px'), margin: `0 0 15px 0`, fontWeight: 500 }}>
            The World's Simplest Non-Verbal Messenger
          </h5>
          <h1 style={{ fontSize: getResponsiveSize('2rem', '2.2rem', '2.5rem', '3rem'), lineHeight: 1.2, fontWeight: 'bold', color: 'white', margin: `0 0 25px 0` }}>
            TsssT: Your Personal Buzzer. Buzz. No Bug.
          </h1>
          <p style={{ fontSize: getResponsiveSize('1rem', '16px', '26px', '26px'), lineHeight: 1.6, color: 'white', opacity: 0.95, margin: `0 0 35px 0`, maxWidth: '600px' }}>
            In a world that constantly demands your attention, TsssT offers a revolutionary
            approach: your own personal buzzer for communication that's truly non-intrusive.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '15px',
              flexDirection: isMobile ? 'column' : 'row',
              width: isMobile ? '100%' : 'auto',
              alignItems: isMobile ? 'stretch' : 'center',
            }}
          >
            <a
              href="#features"
              onClick={e => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                padding: '16px 24px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: getResponsiveSize('16px', '16px', '22px', '22px'),
                textDecoration: 'none',
                background: hoveredButton === 'getStarted' ? '#fff' : 'transparent',
                color: hoveredButton === 'getStarted' ? '#FF3131' : '#fff',
                border: '2px solid white',
                transition: 'all 0.3s ease',
                boxShadow: hoveredButton === 'getStarted'
                  ? '0 8px 20px rgba(255, 49, 49, 0.3)'
                  : '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={() => setHoveredButton('getStarted')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Get Started
            </a>

            <a
              href="#how-it-works"
              onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                padding: '16px 24px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: getResponsiveSize('16px', '16px', '22px', '22px'),
                textDecoration: 'none',
                background: hoveredButton === 'watchVideos' ? '#fff' : 'transparent',
                color: hoveredButton === 'watchVideos' ? '#FF3131' : '#fff',
                border: '2px solid white',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHoveredButton('watchVideos')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Watch Videos <span style={{ color: hoveredButton === 'watchVideos' ? '#FF3131' : '#fff', transform: 'scale(1.5)', marginLeft: '4px' }}>▶</span>
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
            height: getResponsiveSize("350px", "450px", "500px", "500px"),
            width: getResponsiveSize("120px", "150px", "150px", "150px"),
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
              flex: "1",
       
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
        

        {/* Right Column (Image) */}
        <div
          style={{
            flex: 1,
            width: '100%',
            maxWidth: getResponsiveSize('280px', '380px', '380px', '380px'),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            order: isMobile ? 1 : 3,
            position: 'relative',

          
          }}
        >
        
          <img
            src={arrow}
            alt="Arrow decoration"
            style={{
              width: getResponsiveSize('40px', '75px', '75px', '75px'),
              height: getResponsiveSize('40px', '50px', '50px', '50px'),
              
 
              transform: 'rotate(-5deg)',
              // *** THE FIX IS HERE ***
              // No more negative marginTop.
              // marginBottom is now a small positive value to create space.
              marginBottom: getResponsiveSize('10px', '12px', '20px', '20px'),
              zIndex: 3, 
            }}
          />
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={bgimg} alt="Background decoration" style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%' }} />
            <img src={rectangleImg} alt="Main visual" style={{ width: '70%', height: '100%', zIndex: 1,marginBottom: getResponsiveSize('10px', '10px', '15px', '30px') }} />
          </div>
        </div>

        {/* Mobile Center Icons */}
        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', order: 3, paddingTop: '20px', width: '100%' }}>
            <img src={star} alt="Star" style={{ width: '40px' }} />
            <img src={heart} alt="Heart" style={{ width: '45px' }} />
            <img src={Starr} alt="Small star" style={{ width: '35px' }} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
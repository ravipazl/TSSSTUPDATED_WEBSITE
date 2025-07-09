import React, { useState, useEffect } from 'react';
import rectangleImg from '../assets/Rectangle.svg';
import dottedShape from '../assets/Frame 1.svg';
import heart from '../assets/heart.png';
import bgimg from '../assets/Group 13.svg';
import star from '../assets/star.svg';
import Starr from '../assets/Starr.svg';
import arrow from '../assets/arrow.svg';
import party2 from '../assets/party2.png';
import party1 from '../assets/party1.png';

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isSmallDesktop = windowWidth > 1024 && windowWidth <= 1366;

  const getResponsiveSize = (mobile, tablet, smallDesktop, largeDesktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    if (isSmallDesktop) return smallDesktop;
    return largeDesktop;
  };

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
        overflowX: 'hidden',
        padding: isMobile ? '40px 20px' : '60px 50px',
      }}
    >
      {/* Decorative Shapes */}
      <div style={{ 
        position: 'absolute', 
        width: getResponsiveSize('40px', '60px', '80px', '80px'), 
        height: getResponsiveSize('40px', '60px', '80px', '80px'), 
        bottom: getResponsiveSize('10px', '15px', '20px', '20px'), 
        left: getResponsiveSize('10px', '15px', '25px', '25px'), 
        zIndex: 1 
      }}>
        <img src={dottedShape} style={{ width: '100%', height: '100%' }} alt="Decorative shape" />
      </div>
      <div style={{ 
        position: 'absolute', 
        width: getResponsiveSize('40px', '60px', '80px', '80px'), 
        height: getResponsiveSize('40px', '60px', '80px', '80px'), 
        top: getResponsiveSize('10px', '15px', '20px', '20px'), 
        right: getResponsiveSize('10px', '15px', '25px', '25px'), 
        zIndex: 1 
      }}>
        <img src={dottedShape} style={{ width: '100%', height: '100%' }} alt="Decorative shape" />
      </div>

      {/* Main Content Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          gap: getResponsiveSize('20px', '30px', '40px', '60px'),
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Left Column - Text Content */}
        <div
          style={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            order: isMobile ? 2 : 1,
            padding: isMobile ? '20px 0' : '0',
      
          }}
        >
          <h5 style={{ 
            color: 'white', 
            fontSize: getResponsiveSize('14px', '16px', '16px', '16px'), 
            margin: '0 0 15px 0', 
            fontWeight: 500 
          }}>
            The World's Simplest Non-Verbal Messenger
          </h5>
          <h1 style={{ 
            fontSize: getResponsiveSize('1.8rem', '40px', '60px', '60px'), 
            lineHeight: 1.2, 
            fontWeight: '700', 
            color: 'white', 
            margin: '0 0 20px 0' 
          }}>
            TsssT: Your Personal Buzzer. Buzz. No Bug.
          </h1>
          <p style={{ 
            fontSize: getResponsiveSize('0.9rem', '20px', '26px', '26px'), 
            lineHeight: 1.6, 
            color: 'white', 
            opacity: 0.95, 
            margin: '0 0 30px 0', 
            maxWidth: '600px', 
            fontWeight:"400"
          }}>
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
              onClick={(e) => { 
                e.preventDefault(); 
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); 
              }}
              style={{
                padding: getResponsiveSize('12px 20px', '14px 22px', '16px 24px', '16px 24px'),
                height: getResponsiveSize('50px', '55px', '60px', '60px'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: getResponsiveSize('14px', '16px', '22px', '22px'),
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
              onClick={(e) => { 
                e.preventDefault(); 
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); 
              }}
              style={{
                padding: getResponsiveSize('12px 20px', '14px 22px', '16px 24px', '16px 24px'),
                height: getResponsiveSize('50px', '55px', '60px', '60px'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: getResponsiveSize('14px', '16px', '22px', '22px'),
                textDecoration: 'none',
                background: hoveredButton === 'watchVideos' ? '#fff' : 'transparent',
                color: hoveredButton === 'watchVideos' ? '#FF3131' : '#fff',
                border: '2px solid white',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHoveredButton('watchVideos')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Watch Videos <span style={{ 
                color: hoveredButton === 'watchVideos' ? '#FF3131' : '#fff', 
                transform: 'scale(1.5)', 
                marginLeft: '4px' 
              }}>▶</span>
            </a>
          </div>
        </div>

        {/* Center Column - Decorative Elements (Desktop only) */}
        {!isMobile && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: getResponsiveSize(null, "400px", "450px", "500px"),
            width: getResponsiveSize(null, "120px", "140px", "150px"),
            order: 2,
            zIndex: 3,
            position: "relative",
          }}>
            <div style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}>
              <img 
                src={star} 
                alt="Star decoration" 
                style={{
                  width: getResponsiveSize(null, "55px", "65px", "70px"),
                  height: getResponsiveSize(null, "55px", "65px", "70px"),
                }} 
              />
            </div>
            
            <div style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
              <img 
                src={Starr} 
                alt="Heart decoration" 
                style={{
                  width: getResponsiveSize(null, "40px", "45px", "50px"),
                  height: getResponsiveSize(null, "40px", "45px", "50px"),
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))"
                }} 
              />
            </div>
            
            <div style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}>
              <img 
                src={heart} 
                alt="Small star decoration" 
                style={{
                  width: getResponsiveSize(null, "30px", "35px", "40px"),
                  height: getResponsiveSize(null, "30px", "35px", "40px"),
                }} 
              />
            </div>
          </div>
        )}

        {/* Right Column - Image Stack */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            order: isMobile ? 1 : 3,
            position: 'relative',
            height: isMobile ? 'auto' : '100%',
            marginBottom: isMobile ? '20px' : '0',
          }}
        >
          <img
            src={arrow}
            alt="Arrow decoration"
            style={{
              width: getResponsiveSize('30px', '50px', '60px', '75px'),
              height: 'auto',
              transform: 'rotate(-5deg)',
              marginBottom: getResponsiveSize('10px', '15px', '20px', '25px'),
              zIndex: 3,
              position: 'absolute',
              top: getResponsiveSize('-35px', '-90px', '-100px', '-105px'),

            }}
          />
          
          <div style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: getResponsiveSize('220px', '350px', '380px', '400px'),
            aspectRatio: '1/1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img 
              src={bgimg} 
              alt="Background" 
              style={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                zIndex: 1,
              }} 
            />
            
            <img 
              src={party1} 
              alt="Party decoration" 
              style={{
                position: 'absolute',
                bottom: getResponsiveSize('-15px', '-20px', '-25px', '-30px'),
                left: getResponsiveSize('-15px', '-20px', '-25px', '-30px'),
                width: getResponsiveSize('30px', '40px', '50px', '50px'),
                zIndex: 2,
                opacity: 0.5,
              }} 
            />
            <img 
              src={party2} 
              alt="Party decoration" 
              style={{
                position: 'absolute',
                top: getResponsiveSize('40px', '50px', '50px', '50px'),
                right: getResponsiveSize('-15px', '-20px', '-25px', '-30px'),
                width: getResponsiveSize('30px', '40px', '50px', '50px'),
                zIndex: 2,
                opacity: 0.5,
              }} 
            />
            
            <img 
              src={rectangleImg} 
              alt="Main product" 
              style={{ 
                position: 'relative',
                width:"60%",
                height: 'auto',
                zIndex: 3,
              }} 
            />
          </div>
        </div>

        {/* Mobile Decorative Elements (row layout) */}
        {isMobile && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '20px', 
            order: 3, 
            padding: '15px 0',
            width: '100%',
            flexWrap: 'wrap',
          }}>
            <img src={star} alt="Star" style={{ width: '30px' }} />
            <img src={heart} alt="Heart" style={{ width: '35px' }} />
            <img src={Starr} alt="Small star" style={{ width: '25px' }} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
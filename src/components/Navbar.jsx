import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import LoginModal from './LoginModal';
 
const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
 
  // Detect iOS device on component mount
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);
 
  // Update window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
 
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
 
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);
 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (windowWidth <= 768) {
        setIsMobileMenuOpen(false);
      }
    }
  };
 
  useEffect(() => {
    if (!isHomePage) return; // Only track scroll on home page
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = {
        home: document.getElementById('home'),
        features: document.getElementById('features'),
        howItWorks: document.getElementById('how-it-works'),
        testimonials: document.getElementById('testimonials'),
      };
 
      const positions = Object.fromEntries(
        Object.entries(sections).map(([key, el]) => [key, el?.offsetTop || 0])
      );
 
      if (scrollPosition < positions.features - 100) {
        setActiveSection('home');
      } else if (scrollPosition < positions.howItWorks - 100) {
        setActiveSection('features');
      } else if (scrollPosition < positions.testimonials - 100) {
        setActiveSection('howItWorks');
      } else {
        setActiveSection('testimonials');
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);
 
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (windowWidth <= 768) {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, windowWidth]);
 
  // --- STYLES ---
  const baseStyles = {
    navbar: { width: '100%', padding: windowWidth < 360 ? '10px 0' : '15px 0', backgroundColor: '#FF3131', color: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', },
    container: { maxWidth: '100%', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', },
    logoContainer: { flexShrink: 0 },
    logoImage: { height: '40px', width: 'auto' },
    nav: { display: 'flex', alignItems: 'center', gap: '20px', height: '60px' },
    navLink: { fontSize: '20px', fontWeight: '400', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.3s ease', padding: '5px 0', color:"#FFF" },
    baseButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45px', padding: '10px 20px', fontSize: '22px', fontWeight: '600', borderRadius: '6px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease', border: '2px solid white', },
    mobileBaseButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45px', marginTop: '15px', padding: '10px 24px', width: '80%', fontSize: '20px', fontWeight: '600', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.3s ease', },
    hamburger: { display: 'none', flexDirection: 'column', cursor: 'pointer', gap: '5px', zIndex: 110, padding: '8px', },
    hamburgerLine: { width: windowWidth < 360 ? '22px' : '25px', height: '3px', backgroundColor: '#fff', transition: 'all 0.3s ease', },
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 110, },
    mobileMenuClose: { position: 'absolute', top: windowWidth < 360 ? '15px' : '20px', right: windowWidth < 360 ? '15px' : '20px', fontSize: windowWidth < 360 ? '24px' : '28px', fontWeight: 'bold', color: '#FF3131', cursor: 'pointer', zIndex: 110, padding: '5px 10px', },
    mobileNavContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '60px 0 30px', color:"#FFF" },
    mobileNavLink: { width: '80%', textAlign: 'center', padding: '12px 0', margin: '5px 0', fontSize: '18px', fontWeight: '500', borderRadius: '6px', transition: 'all 0.3s ease', color: '#FFFFF', },
  };
 
  const getResponsiveStyles = () => {
    if (windowWidth <= 768) { return { container: { padding: windowWidth < 360 ? '0 8px' : '0 15px' }, nav: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', flexDirection: 'column', backgroundColor: '#FFFFFF', justifyContent: 'flex-start', alignItems: 'center', transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease', zIndex: 110, overflowY: 'auto', }, hamburger: { display: 'flex' }, logoContainer: { zIndex: 110 }, buttonContainer: { display: 'none' }, }; }
    if (windowWidth > 768 && windowWidth <= 1024) { return { container: { padding: '0 20px' }, nav: { gap: '15px', flexGrow: 1, justifyContent: 'center' }, navLink: { fontSize: '15px' }, button: { padding: '8px 16px', fontSize: '20px' }, }; }
    return { nav: { flexGrow: 1, justifyContent: 'center' }, button: {}, };
  };
 
  const responsiveStyles = getResponsiveStyles();
 
  const getNavLinkStyle = (linkName) => {
    const isHovered = hoveredLink === linkName; 
    const isActive = isHomePage ? activeSection === linkName : false;
    const isCurrentRoute = !isHomePage && linkName === 'privacy' && location.pathname === '/privacy';
    
    const linkStyle = { 
      ...baseStyles.navLink, 
      color: isHovered || isActive || isCurrentRoute ? '#fff' : 'rgba(255, 255, 255, 0.6)', 
      borderBottom: isHovered || isActive || isCurrentRoute ? '2px solid white' : '2px solid transparent', 
    };
    
    if (windowWidth <= 768) { 
      return { 
        ...linkStyle, 
        width: '80%', 
        textAlign: 'center', 
        padding: '12px 0', 
        margin: '5px 0', 
        fontSize: '18px', 
        borderBottom: 'none', 
        backgroundColor: isHovered || isActive || isCurrentRoute ? 'white' : '#FF3131', 
        color: isHovered || isActive || isCurrentRoute ? '#FF3131' : '#FFFFFF', 
        borderRadius: '6px', 
      }; 
    }
    return linkStyle;
  };
  
  const getDesktopButtonStyles = (isHovered) => ({ ...baseStyles.baseButton, ...responsiveStyles.button, background: isHovered ? 'white' : 'transparent', color: isHovered ? '#FF3131' : 'white', border: isHovered ? '2px solid transparent' : '2px solid white', transform: isHovered ? 'translateY(-2px)' : 'translateY(0)', boxShadow: isHovered ? '0 6px 15px rgba(255, 49, 49, 0.25)' : '0 4px 10px rgba(255, 49, 49, 0.15)', });
  const getMobileButtonStyles = (isHovered, isLoginButton = false) => ({ ...baseStyles.mobileBaseButton, background: isHovered ? "white" : "#FF3131", color: isHovered ? "#FF3131" : "#fff", border: isLoginButton && !isHovered ? "2px solid white" : "2px solid transparent", transform: isHovered ? 'translateY(-2px)' : 'translateY(0)', boxShadow: isHovered ? '0 6px 15px rgba(255, 49, 49, 0.25)' : '0 4px 10px rgba(255, 49, 49, 0.15)', });

  // Define the app store links as constants
  const IOS_APP_LINK = "https://apps.apple.com/us/app/tssst/id6745514901";
  const ANDROID_APP_LINK = "https://play.google.com/store/apps/details?id=com.pazl.buzzApp";

  // Create a single variable that holds the correct link based on the detected OS
  const downloadLink = isIOS ? IOS_APP_LINK : ANDROID_APP_LINK;

  const handleNavigation = (linkName, e) => {
    if (linkName === 'privacy') {
      // Privacy is a route, let Link handle it
      if (windowWidth <= 768) {
        setIsMobileMenuOpen(false);
      }
      return;
    }
    
    if (isHomePage) {
      // On home page, scroll to section
      e.preventDefault();
      scrollToSection(linkName === 'howItWorks' ? 'how-it-works' : linkName);
    } else {
      // On other pages, navigate to home first, then scroll
      // This will be handled by the Link component
      if (windowWidth <= 768) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <header style={baseStyles.navbar}>
        <div style={{...baseStyles.container, ...responsiveStyles.container}}>
          <div style={{...baseStyles.logoContainer, ...responsiveStyles.logoContainer}}>
            <Link to="/">
              <img src={logoImg} alt="Logo" style={baseStyles.logoImage} />
            </Link>
          </div>
 
          {!isMobileMenuOpen && (
            <div style={{...baseStyles.hamburger, ...responsiveStyles.hamburger}} onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <div style={baseStyles.hamburgerLine} /><div style={baseStyles.hamburgerLine} /><div style={baseStyles.hamburgerLine} />
            </div>
          )}
 
          {isMobileMenuOpen && windowWidth <= 768 && (<div style={baseStyles.overlay} onClick={() => setIsMobileMenuOpen(false)} />)}
 
          <nav style={{...baseStyles.nav, ...responsiveStyles.nav}}>
            {windowWidth <= 768 && (<div style={baseStyles.mobileMenuClose} onClick={() => setIsMobileMenuOpen(false)}>×</div>)}
           
            <div style={windowWidth <= 768 ? baseStyles.mobileNavContainer : { display: 'flex', alignItems: 'center', gap: '20px' }}>
              {['home', 'features', 'howItWorks', 'testimonials', 'privacy'].map((section) => {
                const displayName = section === 'howItWorks' ? 'How It Works' : 
                                  section.charAt(0).toUpperCase() + section.slice(1);
                const linkTo = section === 'privacy' ? '/privacy' : 
                              isHomePage ? `#${section === 'howItWorks' ? 'how-it-works' : section}` : 
                              `/#${section === 'howItWorks' ? 'how-it-works' : section}`;
                
                return (
                  <Link
                    key={section}
                    to={linkTo}
                    onClick={(e) => handleNavigation(section, e)}
                    style={getNavLinkStyle(section)}
                    onMouseEnter={() => setHoveredLink(section)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {displayName}
                  </Link>
                );
              })}
             
              {windowWidth <= 768 && (
                <>
                  <a
                    href={downloadLink}
                    target="_blank" rel="noopener noreferrer"
                    style={getMobileButtonStyles(isDownloadHovered)}
                    onMouseEnter={() => setIsDownloadHovered(true)}
                    onMouseLeave={() => setIsDownloadHovered(false)}
                  >
                    Download App
                  </a>
                 
                  <button onClick={() => { setIsMobileMenuOpen(false); setIsLoginModalOpen(true); }} style={getMobileButtonStyles(isLoginHovered, true)} onMouseEnter={() => setIsLoginHovered(true)} onMouseLeave={() => setIsLoginHovered(false)}>
                    Admin Login
                  </button>
                </>
              )}
            </div>
          </nav>
 
          {windowWidth > 768 && (
            <div style={{ display: 'flex', alignItems: 'center', ...responsiveStyles.buttonContainer }}>
              <a
                href={downloadLink}
                target="_blank" rel="noopener noreferrer"
                style={{ ...getDesktopButtonStyles(isDownloadHovered), marginRight: '10px' }}
                onMouseEnter={() => setIsDownloadHovered(true)}
                onMouseLeave={() => setIsDownloadHovered(false)}
              >
                Download App
              </a>
              <button onClick={() => setIsLoginModalOpen(true)} style={getDesktopButtonStyles(isLoginHovered)} onMouseEnter={() => setIsLoginHovered(true)} onMouseLeave={() => setIsLoginHovered(false)}>
                Admin Login
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
 
export default Navbar;
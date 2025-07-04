import React, { useState, useEffect } from "react";
import tessstLogo from "../assets/tessst.png";
import logoImg from '../assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { LuRadius } from "react-icons/lu";
import { color } from "chart.js/helpers";
 
function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth < 480;
 
  const styles = {
    container: {
      padding: isSmallMobile ? "30px 15px" : "40px 20px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
     
      flexWrap: "wrap",
    },
    left: {
      flex: "1",
      minWidth: isSmallMobile ? "200px" : "250px",
      marginLeft: isMobile ? "0" : windowWidth < 1024 ? "50px" : "100px",
      marginBottom: isMobile ? "30px" : "0",
    },
    logo: {
      width: isSmallMobile ? "80px" : "120.82px",
      height:isSmallMobile ? "60px" : "68.89px",
      marginBottom: isSmallMobile ? "15px" : "20px",
     
    },
    description: {
      fontSize: isSmallMobile ? "14px" : "18px",
      color: "#ffff",
      fontWeight: "400",
      marginBottom: isSmallMobile ? "15px" : "20px",
      maxWidth: "350px",
      lineHeight: "1.5",
    },
    inputWrapper: {
      display: "flex",
      borderRadius: "30px",
      width: "fit-content",
      flexDirection: isMobile ? "row" : "row",
      backgroundColor:"white"
     
    },
    input: {
      color: "#ffff",
      border: "none",
      padding: isSmallMobile ? "8px 12px" : "10px 15px",
      outline: "none",
      width: isMobile ? (isSmallMobile ? "120px" : "150px") : "300px",
      fontSize: isSmallMobile ? "14px" : "18px",
      borderRadius: "30px 0 0 30px",
      fontWeight: "400",
     
    },
    btnSecondary: {
      padding: isSmallMobile ? "5px 8px" : "5px",
      margin: isSmallMobile ? "4px 6px" : " 5px 10px 5px 0px",
      border: "#ffff",
      color: "black",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "500",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontSize: isSmallMobile ? "14px" : "14px",
      minHeight: "41px", // Ensure minimum touch target height
      width:"102px",
      justifyContent: "center",
     
 
     
    },
    socialIcons: {
      display: "flex",
      color: "#ffff",
      gap: isSmallMobile ? "15px" : "20px",
      marginTop: "20px",
      flexWrap: "wrap",
    },
    icon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: isSmallMobile ? "26px" : "28px",
      height: isSmallMobile ? "26px" : "28px",
      borderRadius: "50%",
      padding: "5px",
      border: "1px solid #ffff",
      transition: "all 0.3s ease",
    },
    iconLink: {
      color: "#E3E3E3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      transition: "all 0.3s ease",
    },
    linksSection: {
      display: "flex",
      gap: isSmallMobile ? "20px" : isMobile ? "40px" : windowWidth < 1024 ? "50px" : "80px",
      flexWrap: "wrap",
      marginRight: isMobile ? "0" : windowWidth < 1024 ? "50px" : "100px",
      justifyContent: isMobile ? "flex-start" : "flex-end",
    },
    column: {
      minWidth: isSmallMobile ? "120px" : "150px",
    },
    heading: {
      fontSize: isSmallMobile ? "15px" : "16px",
      fontWeight: "500",
      color: "#ffff",
      marginBottom: isSmallMobile ? "8px" : "10px",
    },
    link: {
      color: "#ffff",
      textDecoration: "none",
      display: "block",
      marginBottom: isSmallMobile ? "6px" : "8px",
      fontSize: isSmallMobile ? "14px" : "16px",
      fontWeight: "400",
      padding: isSmallMobile ? "2px 0" : "0", // Larger touch target for small screens
    },
    copyright: {
      textAlign: "center",
      fontWeight: "400",
      fontSize: "16px",
      color: "#ffff",
      marginTop: "30px",
      paddingBottom: "20px",
    },
  };
 
  return (
    <div style={{backgroundColor:"#FF3131"}}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <img style={styles.logo} src={logoImg} alt="Logo" />
          <p style={styles.description}>
            Join our newsletter for secure calling tips, the latest updates on
            encryption technology, and smart location-sharing features.
          </p>
          <div style={styles.inputWrapper}>
            <input type="email" placeholder="Enter your email" style={styles.input} />
            <div >
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  ...styles.btnSecondary,
                   background: hoveredButton === "contact" ? "#ffff" : "#FF3131",
                  color: hoveredButton === 'contact' ? '#FF3131' : '#ffff',
                  border: hoveredButton === 'contact' ? '2px solid transparent' : '2px solid #F73531',
                }}
                onMouseEnter={() => setHoveredButton('contact')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Contact
              </a>
            </div>
          </div>
          <div style={styles.socialIcons}>
            <span
              style={{
                ...styles.icon,
                backgroundColor: hoveredIcon === 'twitter' ? 'white' : 'transparent',
                transform: hoveredIcon === 'twitter' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredIcon === 'twitter' ? '0 6px 15px rgba(255, 49, 49, 0.25)' : 'none',
              }}
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  color: hoveredIcon === 'twitter' ? '#FF3131' : '#ffff',
                }}
                onMouseEnter={() => setHoveredIcon('twitter')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <FaXTwitter />
              </a>
            </span>
            <span
              style={{
                ...styles.icon,
                backgroundColor: hoveredIcon === 'linkedin' ? 'white' : 'transparent',
                transform: hoveredIcon === 'linkedin' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredIcon === 'linkedin' ? '0 6px 15px rgba(255, 49, 49, 0.25)' : 'none',
              }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  color: hoveredIcon === 'linkedin' ? '#FF3131' : '#ffff',
                }}
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <SlSocialLinkedin />
              </a>
            </span>
            <span
              style={{
                ...styles.icon,
                backgroundColor: hoveredIcon === 'instagram' ? 'white' : 'transparent',
                transform: hoveredIcon === 'instagram' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredIcon === 'instagram' ? '0 6px 15px rgba(255, 49, 49, 0.25)' : 'none',
              }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  color: hoveredIcon === 'instagram' ? '#FF3131' : '#ffff',
                }}
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <FaInstagram style={{fontSize: isSmallMobile ? "16px" : "20px"}} />
              </a>
            </span>
            <span
              style={{
                ...styles.icon,
                backgroundColor: hoveredIcon === 'youtube' ? 'white' : 'transparent',
                transform: hoveredIcon === 'youtube' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredIcon === 'youtube' ? '0 6px 15px rgba(255, 49, 49, 0.25)' : 'none',
              }}
            >
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  color: hoveredIcon === 'youtube' ? '#FF3131' : '#ffff',
                }}
                onMouseEnter={() => setHoveredIcon('youtube')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <SlSocialYoutube style={{fontSize: isSmallMobile ? "16px" : "20px"}} />
              </a>
            </span>
          </div>
 
 
        </div>
 
        {/* Right Section */}
        <div style={styles.linksSection}>
              <div style={styles.column}>
              <div style={styles.heading}>Quick Links</div>
              <a href="#home" id="home" style={styles.link}>Home</a>
              <a href="#features" id="features" style={styles.link}>Features</a>
              <a href="#how-it-works" id="how-it-works" style={styles.link}>How it Works</a>
              <a href="#testimonials" id="testimonials" style={styles.link}>Testimonials</a>
            </div>
 
          <div style={styles.column}>
            <div style={styles.heading}>Customer Support</div>
            <a href="#" style={styles.link}>Contact Us</a>
            <a href="#" style={styles.link}>Help Center</a>
            <a href="#" style={styles.link}>Terms of Service</a>
            <a href="#" style={styles.link}>Cookies Policy</a>
          </div>
        </div>
      </div>
      <div style={styles.copyright}>
        © 2025 TSSST. All Rights Reserved.
      </div>
    </div>
  );
}
 
export default Footer;
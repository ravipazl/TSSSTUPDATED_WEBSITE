import React, { useState, useEffect } from 'react';
import vector from '../assets/fluent_chat-off-24-regular.svg';
import encryption from '../assets/lucide_signal.svg';
import shield from '../assets/msg.svg';
import location from '../assets/proicons_bell-off.svg';
 
const Features = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isReadMoreHovered, setIsReadMoreHovered] = useState(false);
 
  // Update window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  // Responsive styles based on window width
  const getResponsiveStyles = () => {
    // Extra small mobile (under 375px)
    if (windowWidth < 375) {
      return {
        container: {
          ...styles.container,
          padding: '40px 10px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        },
        textSection: {
          ...styles.textSection,
          maxWidth: '100%',
          textAlign: 'center',
          padding: '0 5px',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '14px',
          marginBottom: '10px',
          marginTop: '0',
        },
        heading: {
          ...styles.heading,
          fontSize: '22px',
          marginBottom: '15px',
          lineHeight: '1.2',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '10px 18px',
          fontSize: '14px',
          width: '100%',
          maxWidth: '180px',
          height: '45px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'repeat(4, auto)',
          width: '100%',
          gap: '15px',
        },
        card: {
          ...styles.card,
          padding: '20px 15px',
          margin: '0',
          height: 'auto',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '16px',
          marginBottom: '10px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '14px',
          lineHeight: '1.4',
        },
        icon: {
          ...styles.icon,
          width: '60px',
          height: '60px',
          marginBottom: '15px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '24px',
          height: '24px',
        },
      };
    }
    
    // Small mobile (375px - 480px)
    if (windowWidth >= 375 && windowWidth < 480) {
      return {
        container: {
          ...styles.container,
          padding: '50px 15px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
        },
        textSection: {
          ...styles.textSection,
          maxWidth: '100%',
          textAlign: 'center',
          padding: '0 10px',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '14px',
          marginBottom: '12px',
          marginTop: '0',
        },
        heading: {
          ...styles.heading,
          fontSize: '24px',
          marginBottom: '18px',
          lineHeight: '1.2',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '12px 20px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '200px',
          height: '50px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'repeat(4, auto)',
          width: '100%',
          gap: '18px',
        },
        card: {
          ...styles.card,
          padding: '25px 20px',
          margin: '0',
          height: 'auto',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '18px',
          marginBottom: '12px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '15px',
          lineHeight: '1.5',
        },
        icon: {
          ...styles.icon,
          width: '70px',
          height: '70px',
          marginBottom: '18px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '28px',
          height: '28px',
        },
      };
    }
   
    // Large mobile (480px - 640px)
    if (windowWidth >= 480 && windowWidth < 640) {
      return {
        container: {
          ...styles.container,
          padding: '60px 20px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        },
        textSection: {
          ...styles.textSection,
          maxWidth: '100%',
          textAlign: 'center',
          padding: '0 15px',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '15px',
          marginBottom: '15px',
          marginTop: '10px',
        },
        heading: {
          ...styles.heading,
          fontSize: '28px',
          marginBottom: '20px',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '12px 24px',
          fontSize: '16px',
          width: '180px',
          height: '52px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, auto)',
          width: '100%',
          gap: '20px',
        },
        card: {
          ...styles.card,
          padding: '25px 18px',
          margin: '0',
          height: 'auto',
          minHeight: '280px',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '18px',
          marginBottom: '12px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '15px',
        },
        icon: {
          ...styles.icon,
          width: '75px',
          height: '75px',
          marginBottom: '18px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '30px',
          height: '30px',
        },
      };
    }
    
    // Small tablet (640px - 768px)
    if (windowWidth >= 640 && windowWidth < 768) {
      return {
        container: {
          ...styles.container,
          padding: '70px 25px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '35px',
        },
        textSection: {
          ...styles.textSection,
          maxWidth: '100%',
          textAlign: 'center',
          padding: '0 20px',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '16px',
          marginBottom: '15px',
          marginTop: '20px',
        },
        heading: {
          ...styles.heading,
          fontSize: '32px',
          marginBottom: '25px',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '12px 24px',
          fontSize: '18px',
          width: '175px',
          height: '54px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          gap: '22px',
          maxWidth: '600px',
        },
        card: {
          ...styles.card,
          padding: '30px 20px',
          margin: '0',
          height: 'auto',
          minHeight: '300px',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '19px',
          marginBottom: '15px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '16px',
        },
        icon: {
          ...styles.icon,
          width: '80px',
          height: '80px',
          marginBottom: '20px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '32px',
          height: '32px',
        },
      };
    }
   
    // Medium tablet (768px - 1024px)
    if (windowWidth >= 768 && windowWidth < 1024) {
      return {
        container: {
          ...styles.container,
          padding: '80px 30px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          flexDirection: 'row',
          gap: '40px',
          alignItems: 'flex-start',
        },
        textSection: {
          ...styles.textSection,
          flex: '1 1 45%',
          maxWidth: '450px',
          textAlign: 'left',
          padding: '0',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '16px',
          marginBottom: '15px',
          marginTop: '30px',
        },
        heading: {
          ...styles.heading,
          fontSize: '36px',
          marginBottom: '25px',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '12px 24px',
          fontSize: '18px',
          width: '175px',
          height: '54px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          flex: '1 1 50%',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '25px',
        },
        card: {
          ...styles.card,
          padding: '30px 20px',
          margin: '5px 0',
          height: 'calc(100% - 10px)',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '20px',
          marginBottom: '15px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '16px',
        },
        icon: {
          ...styles.icon,
          width: '85px',
          height: '85px',
          marginBottom: '20px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '32px',
          height: '32px',
        },
      };
    }
    
    // Large tablet/Small desktop (1024px - 1200px)
    if (windowWidth >= 1024 && windowWidth < 1200) {
      return {
        container: {
          ...styles.container,
          padding: '80px 40px',
        },
        featuresWrapper: {
          ...styles.featuresWrapper,
          gap: '50px',
        },
        textSection: {
          ...styles.textSection,
          flex: '1 1 42%',
          maxWidth: '480px',
        },
        subheading: {
          ...styles.subheading,
          fontSize: '16px',
          marginBottom: '15px',
          marginTop: '40px',
        },
        heading: {
          ...styles.heading,
          fontSize: '38px',
          marginBottom: '25px',
        },
        readMoreBtn: {
          ...styles.readMoreBtn,
          padding: '12px 24px',
          fontSize: '18px',
          width: '175px',
          height: '54px',
        },
        cardsGrid: {
          ...styles.cardsGrid,
          flex: '1 1 53%',
          gap: '25px',
        },
        card: {
          ...styles.card,
          padding: '30px 20px',
          margin: '5px 0',
          height: 'calc(100% - 10px)',
        },
        cardTitle: {
          ...styles.cardTitle,
          fontSize: '20px',
          marginBottom: '15px',
        },
        cardText: {
          ...styles.cardText,
          fontSize: '16px',
        },
        icon: {
          ...styles.icon,
          width: '85px',
          height: '85px',
          marginBottom: '20px',
        },
        svgIcon: {
          ...styles.svgIcon,
          width: '32px',
          height: '32px',
        },
      };
    }
   
    // Desktop (1200px and above)
    return {
      container: {
        ...styles.container,
        padding: '80px 20px',
      },
      featuresWrapper: {
        ...styles.featuresWrapper,
        gap: '60px',
      },
      textSection: {
        ...styles.textSection,
        flex: '1 1 40%',
        maxWidth: '500px',
      },
      subheading: {
        ...styles.subheading,
        fontSize: '16px',
        marginBottom: '15px',
        marginTop: '50px',
      },
      heading: {
        ...styles.heading,
        fontSize: '40px',
        marginBottom: '25px',
      },
      readMoreBtn: {
        ...styles.readMoreBtn,
        padding: '12px 24px',
        fontSize: '18px',
        width: '175px',
        height: '54px',
      },
      cardsGrid: {
        ...styles.cardsGrid,
        flex: '1 1 55%',
        gap: '25px',
      },
      card: {
        ...styles.card,
        padding: '30px 20px',
        margin: '5px 0',
        height: 'calc(100% - 10px)',
      },
      cardTitle: {
        ...styles.cardTitle,
        fontSize: '20px',
        marginBottom: '15px',
      },
      cardText: {
        ...styles.cardText,
        fontSize: '16px',
      },
      icon: {
        ...styles.icon,
        width: '84.69px',
        height: '84.69px',
        marginBottom: '20px',
      },
      svgIcon: {
        ...styles.svgIcon,
        width: '32px',
        height: '32px',
      },
    };
  };
 
  const responsiveStyles = getResponsiveStyles();
 
  return (
    <section id="features" style={{...styles.container, ...responsiveStyles.container}}>
      <div style={{...styles.featuresWrapper, ...responsiveStyles.featuresWrapper}}>
        <div id='overview' style={{...styles.textSection, ...responsiveStyles.textSection}}>
          <p style={{...styles.subheading, ...responsiveStyles.subheading}}>Why Choose TSSST</p>
          <h2 style={{...styles.heading, ...responsiveStyles.heading}}>
            Experience Connection Redefined
          </h2>
          <a
            href="#"
            style={{
              ...styles.readMoreBtn,
              ...responsiveStyles.readMoreBtn,
              background: isReadMoreHovered ? "#fff" : "#FF3131",
              color: isReadMoreHovered ? "#FF3131" : "#fff",
            }}
            onMouseEnter={() => setIsReadMoreHovered(true)}
            onMouseLeave={() => setIsReadMoreHovered(false)}
          >
            Read More →
          </a>
        </div>
 
        <div id='features' style={{...styles.cardsGrid, ...responsiveStyles.cardsGrid}}>
          <div
            style={{
              ...styles.card,
              ...responsiveStyles.card,
              ...(hoveredCard === 'otp' && styles.cardHovered)
            }}
            onMouseEnter={() => setHoveredCard('otp')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{
              ...styles.icon,
              ...responsiveStyles.icon,
              ...(hoveredCard === 'otp' && styles.iconHovered)
            }}>
              <img
                src={shield}
                alt="OTP Security"
                style={{
                  ...styles.svgIcon,
                  ...responsiveStyles.svgIcon,
                  ...(hoveredCard === 'otp' && styles.svgIconHovered)
                }}
              />
            </div>
            <h3 style={{...styles.cardTitle, ...responsiveStyles.cardTitle}}>Your Personal Buzzer</h3>
            <p style={{...styles.cardText, ...responsiveStyles.cardText}}>
              Send quiet nudges, gentle prompts, or crucial acknowledgements without a single word.
            </p>
          </div>
 
          <div
            style={{
              ...styles.card,
              ...responsiveStyles.card,
              ...(hoveredCard === 'location' && styles.cardHovered)
            }}
            onMouseEnter={() => setHoveredCard('location')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{
              ...styles.icon,
              ...responsiveStyles.icon,
              ...(hoveredCard === 'location' && styles.iconHovered)
            }}>
              <img
                src={location}
                alt="Smart Location"
                style={{
                  ...styles.svgIcon,
                  ...responsiveStyles.svgIcon,
                  ...(hoveredCard === 'location' && styles.svgIconHovered)
                }}
              />
            </div>
            <h3 style={{...styles.cardTitle, ...responsiveStyles.cardTitle}}>Embrace the Quiet Space</h3>
            <p style={{...styles.cardText, ...responsiveStyles.cardText}}>
              Reclaim your peace. TsssT respects your space and time, allowing you to connect on your terms.
            </p>
          </div>
 
          <div
            style={{
              ...styles.card,
              ...responsiveStyles.card,
              ...(hoveredCard === 'call' && styles.cardHovered)
            }}
            onMouseEnter={() => setHoveredCard('call')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{
              ...styles.icon,
              ...responsiveStyles.icon,
              ...(hoveredCard === 'call' && styles.iconHovered)
            }}>
              <img
                src={vector}
                alt="Call Management"
                style={{
                  ...styles.svgIcon,
                  ...responsiveStyles.svgIcon,
                  ...(hoveredCard === 'call' && styles.svgIconHovered)
                }}
              />
            </div>
            <h3 style={{...styles.cardTitle, ...responsiveStyles.cardTitle}}>Discreet by Design</h3>
            <p style={{...styles.cardText, ...responsiveStyles.cardText}}>
              Designed for mindful interaction. TsssT seamlessly integrates into your day, without disrupting your flow.
            </p>
          </div>
 
          <div
            style={{
              ...styles.card,
              ...responsiveStyles.card,
              ...(hoveredCard === 'encryption' && styles.cardHovered)
            }}
            onMouseEnter={() => setHoveredCard('encryption')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{
              ...styles.icon,
              ...responsiveStyles.icon,
              ...(hoveredCard === 'encryption' && styles.iconHovered)
            }}>
              <img
                src={encryption}
                alt="Encryption"
                style={{
                  ...styles.svgIcon,
                  ...responsiveStyles.svgIcon,
                  ...(hoveredCard === 'encryption' && styles.svgIconHovered)
                }}
              />
            </div>
            <h3 style={{...styles.cardTitle, ...responsiveStyles.cardTitle}}>Be Telepathic</h3>
            <p style={{...styles.cardText, ...responsiveStyles.cardText}}>
              Send a non-verbal reminder or a subtle "TsssT Signal" that's understood, not heard. It's like a whisper of connection, intuitive and immediate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 
const styles = {
  container: {
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  cardHovered: {
    background: '#FF3131',
    color: '#fff',
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(247, 53, 49, 0.25)',
  },
  iconHovered: {
    background: '#FFFFFF',
    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.4)',
  },
  svgIconHovered: {
    filter: 'invert(32%) sepia(93%) saturate(7408%) hue-rotate(356deg) brightness(97%) contrast(96%)',
    transform: 'scale(1.1)',
  },
  featuresWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '60px',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textSection: {
    flex: '1 1 40%',
    height: '80%',
    maxWidth: '500px',
    position: 'relative',
    boxSizing: 'border-box',
  },
  subheading: {
    color: '#F73531',
    fontWeight: 700,
    fontSize: '16px',
    marginBottom: '15px',
    marginTop: '50px',
    letterSpacing: '0.5px',
  },
  heading: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '25px',
    lineHeight: '1.3',
    height: '25%',
    color: '#333',
  },
  highlight: {
    color: '#F73531',
  },
  readMoreBtn: {
    background: 'linear-gradient(90deg, #F73531 0%, #FF6B00 98.5%)',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(247, 53, 49, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
    width: '175px',
    height: '54px',
    fontSize: '18px',
    boxSizing: 'border-box',
  },
  cardsGrid: {
    flex: '1 1 55%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '25px',
    boxSizing: 'border-box',
  },
  card: {
    background: '#F4F5F8',
    borderRadius: '12px',
    padding: '30px 20px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #f0f0f0',
    height: 'calc(100% - 10px)',
    margin: '5px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '84.69px',
    height: '84.69px',
    borderRadius: '50%',
    background: '#FF3131',
    boxShadow: '0 4px 10px rgba(247, 53, 49, 0.3)',
    margin: '0 auto 20px auto',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  svgIcon: {
    width: '32px',
    height: '32px',
    transition: 'all 0.3s ease',
    filter: 'brightness(0) invert(1)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '15px',
    textAlign: 'center',
    color: 'inherit',
  },
  cardText: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: 'inherit',
    flex: '1',
    textAlign: 'center',
    fontWeight: '400',
  },
};
 
export default Features;
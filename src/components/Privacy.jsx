import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    page: {
      backgroundColor: "#f9f9f9",
      padding: "40px 20px",
      color: "#2d2d2d",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "40px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    },
    header: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#FF3131",
      marginBottom: "30px",
      textAlign: "center",
    },
    section: {
      marginBottom: "40px",
      borderLeft: "4px solid #FF3131",
      paddingLeft: "20px",
    },
    heading: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#222",
    },
    subheading: {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "20px",
      marginBottom: "10px",
      color: "#FF3131",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "10px",
      color: "#4d4d4d",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "5px",
    },
    listItem: {
      marginBottom: "8px",
      fontSize: "15px",
    },
    styleTag: `
      @media (max-width: 600px) {
        .container {
          padding: 25px !important;
        }
        .header {
          font-size: 28px !important;
        }
        .heading {
          font-size: 20px !important;
        }
        .subheading {
          font-size: 16px !important;
        }
      }
    `,
  };

  return (
    <>
      <style>{styles.styleTag}</style>
      <div style={styles.page}>
        <div className="container" style={styles.container}>
          <h1 className="header" style={styles.header}>Privacy Policy</h1>

          <div style={styles.section}>
            <h2 className="heading" style={styles.heading}>Introduction</h2>
            <p style={styles.paragraph}>
              This Privacy Policy describes how our app collects, uses, and shares your personal information.
              We are committed to protecting your privacy and handling your data with transparency and care.
            </p>
          </div>

          <div style={styles.section}>
            <h2 className="heading" style={styles.heading}>Information We Collect</h2>

            <h3 className="subheading" style={styles.subheading}>Location Data</h3>
            <p style={styles.paragraph}>We collect location information when you use our app to:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Allow you to select your address from Google Maps instead of manually typing it</li>
              <li style={styles.listItem}>Improve location-based features and services within the app</li>
              <li style={styles.listItem}>Provide relevant location-based content</li>
            </ul>

            <h3 className="subheading" style={styles.subheading}>Contacts</h3>
            <p style={styles.paragraph}>We access your contacts list solely to:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Identify which of your contacts are already using our app</li>
              <li style={styles.listItem}>Enable you to easily connect with friends who use our app</li>
              <li style={styles.listItem}>Provide the option to invite contacts to join our app via WhatsApp, SMS, or other messaging platforms</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 className="heading" style={styles.heading}>Data Usage and Sharing</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>We do not sell or rent your personal information to third parties</li>
              <li style={styles.listItem}>Your personal data is used exclusively within our app for the purposes stated above</li>
              <li style={styles.listItem}>We implement appropriate security measures to protect your information</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 className="heading" style={styles.heading}>Permissions Required</h2>

            <h3 className="subheading" style={styles.subheading}>Location Permission</h3>
            <p style={styles.paragraph}>
              This allows us to access your device's location for address selection features.
            </p>

            <h3 className="subheading" style={styles.subheading}>Contacts Permission</h3>
            <p style={styles.paragraph}>
              This enables us to scan your contacts to identify existing users and facilitate invitations.
            </p>

            <h3 className="subheading" style={styles.subheading}>Notification Permission</h3>
            <p style={styles.paragraph}>
              This allows us to send you important updates, alerts, and relevant information.
            </p>

            <h3 className="subheading" style={styles.subheading}>Background Processing Permission</h3>
            <p style={styles.paragraph}>
              This enables our app to continue functioning properly when minimized or running in the background.
            </p>

            <h3 className="subheading" style={styles.subheading}>Full Screen Intent Permission</h3>
            <p style={styles.paragraph}>
              Allows high-priority notifications (like calls) to appear fullscreen for better visibility.
            </p>
            {/* <h3 style={styles.subheading}>Full Screen Intent Permission</h3>
            <p style={styles.paragraph}>
            This permission allows our app to display urgent or time-sensitive notifications in full screen, such as incoming call screens or alarm dialogs, even when your device is locked or another app is in use. This helps ensure critical information is delivered without delay.
            </p> */}
            </div>

          <div style={styles.section}>
            <h2 className="heading" style={styles.heading}>Contact Us</h2>
            <p style={styles.paragraph}>
              If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
              <a href="mailto:dev@tssst.com" style={{ color: "#FF3131", textDecoration: "underline" }}>
                dev@tssst.com
              </a>.
              <p style={{ fontSize: "14px", color: "#888" }}>Last Updated: July 07, 2025</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

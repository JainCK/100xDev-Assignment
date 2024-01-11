import React from 'react'

export const Card = (props) => {
  return (
    <div style={styles.card}>
        <h2 style={styles.name}>{props.name}</h2>
        <p style={styles.description}>{props.description}</p>
        <h3 style={styles.interestsHeader}>Interests</h3>
        <ol style={styles.interestsList}>
          {props.interests.map((interest) => (
            <li key={interest} style={styles.interestItem}>
              {interest}
            </li>
          ))}
        </ol>
        <div style={styles.socialLinks}>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
            LinkedIn
          </a>
          <br />
          <a href={props.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
          {props.otherSocialMedia && (
            <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {props.otherSocialMedia.label}
            </a>
          )}
        </div>
      </div>
    );
}

const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '40px',
      margin: '20px',
      maxWidth: '1000px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#cac4ce'
    },
    name: {
      fontSize: '30px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', 
      padding: '10px 15px',
      borderRadius: '5px', 
      backgroundColor: '#007BFF', 
      display: 'inline-block', 
      margin: '10px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '15px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'number',
      padding: 0,
      marginBottom: '10px',
      display: 'flex',
      justifycontent: 'space-between',
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
      marginLeft :'20px'
    },
  };
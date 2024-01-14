import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [render, forceRender] = useState(0);
    const countRef = useRef(0)

    const handleReRender = () => {
        // Update state to force re-render

        countRef.current +=1;

        forceRender(Math.random());
    };

    return (
        <div style={styles.conatiner}>
            <p style={styles.para}>This component has rendered {countRef.current} times.</p>
            <button onClick={handleReRender} style={styles.Btn}>Force Re-render</button>
        </div>
    );
};

const styles = {
    conatiner: {
        border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    }, 
    para : {
        fontSize:'20px'
    },
    Btn : {
        marginLeft: '10px',
        height: '30px',
        fontSize: '15px',
        borderRadius: '5px'
    }
 }
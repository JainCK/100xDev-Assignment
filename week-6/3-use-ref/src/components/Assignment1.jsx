import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        inputRef.current.focus();
    };

    return (
        <div style={styles.conatiner}>
            <input type="text" placeholder="Enter text here" ref={inputRef} style={styles.input}/>
            <button onClick={handleButtonClick} style={styles.Btn}>Focus Input</button>
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
    Btn : {
        marginLeft: '10px',
        height: '30px',
        fontSize: '15px',
        borderRadius: '5px'
    },
    input: {
        height: '30px',
        borderRadius: '5px',
        fontSize:'18px'
    }
 }
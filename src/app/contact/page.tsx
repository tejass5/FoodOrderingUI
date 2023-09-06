"use client"
import React, { useState } from 'react';

const ContactPage= () => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        container: {
            color: 'red'
        },
        link: {
            color: isHovered ? 'darkred' : 'red',
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        button: {
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
        }
    };

    return (
        <div style={styles.container}>
            <p>If you have any suggestion or queries regarding Orders, Status, Transaction and Products please reach out to us at: <br/>
            Contact Options:-</p>
            
            
            <p>Call Us: +123-456-7890</p>
            <button 
                style={styles.button} 
                onClick={() => window.location.href = 'sharmatejas35@gmail.com'}
            >
                Write to us
            </button>
        </div>
    );
}

export default ContactPage;

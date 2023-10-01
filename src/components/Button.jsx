import React from 'react';
import './Button.css';

const STYLES = ['booking-btn', 'order-btn'];

const Button = ({ children, type, onClick, buttonStyle }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <button
            className={`btn ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
};

export default Button
import './Button.css';

import React from 'react'

const Button = ({ trigger, setTrigger}) => {
    return (
        <button className="btn" 
            onClick={() => {
                setTrigger(!trigger);
            }}>
            Add
        </button>
    )
}

export default Button;

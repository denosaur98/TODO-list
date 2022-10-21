import React from 'react';
import '../button/index.css';
const Button = ({ onClick, customClass }) => {
    return(
        <button
            className={`btn ${customClass ? customClass : ''}`}
            onClick={ onClick }
        />
    );
}
export default Button;
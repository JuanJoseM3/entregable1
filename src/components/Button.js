import React from 'react';

const Button = ({changeQuote, color}) => {
    return (
        <div className='button-container'>
            <button className='button' onClick={changeQuote} style={{color: color}}><i className="fa-solid fa-circle-chevron-right"></i></button>
        </div>
    );
};

export default Button;
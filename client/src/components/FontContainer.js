import React from 'react';
import './FontContainer.css';

const FontContainer = ({children, image}) =>(
    <div className="font-container">
    <img src={image || 'http://placehold.it/200'} alt="font-face"/>
        {children}
    </div>
)

export default FontContainer;
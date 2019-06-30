import React from 'react';


const Faces = (props) =>(
    <div className="fonts">
        <div><p className="face" style={{fontSize:props.size}}>{props.face}</p></div>
        <div className="spaced-text">
            <p>size:{props.size}px</p>
            <p className="price">price: ${props.price/100}</p>
        </div>
        <div>{props.date}</div>
    </div>
)

export default Faces;
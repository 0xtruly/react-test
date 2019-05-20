import React from 'react';
import styled from 'styled-components'

const FontContainerStyle = styled.div`
        height: 200px;
        background: #009688;
        color: #fff3f3;
        border-radius: 5px;
        border: 1px solid;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        margin: 0 20px;
        width: 100%;
    }
    .btn-round{
        width: 80px;
        border-radius: 5px;
        background: #174e17;;
        color: #f2f2f2;
        border: none;
        outline: none;
        margin-left: 1rem;
        cursor: pointer;
    }
    .flex-container{
        display: flex;
        justify-content: space-evenly;
    }
`

const FontContainer = ({children}) =>(
    <FontContainerStyle className="font-container">
    <div>
        {children}
    </div>
    </FontContainerStyle>
)

export default FontContainer;
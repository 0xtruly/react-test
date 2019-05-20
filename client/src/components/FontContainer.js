import React from 'react';
import styled from 'styled-components'

const FontContainerStyle = styled.div`
        height: 200px;
        background: #1f2120;
        color: #fff3f3;
        border-radius: 5px;
        border: 1px solid;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        margin: 0 20px;
        width: 300px;
        div{
            display: grid;
            grid-template-rows: 35% 25% 40%;
        }
    
    .btn-round{
        width: 80px;
        height: 25px;
        border-radius: 5px;
        background: #174e17;;
        color: #f2f2f2;
        border: none;
        outline: none;
        margin-left: 1rem;
        cursor: pointer;
    }
    .grid-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 50px;
    }
    .btn{
        display: flex;
        margin: 10px 0;
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
import React from 'react';
import LogoSrc from '../assets/images/logo.jpg'
import styled from "styled-components";
export const Logo = () => {
    return (
        <a href='#'>
            <LogoImg src={LogoSrc} alt='Логотип'/>
        </a>
    );
};

const LogoImg = styled.img `
  width: 50px;
  height: 50px;
    
`
import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>} ) => {
    return (
        <StyledNav>
            <ul>
                {props.menuItems.map((item, index) =>{
                    return <li key={index}> <a href='#'>{item}</a> </li>
                    })
                }
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav `
  flex-grow: 1;
  ul{
    display: flex;
    justify-content: space-between;    
  }
  a{
    color: #BDEBEA;
  }
`
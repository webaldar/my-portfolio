import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/Menu";
import {Logo} from "../../components/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";

const items = ['Home', 'Project'];
export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={'space-between'} gap={'80px'}>
                <Logo/>
                <Menu menuItems={items}/>
                <Button>Contact</Button>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: #041f31;
  
`
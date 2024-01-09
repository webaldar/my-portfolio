import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import ImgSrc from '../../assets/images/hero_image.png'
export const Hero = () => {
    return (
        <StyledHero>
            <FlexWrapper>
                <div>
                    <h1>WEB DEVELOPER</h1>
                    <h2>John Doe</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                    <HeroImg src={ImgSrc}></HeroImg>
                </div>
            </FlexWrapper>

        </StyledHero>
    );
};

const StyledHero = styled.div `
  
`
const HeroImg = styled.img `

`
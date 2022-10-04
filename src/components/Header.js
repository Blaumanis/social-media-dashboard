import React from 'react'
import styled from "styled-components";

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 567px) {
        flex-direction: column;
        gap: 2rem;
  }
`
// ============= TITLE CONTAINER ===========
const TitleContainer = styled.div`
    
`

const Title = styled.h1`
    color: ${({theme})=>theme.text};
    text-transform: capitalize;
    font-size: 1.75rem;
    padding-bottom: 5px;
    @media (max-width: 567px) {
        text-align: center;
  }
`

const Followers = styled.p`
    color: ${({theme})=>theme.darkText};
    text-transform: capitalize;
    @media (max-width: 567px) {
        text-align: center;
  }
`
// ============= TOGGLE CONTAINER ===========
const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ToggleText = styled.label`
    color: ${({theme})=>theme.darkText};
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--trans);
    &:hover{
        color: ${({theme})=>theme.text};
    }
`

const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 58px;
    height: 29px;
`

const ToggleInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    &:checked+span{
        background: ${({theme})=>theme.toggle};
        transition: var(--trans);
    }
    &:hover:checked+span {
        background: ${({theme})=>theme.toggleHover};
    }
    &:checked+span::before{
        transform: translateX(28px);
    }
`

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme})=>theme.toggle};
    transition: var(--trans);
    cursor: pointer;
    border-radius: 36px;
    &:hover{
        background: ${({theme})=>theme.toggleHover};
    }
    &::before {
        position: absolute;
        content: "";
        left: 2px;
        bottom: 2px;
        height: 25px;
        width: 25px;
        background-color: ${({theme})=>theme.bg};
        -webkit-transition: .4s;
        transition: .4s;
    }
`

const Header = ({darkMode,setDarkMode}) => {
  return (
    <div>
      <Container>
        <TitleContainer>
            <Title>social media dashboard</Title>
            <Followers>total followers: 23,004</Followers>
        </TitleContainer>
        <ToggleContainer>
            <ToggleText htmlFor='mode'>{darkMode ? 'dark mode' : 'light mode'}</ToggleText>
            <ToggleLabel>
                <ToggleInput onClick={()=> setDarkMode(!darkMode)} type="checkbox" id='mode'/>
                <Slider className='round'></Slider>
            </ToggleLabel>
        </ToggleContainer>
      </Container>
    </div>
  )
}

export default Header

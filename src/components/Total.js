import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 999px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background-color: ${({theme})=>theme.cardBg};
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: var(--trans);
    &:hover {
        background-color: ${({theme})=>theme.hover};
        animation: shake 0.5s linear;
    }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
  }
  @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`

const Top = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`

const SocialIcon = styled.img``

const UserName = styled.p`
    color: ${({theme})=>theme.darkText};
    font-size: var(--small);
`

const Middle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const FollowerNumber = styled.h3`
    font-size: var(--largeXl);
    color: ${({theme})=>theme.text};
    letter-spacing: 3px;
`

const FollowerText = styled.p`
    text-transform: uppercase;
    color: ${({theme})=>theme.darkText};
    letter-spacing: 3px;
`

const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

const ArrowIcon = styled.img``

const UpdateText = styled.p`
    font-size: var(--small);
    color: var(--limeGreen);
`

const Total = () => {
  return (
    <div>
      <Container>
        {/* facebook card */}
        <Card className='facebook'>
          <Top>
            <SocialIcon src='../images/icon-facebook.svg' />
            <UserName>@nathanf</UserName>
          </Top>
          <Middle>
            <FollowerNumber>1987</FollowerNumber>
            <FollowerText>followers</FollowerText>
          </Middle>
          <Bottom>
            <ArrowIcon src='../images/icon-up.svg' />
            <UpdateText>12 today</UpdateText>
          </Bottom>
        </Card>
        {/* twitter card */}
        <Card className='twitter'>
          <Top>
            <SocialIcon src='../images/icon-twitter.svg' />
            <UserName>@nathanf</UserName>
          </Top>
          <Middle>
            <FollowerNumber>1044</FollowerNumber>
            <FollowerText>followers</FollowerText>
          </Middle>
          <Bottom>
            <ArrowIcon src='../images/icon-up.svg' />
            <UpdateText>99 today</UpdateText>
          </Bottom>
        </Card>
        {/* instagram card */}
        <Card className='instagram'>
          <Top>
            <SocialIcon src='../images/icon-instagram.svg' />
            <UserName>@nathanf</UserName>
          </Top>
          <Middle>
            <FollowerNumber>11k</FollowerNumber>
            <FollowerText>followers</FollowerText>
          </Middle>
          <Bottom>
            <ArrowIcon src='../images/icon-up.svg' />
            <UpdateText>1099 today</UpdateText>
          </Bottom>
        </Card>
        {/* youtube card */}
        <Card className='youtube'>
          <Top>
            <SocialIcon src='../images/icon-youtube.svg' />
            <UserName>@nathanf</UserName>
          </Top>
          <Middle>
            <FollowerNumber>8239</FollowerNumber>
            <FollowerText>followers</FollowerText>
          </Middle>
          <Bottom>
            <ArrowIcon src='../images/icon-down.svg' />
            <UpdateText className='down'>144 today</UpdateText>
          </Bottom>
        </Card>
      </Container>
    </div>
  )
}

export default Total

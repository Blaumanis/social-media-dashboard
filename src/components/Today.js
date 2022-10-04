import React from 'react'
import styled from "styled-components";

const Container = styled.section`
    `

const Title = styled.h2`
    color: ${({theme})=>theme.text};
    text-transform: capitalize;
    margin-bottom: 30px;
    margin-top: 10px;
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-content: center;
@media (max-width: 999px) {
    grid-template-columns: repeat(3,1fr);
  }
 @media (max-width: 767px) {
    grid-template-columns: repeat(2,1fr);
  }
@media (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
    background-color: ${({theme})=>theme.cardBg};
    border-radius: var(--radius);
    padding: 15px;
    cursor: pointer;
    transition: var(--trans);
    &:hover {
        background-color: ${({theme})=>theme.hover};
        animation: shake 0.5s linear;
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
    align-items: center;
    justify-content: space-between;
`

const Text = styled.p`
    text-transform: capitalize;
    color: ${({theme})=>theme.darkText};
`

const SocialIcon = styled.img`
`

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    `

const Number = styled.h4`
    color: ${({theme})=>theme.text};
    font-size: var(--large);
`

const Update = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

const ArrowIcon = styled.img`
`

const Percentage = styled.p`
    color: var(--limeGreen);
`

const Today = () => {
  return (
    <Container>
        <Title>overview - today</Title>
        <CardWrapper>

            <Card>
                <Top>
                    <Text>page views</Text>
                    <SocialIcon src='../images/icon-facebook.svg'/>
                </Top>
                <Bottom>
                    <Number>87</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-up.svg'/>
                        <Percentage>303%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>likes</Text>
                    <SocialIcon src='../images/icon-facebook.svg'/>
                </Top>
                <Bottom>
                    <Number>52</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-down.svg'/>
                        <Percentage className='down'>2%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>likes</Text>
                    <SocialIcon src='../images/icon-instagram.svg'/>
                </Top>
                <Bottom>
                    <Number>5462</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-up.svg'/>
                        <Percentage>2257%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>profile views</Text>
                    <SocialIcon src='../images/icon-instagram.svg'/>
                </Top>
                <Bottom>
                    <Number>52k</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-up.svg'/>
                        <Percentage>1375%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>retweets</Text>
                    <SocialIcon src='../images/icon-twitter.svg'/>
                </Top>
                <Bottom>
                    <Number>117</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-up.svg'/>
                        <Percentage>303%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>likes</Text>
                    <SocialIcon src='../images/icon-twitter.svg'/>
                </Top>
                <Bottom>
                    <Number>507</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-up.svg'/>
                        <Percentage>553%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>likes</Text>
                    <SocialIcon src='../images/icon-youtube.svg'/>
                </Top>
                <Bottom>
                    <Number>107</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-down.svg'/>
                        <Percentage className='down'>19%</Percentage>
                    </Update>
                </Bottom>
            </Card>

            <Card>
                <Top>
                    <Text>total views</Text>
                    <SocialIcon src='../images/icon-youtube.svg'/>
                </Top>
                <Bottom>
                    <Number>1407</Number>
                    <Update>
                        <ArrowIcon src='../images/icon-down.svg'/>
                        <Percentage className='down'>12%</Percentage>
                    </Update>
                </Bottom>
            </Card>


        </CardWrapper>
    </Container>
  )
}

export default Today

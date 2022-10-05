import React, {useState} from 'react'
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background: var(--white);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: slide 1s linear;

    @keyframes slide {
        0% {
            transform: translate(-100%,0);
            background-color: var(--veryDarkBlueBg);
        }
        100% {
            transform: translate(0%,0);
            background-color: var(--white);
        }
    }
`
const Button = styled.button`
    border: 2px solid var(--facebook);
    background-color: transparent;
    color: var(--facebook);
    overflow: hidden;
    position: relative;
    will-change: transform;
    z-index: 0;
    padding: 1rem 3rem;
    border-radius: var(--radius);
    text-transform: capitalize;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--trans);
    &::after{
        background-color: var(--facebook);
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: var(--radius);
        transform: translate(-100%,0) rotate(10deg);
        transform-origin: top left;
        transition: var(--trans);
        will-change: transform;
        z-index: -1;
    }
    &:hover::after {
        transform: translate(0,0);
    }
    &:hover {
        border: 2px solid transparent;
        color: var(--white);
        transform: scale(1.05);
        will-change: transform;
    }
`

const Intro = ({setRemove}) => {
  return (
    <Container>
        <h2></h2>
        <Button onClick={()=> setRemove(true)}>see the project</Button>
    </Container>
  )
}

export default Intro

import styled from 'styled-components'

export const ContainerEducation = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);   
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: white;
    color: black;
    width: 80%;
    height: 80%;
    border-radius: 10px;
`

export const Close = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;

    &:before,
    &:after{
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: black;
    }

    &:before{
        transform: rotate(45deg);
    }

    &:after{
        transform: rotate(-45deg);
    }
`
import styled from 'styled-components'

export const HomepageWrapper = styled.div`
    height: 100vh;
    background: #12232E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    Padding: 20px 10%;
`

export const ButtonWrapper = styled.div`
    margin-top: ${(props: { track: number | undefined }) => props.track ? '50px' : '0px'};
    margin-bottom: 60px;
`

export const Button = styled.button`
    background-color: #203647;
    border: 1px solid #007CC7;
    border-radius: 5px;
    color: #EEFBFB;
    padding: 5px 12px;
`

export const Error = styled.p`
    color: red
`

export const HeaderBrand = styled.h5`
    color: white;
    position: absolute;
    top: 20px;
    left: 50px;
`
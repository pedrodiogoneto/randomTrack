
import styled from 'styled-components'

export const CardWrapper = styled.div`
background-color: #EEFBFB;
border: 1px solid #007CC7;
border-radius: 5px;
width: 80%;
padding: 2px;
`

export const ImageWrapper = styled.img`
height: 150px;
`

export const TextWrapper = styled.div`
padding: 10px;

& > * {
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`

export const TrackCard = styled.div`
display: flex;
`

export const Iframe = styled.iframe`
width: 100%;
`

export const ButtonStyle = styled.div`
background-color: #4DA8DA;
border: 1px solid #007CC7;
border-radius: 5px;
color: #EEFBFB;
padding: 5px 12px;
`

export const Button = styled(ButtonStyle)`
margin-right: 10px;
`

export const Link = styled(ButtonStyle)`
text-decoration: none;

& a {
    color: #EEFBFB;
}
`

export const ButtonWrapper = styled.div`
width: 100%;
display: flex;
`
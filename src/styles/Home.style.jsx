import styled, { keyframes } from "styled-components"


export const Logospin = keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Checkrotate = keyframes`

    0% { transform: rotateY(0deg); }
    25% { transform: rotateY(45deg); }
    50% { transform: rotateY(0deg); }
    75% { transform: rotateY(-45deg); }
    100% { transform: rotateY(0deg); }
`;

export const Glitch = keyframes`

    
    50% { opacity:0; }
   
`;

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const Header = styled.div`
    font-weight: 300;
    font-size: 2.4rem; 
    text-align: center; 
    padding: 2rem 0rem 0rem 0rem; 
    
`

export const Subtitle = styled.div`
    padding: 0rem 2rem;
    overflow: hidden;
    font-size:1.8rem;

    p {
        margin-top:2rem;
        font-size:0.8rem;
    }
`

export const ContainerCertified = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;
    padding: 2rem 0rem 2rem 0rem; 

`

export const CertifiedCircle = styled.img`
    max-width:4rem;
    position:absolute;
    animation: ${Logospin} infinite 10s linear;
`

export const CertifiedCheck = styled.img`
    animation: ${Checkrotate} infinite 8s linear;
    max-width:4rem;
`

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;
    padding: 9rem 0rem 0rem 0rem;

`

export const FontLogo = styled.img`
    max-width: 16rem;
    position: absolute;
    transform: translate(-70px, -100px);
    z-index: 10;

    @media (max-width: 428px) and (min-width: 414px) {
        max-width: 15rem;
    }

    @media (max-width: 413px) and (min-width: 375px) {
        max-width: 13rem;
    }

    
`

export const Propeller = styled.img`
    max-width: 16rem;
    animation: ${Logospin} infinite 15s linear;

    @media (max-width: 428px) and (min-width: 414px) {
        max-width: 15rem;
    }

    @media (max-width: 413px) and (min-width: 375px) {
        max-width: 13rem;
    }

`

export const ContainerWaves = styled.div`
    overflow:hidden;
   
`

export const TitleBenefits = styled.div`
    font-size: 1.5rem; 
    text-align: start;
    font-weight: 300;
    padding:0rem 2rem; 
`

export const CheckItems = styled.div`
    margin: 0 auto;
    width: 80%;
    padding:2rem 0rem 0rem 0rem;
    overflow:hidden;
`

export const ItemCheck = styled.div`      
    display:flex;
    align-items:center;
    padding:0.8rem;
    font-size:1.2rem;

    p {
        padding-left: 1rem;
    }

    img {
        max-width:1.9rem;
    }

    img:nth-child(1) {
        max-width:2.2rem;
        position:absolute;    
    }   

`

export const ExtractorContent = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    justify-content: center;
    padding:1rem 2rem 5rem 2rem;
    
    img {
        max-width:3rem;
        animation: ${Glitch} 3s infinite;
        
    }

    p {
        margin-top:1rem;
        font-size:1.2rem;
    }
`
















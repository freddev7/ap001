import { useEffect } from "react";

import fontlogoproduct from "../assets/fontlogoproduct.svg"
import propeller from "../assets/propeller.svg"
import certifiedcircle from "../assets/certifiedcircle.svg"
import certifiedcheck from "../assets/certifiedcheck.svg"
import checksign from "../assets/checksign.svg"
import checkbox from "../assets/checkbox.svg"
import extractor from "../assets/extractor.svg"
import { Typewriter } from 'react-simple-typewriter'
import ParticlesWave from "./ParticlesWave"
import Aos from 'aos'
import 'aos/dist/aos.css'

import { HomeContainer, Header, ContainerCertified, Subtitle, Container, FontLogo, Propeller, CertifiedCheck, CertifiedCircle, ContainerWaves, TitleBenefits, ItemCheck, CheckItems, ExtractorContent } from "../styles/Home.style";


function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <>
            <HomeContainer>
                <Header>
                    <p>APC</p>
                    <ContainerCertified>
                        <CertifiedCircle src={certifiedcircle} alt="certifiedcircle"></CertifiedCircle>
                        <CertifiedCheck src={certifiedcheck} alt="certifiedcheck"></CertifiedCheck>
                    </ContainerCertified>
                    <Subtitle>
                        <span>
                            <Typewriter
                                words={['CERTIFICADO PELA ANAC']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <p>
                            <Typewriter
                                words={['CONFIRMO QUE O AP001 APC AEROPOLIMENTO ATENDE OU EXCEDE OS REQUISITOS DE SAE AMS1526 - LIMPADOR PARA SUPERFÍCIES EXTERNAS DE AERONAVES, MISCÍVEL EM ÁGUA, TIPO PULVERIZAÇÃO SOB PRESSÃO.']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={5}
                            />
                        </p>
                        <p>
                            <Typewriter
                                words={['CONFIRMO QUE O AP001 APC AEROPOLIMENTO ATENDE OU EXCEDE OS REQUISITOS DA SAE AMS1550 - LIMPADOR, BASE DE ÁGUA, MATERIAIS DE SUPERFÍCIE DURA PARA INTERIORES DE AERONAVES. ']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={10}
                            />
                        </p>
                    </Subtitle>
                </Header>
                <Container>
                    <FontLogo src={fontlogoproduct} alt="fontlogoproduct"></FontLogo>
                    <Propeller src={propeller} alt="propeller"></Propeller>
                </Container>
                <ContainerWaves>
                    <ParticlesWave />
                </ContainerWaves>
                <TitleBenefits>
                    <p data-aos="fade-right" data-aos-duration="1000">DESENVOLVIDO PARA HIGIENIZAÇÃO INTERNA</p>
                </TitleBenefits>
                <CheckItems>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1500" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1000" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1000">COCKPIT</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1800" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1300" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1300">GALLEY</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2100" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1600" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1600">COURO</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2400" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1900" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1900">CINTOS DE SEGURANÇA</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2700" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="2200" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="2200">TAPEÇARIA</p>
                    </ItemCheck>
                </CheckItems>
                <ExtractorContent>
                    <img src={extractor} alt="extractor" />
                    <p data-aos="fade-right" data-aos-duration="1000">PODENDO SER UTILIZADO EXTRATORA PARA LIMPEZA PESADA EM TAPETES!</p>
                </ExtractorContent>
            </HomeContainer>
        </>

    )
}

export default Home;
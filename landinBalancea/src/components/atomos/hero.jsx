import { Button, NoRightPaddingContainer } from "../../styles/common";
import { H1, Para } from "../../styles/typography";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/Landing/image-mockups.png";
import HeroBg from "../../assets/Landing/bg-intro-desktop.png";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
export const HeroContent = styled.div`
  width: 40%;
  @media (max-width: 1200px) {
    width: 30%;
  }
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const HeroImage = styled.div`
  width: 60%;
  position: relative;
  height: 100vh;
  background: url(${HeroBg});
  background-position: 15% 85%;
  img {
    position: absolute;
    top: -14rem;
    right: -10rem;
  }

  @media (max-width: 1200px) {
    width: 70%;
    background-position: 10% 90%;
    img {
      top: 0rem;
      right: 0;
      max-width: 60rem;
    }
  }
  @media (max-width: 767px) {
    background-position: 4% 50%;
    width: 50%;
    img {
      max-width: 40rem;
      top: 13rem;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    background-position: 30% 100%;
    img {
      max-width: 100%;
      top: -10rem;
    }
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;
export const HeroContentWrapper = styled.div`
  max-width: 40rem;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  p {
    padding: 2rem 0;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
    padding: 4rem;
  }
`;

const Hero = () => {
  return (
    <div>
      <NoRightPaddingContainer>
        <HeroWrapper>
          <HeroContent>
            <HeroContentWrapper>
              <H1> Control de Gastos en la Era Digital </H1>
              <Para>
                Lleva tu vida financiera al mundo digital. Tu cuenta en Balancea
                será el centro de todo para controlar tus gastos, ahorrar,
                presupuestar, invertir y mucho más.
              </Para>
              <Link to="http://localhost:5173/">
                <Button>Iniciar Sesión</Button>
              </Link>
            </HeroContentWrapper>
          </HeroContent>
          <HeroImage>
            <img src={HeroImg} alt="hero" />
          </HeroImage>
        </HeroWrapper>
      </NoRightPaddingContainer>
    </div>
  );
};

export default Hero;

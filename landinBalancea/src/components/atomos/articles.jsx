import { Container } from "../../styles/common";
import MoneyImg from "../../assets/Landing/image-currency.jpg";
import ConfettiImg from "../../assets/Landing/image-confetti.jpg";
import planeImg from "../../assets/Landing/image-plane.jpg";
import restaurantImg from "../../assets/Landing/image-restaurant.jpg";
import { H2, H4, H5, Para } from "../../styles/typography";

import styled from "styled-components";

export const ArticleWrapper = styled.div`
  padding: 10rem 0 6rem 0;
  h2 {
    padding: 1rem 0 2rem 0;
  }
`;
export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
export const ArticleCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h4 {
    padding: 1rem 0;
  }
  border-radius: 1rem;
  overflow: hidden;
`;
export const ArticleCardContent = styled.div`
  padding: 2rem 3rem;
`;

const Articles = () => {
  return (
    <div>
      <Container>
        <ArticleWrapper>
          <H2>Latest Articles</H2>
          <ArticleGrid>
            <ArticleCard>
              <a href="https://www.comfama.com/finanzas/educacion-financiera/como-manejar-mis-finanzas-personales/" />
              <img src={MoneyImg} alt="" />
              <ArticleCardContent>
                <H5>Carlos Ramirez</H5>
                <H4>
                  Estrategias Efectivas para el Control de Gastos Personales
                </H4>
                <Para>
                  Descubre métodos probados para gestionar tus finanzas
                  personales y optimizar tus gastos cotidianos.
                </Para>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <a href="https://www.redalyc.org/journal/816/81669876005/html/" />
              <img src={restaurantImg} alt="" />
              <ArticleCardContent>
                <H5>Sofía López</H5>
                <H4>
                  Innovaciones en Banca Digital: Cómo Afectan tus Finanzas
                </H4>
                <Para>
                  Exploramos las últimas tecnologías en banca digital y cómo
                  pueden ayudarte a mejorar tu gestión financiera.
                </Para>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <a href="https://www.monet.com.co/blog/aplicaciones-para-ahorrar/" />
              <img src={planeImg} alt="" />
              <ArticleCardContent>
                <H5>Diego Martín</H5>
                <H4>
                  Presupuestos Inteligentes: Herramientas Digitales para Ahorrar
                </H4>
                <Para>
                  Aprende sobre las herramientas digitales más efectivas para
                  crear presupuestos inteligentes y ahorrar dinero.
                </Para>
              </ArticleCardContent>
            </ArticleCard>

            <ArticleCard>
              <a href="https://www.bancofinandina.com/finanblog/finanzas-personales/10-consejos-para-una-inversion-exitosa-cdt-digital" />
              <img src={ConfettiImg} alt="" />
              <ArticleCardContent>
                <H5>Lucía González</H5>
                <H4>
                  Inversiones y Banca Digital: Consejos para Principiantes
                </H4>
                <Para>
                  Una guía básica para aquellos que desean comenzar a invertir a
                  través de plataformas de banca digital.
                </Para>
              </ArticleCardContent>
            </ArticleCard>
          </ArticleGrid>{" "}
        </ArticleWrapper>
      </Container>
    </div>
  );
};

export default Articles;

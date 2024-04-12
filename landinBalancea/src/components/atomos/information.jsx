import { Container } from "../../styles/common";
import { H2, H3, Para } from "../../styles/typography";
import BankingIcon from "../../assets/Landing/icon-online.svg";
import BudgetingIcomn from "../../assets/Landing/icon-budgeting.svg";
import Onboarding from "../../assets/Landing/icon-onboarding.svg";
import Api from "../../assets/Landing/icon-api.svg";

import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 10rem 0 6rem 0;
  background: var(--VeryLightGray);
`;
export const InfoHeader = styled.div`
  p {
    max-width: 70rem;
    padding: 1.5rem 0;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;
export const InfoGrid = styled.div`
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
export const InfoCard = styled.div`
  padding-top: 5rem;
  img {
    max-width: 5rem;
  }
  h3 {
    padding: 2rem 0;
  }
`;

const Info = () => {
  return (
    <div>
      <InfoWrapper>
        <Container>
          <InfoHeader>
            <H2>¿Por qué elegir nuestra App Web de Control de Gastos?</H2>
            <Para>
              {" "}
              Aprovechamos la tecnología para convertir tu cuenta en una unica
              billetera, en el centro de tus finanzas personales. Controla tus
              gastos como nunca antes.
            </Para>
          </InfoHeader>
          <InfoGrid>
            <InfoCard>
              <img src={BankingIcon} alt="" />
              <H3>Control de Gastos en Línea</H3>
              <Para>
                Nuestras aplicaciones web y móviles modernas te permiten
                realizar un seguimiento de tus gastos estés donde estés en el
                mundo.
              </Para>
            </InfoCard>
            <InfoCard>
              <img src={BudgetingIcomn} alt="" />
              <H3>Presupuesto Sencillo</H3>
              <Para>
                Observa exactamente a dónde va tu dinero cada mes. Recibe
                notificaciones cuando estés cerca de alcanzar tus límites de
                gastos.
              </Para>
            </InfoCard>
            <InfoCard>
              <img src={Onboarding} alt="" />
              <H3>Alta Rápida</H3>
              <Para>
                No usamos sucursales. Abre tu cuenta en minutos en línea y
                comienza a tomar control de tus finanzas de inmediato.
              </Para>
            </InfoCard>
            <InfoCard>
              <img src={Api} alt="" />
              <H3> API Abierta</H3>
              <Para>
                Gestiona tus ahorros, inversiones, pensión y mucho más desde una
                sola cuenta. Hacer seguimiento de tu dinero nunca ha sido tan
                fácil
              </Para>
            </InfoCard>
          </InfoGrid>
        </Container>
      </InfoWrapper>
    </div>
  );
};

export default Info;

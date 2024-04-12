import Articles from "../atomos/articles";
import Hero from "../atomos/hero";
import Info from "../atomos/information";

import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-x: hidden;
`;

export default function HomeTemplate() {
  return (
    <div>
      <HomeContainer>
        <Hero />
        <Info />
        <Articles />
      </HomeContainer>
    </div>
  );
}

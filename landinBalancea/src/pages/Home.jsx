import styled from "styled-components";


import HomeTemplate from "../components/templates/HomeTemplate"
const Container = styled.div`
  height: 100%;
`;

export default function Home() {
  
  return (
    <Container>
      <HomeTemplate />
    </Container>
  );
}


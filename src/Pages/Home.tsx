import React from "react";
import styled from "styled-components";

import { Header } from "Components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
};
export default Home;

const Main = styled.main`
  min-height: 100vh;
  padding-top: 120px;
`;

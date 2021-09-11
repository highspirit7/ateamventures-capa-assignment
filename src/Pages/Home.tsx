import React, { useState } from "react";
import styled from "styled-components";

import { Header } from "Components/Header";
import { Drawer } from "Components/Drawer";

const Home: React.FC = () => {
  const [isDrawerOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header onClickHamburger={setIsOpen} isDrawerOpen={isDrawerOpen} />
      <Main></Main>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default Home;

const Main = styled.main`
  min-height: 100vh;
  padding-top: 120px;
`;

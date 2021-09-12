import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { down, between } from "styled-breakpoints";

import { Header } from "Components/Header";
import { Drawer } from "Components/Drawer";
import { RequestCard } from "Components/RequestCard";
import { SelectFilter } from "Components/SelectFilter";
import RefreshIcon from "@material-ui/icons/Refresh";

import { IRequest, getRequests } from "api/requests";

const materialOptions = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
const methodOptions = ["밀링", "선반"];

const Home: React.FC = () => {
  const [isDrawerOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);

  useEffect(() => {
    getRequests()
      .then((data) => {
        // console.log(data);
        setRequests(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header onClickHamburger={setIsOpen} isDrawerOpen={isDrawerOpen} />
      <Main>
        <MainTitle>
          <h1>들어온 요청</h1>
          <h2>파트너님에게 딱 맞는 요청서를 찾아보세요.</h2>
        </MainTitle>
        <StyledFiltersWrapper>
          <div style={{ display: "flex" }}>
            <SelectFilter
              options={methodOptions}
              selected={selectedMethod}
              setSelected={setSelectedMethod}
              type="가공방식"
            />
            <SelectFilter
              options={materialOptions}
              selected={selectedMaterial}
              setSelected={setSelectedMaterial}
              type="재료"
            />
            <StyledResetFilterButton>
              <RefreshIcon />
              <span>필터링 리셋</span>
            </StyledResetFilterButton>
          </div>
          <div>상담 중인 요청만 보기</div>
        </StyledFiltersWrapper>
        <Section>
          {requests.length > 0 ? (
            requests.map((item) => <RequestCard item={item} key={item.id} />)
          ) : (
            <p>조건에 맞는 견적 요청이 없습니다.</p>
          )}
        </Section>
      </Main>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default Home;

const Main = styled.main`
  /* width: 100%; */
  max-width: 1130px;
  padding: 70px 0px 60px;
  margin: 0 auto;

  ${down("lg")} {
    padding-left: 40px;
    padding-right: 40px;
  }

  ${down("xs")} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Section = styled.section`
  /* width: 100%; */
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 366px));
  grid-auto-rows: minmax(340px, 356px);
  gap: 16px;
  justify-content: center;

  ${between("sm", "md")} {
    grid-template-columns: repeat(2, minmax(320px, 366px));
  }

  ${down("xs")} {
    grid-template-columns: repeat(1, minmax(320px, 366px));
  }
`;

const MainTitle = styled.div`
  margin: 40px 0 32px;
  color: ${({ theme }) => theme.colors.gray};

  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
  }

  h2 {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledResetFilterButton = styled.button`
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.second};
  }

  span {
    font-size: 13px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.second};
  }
`;

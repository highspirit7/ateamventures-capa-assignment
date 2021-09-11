import React from "react";
import styled from "styled-components";

import capaPartnersLogo from "assets/images/capa-partners-logo.png";
import companyIcon from "assets/icons/company.png";
import divider from "assets/icons/divider.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={capaPartnersLogo} alt="logo" />
      </StyledLogo>
      <StyledRightMenu>
        <button>
          <img src={companyIcon} alt="company_icon" />A 가공 업체
        </button>
        <img src={divider} alt="divider" />
        <button>로그아웃</button>
      </StyledRightMenu>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  /* font-size: 26px;
  font-weight: 500; */
  padding: 0 40px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.div``;

const StyledRightMenu = styled.div`
  width: 208px;
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px;

    img {
      margin-right: 8px;
      margin-bottom: 1.5px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

import capaPartnersLogo from "assets/images/CAPA_partners_logo.png";
import companyWhiteIcon from "assets/icons/company_white.png";
import divider from "assets/icons/divider.png";

interface IHeaderProps {
  onClickHamburger: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
}

const Header: React.FC<IHeaderProps> = ({ onClickHamburger, isDrawerOpen }) => {
  return (
    <StyledHeader>
      <HamburgerMenu onClick={() => onClickHamburger(!isDrawerOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      <StyledLogo>
        <img src={capaPartnersLogo} alt="logo" />
      </StyledLogo>
      <StyledRightMenu>
        <li>
          <a href="#">
            <img src={companyWhiteIcon} alt="company_icon" />A 가공 업체
          </a>
        </li>
        <img src={divider} alt="divider" />
        <li>
          <a href="#">로그아웃</a>
        </li>
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
  padding: 0 40px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${only("xs")} {
    justify-content: flex-start;
    padding: 0 23px;
  }
`;

const StyledLogo = styled.div`
  img {
    ${only("xs")} {
      width: 92px;
      height: 12px;
    }
  }
`;

const StyledRightMenu = styled.ul`
  width: 208px;
  display: flex;
  justify-content: space-between;

  ${only("xs")} {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      color: white;
      font-size: 14px;
    }

    img {
      margin-right: 8px;
      margin-bottom: 1px;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  margin-right: 20px;

  ${only("xs")} {
    display: block;
    cursor: pointer;
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    margin: 3px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }
`;

const StyledDrawer = styled.div``;

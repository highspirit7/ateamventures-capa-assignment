import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { only } from "styled-breakpoints";

import useMountTransition from "./useMountTransition";

import capaPartnersColorLogo from "assets/images/CAPA_partners_colorlogo.png";
import companyBlackIcon from "assets/icons/company_black.png";

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IStyledDrawerContainerProps {
  open: boolean;
  $in: boolean;
}

interface IBackDropProps {
  onClick: () => void;
}

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");

  return drawerRoot;
}

const TRANSITION_SPEED = "0.3s";

const Drawer: React.FC<IDrawerProps> = ({ isOpen, onClose }) => {
  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot(),
  );
  const isTransitioning = useMountTransition(isOpen, 300);

  // Append portal root on mount
  useEffect(() => {
    if (bodyRef && bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current);

      const portal = portalRootRef.current;
      const bodyEl = bodyRef.current;

      return () => {
        // Clean up the portal when drawer component unmounts
        portal.remove();
        // Ensure scroll overflow is removed
        bodyEl.style.overflow = "";
      };
    }
  }, []);

  // Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef && bodyRef.current && isOpen) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        if (bodyRef && bodyRef.current) {
          bodyRef.current.style.overflow = "";
        }
      }
    };

    updatePageScroll();
  }, [isOpen]);

  if (!isTransitioning && !isOpen) {
    return null;
  }

  return createPortal(
    <StyledDrawerContainer
      aria-hidden={isOpen ? "false" : "true"}
      open={isOpen}
      $in={isTransitioning}
    >
      <StyledDrawer role="dialog">
        <StyledDrawerTitle>
          <img src={capaPartnersColorLogo} alt="color_logo" />
        </StyledDrawerTitle>
        <ul>
          <li>
            <a href="#">
              <img src={companyBlackIcon} alt="company_icon" />
              파트너정밀가공
            </a>
          </li>
          <li>
            <a href="#">로그아웃</a>
          </li>
        </ul>
      </StyledDrawer>
      <BackDrop onClick={onClose} />
    </StyledDrawerContainer>,
    portalRootRef.current,
  );
};

export default Drawer;

const StyledDrawerContainer = styled.div<IStyledDrawerContainerProps>`
  display: none;

  ${only("xs")} {
    display: block;
  }

  ${(props) =>
    props.open &&
    props.$in &&
    `${BackDrop} {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        z-index: 999;
      }

      ${StyledDrawer} {
        transform: translateX(0);
      }
    `}
`;

const StyledDrawer = styled.div`
  background: #fff;
  width: 75%;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform ${TRANSITION_SPEED} ease;
  z-index: 1000;
  top: 0;
  left: 0;
  transform: translateX(-105%);

  ul {
    padding: 38px 32px;

    li {
      margin-bottom: 24px;

      img {
        margin-right: 8px;
      }
    }
  }
`;

const StyledDrawerTitle = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #e5e5e5;

  img {
    margin: 16px 20px;
  }
`;

const BackDrop = styled.div<IBackDropProps>`
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${TRANSITION_SPEED} ease,
    visibility ${TRANSITION_SPEED} ease;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
  z-index: 0;
`;

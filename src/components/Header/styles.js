import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed; /* fica preso no topo */
  top: 0;
  left: 0;
  padding: 15px 0;
  z-index: 1000;

  background: rgba(0, 23, 18, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;
`;

export const LogoLink = styled(Link)`
  font-family: ${(props) => props.theme.defaultFont};
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.lightGreenTitle};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavLink = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.lightGreenText};
  letter-spacing: 0.8px;
  line-height: 25.6px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.goldText};
    scale: 1.05;
  }
`;

export const ButtonHeader = styled.button`
  padding: 12px 32px;
  color: ${(props) => props.theme.intenseGreen};
  background-color: ${(props) => props.theme.goldText};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.greenFormBackground};
    color: ${(props) => props.theme.whiteDefault};
  }
`;

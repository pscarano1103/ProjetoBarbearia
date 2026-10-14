import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  background-color: ${(props) => props.theme.greenFooter};
  padding: 80px 0;
`;
export const ContentFooter = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0 auto;
  padding: 0 64px;
  color: ${(props) => props.theme.lightGreenText};
`;
export const BoxLinkDesc = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  max-width: 250px;
`;

export const TagTitle = styled.p`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.lightGreenTitle};
`;

export const TagDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;

export const TagIcons = styled.div`
  display: flex;
  gap: 16px;

  a {
    padding: 12px;
    border: 1px solid rgb(255, 255, 255, 0.1);
  }
`;
export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
export const NavTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.lightGreenTitle};
`;
export const NavItem = styled.a`
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.goldText};
    scale: 1.05;
  }
`;
export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
export const TimeTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.lightGreenTitle};
`;
export const TimeItem = styled.p``;

export const BoxCopy = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    opacity: 0.4;
  }
`;

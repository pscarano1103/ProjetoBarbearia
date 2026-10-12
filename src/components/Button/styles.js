import styled from "styled-components";

export const ContainerButton = styled.button`
  width: fit-content;
  padding: 20px 40px;
  color: ${(props) => props.theme.intenseGreen};
  background-color: ${(props) => props.theme.goldText};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.greenFormBackground};
    color: ${(props) => props.theme.whiteDefault};
    scale: 1.1;
  }
`;

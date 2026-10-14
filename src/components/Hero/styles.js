import styled from "styled-components";
import Background from "../../assets/heroImage.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  display: flex;
  gap: 23px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 64px;
`;

export const HeroBanner = styled.div`
  flex-direction: column;
  height: 100vh;
  position: relative;
  background:
    linear-gradient(rgba(0, 32, 26, 0), rgba(0, 32, 26, 1)),
    url("${Background}") no-repeat;
  background-color: ${(props) => props.theme.intenseGreen};
  background-size: cover;
  background-position: center;
  p {
    max-width: 570px;
    font-size: 18px;
    color: ${(props) => props.theme.lightGreenText};
  }
`;

export const TitleHero = styled.h1`
  max-width: 650px;
  font-size: 64px;
  font-family: ${(props) => props.theme.strongTextFont};
  font-weight: 600;
  color: ${(props) => props.theme.lightGreenTitle};
  line-height: 80px;

  span {
    font-weight: 600;
    color: ${(props) => props.theme.goldText};
  }
`;

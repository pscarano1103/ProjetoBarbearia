import {
  Container,
  Content,
  LogoLink,
  Navigation,
  NavLink,
  ButtonHeader,
} from "./styles";

export function Header() {
  return (
    <Container className="container">
      <Content>
        <LogoLink to={"/"}>TAGLIO</LogoLink>

        <Navigation>
          <NavLink href="#services">SERVIÇOS</NavLink>
          <NavLink href="#galery">GALERIA</NavLink>
          <NavLink>SOBRE</NavLink>
          <ButtonHeader>AGENDAR HORÁRIO</ButtonHeader>
        </Navigation>
      </Content>
    </Container>
  );
}

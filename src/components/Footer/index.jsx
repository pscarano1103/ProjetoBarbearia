import { CalendarIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import {
  Container,
  ContentFooter,
  BoxLinkDesc,
  TagBox,
  TagTitle,
  TagDesc,
  TagIcons,
  NavBox,
  NavTitle,
  NavItem,
  TimeBox,
  TimeTitle,
  TimeItem,
  BoxCopy,
} from "./styles";

export function Footer() {
  return (
    <Container className="container">
      <ContentFooter>
        <BoxLinkDesc>
          <TagBox>
            <TagTitle>TAGLIO</TagTitle>
            <TagDesc>
              Barbearia de alto padrão em Boituva. Focada no minimalismo e na
              excelência do serviço.
            </TagDesc>
            <TagIcons>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fbooksy.com%2Fpt-br%2Finstant-experiences%2Fwidget%2F412573%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaePHkdtLoVmadUUA9YWwayihZNaPqaKrETjQzdEWARoOycO9XEPcGjqEtgScQ_aem_EJ4rjrleRHeqt0a-Thz5pw&e=AUCkBgBjjufUf5zNceKwkQJb20boHgajtIbiOdgHef2O65R-SSvShk_RAkRvFpv29JhGmSNbEasBPVGtRl6Hrc24uwcT1OC9_63-gFv7xv0ctPt8_wm-ivOMORNUgGKiDn7FkKoOyxkC42LvGKMWjUI"
                target="blank"
              >
                <CalendarIcon color="#C2EBDF" size={16} />
              </a>

              <a
                href="https://www.instagram.com/tagliobarbearia/"
                target="blank"
              >
                <InstagramLogoIcon color="#C2EBDF" size={16} />
              </a>
            </TagIcons>
          </TagBox>

          <NavBox>
            <NavTitle>NAVEGAÇÃO</NavTitle>
            <NavItem>Serviços</NavItem>
            <NavItem>Galeria</NavItem>
          </NavBox>

          <TimeBox>
            <TimeTitle>HORÁRIOS</TimeTitle>
            <TimeItem>Seg - Sex: 09h às 20h</TimeItem>
            <TimeItem>Sábado: 08h às 18h</TimeItem>
            <TimeItem>Domingo: Fechado</TimeItem>
          </TimeBox>
        </BoxLinkDesc>

        <BoxCopy>
          <p>
            © 2024 Barbearia Taglio. Boituva, SP. Todos os direitos reservados.
          </p>
        </BoxCopy>
      </ContentFooter>
    </Container>
  );
}

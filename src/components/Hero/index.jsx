import { Button } from "../index.js";
import { Container, HeroBanner, TitleHero } from "./styles.js";

export function Hero() {
  return (
    <HeroBanner className="container">
      <Container>
        <TitleHero>
          Sofisticação e <span>Requinte em Boituva</span>
        </TitleHero>

        <p>
          O conceito Taglio une o minimalismo arquitetônico à precisão do
          visagismo clássico. Um refúgio exclusivo para o homem que valoriza o
          tempo e a excelência.
        </p>

        <Button>AGENDAR AGORA</Button>
      </Container>
    </HeroBanner>
  );
}

import olemidiaMobile from "../../assets/images/services/who_mobile.webp";
import olemidiaTablet from "../../assets/images/services/who_tab.webp";
import olemidiaDesktop from "../../assets/images/services/who_dk.webp";
import { ImgContainer, TxtContainer, WhoContainer } from "./styles";

function Who() {
  return (
    <WhoContainer id="who">
      <ImgContainer>
        <source srcSet={olemidiaDesktop} media="(min-width: 1050px)" />
        <source srcSet={olemidiaTablet} media="(min-width: 600px)" />
        <img src={olemidiaMobile} alt="oleMidia" />
      </ImgContainer>
      <TxtContainer>
        <div>
          <h1>Quem somos</h1>
          <p>
            A <span>Olé Midia</span> surgiu da união de duas paixões entre
            primos: esporte e design. Nossa missão é elevar ao máximo a imagem
            de nossos atletas. Oferecemos serviços de assessoria, coordenação,
            gestão e planejamento como parte integrante de nossa atuação
            profissional.
          </p>
        </div>
      </TxtContainer>
    </WhoContainer>
  );
}

export default Who;

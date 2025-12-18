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
            A <span>Olé Midia</span> atua com assessoria e marketing esportivo,
            focada em elevar a imagem, a marca pessoal e a carreira de atletas.
          </p>
          <p>
            Trabalhamos com gestão, planejamento e posicionamento estratégico,
            respeitando a história, o momento e os objetivos de cada
            profissional.
          </p>
          <p>
            Mais do que comunicação, construímos valor, direcionamento de
            carreira e presença profissional dentro e fora de campo.
          </p>
        </div>
      </TxtContainer>
    </WhoContainer>
  );
}

export default Who;

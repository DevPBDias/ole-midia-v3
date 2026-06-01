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
            A <span>Olé Midia</span> atua como assessoria e marketing esportivo,
            tendo como missão elevar ao máximo a imagem, a marca pessoal e a
            carreira de nossos atletas.
          </p>
          <p>
            Acreditamos que visibilidade sem estratégia não constrói legado. Por
            isso, oferecemos gestão, planejamento e posicionamento
            personalizados, respeitando a história, o momento e os objetivos de
            cada atleta.
          </p>

          <p>
            Mais do que comunicação, entregamos direcionamento de carreira,
            valor de marca e presença profissional dentro e fora de campo.
          </p>
        </div>
      </TxtContainer>
    </WhoContainer>
  );
}

export default Who;

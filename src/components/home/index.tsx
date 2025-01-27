import { HomeContainer } from "./styles";
import homeImg from "../../assets/images/services/home_mobile.webp";
import homeImgTb from "../../assets/images/services/home_tablet.webp";
import homeImgDk from "../../assets/images/services/home_desktop.webp";
import arrow from "../../assets/icons/arrow.webp";
import wpp_logo from "../../assets/icons/Whatsapp.webp";

function Home() {
  return (
    <HomeContainer id="home">
      <picture className="container_img">
        <source srcSet={homeImgDk} media="(min-width: 1000px)" />
        <source srcSet={homeImgTb} media="(min-width: 600px)" />
        <img src={homeImg} alt="" />
      </picture>
      <section className="container_txt">
        <p>Sua imagem, nosso plano de jogo!</p>
      </section>
      <img className="arrow_icon" src={arrow} alt="arrow" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-button"
        href="https://api.whatsapp.com/send/?phone=+55%2062%2099972-1607&text=Gostaria%20de%20conversar%20sobre%20..."
      >
        <img src={wpp_logo} alt="wpp icon" />
      </a>
    </HomeContainer>
  );
}

export default Home;

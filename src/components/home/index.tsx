import { HomeContainer } from './styles'
import homeImg from '../../assets/images/home_mobile.webp'
import homeImgTb from '../../assets/images/home_tablet.png'
import homeImgDk from '../../assets/images/home_desktop.png'
import Whatsapp from '../../assets/icons/Whatsapp.webp'
import arrow from '../../assets/icons/arrow.webp'

function Home() {
  return (
    <HomeContainer>
      <picture className='container_img'>
        <source srcSet={homeImgDk} media='(min-width: 1000px)' />
        <source srcSet={homeImgTb} media='(min-width: 600px)' />
        <img src={homeImg} alt="" />
      </picture>
      <section className='container_txt'>
        <p>Sua imagem, nosso plano de jogo!</p>
      </section>
      <div className='container_icons'>
        <img src={arrow} alt="" />
      </div>
      <img className='wpp_icon' src={Whatsapp} alt="" />
    </HomeContainer>
  )
}

export default Home
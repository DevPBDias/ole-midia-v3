import { HomeContainer } from './styles'
import homeImg from '../../assets/images/home_mobile.webp'
import Whatsapp from '../../assets/icons/Whatsapp.webp'
import arrow from '../../assets/icons/arrow.webp'

function Home() {
  return (
    <HomeContainer>
      <section className='container_img'>
        <img src={homeImg} alt="" />
      </section>
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
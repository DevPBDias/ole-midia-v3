import { HomeContainer } from './styles'
import homeImg from '../../assets/images/home_mobile.webp'
import homeImgTb from '../../assets/images/home_tablet.webp'
import homeImgDk from '../../assets/images/home_desktop.webp'
import arrow from '../../assets/icons/arrow.webp'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import wpp_logo from '../../assets/icons/wpp_avatar.png'

function Home() {
  return (
    <HomeContainer id='home'>
      <picture className='container_img'>
        <source srcSet={homeImgDk} media='(min-width: 1000px)' />
        <source srcSet={homeImgTb} media='(min-width: 600px)' />
        <img src={homeImg} alt="" />
      </picture>
      <section className='container_txt'>
        <p>Sua imagem, nosso plano de jogo!</p>
      </section>
      <img className='arrow_icon' src={arrow} alt="arrow" />
      <FloatingWhatsApp
        phoneNumber='+55 62 99972-1607'
        accountName='Olé Mídia'
        statusMessage=''
        chatMessage='Olá, como podemos te ajudar?'
        placeholder='Digite sua mensagem...'
        buttonClassName='floating-whatsapp-button'
        avatar={wpp_logo}
      />
    </HomeContainer>
  )
}

export default Home
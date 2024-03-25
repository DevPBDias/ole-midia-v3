import olemidiaMobile from '../../assets/images/who_mobile.webp'
import { ImgContainer, TxtContainer, WhoContainer } from './styles'

function Who() {
    return (
        <WhoContainer id='who'>
            <ImgContainer>
                <img src={olemidiaMobile} alt="oleMidia" />
            </ImgContainer>
            <TxtContainer>
                <div>
                    <h1>Quem somos</h1>
                    <p>
                        A <span>Olé Midia</span> surgiu da união de duas paixões entre primos: esporte e design. Nossa missão é elevar ao máximo a imagem de nossos atletas. Oferecemos serviços de assessoria, coordenação, gestão e planejamento como parte integrante de nossa atuação profissional.
                    </p>
                </div>
            </TxtContainer>
        </WhoContainer>
    )
}

export default Who
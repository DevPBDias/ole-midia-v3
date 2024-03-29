import logo from '../../assets/icons/logo_ole.webp'
import IconsNavbar from '../header/IconsNavbar'
import { LogoContainer, MidiaContainer } from './styles'

function MidiaFooter() {
  return (
    <MidiaContainer>
        <LogoContainer>
            <img src={logo} alt="" />
        </LogoContainer>
        <p>A Olé Mídia é uma empresa de marketing e assessoria esportiva.</p>
        <div>
            <IconsNavbar />
        </div>
    </MidiaContainer>
  )
}

export default MidiaFooter
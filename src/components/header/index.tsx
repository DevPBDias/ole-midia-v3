import logo from '../../assets/logo/Logo_mobile.webp'
import Burger from './Burger'
import DesktopNavbar from './DesktopNavbar'
import { HeaderBar, OleLogo } from './styles'

function Header() {
    return (
        <HeaderBar>
            <section>
                <OleLogo alt="oleHeader" src={logo} />
                <DesktopNavbar />
                <Burger />
            </section>
        </HeaderBar>
    )
}

export default Header
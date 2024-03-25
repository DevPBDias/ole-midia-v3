import IconsNavbar from './IconsNavbar'
import { Link } from './styles'

function DesktopNavbar() {
    return (
        <>
            <div className="div_links_desktop">
                <Link href="#home">Home</Link>
                <Link href="#who">Quem somos</Link>
                <Link href="#services">Serviços</Link>
                <Link href="#client">Clientes</Link>
                <Link href="#portfolio">Portfólio</Link>
                <Link href="#contact">Contato</Link>
            </div>
            <div className='div_icons_desktop'>
                <IconsNavbar />
            </div>
        </>
    )
}

export default DesktopNavbar
import IconsNavbar from './IconsNavbar'
import { Link } from './styles'

function ContentNavbar() {
    return (
        <>
            <div className="div_links_mobile">
                <Link href="#home">Home</Link>
                <Link href="#who">Quem somos</Link>
                <Link href="#services">Serviços</Link>
                <Link href="#client">Clientes</Link>
                <Link href="#portfolio">Portfólio</Link>
                <Link href="#contact">Contato</Link>
            </div>
            <div className="div_icons_mobile">
                <IconsNavbar />
            </div>
        </>
    )
}

export default ContentNavbar
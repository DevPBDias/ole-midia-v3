import IconsNavbar from "./IconsNavbar";
import { Link, NavBar } from "./styles";

type Props = {
  open: boolean,
};

function NavbarLink({ open }: Props) {
  return (
    <NavBar open={open}>
        <Link href="#home">Home</Link>
        <Link href="#who">Quem somos</Link>
        <Link href="#services">Serviços</Link>
        <Link href="#client">Clientes</Link>
        <Link href="#portfolio">Portfólio</Link>
        <Link href="#contact">Contato</Link>
        <div className="">
          <IconsNavbar />
        </div>
    </NavBar>
  );
}

export default NavbarLink;

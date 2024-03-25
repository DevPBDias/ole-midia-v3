import IconsNavbar from "./IconsNavbar";
import styled from 'styled-components';

type Props = {
    open: boolean,
};

const NavBar = styled.ul<Props>`
    display: flex;
    flex-flow: row nowrap;
    gap: 1.2rem;

    @media (min-width: 300px) and (max-width: 999px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        padding-top: 4em;
        gap: 1.5em;
        z-index: 10;
        background-color: #FF6123;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
        top: 0;
        right: 0;
        height: 26.1em;
        width: 100%;
        transition: transform 0.3s ease-in-out;
    }
`;

const Link = styled.a`
    color: var(--Off-White, #EBE3DE);
    font-size: 0.88889rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.88889rem;
    text-transform: uppercase;

    &:hover {
    color: var(#250900);
}
`;

function NavbarLink({ open }: Props) {
  return (
    <NavBar open={open}>
      <Link href="#home">Home</Link>
      <Link href="#who">Quem somos</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#client">Clientes</Link>
      <Link href="#portfolio">Portfólio</Link>
      <Link href="#contact">Contato</Link>
      <IconsNavbar />
    </NavBar>
  );
}

export default NavbarLink;

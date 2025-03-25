import styled from "styled-components";

const NavBar = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.2rem;
`;

const Link = styled.a`
  color: var(--Off-White, #ebe3de);
  font-size: 0.77778rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33333rem;
  text-transform: uppercase;

  &:hover {
    color: #250900;
  }
`;

function ContentNavbar() {
  return (
    <NavBar>
      <Link href="#home">Home</Link>
      <Link href="#who">Quem somos</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#clients">Clientes</Link>
      <Link href="#portfolio">Portfólio</Link>
      <Link href="#contact">Contato</Link>
    </NavBar>
  );
}

export default ContentNavbar;

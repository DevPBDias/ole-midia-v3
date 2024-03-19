import { useState } from 'react';
import NavbarLink from './NavbarLink';
import { StyledBurger } from './styles';

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledBurger>
      <NavbarLink open={open} />
    </>
  );
}

export default Burger;

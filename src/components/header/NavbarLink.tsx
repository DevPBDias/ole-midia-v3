import ContentNavbar from "./ContentNavbar";
import { NavBar } from "./styles";

type Props = {
  open: boolean,
};

function NavbarLink({ open }: Props) {
  return (
    <NavBar open={open}>
      <ContentNavbar />
    </NavBar>
  );
}

export default NavbarLink;

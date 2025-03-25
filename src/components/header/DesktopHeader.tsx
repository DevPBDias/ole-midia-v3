import ContentNavbar from "./ContentNavbar";
import instagramIcon from "../../assets/icons/Instagram.png";
import twitterIcon from "../../assets/icons/Twitter.png";
import Logo from "./Logo";
import styled from "styled-components";

const DesktopContainer = styled.section`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row nowrap;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex: row;
  justify-items: center;
  align-items: center;
  gap: 0.5em;

  a {
    width: 1.78rem;
    height: 1.78rem;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Icons = styled.img`
  width: 1.78em;
  height: 1.78em;
  margin: auto;
`;

function DesktopHeader() {
  return (
    <DesktopContainer>
      <Logo />
      <ContentNavbar />
      <ContainerIcons className="headerIcons">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://instagram.com/olemidia"
        >
          <Icons
            alt="instagram"
            src={instagramIcon}
            className="instagramIcon"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/olemidia"
        >
          <Icons alt="instagram" src={twitterIcon} className="instagramIcon" />
        </a>
      </ContainerIcons>
    </DesktopContainer>
  );
}

export default DesktopHeader;

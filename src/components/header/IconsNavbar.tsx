import instagramIcon from '../../assets/icons/Instagram.webp';
import twitterIcon from '../../assets/icons/Twitter.webp';
import styled from 'styled-components';

export const ContainerIcons = styled.section`
    display: flex;
    flex: row;
    justify-items: center;
    align-items: center;
    gap: 0.5em;

    a {
      width: 1.78rem;
      height: 1.78rem;

      img {
        width: 100%;
        height: 100%;
        margin: auto;
      }
    }

`;

export const Icons = styled.img`
    width: 1.78em;
    height: 1.78em;
    margin: auto;
`;

function IconsNavbar() {
  return (
    <ContainerIcons className="headerIcons">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://instagram.com/olemidia">
        <Icons alt="instagram" src={instagramIcon} className="instagramIcon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/olemidia">
        <Icons alt="instagram" src={twitterIcon} className="instagramIcon" />
      </a>
    </ContainerIcons>
  );
}

export default IconsNavbar;

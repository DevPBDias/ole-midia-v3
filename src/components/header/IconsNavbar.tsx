import instagramIcon from '../../assets/icons/Instagram.webp';
import twitterIcon from '../../assets/icons/Twitter.webp';
import { ContainerIcons, Icons } from './styles';

function IconsNavbar() {
  return (
    <ContainerIcons className="headerIcons">
      <a href="instagram.com/olemidia">
        <Icons alt="instagram" src={ instagramIcon } className="instagramIcon" />
      </a>
      <a href="https://twitter.com/olemidia">
        <Icons alt="instagram" src={ twitterIcon } className="instagramIcon" />
      </a>
    </ContainerIcons>
  );
}

export default IconsNavbar;

import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  height: 28.89em;
  position: relative;

  .container_img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .container_txt {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      width: 65%;
      color: var(--Off-White, #ebe3de);
      text-align: center;
      font-size: 1.77778rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem;
    }
  }

  .arrow_icon {
    position: absolute;
    z-index: 3;
    right: 47%;
    top: 85%;
    width: 1.77778rem;
    height: 1.77778rem;
    flex-shrink: 0;
  }

  .floating-whatsapp-button {
    position: fixed;
    z-index: 3;
    right: 2dvw;
    top: 85dvh;
    width: 2.66667rem;
    height: 2.66667rem;
    flex-shrink: 0;

    &:hover {
      transform: scale(1.1);
    }
  }

  .wpp-icon {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 600px) {
    height: 41.33em;

    .container_txt {
      p {
        width: 70%;
        font-size: 3.55rem;
        line-height: 4rem;
      }
    }
  }

  @media (min-width: 1000px) {
    height: 44.4rem;

    .container_txt {
      p {
        font-size: 5.33333rem;
        line-height: 6.66667rem;
      }
    }

    .wpp-icon {
      width: 2.66667rem;
      height: 2.66667rem;
    }
  }
`;

import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background: var(--Off-White, #ebe3de);
  padding-block: 2.2em;

  h3 {
    color: var(--Vibrant-Orange, #250900);
    font-size: 1.77778rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }

  a {
    width: max-content;
    height: 1.77778rem;
    padding: 0.35556rem 0.71111rem;
    border-radius: 0.35556rem;
    background: var(--Vibrant-Orange, #ff6123);
    color: var(--Dark-Brown, #250900);
    text-align: center;
    font-size: 0.62222rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.06667rem;
    text-transform: uppercase;
    margin-top: 2.5rem;
  }

  @media (min-width: 600px) {
    padding-block: 3.6em;

    h3 {
      font-size: 2.66667rem;
      line-height: 3.11111rem;
    }

    a {
      width: max-content;
      font-size: 0.77778rem;
      line-height: 1.33333rem;
      height: 2.22222rem;
      padding: 0.44444rem 0.88889rem;
    }
  }

  @media (min-width: 1000px) {
    padding-block: 4.3em;

    h3 {
      font-size: 3.55556rem;
      line-height: 4rem;
    }
  }
`;

export const BtnContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-block: 2.4em 0.9em;

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .inner {
    display: flex;
    gap: 0.6em;
  }

  .item {
    display: flex;
    align-items: center;
    padding-left: 2em;
    gap: 0.4em;

    button {
      width: max-content;
      display: flex;
      align-items: center;
      border-radius: 1.56em;
      border: 1.561px solid var(--Dark-Brown, #250900);
      height: 1.78rem;
      padding: 0.34683rem 0.69372rem;
      color: var(--Dark-Brown, #250900);
      text-align: center;
      font-size: 0.607rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.04056rem;
      text-transform: uppercase;
      background: var(--Off-White, #ebe3de);
    }

    .active {
      background: var(--Vibrant-Orange, #ff6123);
    }
  }

  @media (min-width: 600px) {
    margin-block: 1.3em 1.8em;

    .item {
      gap: 0.8em;

      button {
        height: 2.22em;
        padding: 0.44444em 0.88889em;
        font-size: 0.77778rem;
        line-height: 1.33333rem;
      }
    }
  }

  @media (min-width: 1000px) {
    margin-block: 3.5em 1.8em;

    .item {
      gap: 1.33em;
      margin-inline: 1.5em;
    }
  }

  @media (min-width: 1200px) {
    .item {
      padding-left: 12.7em;
    }
  }
`;

export const ImgCarouselContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .inner {
    display: flex;
    gap: 0.6em;
    padding-left: 2em;
  }

  .item {
    min-width: 10.98em;
    min-height: 19.56em;
    width: 10.98em;
    height: 19.56em;

    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 600px) {
    .inner {
      gap: 0.9em;
    }

    .item {
      min-width: 15.97em;
      min-height: 28.44em;
    }
  }

  @media (min-width: 1000px) {
    .inner {
      gap: 1.33em;
    }

    .item {
      min-width: 20.65528rem;
      min-height: 36.88889rem;
    }
  }
`;

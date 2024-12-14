import styled from "styled-components";

export const ClientsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: var(--Dark-Brown, #ff6123);
  padding: 2.2em 0.8em;

  h5 {
    color: var(--Vibrant-Orange, #250900);
    font-size: 1.77778rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }

  section {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 0.5em;
    margin-top: 2em;
  }

  @media (min-width: 600px) {
    padding: 3.56em 1.78em;

    section {
      gap: 1em;
    }

    h5 {
      font-size: 2.66667rem;
      line-height: 3.11111rem;
    }
  }

  @media (min-width: 1000px) {
    padding: 5.33em 2em;

    h5 {
      font-size: 3.55556rem;
      line-height: 4rem;
    }

    section {
      gap: 1.5em;
      flex-flow: row wrap;
      margin-top: 4.6em;
    }
  }

  @media (min-width: 1500px) {
    padding: 5.33em 4em;

    section {
      gap: 2.5em;
    }
  }
`;

export const CardContainer = styled.div`
  width: 8em;
  height: 11em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 0.88889em;
  position: relative;

  @media (min-width: 600px) {
    width: 18em;
    height: 26em;
  }

  @media (min-width: 1000px) {
    width: 23.11111rem;
    height: 34.66667rem;
  }
`;

export const ImgContainer = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 0.89em;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.89em;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 2.28rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.4em;
  background-color: var(--Vibrant-Orange, #250900);
  border-radius: 0 0 0.89em 0.89em;

  @media (min-width: 600px) {
    height: 5.8em;
    padding: 0.88889rem;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h3 {
    color: var(--Vibrant-Orange, #ff6123);
    font-size: 0.66667rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.88889rem;
    text-transform: uppercase;
  }

  p {
    color: var(--Off-White, #ebe3de);
    font-size: 0.44444rem;
    font-style: italic;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 1.33333rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.33333rem;
    }
  }
`;

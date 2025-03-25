import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: var(--Dark-Brown, #250900);
  padding: 2.2em 1.33em;

  h5 {
    color: var(--Vibrant-Orange, #ff6123);
    font-size: 1.77778rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }

  section {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin-top: 2.4em;
    gap: 1em;
  }

  @media (min-width: 600px) {
    padding: 3.56em 1.78em;

    h5 {
      font-size: 2.66667rem;
      line-height: 3.11111rem;
    }
  }

  @media (min-width: 1000px) {
    padding: 4.44em 4em;

    h5 {
      font-size: 3.55556rem;
      line-height: 4rem;
    }

    section {
      flex-flow: row wrap;
      margin-top: 4.6em;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 11.11em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 0.88889em;
  background-color: var(--Off-White, #ebe3de);

  @media (min-width: 1000px) {
    width: 35.33333rem;
    height: 17.77778rem;
  }
`;

export const ImgContainer = styled.picture`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 0.89em;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.89em 0 0 0.89em;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.89em;

  @media (min-width: 600px) {
    padding: 0.89em 2.2em;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  justify-items: center;
  gap: 0.5em;

  h3 {
    color: var(--Dark-Brown, #250900);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.33333rem;
    text-transform: uppercase;
  }

  p {
    color: var(--Dark-Brown, #250900);
    font-size: 0.55556rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.88889rem;
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 1.33333rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 0.66667rem;
      line-height: 1.33333rem;
    }
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: 1.33333rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 0.88889rem;
      line-height: 1.33333rem;
    }
  }
`;

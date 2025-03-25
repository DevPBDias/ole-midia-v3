import styled from "styled-components";

export const ClientsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: var(--Dark-Brown, #ff6123);
  padding: 2.2em 9%;

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
    gap: 1rem;
    margin-top: 2em;
  }

  @media (min-width: 600px) {
    h5 {
      font-size: 2.66667rem;
      line-height: 3.11111rem;
    }
  }

  @media (min-width: 1000px) {
    h5 {
      font-size: 3.55556rem;
      line-height: 4rem;
    }
  }
`;

export const CardContainer = styled.div`
  width: 98.29px;
  height: 117.16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 0.88889em;
  position: relative;
  object-fit: cover;

  @media (min-width: 700px) {
    width: 192.71px;
    height: 229.68px;
  }

  @media (min-width: 1400px) {
    width: 271px;
    height: 323px;
  }

  @media (min-width: 1800px) {
    width: 335.6px;
    height: 400px;
  }

  @media (min-width: 2200px) {
    width: 456.6px;
    height: 550px;
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
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.3rem 0.4rem;
  background-color: var(--Vibrant-Orange, #250900);
  border-radius: 0 0 0.89em 0.89em;

  @media (min-width: 1300px) {
    padding: 0.8rem 0.4rem;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h3 {
    color: var(--Vibrant-Orange, #ff6123);
    width: 100%;
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.88889rem;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: var(--Off-White, #ebe3de);
    width: 100%;
    font-size: 0.45rem;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 760px) {
    h3 {
      font-size: 0.9rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 0.7rem;
      font-weight: 500;
      line-height: 1.33333rem;
    }
  }

  @media (min-width: 1300px) {
    h3 {
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.33333rem;
    }
  }

  @media (min-width: 1920px) {
    h3 {
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 2rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.33333rem;
    }
  }
`;

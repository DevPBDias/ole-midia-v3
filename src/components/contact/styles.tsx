import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: var(--Dark-Brown, #250900);
  padding-block: 2.2em;

  h3 {
    color: var(--Vibrant-Orange, #ff6123);
    font-size: 1.77778rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }

  @media (min-width: 600px) {
    padding-block: 3.56em;

    h3 {
      font-size: 2.66667rem;
      line-height: 3.11111rem;
    }
  }

  @media (min-width: 1000px) {
    padding: 4.44em;

    h3 {
      font-size: 3.55556rem;
      line-height: 4rem;
    }
  }
`;

export const FormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 0.4em;
  margin-top: 2.22em;

  .short_container {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 0.4em;
  }

  .short_content {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 0.4em;
  }

  .email_correct {
    width: 100%;
    color: var(--Dark-Brown, #ff6123);
    font-size: 0.55556rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.66667rem;
  }

  input {
    width: 100%;
    height: 1.77778rem;
    padding: 0.44444rem 0.88889rem;
    border-radius: 0.22222rem;
    background: var(--Off-White, #ebe3de);
    color: var(--Dark-Brown, #250900);
    font-size: 0.55556rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.66667rem;

    &::placeholder {
      color: var(--Dark-Brown, #250900);
      font-size: 0.55556rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.66667rem;
    }
  }

  textarea {
    width: 100%;
    height: 8.88889rem;
    padding: 0.44444rem 0.88889rem;
    flex-shrink: 0;
    color: var(--Dark-Brown, #250900);
    font-size: 0.55556rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.66667rem;
  }

  button {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 0.44444rem 0.88889rem;
    border-radius: 0.44444rem;
    background: var(--Vibrant-Orange, #ff6123);
    flex-shrink: 0;
    border: none;
    color: var(--Dark-Brown, #250900);
    text-align: center;
    font-size: 0.77778rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.33333rem;
    text-transform: uppercase;
    margin-top: 0.9em;
    transition: background 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #ffffff;
      color: var(--Dark-Brown, #250900);
    }
  }

  span {
    width: 100%;
    color: var(--Dark-Brown, #ff6123);
    font-size: 0.55556rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.66667rem;
  }

  @media (min-width: 600px) {
    width: 90%;
    gap: 0.9em;
    margin-block: 1.3em 1.8em;

    .short_content {
      flex-flow: column nowrap;
      gap: 0.9em;
    }

    .short_container {
      flex-flow: row nowrap;
      gap: 0.9em;
    }

    input {
      height: 2.22em;
      font-size: 0.88889rem;
      line-height: 1.33333rem;

      &::placeholder {
        font-size: 0.88889rem;
        line-height: 1.33333rem;
      }
    }

    textarea {
      height: 13.3em;
      font-size: 0.88889rem;
      line-height: 1.33333rem;
    }

    button {
      height: 2.22em;
    }

    span,
    .email_correct {
      font-size: 0.67rem;
      line-height: 0.67rem;
    }
  }

  @media (min-width: 1000px) {
    width: 75%;
    gap: 0.4em;
    margin-block: 5em 1.3em;

    .short_container,
    .short_content {
      gap: 0.4em;
    }

    input {
      height: 3.11em;
      border-radius: 0.66667rem;
    }

    textarea {
      height: 17.8em;
      border-radius: 0.66667rem;
    }
  }
`;

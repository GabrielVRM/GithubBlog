import styled from "styled-components";

export const LinkContainer = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;

  background: ${(props) => props.theme.basePost};

  padding: 1rem;
  border-radius: 10px;
  &:hover {
    opacity: 0.5;
    transition: 0.8s;
    cursor: pointer;
  }

  div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    h1 {
      width: 100%;
      font-size: 1.6rem;
    }
    span {
      width: 30%;
      font-size: 1rem;
    }
  }

  div:nth-child(2) {
    width: 100%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 940px) {
    width: 12rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    div:nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      h1 {
        width: 100%;
        font-size: 1rem;
      }
      span {
        width: 30%;
        font-size: 0.5rem;
      }
    }
  }
`;

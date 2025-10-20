import styled from "styled-components";
export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;

  background: ${(props) => props.theme.basePost};

  padding: 1rem;
  border-radius: 10px;

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
`;

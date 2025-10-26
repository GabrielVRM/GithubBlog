import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  .content {
    width: 54rem;
    height: auto;
    margin: 0 auto;

    h1 {
      margin-bottom: 1rem;
    }
  }
  .cards {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .search-form {
    width: 54rem;
    display: flex;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    .content {
      width: 100%;
      height: auto;
      margin: 0 auto;

      h1 {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
    .search-form {
      width: 90%;
      display: flex;
      margin: 0 auto;
    }
    .cards {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 3rem;
    }
  }
`;
export const Input = styled.input`
  flex: 1;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme.baseInput};
  color: white;

  @media screen and (max-width: 940px) {
    width: 2rem;
  }
`;

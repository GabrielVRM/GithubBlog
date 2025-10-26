import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin-top: -5rem;

  .div-search {
    position: absolute;
    margin: 0 8rem;

    button {
      margin: 0 1rem;
      background: ${(props) => props.theme.baseInput};
      padding: 0.8rem;
      border-radius: 8px;
      color: ${(props) => props.theme.baseText};
      border: none;
      cursor: pointer;

      &:hover {
        transition: 0.5s;
        opacity: 0.3;
      }
    }

    @media screen and (max-width: 940px) {
      position: relative;

      margin: -1rem 1rem;
      h1 {
        font-size: 1.2rem;
      }
      button {
        margin: 0 1rem;
        background: ${(props) => props.theme.baseInput};
        padding: 0.8rem;
        border-radius: 8px;
        color: ${(props) => props.theme.baseText};
        border: none;
        cursor: pointer;

        &:hover {
          transition: 0.5s;
          opacity: 0.3;
        }
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  overflow: hidden;
  margin: 0 auto;
  background: ${(props) => props.theme.baseProfile};
  border-radius: 8px;

  .profile-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    gap: 2rem;
  }

  .text-content {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
  img {
    border-radius: 8px;
    width: 9.25rem;
  }
  .tags {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 940px) {
    width: 100%;
    p {
      font-size: 0.6rem;
    }
    img {
      border-radius: 8px;
      width: 6.25rem;
    }
    .text-content {
      display: flex;
      justify-content: space-between;

      a {
        font-size: 0.8rem;
      }
    }
    .tags {
      font-size: 0.7rem;
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
    width: 10rem;
  }
`;

import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin-top: -5rem;
`;

export const ProfileContainer = styled.div`
  width: 54rem;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  background: ${(props) => props.theme.baseProfile};
  border-radius: 8px;

  .profile-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
    h1 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
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
  }
`;

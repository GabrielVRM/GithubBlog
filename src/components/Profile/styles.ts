import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin-top: -5rem;
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
`;

import { Container, ProfileContainer } from "./styles";

export function ProfileProjects() {
  return (
    <>
      <Container>
        <ProfileContainer>
          <div className="profile-content">
            <div>
              <div className="text-content">
                <a>
                  <span>voltar</span>
                </a>
                <a>
                  <span>Github</span>
                </a>
              </div>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <div className="tags">
              <span>GabrielVRM</span>
              <span>Rocketseat</span>
              <span>follows</span>
            </div>
          </div>
        </ProfileContainer>
      </Container>
    </>
  );
}

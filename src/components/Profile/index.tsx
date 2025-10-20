import { Container, ProfileContainer } from "./styles";

export function Profile() {
  return (
    <>
      <Container>
        <ProfileContainer>
          <div className="profile-content">
            <div className="image">
              <img src="https://github.com/GabrielVRM.png" />
            </div>
            <div>
              <div>
                <div className="text-content">
                  <h1>Gabriel Maximo</h1>
                  <span>Github</span>
                </div>
                <p>
                  Tristique volutpat pulvinar vel massa, pellentesque egestas.
                  Eu viverra massa quam dignissim aenean malesuada suscipit.
                  Nunc, volutpat pulvinar vel mass.
                </p>
              </div>

              <div className="tags">
                <span>GabrielVRM</span>
                <span>Rocketseat</span>
                <span>follows</span>
              </div>
            </div>
          </div>
        </ProfileContainer>
      </Container>
    </>
  );
}

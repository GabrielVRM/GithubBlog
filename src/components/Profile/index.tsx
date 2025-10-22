import { Container, ProfileContainer } from "./styles";

interface ProfileType {
  img: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  follows: string;
}
export function Profile({
  img,
  bio,
  company,
  follows,
  login,
  name,
}: ProfileType) {
  return (
    <>
      <Container>
        <ProfileContainer>
          <div className="profile-content">
            <div className="image">
              <img src={img} />
            </div>
            <div>
              <div>
                <div className="text-content">
                  <h1>{name}</h1>
                  <span>Github</span>
                </div>
                <p>{bio}</p>
              </div>

              <div className="tags">
                <span>{login}</span>
                <span>{company}</span>
                <span>{follows} seguidores</span>
              </div>
            </div>
          </div>
        </ProfileContainer>
      </Container>
    </>
  );
}

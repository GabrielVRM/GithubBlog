import { Link } from "react-router-dom";
import { Container, ProfileContainer } from "./styles";

interface ProfileType {
  img: string | undefined | null;
  name: string | undefined;
  bio: string | undefined | null;
  login: string | undefined;
  company: string | undefined | null;
  follows: number | undefined;
  github: string | undefined;
}
export function Profile({
  github,
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
              <img src={img ?? " "} />
            </div>
            <div>
              <div>
                <div className="text-content">
                  <h1>{name}</h1>
                  <Link to={github ?? "/"}>
                    <span>Github</span>
                  </Link>
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

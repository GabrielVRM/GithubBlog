import { Link } from "react-router-dom";
import { Container, Input, ProfileContainer } from "./styles";
import { useContext, useState, type FormEvent } from "react";
import { ContextApi } from "../../context/api";

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
  const { setUsername } = useContext(ContextApi);

  const [newUser, setNewUser] = useState("");
  function handleNewUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsername(newUser);
    setNewUser("");
  }
  return (
    <>
      <Container>
        <div className="div-search">
          <h1>Trocar de User</h1>
          <form onSubmit={(e) => handleNewUser(e)}>
            <Input
              placeholder="username do github"
              onChange={(e) => setNewUser(e.target.value)}
              value={newUser}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
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

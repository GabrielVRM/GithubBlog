import { useContext } from "react";
import { Profile } from "../../components/Profile";
import { Published } from "../../components/Published";
import { Container } from "./styles";
import { ContextApi } from "../../context/api";

export function Home() {
  const { users } = useContext(ContextApi);
  return (
    <>
      <Container>
        <Profile
          img={users.avatar_url}
          name={users.name}
          bio={users.bio}
          login={users.login}
          company={users.company}
          follows={users.followers}
        />
        <Published />
      </Container>
    </>
  );
}

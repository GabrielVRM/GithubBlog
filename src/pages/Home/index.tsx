import { Profile } from "../../components/Profile";
import { Published } from "../../components/Published";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <Container>
        <Profile />
        <Published />
      </Container>
    </>
  );
}

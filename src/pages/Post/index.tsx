import { useParams } from "react-router-dom";
import { ProfileProjects } from "../../components/ProfileProjects";
import { Container } from "./styles";
import { useContext } from "react";
import { ContextApi } from "../../context/api";

export function Post() {
  const { repos } = useContext(ContextApi);

  const { id } = useParams();
  console.log(id);

  const repoSelected = repos.filter((repo) => repo?.id === Number(id));
  return (
    <>
      <Container>
        <ProfileProjects repo={repoSelected} />
        <div className="paragraph">
          {repoSelected.map((e) => (
            <p>{e?.description}</p>
          ))}
        </div>
      </Container>
    </>
  );
}

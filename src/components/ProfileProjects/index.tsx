import { Link } from "react-router-dom";
import { Container, ProfileContainer } from "./styles";
import { formattedData } from "../../utils/formattedDate";
import type { GitHubRepository } from "../../@types/style";

interface ProfileProjectTypes {
  repo: (Partial<GitHubRepository> | undefined)[];
}
export function ProfileProjects({ repo }: ProfileProjectTypes) {
  return (
    <>
      <Container>
        <ProfileContainer>
          <div className="profile-content">
            {repo.map((e) => (
              <>
                <div>
                  <div className="text-content">
                    <Link to={"/"}>
                      <span>voltar</span>
                    </Link>
                    <Link to={`${e?.html_url}`}>
                      <span>Github</span>
                    </Link>
                  </div>
                  <h1>{e?.name}</h1>
                </div>

                <div className="tags">
                  <span>GabrielVRM</span>
                  <span>{e?.created_at && formattedData(e.created_at)}</span>
                  <span>{0} comments</span>
                </div>
              </>
            ))}
          </div>
        </ProfileContainer>
      </Container>
    </>
  );
}

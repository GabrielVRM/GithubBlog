import { Link } from "react-router-dom";
import { Container, LinkContainer } from "./styles";

interface CardsType {
  id: number | undefined | null;
  title: string | undefined | null;
  created: string | undefined | null;
  descritpion: string | undefined | null;
  language: string | undefined | null;
}

export function Cards({
  title,
  created,
  descritpion,
  language,
  id,
}: CardsType) {
  return (
    <>
      <LinkContainer>
        <Link to={`/post/${id}`}>
          <Container>
            <div>
              <h2>{title}</h2>
              <span>{created}</span>
            </div>
            <div>
              <span>{language}</span>
              <span>{descritpion}</span>
            </div>
          </Container>
        </Link>
      </LinkContainer>
    </>
  );
}

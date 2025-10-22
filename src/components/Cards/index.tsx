import { Container } from "./styles";

interface CardsType {
  title: string;
  created: string;
  descritpion: string | null;
  language: string | null;
}

export function Cards({ title, created, descritpion, language }: CardsType) {
  return (
    <>
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
    </>
  );
}

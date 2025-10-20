import { Cards } from "../Cards";
import { Container, Input } from "./styles";

export function Published() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container>
        <div className="content">
          <h1>Publicações</h1>
          <div className="search-form">
            <Input placeholder="Buscar Conteudo" />
          </div>

          <div className="cards">
            {arr.map((e) => (
              <>
                <Cards />
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

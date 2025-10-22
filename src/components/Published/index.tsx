import { useContext } from "react";
import { Cards } from "../Cards";
import { Container, Input } from "./styles";
import { ContextApi } from "../../context/api";

export function Published() {
  const { repos } = useContext(ContextApi);

  return (
    <>
      <Container>
        <div className="content">
          <h1>Publicações</h1>
          <div className="search-form">
            <Input placeholder="Buscar Conteudo" />
          </div>

          <div className="cards">
            {repos.map((e, index) => (
              <>
                <div key={index}>
                  <Cards
                    title={e.name}
                    descritpion={e.description}
                    created={e.created_at}
                    language={e.language}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

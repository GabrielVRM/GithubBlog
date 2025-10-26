import { useContext, useState } from "react";
import { Cards } from "../Cards";
import { Container, Input } from "./styles";
import { ContextApi } from "../../context/api";
import { formattedData } from "../../utils/formattedDate";

export function Published() {
  const { repos } = useContext(ContextApi);
  const [search, setSearch] = useState<string>("");

  const reposFiltered = repos.filter(
    (repo) => repo && repo.name?.toLowerCase().includes(search)
  );

  return (
    <>
      <Container>
        <div className="content">
          <h1>Publicações</h1>
          <div className="search-form">
            <Input
              placeholder="Buscar Conteudo"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="cards">
            {reposFiltered &&
              reposFiltered.map((e, index) => (
                <>
                  <div key={index}>
                    <Cards
                      id={e?.id}
                      title={e?.name}
                      descritpion={e?.description}
                      created={e?.created_at && formattedData(e?.created_at)}
                      language={e?.language}
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

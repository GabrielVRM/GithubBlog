import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { GitHubRepository, GitHubUser } from "../../@types/style";

interface ApiContextType {
  users: Partial<GitHubUser>;
  repos: GitHubRepository[];
}

export const ContextApi = createContext({} as ApiContextType);

type ApiType = {
  children: ReactNode;
};
export function ContextProvider({ children }: ApiType) {
  const [users, setUsers] = useState<Partial<GitHubUser>>({});
  const [repos, setRepos] = useState<Partial<GitHubUser>>({});

  useEffect(() => {
    //api.github.com/search/issues?q={query} repo:{username}/{repo}
    async function getDataGitHub() {
      const username = "GabrielVRM";
      const url = `https://api.github.com/users/`;
      const urlUsers = `${url}${username}`;
      const urlRepos = `${url}${username}/repos`;
      const res: GitHubUser = (await axios.get(urlUsers)).data;
      const repo = (await axios.get(urlRepos)).data;
      setRepos(repo);
      setUsers(res);
    }

    getDataGitHub();
  }, []);
  if (!users) {
    return;
  }

  return (
    <>
      <ContextApi.Provider value={{ users, repos }}>
        {children}
      </ContextApi.Provider>
    </>
  );
}

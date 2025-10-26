import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { GitHubRepository, GitHubUser } from "../../@types/style";

interface ApiContextType {
  users: Partial<GitHubUser>;
  repos: (Partial<GitHubRepository> | undefined)[];
  setUsername: Dispatch<SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ContextApi = createContext({} as ApiContextType);

type ApiType = {
  children: ReactNode;
};
export function ContextProvider({ children }: ApiType) {
  const [users, setUsers] = useState<Partial<GitHubUser>>({});
  const [repos, setRepos] = useState<Partial<GitHubRepository[]>>([]);
  const [username, setUsername] = useState<string>("GabrielVRM");

  useEffect(() => {
    //api.github.com/search/issues?q={query} repo:{username}/{repo}
    async function getDataGitHub() {
      const url = `https://api.github.com/users/`;
      const urlUsers = `${url}${username}`;
      const urlRepos = `${url}${username}/repos`;
      const res: GitHubUser = (await axios.get(urlUsers)).data;
      const repo = (await axios.get(urlRepos)).data;
      setRepos(repo);
      setUsers(res);
    }

    getDataGitHub();
  }, [username]);
  if (!users) {
    return;
  }
  if (!repos) {
    return;
  }
  return (
    <>
      <ContextApi.Provider value={{ users, repos, setUsername }}>
        {children}
      </ContextApi.Provider>
    </>
  );
}

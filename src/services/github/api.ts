import axios from "axios";
import { User } from "./models";

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: "https://api.github.com",
  timeout: 7000
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);
  const getMembers = async (orgName: string) => {
    try {
      const response = await instance.get(`/orgs/${orgName}/members`);

      if (response.status !== 200) {
        throw new Error(`Server Error. status code is ${response.status}`);
      }

      const members: User[] = response.data;

      return members;
    } catch (err) {
      throw err;
    }
  };

  return getMembers;
};

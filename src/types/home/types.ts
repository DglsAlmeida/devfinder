export interface UserGithubProfile {
  name: string;
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
  twitter_username: string | null;
  location: string | null;
  html_url: string;
  reposQuantity: string;
  created_at: string;
}

export type UserState = {
  user: UserGithubProfile,
  error: boolean,
  loading: boolean,
}

export enum UserActionTypes {
  REQUEST_USER = '@user/REQUEST_USER',
  SUCCESS_USER = '@user/SUCCESS_USER',
  FAILURE_USER = '@user/FAILURE_USER'
}
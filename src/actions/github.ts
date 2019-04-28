import { AxiosError } from "axios";

import { User } from "../services/github/models";
import * as ActionType from "./githubConstants";

interface GetMembersParams {
  companyName: string;
}
interface GetMembersResult {
  users: User[];
}

export const getMembers = {
  start: (params: GetMembersParams) => ({
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
    payload: params
  }),
  succeed: (params: GetMembersParams, result: GetMembersResult) => ({
    type: ActionType.GET_MEMBERS_SUCCEED as typeof ActionType.GET_MEMBERS_SUCCEED,
    payload: { params, result }
  }),
  fail: (params: GetMembersParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true
  })
};

// typescriptとして意味がわかっていない
// 何で succeed: 1 の用に単に数値型を渡すとエラーになって、関数にすると正常に通るのか
export type GithubAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>;

import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as Action from "../actions/githubConstants";
import { getMembers } from "../actions/github";
import { getMembersFactory } from "../services/github/api";

/*
主に利用するAPI郡、これらは全てyield文の中で実行しなければならない
take自体はあまり、every/latestの方が多い
・select ... StoreStateから必要なデータを取得する
・put ... ActionCreatorを実行してActionをdispatchする
・take ... 特定のActionを待ち受ける(takeEvery/takeLatest)
・call ... 外部の非同期処理関数をコールする
・fork ... 自身とは別のスレッドを起動し、そこで特定のタスクを実行。Taskオブジェクトを返す。
・join ... forkの戻り値のTaskオブジェクトを指定して、そのタスクが完了するのを待つ

takeEvery...Actionの数だけ律儀にタスクを実行
takeLatest...Actionのタスクが終了してなく滞っている場合、最新のものだけを実行する
*/
function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;

  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName);

    yield put(getMembers.succeed({ companyName }, { users }));
  } catch (error) {
    yield put(getMembers.fail({ companyName }, error));
  }
}

// Action.GET_MEMBERS_STARTのActionが発行されるのを監視しつづけるタスク
// 受け取ったらrunGetMembersを実行する
export function* watchGetmembers() {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);
}
// 最上位タスクで、
// これをsagaミドルウェアにわたす事で監視タスクのスタンバイが開始される
export default function* rootSaga() {
  yield all([fork(watchGetmembers)]);
}

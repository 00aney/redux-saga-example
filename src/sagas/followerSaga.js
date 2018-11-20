import { call, put, select, takeLatest } from "redux-saga/effects";
import { followerActions, followerTypes } from "../store/ducks/follower";

import GitHubAPI from "../api/GitHubAPIService";

export function* getFollowers(action) {
  console.log("getFollowers", action);
  const url = action.payload;
  const { response, error } = yield call(GitHubAPI.getDataFromURL, url, 8);

  if (response) {
    console.log(response);
  } else {
    console.log(error);
  }
}

function* watchFollowerRequest() {
  yield takeLatest(followerTypes.FOLLOWER_REQUEST, getFollowers);
}

const followerSaga = [watchFollowerRequest()];
export default followerSaga;

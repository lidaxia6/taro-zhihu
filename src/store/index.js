import { createStore, combineReducers } from "redux";

import homeStore from "../pages/home/store";
import myStore from "../pages/my/store";

import Taro from "@tarojs/taro";

let initialState = {
  systemInfo: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "setSystemInfo":
      Taro.getSystemInfo().then((res) => {
        state.systemInfo = res;
      });
      return state;

    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    common: reducer,
    home: homeStore,
    my: myStore,
  })
);

store.dispatch({ type: "setSystemInfo" });
export default store;

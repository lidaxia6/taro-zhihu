import React, { useEffect } from "react";
import Taro, { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.scss";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";

function App(props) {
  // 可以使用所有的 React Hooks

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return <Provider store={store}>{props.children}</Provider>;
}

export default App;

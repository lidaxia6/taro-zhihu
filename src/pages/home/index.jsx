definePageConfig({
  navigationBarTitleText: "首页",
  navigationBarBackgroundColor: "#2554a0",
  navigationBarTextStyle: "white",
  transparentTitle: "auto",

  // 是否启用分享给好友。
  enableShareAppMessage: true,
  // 是否启用分享到朋友圈。
  enableShareTimeline: true,
  // 是否开启当前页面的下拉刷新。
  enablePullDownRefresh: true,
  backgroundTextStyle: "dark",
  // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
  navigationStyle: "custom",
  usingComponents: {},
});

import {
  Button,
  NavBar,
  SearchBar,
  ConfigProvider,
  Tabs,
} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const [menu, setMenu] = useState({});

  const [tab1value, setTab1value] = useState("0");
  useEffect(() => {
    const menu = Taro.getMenuButtonBoundingClientRect();
    console.log("menu ==>", menu);
    setMenu(menu);
    return () => {};
  }, []);

  return (
    <div
      style={{
        paddingBottom: "54px",
        paddingTop: menu.top + "px",
      }}
    >
      <ConfigProvider
        theme={{
          nutuiSearchbarBackground: "#fff",
          nutuiSearchbarContentBackground: "#F7F8FA",
          nutuiSearchbarInputHeight: menu.height + "px",
          nutuiSearchbarInputPadding: "0 10px 0 10px",
          nutuiSearchbarWidth: "70%",
          nutuiSearchbarInputTextAlign: "left",
        }}
      >
        <SearchBar shape="round" maxLength={8} />
      </ConfigProvider>

      <ConfigProvider
        theme={{
          nutuiTabsTitlesBackgroundColor: "#fff",
          nutuiTabsTitlesFontSize: '14px',
          nutuiTabsTabLineColor:'#5396FF',
          nutuiTabsTabLineWidth:'26px',
          nutuiTabsTitlesItemActiveColor:'#000',
          nutuiTabsTitlesPadding:'0 0 0 0'
        }}
      >
        <Tabs
          value={tab1value}
          onChange={(value) => {
            setTab1value(value);
          }}
        >
          <Tabs.TabPane title="热榜">热榜</Tabs.TabPane>
          <Tabs.TabPane title="推荐">推荐</Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    </div>
  );
}

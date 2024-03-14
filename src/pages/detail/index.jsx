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
  ConfigProvider,
  SearchBar,
} from "@nutui/nutui-react-taro";
import { ArrowLeft, Close } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

export default function Index() {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const menu = Taro.getMenuButtonBoundingClientRect();
    console.log("menu ==>", menu);
    setMenu(menu);
    return () => {};
  }, []);

  const onShareToWechatFriend = () => {
    Taro.updateShareMenu({
      withShareTicket: true,
      success () { }
    })
  };

  return (
    <div
      className="navBar"
      style={{
        paddingTop: menu.top + "px",
        paddingBottom: "300px",
      }}
    >
      {/* 搜索框 */}
      <div style={{ width: "100%", background: "#fff" }}>
        <NavBar
          back={
            <>
              <ArrowLeft size={14} />
              返回
            </>
          }
          onBackClick={(e) =>
            Taro.navigateBack({
              delta: 1,
            })
          }
        >
          <ConfigProvider
            theme={{
              nutuiSearchbarBackground: "#fff",
              nutuiSearchbarContentBackground: "#F7F8FA",
              nutuiSearchbarInputHeight: menu.height + "px",
              nutuiSearchbarInputPadding: "0 10px 0 10px",
              nutuiSearchbarWidth: "90%",
              nutuiSearchbarInputTextAlign: "left",
            }}
          >
            <SearchBar shape="round" maxLength={8} />
          </ConfigProvider>
        </NavBar>
      </div>

      {/* Tabs */}
      <div className="main">
        文章详情
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <Button
            type="success"
            size="large"
            style={{ width: "90%", margin: "10px" }}
            onClick={() => onShareToWechatFriend}
          >
            分享给好友
          </Button>
        </div>
      </div>
    </div>
  );
}

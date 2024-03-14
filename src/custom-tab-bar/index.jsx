import { Component, useEffect, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import { Tabbar } from "@nutui/nutui-react-taro";
import { Home, User } from "@nutui/icons-react-taro";
import "./index.scss";

const list = [
  {
    text: "首页",
    // 使用nutui自带的Icon
    ICON: <Home size={18} />,
  },
  {
    text: "我的",
    // 使用nutui自带的Icon
    ICON: <User size={18} />,
  },
];
export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const _activeIndex = Taro.getStorageSync("activeIndex");
    setActiveIndex(_activeIndex);
    return () => {};
  }, [activeIndex]);

  return (
    <div>
      <Tabbar
        fixed
        inactiveColor="#7d7e80"
        activeColor="#1989fa"
        defaultValue={0}
        value={activeIndex}
        onSwitch={(value) => {
          Taro.setStorageSync("activeIndex", value);
          switch (value) {
            case 0:
              Taro.switchTab({
                url: "/pages/home/index",
              });
              break;

            case 1:
              Taro.switchTab({
                url: "/pages/my/index",
              });
              break;

            default:
              break;
          }
        }}
      >
        {list.map((item, index) => {
          return (
            <Tabbar.Item title={item.text} icon={item.ICON ? item.ICON : ""} />
          );
        })}
      </Tabbar>
    </div>
  );
}

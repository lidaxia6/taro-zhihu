import React from "react";
import { NavBar, showToast } from "@nutui/nutui-react-taro";
import { useEffect, useState } from "react";

export default function Search() {
  const [top, setTop] = useState(0);
  useEffect(() => {
    const top = Taro.getMenuButtonBoundingClientRect().top;
    console.log("top ==>", top);
    setTop(top);

    return () => {};
  }, []);
  return (
    <NavBar>
      <span onClick={(e) => Taro.showToast({ title: "标题" })}>订单详情</span>
    </NavBar>
  );
}

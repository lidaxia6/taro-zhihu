// 类组件

import { Component } from "react";
import Taro from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import { Tabbar } from '@nutui/nutui-react-taro';
import { Category, Find, Home } from '@nutui/icons-react-taro';

import "./index.scss";

export default class Index extends Component {
  state = {
    selected: 0,
    color: "#000000",
    selectedColor: "#DC143C",
    list: [
      {
        pagePath: "/pages/index/index",
        selectedIconPath: "../images/tabbar_home_on.png",
        iconPath: "../images/tabbar_home.png",
        text: "首页",
      },
      {
        pagePath: "/pages/my/index",
        selectedIconPath: "../images/tabbar_my_on.png",
        iconPath: "../images/tabbar_my.png",
        text: "个人中心",
      },
    ],
  };

  switchTab(index, url) {
    this.setSelected(index);
    Taro.switchTab({ url });
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx,
    });
  }

  render() {
    const { list, selected, color, selectedColor } = this.state;

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
      
    );
  }
}

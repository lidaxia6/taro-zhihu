import React from "react";
import { VirtualList } from "@nutui/nutui-react-taro";
import "./index.scss";
import Taro from "@tarojs/taro";

export default function ArticleCard() {
  const onScroll = () => {};
  const handleClick = () => {
    Taro.navigateTo({
      url: "/pages/detail/index",
    });
  };
  const itemRender = (data, dataIndex) => {
    return (
      <div className="box" onClick={() => handleClick()}>
        <div className="rank">{data.hot} 万热度</div>
        <div className="main">
          <div className="left">{data.title}</div>
          <div className="right">
            <img src={data.img} width={"90%"} height={"90%"} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ height: "100%" }}>
      <VirtualList
        itemHeight={100}
        list={list}
        itemRender={itemRender}
        onScroll={onScroll}
      />
    </div>
  );
}

const list = [
  {
    title:
      "华为去年销售收入超 7000 亿元，实现超 9% 的增长，研发投入总额排名全球前五，哪些信息值得",
    content: "3 月 14 日，华为 2024 年合作伙伴大会在深圳召开。华为常",
    hot: 1134,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "报道称 4 万余台作弊加油机流向全国，网红打假博主曝光加油站「偷油漏税」，哪些信息值得关注？",
    content: "在加油站加油，加油机每次少加 2%，消费者浑然不觉… 据",
    hot: 931,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "代孕黑市称优质卵子可售 100 万，为何代孕一直屡禁不止？取卵对身体造成的伤害有多大？",
    content: "近日，记者接到投诉，武汉一机构可提供代孕「服务」。「",
    hot: 725,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title: "科幻小说《沙丘》到底讲的是什么内容？",
    content:
      "看了三百页，刚刚买到书时的激动褪去，完全没有去年看《海伯利安》四部曲的惊为天人的想象力和语言。小说里对阴谋",
    hot: 705,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "咪蒙夫妇做短剧每月进账 4 亿多，这对夫妇什么来头？如何解读咪蒙在短剧行业取得的成果？",
    content: "（上观新闻）春节档，《我在八零年代当后妈》（以下简称",
    hot: 580,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "CEO 周受资回应众议院通过 TikTok 剥离法案「令人失望」，如何看待此次事件？公司或将如何应",
    content: "3 月 13 日，TikTokCEO 周受资就美众议院通过 TikTok 剥离",
    hot: 458,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "调查组专家组组长称「燕郊爆炸系输送中的管道泄漏导致」，哪些信息值得关注？",
    content: "燕郊爆炸系输送中的管道泄漏导致 央广网消息，3 月 13 日",
    hot: 328,
    img: "https://picsum.photos/id/1060/536/354",
  },
  {
    title:
      "SpaceX 星舰 3 月 14 日晚将进行第三次试飞，马斯克晒出最新现场图，哪些信息值得关注？",
    content: "凤凰网科技讯 北京时间 3 月 14 日，据外媒消息，马斯克",
    hot: 258,
    img: "https://picsum.photos/id/1060/536/354",
  },
];

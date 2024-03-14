export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/my/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true, // 是否自定义 tabBar
    color: '#000000', // tab 上的文字默认颜色，仅支持十六进制颜色
    selectedColor: '#DC143C', // tab 上的文字选中时的颜色，仅支持十六进制颜色
    backgroundColor: '#ffffff', // tab 的背景色，仅支持十六进制颜色
    position: 'bottom', // tabBar 的位置，仅支持 bottom / top
    list: [ 
      {
        pagePath: 'pages/home/index',
        // selectedIconPath: 'images/tabbar_home_on.png',
        // iconPath: 'images/tabbar_home.png',
        // text: '首页'
      },
      {
        pagePath: 'pages/my/index',
        // selectedIconPath: 'images/tabbar_my_on.png',
        // iconPath: 'images/tabbar_my.png',
        // text: '我的'
      }
    ]
  },

  
  
})

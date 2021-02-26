# pet_community
 demo网址： [宠物社区](pet.zhengjunqin.top)
## 项目简介
  神奇宝贝社区是我学习完react后的一个练手项目，主要为了熟悉掌握react的基本知识，选题于神奇宝贝，类似交友软件和商城。
## 项目功能
  ### 首页模块
    包括添加选择宝可梦、常用功能编辑、查看官方文章、等
  ### 交流圈模块
    包括发布查看动态、动态分类筛选、等
  ### 商城模块
    查看商品、商品分类、购物车、确认订单、等
  ### 用户中心
    登录注册退出、等

## 项目用到的框架、技术
  ### 用户端/web
    >主要使用react框架，没有使用除swiper之外的任何UI框架。自行封装需要使用的UI组件，包括popup、tabbar、navbar等。
    + react
    + react-router-dom
    + react-redux
    + react-router-cache-dom
    + swiper
    + axios
    + less
  ### 服务端/server
    >主要使用node+express快速搭建一个简单的服务器，数据库采用mongodb，引入cors库解决跨域问题。
    + node
    + express
    + mongoose/mongodb
    + axios
    + element-ui
  ### 后台管理平台/admin
    >主要使用vue框架开发，element-ui快速搭建界面
    + vue
    + element-ui
    + less
    
 ## 目前尚待解决问题：
    1. 各个页面之间共享一个滚动条，不能保存页面退出时的滚动位置
    2. 页面滚动尚不流畅
    3. 暂时没有使用防抖、节流、图片懒加载
    4. 验证两次输入密码是否相同时有错误
    5. 首页上拉刷新有bug，并且上拉刷新似乎不够流畅

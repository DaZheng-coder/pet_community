(this.webpackJsonppet_com_web=this.webpackJsonppet_com_web||[]).push([[17],{145:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},196:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var a=c(1),n=c(52),s=c(8),i=c(9),r=c(11),o=c(10),l=c(0),d=c(3),h=c(64),j=c(93),u=(c(145),function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={questions:["\u6ca1\u5403\u996d\u5417\uff1f","\u662f\u4e0d\u662f\u50bb\uff1f","\u4e0b\u96e8\u4e86\u5417\uff1f","\u597d\u5bb6\u4f19\u597d\u5bb6\u4f19"]},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"question-container flex",children:[Object(a.jsx)("span",{className:"font3 question-container-left margin1-r",children:"\u95ee\u9898\u6c42\u52a9"}),Object(a.jsx)("div",{className:"question-container-center flex1 font-gray",children:Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:"\u563b\u6211\u516e\u516e\u6211\u563b\u563b\u563b\u563b\u54c8\u54c8\u54c8\u54c8\u54c8\u4e50\u4e50\u4e50\u54af"})})}),Object(a.jsx)("i",{className:"question-container-right iconfont icon-icon-64"})]})}}]),c}(l.Component)),b=(c(146),function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={id:1,using:[{id:1,type:"tips"},{id:2,type:"weightRecord"},{id:3,type:"wrongRecord"}]},e.changePet=function(){e.props.history.push("/petInfo/".concat(e.state.id))},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.url,c=e.name,n=e.type,s=e.sex,i=e.day,r=this.state.using;return Object(a.jsxs)("div",{className:"userinfo-container",children:[Object(a.jsxs)("div",{className:"flex margin1-b",children:[Object(a.jsx)("div",{className:"margin1-r",onClick:this.changePet,children:Object(a.jsx)(h.a,{url:t})}),Object(a.jsxs)("div",{className:"flex1 flex-column",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"line-center margin1-r font3 font-bolder",children:c}),Object(a.jsx)("span",{className:"line-center font-gray",children:n})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"userinfo-sex line-center margin1-r font-theme default-span",children:Object(a.jsx)("i",{className:"iconfont ".concat(s?"icon-icon-25":"icon-icon-27")})}),Object(a.jsxs)("span",{className:"line-center margin1-r default-span inline-block width1",children:[i,"\u5929"]}),Object(a.jsxs)("span",{className:"line-center margin1-r",children:["\u5df2\u4e3a\u4f60\u76f8\u4f34",i,"\u5929~"]})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"default-span",onClick:this.changePet,children:"\u5207\u6362\u5ba0\u7269"})})]}),Object(a.jsxs)("div",{className:"flex handle-list",children:[r.map((function(e){return Object(a.jsx)(j.a,{type:e.type},e.id)})),Object(a.jsx)(j.a,{type:"more"})]}),Object(a.jsx)(u,{})]})}}]),c}(l.Component)),f=Object(d.o)(b),m=c(95),p=c(84),x=(c(147),function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={pet:{url:"https://iconfont.alicdn.com/s/e332943a-3ed4-46ca-80fb-585bff2a7b9b_origin.svg",name:"\u706b\u7130\u72ac",type:"\u706b\u7cfb",day:5},articleList:[{id:1,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"},{id:2,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"},{id:3,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"},{id:4,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"},{id:5,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"},{id:6,title:"\u5982\u4f55\u5904\u7406\u72d7\u72d7\u7684\u773c\u90e8\u611f\u67d3",brief:"\u7b80\u4ecb",user:{id:11,username:"\u94f2\u5c4e\u5b98\u5b98\u65b9",avatarUrl:"https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png"},img:"https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png",views:98,date:"2020-2-2"}]},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.pet,c=e.articleList;return Object(a.jsxs)("div",{className:"home-container page-pd bg",children:[Object(a.jsx)(f,Object(n.a)({},t)),Object(a.jsxs)(p.a,{children:[Object(a.jsx)("h2",{className:"font4 font-bolder home-title",children:"\u6587\u7ae0\u63a8\u8350"}),c.map((function(e){return Object(a.jsx)(m.a,Object(n.a)({},e),e.id)}))]})]})}}]),c}(l.Component))},74:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var a=c(1),n=c(8),s=c(9),i=c(11),r=c(10),o=c(0),l=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"flex flex-center flex-column flex-wrap-children ".concat(this.props.className),onClick:this.props.click||null,children:[Object(a.jsx)("div",{hidden:!0,className:"handle-item flex-center",children:this.props.children||this.props.url&&Object(a.jsx)("img",{className:"wh100",src:this.props.url,alt:"\u56fe\u6807"})||Object(a.jsx)("i",{className:"iconfont ".concat(this.props.iconClass)})}),Object(a.jsx)("span",{className:"handle-item-text",children:this.props.text})]})}}]),c}(o.Component)},77:function(e,t,c){},84:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var a=c(1),n=c(75),s=c.n(n),i=c(76),r=c(8),o=c(9),l=c(11),d=c(10),h=c(0),j=c(73),u="normal",b="waiting",f="loading",m="loaded",p="end",x=50,O=c(17),g=(c(77),function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={reloadHeight:0,preY:null,status:u,height:0,touching:!1,moreStatus:f},e.handleScroll=function(t){t.stopPropagation();var c=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;n>a&&c+a===n&&(e.setState({moreLoading:f}),e.props.loadingMethod(e.moreLoaded,"addLoad"))},e.handleTouchStart=function(t){e.setState({preY:t.touches[0].clientY}),e.setState({touching:!0})},e.handleTouchMove=function(t){var c=e.state,a=c.reloadHeight,n=c.preY,s=0===window.scrollY,i=t.touches[0].clientY-n;if(s&&i>0){var r=e.dom.getBoundingClientRect().top,o=window.innerHeight-r;e.setState({height:o}),e.setState({reloadHeight:a+i})}else s&&0!==a?e.setState({reloadHeight:a+i}):0===a&&e.setState({height:0});a<0?e.setState({reloadHeight:0}):a<x?e.setState({status:u}):a>=x&&e.setState({status:b}),e.setState({preY:t.touches[0].clientY})},e.handleTouchEnd=function(t){e.state.reloadHeight>x?(e.setState({reloadHeight:x}),e.setState({status:f}),e.reLoading()):e.reBackState(),e.setState({touching:!1})},e.loaded=function(t){console.log("bool",t),t?e.setState({status:p}):e.setState({status:m}),setTimeout((function(){return e.reBackState()}),500)},e.moreLoaded=function(t){console.log("bool",t),t?e.setState({moreStatus:p}):e.setState({moreLoading:m})},e.reLoading=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.loadingMethod(e.loaded);case 1:case"end":return t.stop()}}),t)}))),e.reBackState=function(){e.setState({reloadHeight:0}),e.setState({preY:null}),e.setState({status:u}),e.setState({height:0})},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",Object(O.e)(this.handleScroll))}},{key:"render",value:function(){var e=this,t=this.state,c=t.reloadHeight,n=t.status,s=t.height,i=t.touching,r=t.moreStatus;return Object(a.jsx)("div",{ref:function(t){return e.dom=t},onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,style:{height:"".concat(s?s+"px":"auto")},className:"swiper-content-container",children:Object(a.jsxs)("div",{className:"swiper-content-container-holder",children:[Object(a.jsx)("div",{style:{height:"".concat(c,"px")},className:"load-reload ".concat(i?"":"transition"),children:n===u?Object(a.jsx)("div",{children:"\u4e0b\u62c9\u5373\u53ef\u5237\u65b0"}):n===b?Object(a.jsx)("div",{children:"\u677e\u5f00\u5373\u53ef\u5237\u65b0,\u4e0a\u62c9\u53d6\u6d88\u52a0\u8f7d"}):n===f?Object(a.jsx)(j.a,{}):n===m?Object(a.jsx)("div",{children:"\u52a0\u8f7d\u5b8c\u6210"}):Object(a.jsx)("div",{children:"\u6ca1\u6709\u66f4\u591a\u4e86"})}),Object(a.jsx)("div",{className:"swiper-content-container-holder-article",children:this.props.children}),Object(a.jsx)("div",{className:"load-more",children:r===f?Object(a.jsx)(j.a,{}):r===m?Object(a.jsx)("span",{children:"\u52a0\u8f7d\u5b8c\u6210"}):Object(a.jsx)("span",{children:"\u6ca1\u6709\u66f4\u591a\u4e86"})})]})})}}]),c}(h.Component))},93:function(e,t,c){"use strict";var a=c(52),n=c(1),s=c(8),i=c(9),r=c(11),o=c(10),l=c(0),d=c(3),h=c(74),j=(c(94),function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this;if(this.props.type)switch(this.props.type){case"tips":return Object(n.jsx)(h.a,{text:"\u63d0\u9192",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/s/a5b6a6c9-d219-4cf1-af45-75a914e6de26_origin.svg",alt:"\u63d0\u9192\u56fe\u6807"})});case"weightRecord":return Object(n.jsx)(h.a,{text:"\u4f53\u91cd\u8bb0\u5f55",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/s/0d4244d7-92bb-40e0-b627-c6940b92d437_origin.svg",alt:"\u4f53\u91cd\u8bb0\u5f55"})});case"wrongRecord":return Object(n.jsx)(h.a,{text:"\u5f02\u5e38\u8bb0\u5f55",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/s/d93a7074-ceda-4a56-992e-15260a9c27ae_origin.svg",alt:"\u5f02\u5e38\u8bb0\u5f55"})});case"petMedicalRecord":return Object(n.jsx)(h.a,{text:"\u5ba0\u7269\u75c5\u5386",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/s/b11c707a-19ed-4d1f-8679-65ccdf66b838_origin.svg",alt:"\u5ba0\u7269\u75c5\u5386"})});case"notes":return Object(n.jsx)(h.a,{text:"\u8bb0\u4e8b",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/t/63239314-5906-4cac-88f6-04c946449b60.png",alt:"\u8bb0\u4e8b"})});case"bookKeeping":return Object(n.jsx)(h.a,{text:"\u8bb0\u8d26",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/t/2ead837d-1323-42d5-91e5-765c60e2327d.png",alt:"\u8bb0\u8d26"})});case"petWalking":return Object(n.jsx)(h.a,{text:"\u6e9c\u5ba0",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/t/aa8abbe2-2c6e-4374-b427-3c8d3d27a3c0.png",alt:"\u6e9c\u5ba0"})});case"storeGoods":return Object(n.jsx)(h.a,{text:"\u56e4\u8d27",children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/t/a7f0ff1b-cb9e-41a6-a666-47f58622a822.png",alt:"\u56e4\u8d27"})});case"more":return Object(n.jsx)(h.a,{text:"\u66f4\u591a",click:function(){e.props.history.push("/more")},children:Object(n.jsx)("img",{className:"wh100",src:"https://iconfont.alicdn.com/s/17e0faf3-c359-4f86-997a-935499e69683_origin.svg",alt:"\u66f4\u591a"})});case"edit":return Object(n.jsx)(h.a,{text:"\u7f16\u8f91",click:this.props.click||null,children:Object(n.jsx)("div",{className:"radius05 padding05 handle-item-edit",children:Object(n.jsx)("i",{className:"iconfont icon-icon-56 font-white"})})});default:return Object(n.jsx)(h.a,Object(a.a)({},this.props))}}}]),c}(l.Component));t.a=Object(d.o)(j)},94:function(e,t,c){},95:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var a=c(1),n=c(8),s=c(9),i=c(11),r=c(10),o=c(0),l=c(64),d=c(92),h=(c(96),function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var e=this.props,t=(e.id,e.title),c=e.brief,n=e.user,s=e.views,i=e.date,r=e.img;return Object(a.jsxs)("div",{className:"article-item margin1-tb",children:[Object(a.jsx)("div",{className:"font3 font-bolder margin1-b",children:t}),Object(a.jsxs)("div",{className:"flex margin1-b",children:[Object(a.jsxs)("div",{className:"flex1 flex flex-column",children:[Object(a.jsxs)("div",{className:"flex margin05-b",children:[Object(a.jsx)("div",{className:"margin05-r",children:Object(a.jsx)(l.a,{size:"mini",url:n&&n.avatarUrl})}),Object(a.jsx)("div",{className:"flex flex-column",children:Object(a.jsx)("span",{className:"font-gray",children:n&&n.username})})]}),Object(a.jsx)("div",{className:"flex1",children:Object(a.jsx)("span",{className:"font25",children:c})}),Object(a.jsx)("div",{children:Object(a.jsxs)("span",{className:"font-gray",children:["\u9605\u8bfb\u6b21\u6570: ",s,"\u6b21 ",i]})})]}),Object(a.jsx)("div",{className:"article-item-img",children:Object(a.jsx)("img",{className:"wh100",src:r,alt:"\u6587\u7ae0\u9644\u56fe"})})]}),Object(a.jsx)(d.a,{})]})}}]),c}(o.Component))},96:function(e,t,c){}}]);
//# sourceMappingURL=17.90dde1a2.chunk.js.map
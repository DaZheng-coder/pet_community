(this.webpackJsonppet_com_web=this.webpackJsonppet_com_web||[]).push([[24],{178:function(t,n,e){},188:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(8),c=e(9),i=e(11),u=e(10),s=e(0),a=e(18),d=e(50),f=e(49),l=(e(178),function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).state={dynamicList:[]},t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){Object(f.s)(this.props.app_user._id).then((function(t){console.log("\u83b7\u53d6\u52a8\u6001\u5217\u8868\u6210\u529f",t)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{title:"\u6211\u7684\u52a8\u6001"})})}}]),e}(s.Component));n.default=Object(a.b)((function(t){return{app_user:t.user}}))(l)},49:function(t,n,e){"use strict";e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"x",(function(){return l})),e.d(n,"y",(function(){return p})),e.d(n,"v",(function(){return h})),e.d(n,"z",(function(){return g})),e.d(n,"u",(function(){return m})),e.d(n,"t",(function(){return b})),e.d(n,"e",(function(){return j})),e.d(n,"w",(function(){return v})),e.d(n,"d",(function(){return y})),e.d(n,"c",(function(){return O})),e.d(n,"a",(function(){return _})),e.d(n,"n",(function(){return k})),e.d(n,"b",(function(){return S})),e.d(n,"o",(function(){return x})),e.d(n,"r",(function(){return w})),e.d(n,"q",(function(){return C})),e.d(n,"p",(function(){return T})),e.d(n,"s",(function(){return A})),e.d(n,"i",(function(){return E})),e.d(n,"k",(function(){return N})),e.d(n,"m",(function(){return P})),e.d(n,"j",(function(){return R})),e.d(n,"l",(function(){return D}));var r=e(59),o=e.n(r),c=(e(62),e(17)),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,u=o.a.create({baseURL:i});u.interceptors.request.use((function(t){var n=Object(c.c)("userToken");return n&&(console.log("\u6709token\uff0c\u8bbe\u7f6etoken1",n),t.headers.Authorization="Bearer "+n),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){if(!t.code)return t;switch(t.code){case 200:return t.data;case 401:console.log("\u7528\u6237\u672a\u767b\u5f55");break;case 403:console.log("\u7528\u6237token\u8fc7\u671f");break;default:window.alert("\u9519\u8bef\u6d88\u606f",t.data.msg),console.log("\u9519\u8bef\u6d88\u606f",t.data.msg)}}));var s=u,a=function(){return s.get("/categories/commodity")},d=function(t,n){return s.get("/commodities/".concat(t,"/").concat(n))},f=function(t){return s.get("/commodity/".concat(t))},l=function(t){return s.get("/user/detail/".concat(t))},p=function(){return s.get("/user/list/some")},h=function(t){return s.post("/register",t)},g=function(t,n){return s.put("/user/update/".concat(t),n)},m=function(t){return s.post("/login",t)},b=function(t,n){return s.get("/user/follow/add/".concat(t,"/").concat(n))},j=function(t){return s.get("/cart/list/".concat(t))},v=function(t,n){return s.put("/cart/list/update/".concat(t),n)},y=function(t,n){return s.post("/cart/list/add/".concat(t),n)},O=function(t){return s.get("/address/list/".concat(t))},_=function(t){return s.post("/address/create",t)},k=function(t){return s.delete("address/delete/".concat(t))},S=function(t){return s.post("/order/create",t)},x=function(t){return s.post("/dynamic/create",t)},w=function(t){return s.get("/dynamic/list/".concat(t))},C=function(t,n){return s.get("/dynamic/good/".concat(t,"/").concat(n))},T=function(t){return s.get("/dynamic/detail/".concat(t))},A=function(t){return s.get("dynamic/my/list/".concat(t))},E=function(t){return s.post("/common/create",t)},N=function(t,n){return s.get("/common/good/".concat(t,"/").concat(n))},P=function(t){return s.get("/common/second/detail/".concat(t))},R=function(t){return s.delete("/common/delete/".concat(t))},D=function(t){return s.get("/common/my/list/".concat(t))}},50:function(t,n,e){"use strict";var r=e(1),o=e(8),c=e(9),i=e(11),u=e(10),s=e(0),a=e(3),d=(e(51),function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).state={height:0},t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.navbar.clientHeight;this.setState({height:t}),this.props.getHeight&&this.props.getHeight(t)}},{key:"render",value:function(){var t=this;return console.log("this.props.style",this.props.style),Object(r.jsxs)("div",{ref:function(n){return t.navbar=n},style:this.props.style||{backgroundColor:this.props.bgColor||"#FFF",top:0},className:"navbar-container padding1 flex ".concat(this.props.className," ").concat(this.props.noSticky||"sticky"),children:[Object(r.jsx)("div",{children:"boolean"===typeof this.props.leftSlot||this.props.leftSlot||Object(r.jsx)("i",{className:"iconfont icon-icon-63 line-center",style:{color:this.props.color},onClick:function(){return t.props.history.goBack()}})}),Object(r.jsx)("div",{className:"flex1 text-center margin1-lr",children:this.props.centerSlot||Object(r.jsx)("span",{className:"font3 font-bold",style:{color:this.props.color},children:this.props.title})}),Object(r.jsx)("div",{className:"navbar-container-right",children:this.props.rightSlot||""})]})}}]),e}(s.Component));n.a=Object(a.o)(d)},51:function(t,n,e){}}]);
//# sourceMappingURL=24.98b82d67.chunk.js.map
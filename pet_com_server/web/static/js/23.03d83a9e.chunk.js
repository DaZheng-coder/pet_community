(this.webpackJsonppet_com_web=this.webpackJsonppet_com_web||[]).push([[23],{176:function(n,t,e){},186:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return f}));var c=e(1),r=e(8),o=e(9),i=e(11),s=e(10),a=e(0),u=e(17),d=e(49),l=e(54),f=(e(176),function(n){Object(i.a)(e,n);var t=Object(s.a)(e);function e(){var n;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).state={order:null},n}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var n=Object(u.c)("order");this.setState({order:n});var t=Object(u.c)("newCart");console.log("\u65b0\u7684\u8d2d\u7269\u8f66\u730e\u8c79~~~~",t),Object(d.w)(n.user_id,t).then((function(n){return console.log("\u8ddf\u65b0\u6210\u529f",n)}))}},{key:"componentWillUnmount",value:function(){localStorage.removeItem("order")}},{key:"render",value:function(){var n=this,t=this.state.order;return Object(c.jsxs)("div",{className:"bg router-view",children:[Object(c.jsxs)("div",{className:"success-container",children:[Object(c.jsx)("i",{className:"margin1-r success-i iconfont icon-icon-60"}),Object(c.jsx)("h3",{children:"\u8d2d\u4e70\u6210\u529f"})]}),Object(c.jsx)("div",{className:"padding1",children:t&&Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u8ba2\u5355\u7f16\u53f7:"}),Object(c.jsx)("span",{children:t._id})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u7528\u6237\u540d\uff1a"}),Object(c.jsx)("span",{children:t.username})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u7528\u6237id\uff1a"}),Object(c.jsx)("span",{children:t.user_id})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u6536\u8d27\u5730\u5740\uff1a"}),Object(c.jsx)("span",{children:t.address})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u6536\u8d27\u5907\u6ce8\uff1a"}),Object(c.jsx)("span",{children:t.note})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"margin1-r",children:"\u5b9e\u4ed8\u91d1\u989d\uff1a"}),Object(c.jsx)("span",{children:t.totalPrice})]}),Object(c.jsx)("span",{className:"margin1-r",children:"\u8d2d\u7269\u4fe1\u606f:"}),Object(c.jsx)("div",{className:"margin1-l",children:t.commodities.map((function(n,t){return Object(c.jsxs)("div",{className:"flex space-between",children:[Object(c.jsxs)("span",{children:[n.name," x ",n.count]}),Object(c.jsx)("span",{children:(parseInt(n.price)*n.count).toFixed(2)})]},t)}))})]})]})}),Object(c.jsx)(l.a,{onClick:function(){return n.props.history.replace("/shop")},className:" margin2-lr",children:"\u70b9\u51fb\u8df3\u8f6c\u5230\u5546\u57ce\u9996\u9875"})]})}}]),e}(a.Component))},49:function(n,t,e){"use strict";e.d(t,"f",(function(){return u})),e.d(t,"g",(function(){return d})),e.d(t,"h",(function(){return l})),e.d(t,"x",(function(){return f})),e.d(t,"y",(function(){return j})),e.d(t,"v",(function(){return p})),e.d(t,"z",(function(){return m})),e.d(t,"u",(function(){return h})),e.d(t,"t",(function(){return b})),e.d(t,"e",(function(){return O})),e.d(t,"w",(function(){return g})),e.d(t,"d",(function(){return v})),e.d(t,"c",(function(){return x})),e.d(t,"a",(function(){return y})),e.d(t,"n",(function(){return _})),e.d(t,"b",(function(){return k})),e.d(t,"o",(function(){return N})),e.d(t,"r",(function(){return w})),e.d(t,"q",(function(){return C})),e.d(t,"p",(function(){return S})),e.d(t,"s",(function(){return P})),e.d(t,"i",(function(){return T})),e.d(t,"k",(function(){return A})),e.d(t,"m",(function(){return E})),e.d(t,"j",(function(){return R})),e.d(t,"l",(function(){return D}));var c=e(59),r=e.n(c),o=(e(62),e(17)),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,s=r.a.create({baseURL:i});s.interceptors.request.use((function(n){var t=Object(o.c)("userToken");return t&&(console.log("\u6709token\uff0c\u8bbe\u7f6etoken1",t),n.headers.Authorization="Bearer "+t),n}),(function(n){return Promise.reject(n)})),s.interceptors.response.use((function(n){if(!n.code)return n;switch(n.code){case 200:return n.data;case 401:console.log("\u7528\u6237\u672a\u767b\u5f55");break;case 403:console.log("\u7528\u6237token\u8fc7\u671f");break;default:window.alert("\u9519\u8bef\u6d88\u606f",n.data.msg),console.log("\u9519\u8bef\u6d88\u606f",n.data.msg)}}));var a=s,u=function(){return a.get("/categories/commodity")},d=function(n,t){return a.get("/commodities/".concat(n,"/").concat(t))},l=function(n){return a.get("/commodity/".concat(n))},f=function(n){return a.get("/user/detail/".concat(n))},j=function(){return a.get("/user/list/some")},p=function(n){return a.post("/register",n)},m=function(n,t){return a.put("/user/update/".concat(n),t)},h=function(n){return a.post("/login",n)},b=function(n,t){return a.get("/user/follow/add/".concat(n,"/").concat(t))},O=function(n){return a.get("/cart/list/".concat(n))},g=function(n,t){return a.put("/cart/list/update/".concat(n),t)},v=function(n,t){return a.post("/cart/list/add/".concat(n),t)},x=function(n){return a.get("/address/list/".concat(n))},y=function(n){return a.post("/address/create",n)},_=function(n){return a.delete("address/delete/".concat(n))},k=function(n){return a.post("/order/create",n)},N=function(n){return a.post("/dynamic/create",n)},w=function(n){return a.get("/dynamic/list/".concat(n))},C=function(n,t){return a.get("/dynamic/good/".concat(n,"/").concat(t))},S=function(n){return a.get("/dynamic/detail/".concat(n))},P=function(n){return a.get("dynamic/my/list/".concat(n))},T=function(n){return a.post("/common/create",n)},A=function(n,t){return a.get("/common/good/".concat(n,"/").concat(t))},E=function(n){return a.get("/common/second/detail/".concat(n))},R=function(n){return a.delete("/common/delete/".concat(n))},D=function(n){return a.get("/common/my/list/".concat(n))}},54:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var c=e(1),r=e(8),o=e(9),i=e(11),s=e(10),a=e(0),u=(e(55),function(n){Object(i.a)(e,n);var t=Object(s.a)(e);function e(){var n;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).handleClick=function(t){if(t.stopPropagation(),"useless"===n.props.type)return!1;n.props.onClick(t)},n}return Object(o.a)(e,[{key:"render",value:function(){return Object(c.jsx)("div",{onClick:this.handleClick,style:this.props.style,className:"my-button ".concat(this.props.type||"default"," ").concat(this.props.className),children:this.props.title||this.props.children})}}]),e}(a.Component))},55:function(n,t,e){}}]);
//# sourceMappingURL=23.03d83a9e.chunk.js.map
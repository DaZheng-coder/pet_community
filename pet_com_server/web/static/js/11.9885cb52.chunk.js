(this.webpackJsonppet_com_web=this.webpackJsonppet_com_web||[]).push([[11],{172:function(t,e,n){},173:function(t,e,n){},193:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(52),o=n(53),i=n(8),a=n(9),s=n(11),u=n(10),l=n(0),d=n(18),f=n(50),p=n(81);var m=n(61);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){c=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(t,e)||Object(m.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=n(54),j=(n(172),n(17)),g=n(3),O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){e.stopPropagation(),t.props.updateCommodityList(!1,"","","filter")},t.handleOnChange=function(e){e.stopPropagation();var n=e.target.checked;t.props.updateCommodityList(!1,"checked",n)},t.handleSettlement=function(){var e=t.props.cart,n=e.items.filter((function(t){return 1==t.checked})),r=e.items.filter((function(t){return!0!==t.checked})),c=Object.assign(e,{items:r});Object(j.d)("orderList",n),Object(j.d)("newCart",c),t.props.history.push("/fillOrder")},t.isSomeChecked=function(){var e=t.props.cart;if(e.items){var n=e.items.filter((function(t){return!0===t.checked}));return console.log("\u771f\u5047",n,n.length>0),n.length>0}return!1},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=h(t.totalPriceChecked,2),n=e[0],c=e[1],o=t.mode;return Object(r.jsxs)("div",{className:"cart-footer bg padding05 flex",children:[Object(r.jsxs)("label",{className:"margin1-l",htmlFor:"",children:[Object(r.jsx)("input",{type:"checkbox",onChange:this.handleOnChange,checked:c,name:"",value:""}),Object(r.jsx)("span",{className:"font3",children:" \u5168\u9009"})]}),Object(r.jsx)("span",{className:"margin1-l flex1",children:o?Object(r.jsx)("span",{}):Object(r.jsxs)(l.Fragment,{children:[Object(r.jsx)("span",{className:"font3 font-deep-gray",children:"\u5408\u8ba1\uff1a"}),Object(r.jsxs)("span",{className:"font3 font-bolder",children:["\uffe5",n]})]})}),o?Object(r.jsx)(b.a,{onClick:this.handleDelete,className:"cart-footer-btn",type:"danger",children:"\u5220\u9664"}):Object(r.jsx)(b.a,{onClick:this.handleSettlement,className:"cart-footer-btn",type:this.isSomeChecked()?"danger":"useless",children:"\u53bb\u7ed3\u7b97"})]})}}]),n}(l.Component),y=Object(g.o)(O),v=n(49),x=(n(173),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={mode:0,commodityList:[],cart:{}},t.changeMode=function(e){e.stopPropagation();var n=t.state.mode;t.setState({mode:!n})},t.setNewNum=function(e,n){t.updateCommodityList(n,"count",e)},t.handleChecked=function(e,n){t.updateCommodityList(n,"checked",e.target.checked)},t.computedTotalPrice=function(){var e=0,n=t.state.cart.items,r=n&&n.length>0&&n.map((function(t){return console.log("*************\u8fdb\u5165\u5faa\u73af"),t.checked?(e++,parseFloat(t.price)*t.count):0})).reduce((function(t,r){return console.log("index",e),console.log("commodityList.length",n.length,t),parseFloat(t)+parseFloat(r)}));return console.log("\u603b\u4ef7\u683c",r),r?[r.toFixed(2),e==n.length]:[0,!1]},t.updateCommodityList=function(e,n,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"map",i=t.state.commodityList,a=i[c]((function(t){return"filter"==c?!0!==t.checked:e?t._id==e?Object.assign(t,Object(o.a)({},n,r)):t:(console.log("\u5168\u9009",r),Object.assign(t,Object(o.a)({},n,r)))}));t.setState({commodityList:a});var s=t.state.cart,u=Object.assign(s,{items:a});console.log("\u65b0\u7684",u),Object(v.w)(t.props.user._id,u).then((function(t){console.log("\u66f4\u65b0\u6570\u636e\u6210\u529f",t)}))},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(v.e)(this.props.user._id).then((function(e){console.log("\u83b7\u53d6\u8d2d\u7269\u8f66\u5217\u8868",e.data.items),t.setState({commodityList:e.data.items}),t.setState({cart:e.data},(function(){return console.log("cart",t.state.cart)}))}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.commodityList,o=e.mode,i=e.cart;return Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{bgColor:"red",color:"#fff",title:"\u8d2d\u7269\u8f66",rightSlot:Object(r.jsx)("span",{onClick:this.changeMode,style:{color:"#fff"},children:o?"\u5b8c\u6210":"\u7f16\u8f91"})}),n.length>0?Object(r.jsx)("div",{className:"bg padding1",children:n.map((function(e){return Object(r.jsxs)("div",{className:"flex cart-commodity-bar",children:[Object(r.jsx)("input",{onChange:function(n){return t.handleChecked(n,e._id)},checked:e.checked,type:"checkbox",name:"",value:""}),Object(r.jsx)(p.a,Object(c.a)(Object(c.a)({},e),{},{setNewNum:t.setNewNum,className:"flex1",inCart:!0}))]},e._id)}))}):Object(r.jsx)("span",{children:"\u8d2d\u7269\u8f66\u6ca1\u6709\u6570\u636e\u5594"}),Object(r.jsx)(y,{mode:o,cart:i,totalPriceChecked:this.computedTotalPrice(),updateCommodityList:this.updateCommodityList})]})}}]),n}(l.Component));e.default=Object(d.b)((function(t){return{user:t.user}}))(x)},49:function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"x",(function(){return f})),n.d(e,"y",(function(){return p})),n.d(e,"v",(function(){return m})),n.d(e,"z",(function(){return h})),n.d(e,"u",(function(){return b})),n.d(e,"t",(function(){return j})),n.d(e,"e",(function(){return g})),n.d(e,"w",(function(){return O})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return x})),n.d(e,"n",(function(){return k})),n.d(e,"b",(function(){return N})),n.d(e,"o",(function(){return C})),n.d(e,"r",(function(){return w})),n.d(e,"q",(function(){return S})),n.d(e,"p",(function(){return P})),n.d(e,"s",(function(){return _})),n.d(e,"i",(function(){return A})),n.d(e,"k",(function(){return L})),n.d(e,"m",(function(){return F})),n.d(e,"j",(function(){return D})),n.d(e,"l",(function(){return T}));var r=n(59),c=n.n(r),o=(n(62),n(17)),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,a=c.a.create({baseURL:i});a.interceptors.request.use((function(t){var e=Object(o.c)("userToken");return e&&(console.log("\u6709token\uff0c\u8bbe\u7f6etoken1",e),t.headers.Authorization="Bearer "+e),t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){if(!t.code)return t;switch(t.code){case 200:return t.data;case 401:console.log("\u7528\u6237\u672a\u767b\u5f55");break;case 403:console.log("\u7528\u6237token\u8fc7\u671f");break;default:window.alert("\u9519\u8bef\u6d88\u606f",t.data.msg),console.log("\u9519\u8bef\u6d88\u606f",t.data.msg)}}));var s=a,u=function(){return s.get("/categories/commodity")},l=function(t,e){return s.get("/commodities/".concat(t,"/").concat(e))},d=function(t){return s.get("/commodity/".concat(t))},f=function(t){return s.get("/user/detail/".concat(t))},p=function(){return s.get("/user/list/some")},m=function(t){return s.post("/register",t)},h=function(t,e){return s.put("/user/update/".concat(t),e)},b=function(t){return s.post("/login",t)},j=function(t,e){return s.get("/user/follow/add/".concat(t,"/").concat(e))},g=function(t){return s.get("/cart/list/".concat(t))},O=function(t,e){return s.put("/cart/list/update/".concat(t),e)},y=function(t,e){return s.post("/cart/list/add/".concat(t),e)},v=function(t){return s.get("/address/list/".concat(t))},x=function(t){return s.post("/address/create",t)},k=function(t){return s.delete("address/delete/".concat(t))},N=function(t){return s.post("/order/create",t)},C=function(t){return s.post("/dynamic/create",t)},w=function(t){return s.get("/dynamic/list/".concat(t))},S=function(t,e){return s.get("/dynamic/good/".concat(t,"/").concat(e))},P=function(t){return s.get("/dynamic/detail/".concat(t))},_=function(t){return s.get("dynamic/my/list/".concat(t))},A=function(t){return s.post("/common/create",t)},L=function(t,e){return s.get("/common/good/".concat(t,"/").concat(e))},F=function(t){return s.get("/common/second/detail/".concat(t))},D=function(t){return s.delete("/common/delete/".concat(t))},T=function(t){return s.get("/common/my/list/".concat(t))}},50:function(t,e,n){"use strict";var r=n(1),c=n(8),o=n(9),i=n(11),a=n(10),s=n(0),u=n(3),l=(n(51),function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={height:0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.navbar.clientHeight;this.setState({height:t}),this.props.getHeight&&this.props.getHeight(t)}},{key:"render",value:function(){var t=this;return console.log("this.props.style",this.props.style),Object(r.jsxs)("div",{ref:function(e){return t.navbar=e},style:this.props.style||{backgroundColor:this.props.bgColor||"#FFF",top:0},className:"navbar-container padding1 flex ".concat(this.props.className," ").concat(this.props.noSticky||"sticky"),children:[Object(r.jsx)("div",{children:"boolean"===typeof this.props.leftSlot||this.props.leftSlot||Object(r.jsx)("i",{className:"iconfont icon-icon-63 line-center",style:{color:this.props.color},onClick:function(){return t.props.history.goBack()}})}),Object(r.jsx)("div",{className:"flex1 text-center margin1-lr",children:this.props.centerSlot||Object(r.jsx)("span",{className:"font3 font-bold",style:{color:this.props.color},children:this.props.title})}),Object(r.jsx)("div",{className:"navbar-container-right",children:this.props.rightSlot||""})]})}}]),n}(s.Component));e.a=Object(u.o)(l)},51:function(t,e,n){},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(53);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},53:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(1),c=n(8),o=n(9),i=n(11),a=n(10),s=n(0),u=(n(55),function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).handleClick=function(e){if(e.stopPropagation(),"useless"===t.props.type)return!1;t.props.onClick(e)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{onClick:this.handleClick,style:this.props.style,className:"my-button ".concat(this.props.type||"default"," ").concat(this.props.className),children:this.props.title||this.props.children})}}]),n}(s.Component))},55:function(t,e,n){},58:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},61:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(58);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(1),c=n(8),o=n(9),i=n(11),a=n(10),s=n(0),u=(n(82),function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={number:t.props.number||1},t.sub=function(e){e.stopPropagation();var n=t.state.number;1!=n&&t.setState({number:--n},(function(){return t.props.setNewNum(n)}))},t.add=function(e){e.stopPropagation();var n=t.state.number;t.setState({number:++n},(function(){return t.props.setNewNum(n)}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"timer-container",children:[Object(r.jsx)("div",{onClick:this.sub,className:"tc-sub",children:"-"}),Object(r.jsx)("div",{className:"tc-number",children:this.state.number}),Object(r.jsx)("div",{onClick:this.add,className:"tc-add",children:"+"})]})}}]),n}(s.Component))},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(1),c=n(8),o=n(9),i=n(11),a=n(10),s=n(0),u=n(72),l=(n(83),function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={count:t.props.count},t.setNewNum=function(e){var n=t.props._id;t.setState({count:e},(function(){return t.props.setNewNum(e,n)}))},t}return Object(o.a)(n,[{key:"render",value:function(){console.log("commodityBar~~~~~~~~~",this.props);var t=this.props,e=t.inCart,n=t._id,c=t.name,o=t.cover,i=t.price,a=this.state.count;return console.log("commodity",this.props,n,c,i,a),Object(r.jsxs)("div",{className:"padding1 commodity-bar-container flex bg ".concat(this.props.className),children:[Object(r.jsx)("img",{className:"margin1-r commodity-bar-container-img",src:o,alt:"\u5546\u54c1\u56fe\u7247"}),Object(r.jsxs)("div",{className:"commodity-bar-container-info flex flex1 flex-column",children:[Object(r.jsx)("span",{className:"font3",children:c}),Object(r.jsxs)("div",{className:"commodity-bar-container-info-price flex",children:[Object(r.jsxs)("span",{className:"font4 font-theme",children:["\uffe5",e?(parseFloat(i)*a).toFixed(2):parseFloat(i).toFixed(2)]}),this.props.slot||e&&Object(r.jsx)(u.a,{number:a,setNewNum:this.setNewNum})]}),e?"":Object(r.jsx)("span",{className:"font-deep-gray",children:"\u5df2\u9009\u89c4\u683c"})]})]})}}]),n}(s.Component))},82:function(t,e,n){},83:function(t,e,n){}}]);
//# sourceMappingURL=11.9885cb52.chunk.js.map
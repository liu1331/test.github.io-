(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[1],{109:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(33),a=r(44),c=r(1),o=r(10),u=function(){var t=Object(a.a)(Object(n.a)().mark((function t(e){var a,c,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=!1,c=null;try{c=localStorage.getItem("token")}catch(n){console.log(n)}return t.next=5,Promise.resolve().then(r.bind(null,83)).then((function(t){return t.isAuthorizedOnlyModalList}));case 5:return o=t.sent,e&&(a=o[e]),t.abrupt("return",c?a&&!c:a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(t){var e=t.path,r=t.search,n=t.searchParams,a="";if(e&&(a=e),r&&(a="/".concat(r.name,"/").concat(r.value)),n)for(var c in n)a+="/".concat(n[c]);return a};function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",r=Object(o.h)(),s=Object(o.g)(),l=Object(o.f)(),d=l.push,O=l.goBack,b=l.replace,p=function(t){t&&t.stopPropagation(),O()},j=function(t){t&&t.stopPropagation(),s.state&&s.state.background?b(Object(c.a)({},s.state.background)):d("/",void 0)},f=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var r,a,o=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:{},t.next=3,u(e);case 3:if(!t.sent){t.next=5;break}return t.abrupt("return");case 5:(a=s.state&&s.state.background?s.state.background:s).pathname.split("/").includes("page")&&(a={hash:"",pathname:"/",search:"",state:void 0}),b(i(Object(c.a)({search:{name:"page",value:e}},r)),{background:r.locationState||a});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{params:r,back:p,close:j,pushHistoryTo:f,location:(null===(t=s.state)||void 0===t?void 0:t.background)||s}}},116:function(t,e,r){},193:function(t,e,r){"use strict";r.r(e);var n,a=r(0),c=(r(116),r(10)),o=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(4),r.e(6)]).then(r.bind(null,339))})),u=Object(a.lazy)((function(){return r.e(5).then(r.bind(null,340))}));!function(t){t.BASKET="/basket",t.PRODUCT_CONTENT="/productContent"}(n||(n={}));var i=[{path:"/",exact:!0,component:o},{path:"/test.github.io-/",exact:!0,component:o},{path:n.BASKET,component:u,exact:!0},{path:n.PRODUCT_CONTENT,component:o,exact:!0}],s=r(1),l=r(7),d=r(3),O=r(83),b=r(6),p=["Component"],j=function(t){t.isOpen,t.background;var e=t.location,r=Object(a.useState)(!1),n=Object(d.a)(r,2);n[0],n[1],Object(c.f)().push;return console.log(e),Object(b.jsx)(b.Fragment,{children:O.modalRoutes.map((function(t,r){var n=t.Component,o=Object(l.a)(t,p),u=o.modalSearch,i=o.path,d={},j=[];i&&j.push(i),u&&(d=O.ModalParams[null===u||void 0===u?void 0:u.value],j[0]="/".concat(null===u||void 0===u?void 0:u.name,"/").concat(null===u||void 0===u?void 0:u.value)),Object.keys(d).length&&(j[1]="/".concat(null===u||void 0===u?void 0:u.name,"/").concat(null===u||void 0===u?void 0:u.value,"/:")+Object.values(d).join("/:"));var f=function(t){var e=t.path,r=t.modalSearch,n=t.location,a=!1,c="",o=new URLSearchParams(n.search).get("code")||"",u=n.pathname.split("/").filter((function(t){return t}));if(e&&e===n.pathname&&(a=!0),r){var i=r.name,s=r.value,l=!1;"string"===typeof s&&(l=u.includes(i)),l&&u.includes(s)&&(c=s,a=!0)}return{isOpen:a,modalName:c,code:o,props:{}}}(Object(s.a)(Object(s.a)({},o),{},{location:e}));return Object(b.jsx)(c.a,{path:j,exact:!0,children:Object(b.jsx)(a.Suspense,{fallback:null,children:f.isOpen?Object(b.jsx)(n,Object(s.a)({gameName:""},f),"@customModals/".concat(r)):null})})}))})},f={pathname:"/",search:"",hash:"",state:{hash:"",pathname:"/",search:"",state:void 0}},m=function(){var t=Object(c.g)(),e=Object(a.useMemo)((function(){var e=t.pathname.split("/").filter((function(t){return t})).includes("page"),r=t.state&&t.state.background&&e?t.state.background:f;return r&&(r=e?r:t).pathname.split("/").filter((function(t){return t})),{background:r,isModal:e}}),[t]),r=e.background,n=e.isModal;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(c.c,{location:r,children:i.map((function(t,e){var r=t.path,n=t.exact,o=t.component;return Object(b.jsx)(c.a,{path:r,exact:n,render:function(t){var e=t.history,r=t.location;t.match;return console.log(r),console.log(e),Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(o,{})})}},"@customRoutes/".concat(e,"_").concat(r))}))}),Object(b.jsx)(c.c,{children:Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(j,{isOpen:n,background:r,location:t})})})]})},h=r(203),g=r(204),v=r(205),S=r(200),N=r(202),E=r(201),_=r(109),P=function(){var t=Object(c.f)(),e=Object(_.a)("bet-data").pushHistoryTo;return Object(b.jsx)(S.a.Header,{children:Object(b.jsxs)(N.a,{justify:"space-between",className:"container",align:"middle",children:[Object(b.jsx)(E.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(b.jsx)(E.a.Item,{onClick:function(){return t.push(n.PRODUCT_CONTENT)},icon:Object(b.jsx)(h.a,{style:{fontSize:"2em",color:"antiquewhite"}})},1)}),Object(b.jsxs)(E.a,{theme:"dark",mode:"horizontal",selectable:!1,children:[Object(b.jsx)(E.a.Item,{onClick:function(){return e({})},icon:Object(b.jsx)(g.a,{className:"Basket_icon",style:{fontSize:"2em",color:"gold"},title:"1"})},2),Object(b.jsx)(E.a.Item,{onClick:function(){return t.push(n.BASKET)},icon:Object(b.jsx)(v.a,{className:"Basket_icon",style:{fontSize:"2em",color:"gold"},title:"1"})},3)]})]})})},T=r(85),R=function(){var t=Object(T.a)(),e=t.setOrders,r=t.setTotalPriceAction;return Object(a.useEffect)((function(){var t=localStorage.getItem("orders")||"[]",n=JSON.parse(t);n.length>0&&(e(n),r())}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(P,{}),Object(b.jsx)(m,{})]})},x=r(64),k=r(49),y=r(114),C=r(74),A=r(75),D=Object(k.c)({ProductContent:A.b,Basket:C.b}),I=Object(k.d)(D,Object(k.a)(y.a)),U=r(51),z=r(21),B=function(){return Object(b.jsx)(U.a,{basename:"https://liu1331.github.io/test.github.io-/",children:Object(b.jsx)(x.a,{store:I,children:Object(b.jsx)(R,{})})})},J=document.getElementById("root");J&&(J.hasChildNodes()?Object(z.hydrate)(Object(b.jsx)(B,{}),J):Object(z.render)(Object(b.jsx)(B,{}),J))},74:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return i}));var n,a=r(12),c=r(1);!function(t){t.SET_ORDER="SET_ORDER",t.SET_ORDERS="SET_ORDERS",t.SET_TOTAL_PRICE="SET_TOTAL_PRICE",t.REMOVE_ORDER="REMOVE_ORDER",t.CHANGE_ORDER_VALUE_ACTION="CHANGE_ORDER_VALUE_ACTION"}(n||(n={}));var o={orders:[],totalPrice:0};function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.SET_ORDER:return Object(c.a)(Object(c.a)({},t),{},{orders:[].concat(Object(a.a)(t.orders),[e.order]),totalPrice:Number(t.totalPrice)+Number(e.order.totalPrice)});case n.SET_ORDERS:return Object(c.a)(Object(c.a)({},t),{},{orders:Object(a.a)(e.orders)});case n.SET_TOTAL_PRICE:var r=t.orders.reduce((function(t,e){return t+e.totalPrice}),0);return Object(c.a)(Object(c.a)({},t),{},{totalPrice:r});case n.REMOVE_ORDER:return Object(c.a)(Object(c.a)({},t),{},{orders:t.orders.filter((function(t){return t.productName!=e.order.productName})),totalPrice:Number(t.totalPrice)-Number(e.order.totalPrice)});case n.CHANGE_ORDER_VALUE_ACTION:return Object(c.a)(Object(c.a)({},t),{},{orders:t.orders.map((function(t){return t.productName===e.productName?Object(c.a)(Object(c.a)({},t),{},{countValue:e.countValue,totalPrice:e.totalPrice}):Object(c.a)({},t)}))});default:return t}}var i={setOrder:function(t){return{type:n.SET_ORDER,order:t}},setOrders:function(t){return{type:n.SET_ORDERS,orders:t}},removeOrder:function(t){return{type:n.REMOVE_ORDER,order:t}},setTotalPriceAction:function(){return{type:n.SET_TOTAL_PRICE}},cahngeValueOrdeAction:function(t,e,r){return{type:n.CHANGE_ORDER_VALUE_ACTION,productName:t,totalPrice:e,countValue:r}},localStorageOrders:function(t){return function(e){var r=localStorage.getItem("orders")||"[]",n=JSON.parse(r);n.push(t),e(i.setOrder(t)),localStorage.setItem("orders",JSON.stringify(n));var a=localStorage.getItem("totalPrice")||"0",c=JSON.parse(a);localStorage.setItem("totalPrice",JSON.stringify(Number(c)+Number(t.totalPrice))),e(i.setTotalPriceAction())}},acceptOrders:function(){return function(t){localStorage.clear(),t(i.setOrders([]))}},deleteOrderThunk:function(t){return function(e){for(var r=localStorage.getItem("orders")||"[]",n=JSON.parse(r),a=0;a<n.length;a++)n[a].productName===t.productName&&n.splice(a,1);localStorage.setItem("orders",JSON.stringify(n)),e(i.removeOrder(t));var c=localStorage.getItem("totalPrice")||"0",o=JSON.parse(c);localStorage.setItem("totalPrice",JSON.stringify(Number(o)-Number(t.totalPrice))),e(i.setTotalPriceAction())}},changeValueOrder:function(t,e,r){return function(n){for(var a=localStorage.getItem("orders")||"[]",c=JSON.parse(a),o=0;o<c.length;o++)c[o].productName===t&&(c[o].countValue=r,c[o].totalPrice=e);localStorage.setItem("orders",JSON.stringify(c)),localStorage.setItem("totalPrice",JSON.stringify(c.reduce((function(t,e){return t+e.totalPrice}),0))),n(i.setOrders(c)),n(i.setTotalPriceAction())}}}},75:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return s}));var n,a=r(12),c=r(1),o=r(89);!function(t){t.SET_PRODUCTS="SET_PRODUCTS",t.PUSH_PRODUCT="SET_PRODUCT"}(n||(n={}));var u={products:[]};function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.SET_PRODUCTS:return Object(c.a)(Object(c.a)({},t),{},{products:Object(a.a)(e.products)});case n.PUSH_PRODUCT:return Object(c.a)(Object(c.a)({},t),{},{products:t.products.map((function(t){return t.productName===e.product.productName?Object(c.a)(Object(c.a)({},t),{},{inBasket:t.inBasket=e.product.inBasket}):t}))});default:return t}}var s={setProducts:function(t){return{type:n.SET_PRODUCTS,products:t}},getProductsThunk:function(){return function(t){var e=[{productName:"\u0411\u0430\u043d\u0430\u043d",img:"https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg",price:10,inBasket:!1,discount:""},{productName:"\u042f\u0431\u043b\u043e\u043a\u043e",img:"https://img3.zakaz.ua/upload.version_1.0.4f1f0c8dc6cf9362a789bf80d070ccf6.1350x1350.jpeg",price:8,inBasket:!1,discount:""},{productName:"\u041f\u0430\u043f\u0430\u0439\u044f",img:"https://img3.zakaz.ua/src.1607469352.ad72436478c_2020-12-09_Aliona/src.1607469352.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",price:10,inBasket:!1,discount:o.a.ON_3_KG}];t(s.setProducts(e))}},pushProduct:function(t){return{type:n.PUSH_PRODUCT,product:t}}}},83:function(t,e,r){"use strict";r.r(e),r.d(e,"modalRoutes",(function(){return c})),r.d(e,"ModalParams",(function(){return o})),r.d(e,"isAuthorizedOnlyModalList",(function(){return u}));var n=r(0),a=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(7),r.e(8)]).then(r.bind(null,198)).then((function(t){return{default:t.BetData}}))})),c=[{modalSearch:{name:"page",value:"bet-data"},isAuthorizedOnly:!1,Component:a}],o={"bet-data":{id:"id",userName:"userName"}},u={"bet-data":!1}},85:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(1),a=r(74),c=r(75),o=Object(n.a)(Object(n.a)({},c.a),a.a),u=r(64),i=r(49),s=function(){var t=Object(u.b)();return Object(i.b)(o,t)}},89:function(t,e,r){"use strict";var n;r.d(e,"a",(function(){return n})),function(t){t.ON_3_KG="ON_3_KG",t.ON_2_KG="ON_2_KG"}(n||(n={}))}},[[193,2,3]]]);
//# sourceMappingURL=main.de00d66d.chunk.js.map
(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{139:function(e,t,r){e.exports={CardImg:"ProductCard_CardImg__2bEm5"}},195:function(e,t,r){},354:function(e,t,r){"use strict";r.r(t);var c,n=r(19),o=r.n(n),a=r(0),i=(r(195),r(15)),s=r(1),u=r(84),l=r(78),d=r(9);!function(e){e.SET_ORDER="SET_ORDER",e.SET_ORDERS="SET_ORDERS",e.SET_TOTAL_PRICE="SET_TOTAL_PRICE",e.REMOVE_ORDER="REMOVE_ORDER",e.CHANGE_ORDER_VALUE_ACTION="CHANGE_ORDER_VALUE_ACTION"}(c||(c={}));var O={orders:[],totalPrice:0};var j,b,m={setOrder:function(e){return{type:c.SET_ORDER,order:e}},setOrders:function(e){return{type:c.SET_ORDERS,orders:e}},removeOrder:function(e){return{type:c.REMOVE_ORDER,order:e}},setTotalPriceAction:function(){return{type:c.SET_TOTAL_PRICE}},cahngeValueOrdeAction:function(e,t,r){return{type:c.CHANGE_ORDER_VALUE_ACTION,productName:e,totalPrice:t,countValue:r}},localStorageOrders:function(e){return function(t){var r=localStorage.getItem("orders")||"[]",c=JSON.parse(r);c.push(e),t(m.setOrder(e)),localStorage.setItem("orders",JSON.stringify(c));var n=localStorage.getItem("totalPrice")||"0",o=JSON.parse(n);localStorage.setItem("totalPrice",JSON.stringify(Number(o)+Number(e.totalPrice))),t(m.setTotalPriceAction())}},acceptOrders:function(){return function(e){localStorage.clear(),e(m.setOrders([]))}},deleteOrderThunk:function(e){return function(t){for(var r=localStorage.getItem("orders")||"[]",c=JSON.parse(r),n=0;n<c.length;n++)c[n].productName===e.productName&&c.splice(n,1);localStorage.setItem("orders",JSON.stringify(c)),t(m.removeOrder(e));var o=localStorage.getItem("totalPrice")||"0",a=JSON.parse(o);localStorage.setItem("totalPrice",JSON.stringify(Number(a)-Number(e.totalPrice))),t(m.setTotalPriceAction())}},changeValueOrder:function(e,t,r){return function(c){console.log("AC changeValueOrder ");for(var n=localStorage.getItem("orders")||"[]",o=JSON.parse(n),a=0;a<o.length;a++)o[a].productName===e&&(o[a].countValue=r,o[a].totalPrice=t);localStorage.setItem("orders",JSON.stringify(o)),localStorage.setItem("totalPrice",JSON.stringify(o.reduce((function(e,t){return e+t.totalPrice}),0))),c(m.setOrders(o)),c(m.setTotalPriceAction())}}};!function(e){e.ON_3_KG="ON_3_KG",e.ON_2_KG="ON_2_KG"}(j||(j={})),function(e){e.SET_PRODUCTS="SET_PRODUCTS",e.PUSH_PRODUCT="SET_PRODUCT"}(b||(b={}));var p={products:[]};var f={setProducts:function(e){return{type:b.SET_PRODUCTS,products:e}},getProductsThunk:function(){return function(e){var t=[{productName:"\u0411\u0430\u043d\u0430\u043d",img:"https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg",price:10,inBasket:!1,discount:""},{productName:"\u042f\u0431\u043b\u043e\u043a\u043e",img:"https://img3.zakaz.ua/upload.version_1.0.4f1f0c8dc6cf9362a789bf80d070ccf6.1350x1350.jpeg",price:8,inBasket:!1,discount:""},{productName:"\u041f\u0430\u043f\u0430\u0439\u044f",img:"https://img3.zakaz.ua/src.1607469352.ad72436478c_2020-12-09_Aliona/src.1607469352.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",price:10,inBasket:!1,discount:j.ON_3_KG}];e(f.setProducts(t))}},pushProduct:function(e){return{type:b.PUSH_PRODUCT,product:e}}},h=Object(s.a)(Object(s.a)({},f),m),_=r(74),N=r(80),g=function(){var e=Object(_.b)();return Object(N.b)(h,e)},x=r(3);function P(e){return e.discount===j.ON_3_KG?{priceWithDiscount:Number(e.price)/2,valueRule:3}:{priceWithDiscount:Number(e.price),valueRule:null}}function v(e){var t=e.price,r=e.discount,c=e.productName,n=e.countValue,o=Object(a.useState)(n||1),i=Object(x.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(e.totalPrice||e.price),d=Object(x.a)(l,2),O=d[0],j=d[1],b=g().changeValueOrder;Object(a.useEffect)((function(){console.log("useeffect usechangevalue "+s),b(c,O,s)}),[s]);return{countValueInHook:s,setCountValue:u,totalPriceInHook:O,setTotalPrice:j,upValue:function(){console.log("upValue +"+s),u((function(e){return e+1}));var e=P({countValueInHook:s,discount:r,price:t});r&&Number(s+1)%Number(e.valueRule)===0?j((function(t){return Number(t)+Number(e.priceWithDiscount)})):j((function(e){return Number(e)+Number(t)}))},downValue:function(){if(s-1!==0){if(r){var e=P({countValueInHook:s,discount:r,price:t});Number(s)%Number(e.valueRule)===0?j((function(t){return Number(t)-Number(e.priceWithDiscount)})):j((function(e){return Number(e)-Number(t)}))}else j((function(e){return Number(e)-Number(t)}));u((function(e){return e-1}))}}}}var S,T=r(189),E=r(360),C=r(5),R=function(e){var t=e.countValue,r=e.upValue,c=e.downValue;return Object(C.jsxs)("div",{className:"ModalContent__PriceInfo__ChangeValue___item",children:[Object(C.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(C.jsx)(u.a,{onClick:function(){return r()},type:"primary",shape:"circle",icon:Object(C.jsx)(T.a,{})})}),Object(C.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(C.jsx)("span",{children:t})}),Object(C.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(C.jsx)(u.a,{onClick:function(){return c()},type:"primary",shape:"circle",icon:Object(C.jsx)(E.a,{})})})]})},V=function(e){var t=g().deleteOrderThunk,r=e.img,c=e.productName,n=e.price,o=e.inBasket,a=e.countValue,i=e.totalPrice,s=e.discount,u=v({productName:c,countValue:a,totalPrice:i,discount:s,price:n}),d=u.upValue,O=u.downValue;return console.log("mountOrder "+a),Object(C.jsxs)("div",{className:"Orders_item",children:[console.log("render order "+a),Object(C.jsx)("div",{className:"Orders_item__img",children:Object(C.jsx)("img",{src:r,alt:""})}),Object(C.jsxs)("div",{style:{textAlign:"center",marginRight:"25%"},children:[Object(C.jsx)("div",{className:"Orders_item__title",style:{fontSize:"24px",fontWeight:"bold"},children:c}),Object(C.jsxs)("div",{className:"Orders_item__Price",style:{fontSize:"18px"},children:["\u0426\u0435\u043d\u0430 $",n]})]}),Object(C.jsx)(R,{countValue:a,upValue:d,downValue:O}),Object(C.jsxs)("div",{className:"Orders_item__TotalPrice",style:{fontSize:"50px",fontWeight:"bolder"},children:["$",i]}),Object(C.jsx)("div",{className:"Orders_item__deleteBtn",children:Object(C.jsx)(l.a,{onClick:function(){return t({img:r,productName:c,price:n,countValue:a,totalPrice:i,inBasket:o})},className:"Delete_Btn",style:{fontSize:"40px",cursor:"pointer"}})})]})},I=_.c,k=function(){var e=I((function(e){return e.Basket})),t=e.orders,r=e.totalPrice,c=g().acceptOrders,n=localStorage.getItem("orders")||"[]",o=JSON.parse(n);return Object(C.jsx)("div",{className:"Basket_content container",children:Object(C.jsxs)("div",{className:"Orders_flex",children:[t.length>0?t.map((function(e){return Object(C.jsx)(V,Object(s.a)({},e),e.productName)})):Object(C.jsx)("div",{style:{width:"100%",height:"100%",textAlign:"center",paddingTop:"30%"},children:Object(C.jsx)("h1",{children:" \u0423 \u0432\u0430\u0441 \u043d\u0435\u0442\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435:("})}),Object(C.jsxs)("div",{className:"Order_item",children:[Object(C.jsx)("div",{className:"Order_item__title",children:o.length>0?Object(C.jsx)("h1",{style:{color:"goldenrod"},children:"\u0421\u0443\u043c\u0430 \u043a \u043e\u043f\u043b\u0430\u0442\u0435: $"+r}):null}),Object(C.jsx)("div",{children:o.length>0?Object(C.jsx)(u.a,{size:"large",style:{marginRight:"25px"},onClick:function(){c()},danger:!0,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}):null})]})]})})},y=r(357),D=r(182),A=r.n(D),B=r(139),U=r.n(B),M=r(358),J=function(e){var t=e.product,r=t.img,c=t.price,n=t.productName,o=t.discount,a=g(),i=a.localStorageOrders,s=a.pushProduct,u=v({productName:n,discount:o,price:c}),l=u.countValueInHook,d=u.setCountValue,O=u.totalPriceInHook,j=u.setTotalPrice,b=u.upValue,m=u.downValue;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(M.a,{title:"\u0417\u0430\u043a\u0430\u0437",visible:e.isModalVisible,onOk:function(){0!==l&&(e.setIsModalVisible(!1),i({img:r,productName:n,countValue:l,totalPrice:O,price:c,inBasket:!0,discount:o}),s({productName:n,img:r,price:c,totalPrice:O,inBasket:!0,discount:o}))},okText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onCancel:function(){e.setIsModalVisible(!1),d(1),j(c)},children:Object(C.jsxs)("div",{className:"ModalContent",children:[Object(C.jsxs)("div",{className:"ModalContent__info",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:r,alt:""})}),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:n})})]}),Object(C.jsxs)("div",{className:"ModalContent__PriceInfo",children:[Object(C.jsx)(R,{countValue:l,upValue:b,downValue:m}),Object(C.jsxs)("div",{className:"ModalContent__PriceInfo__item",children:[Object(C.jsx)("h1",{style:{fontWeight:"normal"},children:"\u0421\u0443\u043c\u043c\u0430"}),Object(C.jsxs)("h2",{style:{fontWeight:"bold",color:"chocolate"},children:["$",O]})]})]})]})})})},w=function(e){var t=Object(a.useState)(!1),r=Object(x.a)(t,2),c=r[0],n=r[1],o=Object(a.useState)(!1),i=Object(x.a)(o,2),s=i[0],l=i[1];Object(a.useEffect)((function(){var t=localStorage.getItem("orders")||"[]",r=JSON.parse(t);r.length>0&&r.map((function(t){t.productName===e.productName&&l(!0)}))}));var d=function(){n(!0)};return Object(C.jsxs)("div",{className:U.a.item,children:[Object(C.jsxs)(y.a,{hoverable:!0,style:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center",flex:"0 1 33.333%"},cover:Object(C.jsx)("div",{className:U.a.CardImg,children:Object(C.jsx)("img",{alt:"imgProduct",src:e.img})}),children:[Object(C.jsx)(A.a,{title:e.productName,description:"$"+e.price,style:{textAlign:"center",marginBottom:"15px"}}),!0===s?Object(C.jsx)(u.a,{disabled:!0,type:"dashed",onClick:function(){return d()},children:" \u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 "}):Object(C.jsx)(u.a,{disabled:!1,type:"dashed",danger:!0,onClick:function(){return d()},children:" \u041a\u0443\u043f\u0438\u0442\u044c "})]}),Object(C.jsx)(J,{product:e,isModalVisible:c,setIsModalVisible:n})]})},H=function(){var e=g().getProductsThunk,t=I((function(e){return e.ProductContent})).products;return Object(a.useEffect)((function(){e()}),[]),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"ProductContent_items",style:{paddingTop:"20px"},children:t.map((function(e){return Object(C.jsx)(w,Object(s.a)({},e),e.productName)}))})})};!function(e){e.BASKET="/basket",e.PRODUCT_CONTENT="/productContent"}(S||(S={}));var z=[{path:S.BASKET,component:k,exact:!0},{path:S.PRODUCT_CONTENT,component:H,exact:!0}],G=function(){return Object(C.jsxs)(i.d,{children:[z.map((function(e){return Object(C.jsx)(i.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(C.jsx)(i.a,{to:S.PRODUCT_CONTENT})]})},K=r(361),L=r(362),W=r(356),$=r(81),q=r(359),F=function(){var e=Object(i.g)();return Object(C.jsx)(W.a.Header,{children:Object(C.jsxs)($.a,{justify:"space-between",className:"container",align:"middle",children:[Object(C.jsx)(q.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(C.jsx)(q.a.Item,{onClick:function(){return e.push(S.PRODUCT_CONTENT)},icon:Object(C.jsx)(K.a,{style:{fontSize:"2em",color:"antiquewhite"}})},1)}),Object(C.jsx)(q.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(C.jsx)(q.a.Item,{onClick:function(){return e.push(S.BASKET)},icon:Object(C.jsx)(L.a,{className:"Basket_icon",style:{fontSize:"2em",color:"gold"},title:"1"})},1)})]})})};var Q=function(){var e=g(),t=e.setOrders,r=e.setTotalPriceAction;return Object(a.useEffect)((function(){var e=localStorage.getItem("orders")||"[]",c=JSON.parse(e);c.length>0&&(t(c),r())}),[]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(F,{}),Object(C.jsx)(G,{})]})},X=r(187),Y=r(184),Z=Object(N.c)({ProductContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_PRODUCTS:return Object(s.a)(Object(s.a)({},e),{},{products:Object(d.a)(t.products)});case b.PUSH_PRODUCT:return Object(s.a)(Object(s.a)({},e),{},{products:e.products.map((function(e){return e.productName===t.product.productName?Object(s.a)(Object(s.a)({},e),{},{inBasket:e.inBasket=t.product.inBasket}):e}))});default:return e}},Basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_ORDER:return Object(s.a)(Object(s.a)({},e),{},{orders:[].concat(Object(d.a)(e.orders),[t.order]),totalPrice:Number(e.totalPrice)+Number(t.order.totalPrice)});case c.SET_ORDERS:return Object(s.a)(Object(s.a)({},e),{},{orders:Object(d.a)(t.orders)});case c.SET_TOTAL_PRICE:var r=e.orders.reduce((function(e,t){return e+t.totalPrice}),0);return Object(s.a)(Object(s.a)({},e),{},{totalPrice:r});case c.REMOVE_ORDER:return Object(s.a)(Object(s.a)({},e),{},{orders:e.orders.filter((function(e){return e.productName!=t.order.productName})),totalPrice:Number(e.totalPrice)-Number(t.order.totalPrice)});case c.CHANGE_ORDER_VALUE_ACTION:return Object(s.a)(Object(s.a)({},e),{},{orders:e.orders.map((function(e){return e.productName===t.productName?Object(s.a)(Object(s.a)({},e),{},{countValue:t.countValue,totalPrice:t.totalPrice}):Object(s.a)({},e)}))});default:return e}}}),ee=Object(N.d)(Z,Object(N.a)(Y.a));o.a.render(Object(C.jsx)(X.a,{basename:"/test.github.io-",children:Object(C.jsx)(_.a,{store:ee,children:Object(C.jsx)(Q,{})})}),document.getElementById("root"))}},[[354,1,2]]]);
//# sourceMappingURL=main.82624233.chunk.js.map
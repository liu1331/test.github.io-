(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{139:function(e,t,r){e.exports={CardImg:"ProductCard_CardImg__2bEm5"}},195:function(e,t,r){},354:function(e,t,r){"use strict";r.r(t);var c,n=r(19),a=r.n(n),i=r(0),o=(r(195),r(15)),s=r(1),l=r(84),d=r(78),u=r(9);!function(e){e.SET_ORDER="SET_ORDER",e.SET_ORDERS="SET_ORDERS",e.SET_TOTAL_PRICE="SET_TOTAL_PRICE",e.REMOVE_ORDER="REMOVE_ORDER"}(c||(c={}));var j={orders:[],totalPrice:0};var O,b,m={setOrder:function(e){return{type:c.SET_ORDER,order:e}},setOrders:function(e){return{type:c.SET_ORDERS,orders:e}},removeOrder:function(e){return{type:c.REMOVE_ORDER,order:e}},setTotalPrice:function(e){return{type:c.SET_TOTAL_PRICE,totalPrice:e}},localStorageOrders:function(e){return function(t){var r=localStorage.getItem("orders")||"[]",c=JSON.parse(r);c.push(e),t(m.setOrder(e)),localStorage.setItem("orders",JSON.stringify(c));var n=localStorage.getItem("totalPrice")||"0",a=JSON.parse(n);localStorage.setItem("totalPrice",JSON.stringify(Number(a)+Number(e.totalPrice))),t(m.setTotalPrice(Number(a)+Number(e.totalPrice)))}},acceptOrders:function(){return function(e){localStorage.clear(),e(m.setOrders([]))}},deleteOrderThunk:function(e){return function(t){for(var r=localStorage.getItem("orders")||"[]",c=JSON.parse(r),n=0;n<c.length;n++)c[n].productName===e.productName&&c.splice(n,1);localStorage.setItem("orders",JSON.stringify(c)),t(m.removeOrder(e));var a=localStorage.getItem("totalPrice")||"0",i=JSON.parse(a);localStorage.setItem("totalPrice",JSON.stringify(Number(i)-Number(e.totalPrice))),t(m.setTotalPrice(Number(i)-Number(e.totalPrice)))}}};!function(e){e.ON_3_KG="ON_3_KG",e.ON_2_KG="ON_2_KG"}(O||(O={})),function(e){e.SET_PRODUCTS="SET_PRODUCTS",e.PUSH_PRODUCT="SET_PRODUCT"}(b||(b={}));var p={products:[]};var h={setProducts:function(e){return{type:b.SET_PRODUCTS,products:e}},getProductsThunk:function(){return function(e){var t=[{productName:"\u0411\u0430\u043d\u0430\u043d",img:"https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg",price:10,inBasket:!1,discount:""},{productName:"\u042f\u0431\u043b\u043e\u043a\u043e",img:"https://img3.zakaz.ua/upload.version_1.0.4f1f0c8dc6cf9362a789bf80d070ccf6.1350x1350.jpeg",price:8,inBasket:!1,discount:""},{productName:"\u041f\u0430\u043f\u0430\u0439\u044f",img:"https://img3.zakaz.ua/src.1607469352.ad72436478c_2020-12-09_Aliona/src.1607469352.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",price:10,inBasket:!1,discount:O.ON_3_KG}];e(h.setProducts(t))}},pushProduct:function(e){return{type:b.PUSH_PRODUCT,product:e}}},f=Object(s.a)(Object(s.a)({},h),m),_=r(74),x=r(80),g=function(){var e=Object(_.b)();return Object(x.b)(f,e)},N=r(5),S=function(e){var t=g().deleteOrderThunk,r=e.img,c=e.productName,n=e.price,a=e.countValue,i=e.totalPrice,o=e.inBasket;return Object(N.jsxs)("div",{className:"Orders_item",children:[Object(N.jsx)("div",{className:"Orders_item__img",children:Object(N.jsx)("img",{src:r,alt:""})}),Object(N.jsxs)("div",{style:{textAlign:"center",marginRight:"25%"},children:[Object(N.jsx)("div",{className:"Orders_item__title",style:{fontSize:"24px",fontWeight:"bold"},children:c}),Object(N.jsxs)("div",{className:"Orders_item__Price",style:{fontSize:"18px"},children:["\u0426\u0435\u043d\u0430 $",n]})]}),Object(N.jsx)("div",{style:{fontSize:"22px"},children:Object(N.jsxs)("h2",{style:{color:"GrayText"},children:["(",a+" \u043a\u0433",")"]})}),Object(N.jsxs)("div",{className:"Orders_item__TotalPrice",style:{fontSize:"50px",fontWeight:"bolder"},children:["$",i]}),Object(N.jsx)("div",{className:"Orders_item__deleteBtn",children:Object(N.jsx)(d.a,{onClick:function(){return t({img:r,productName:c,price:n,countValue:a,totalPrice:i,inBasket:o})},className:"Delete_Btn",style:{fontSize:"40px",cursor:"pointer"}})})]})},v=_.c,P=function(){var e=v((function(e){return e.Basket})),t=e.orders,r=e.totalPrice,c=g().acceptOrders,n=localStorage.getItem("orders")||"[]",a=JSON.parse(n);return Object(N.jsx)("div",{className:"Basket_content container",children:Object(N.jsxs)("div",{className:"Orders_flex",children:[t.length>0?t.map((function(e){return Object(N.jsx)(S,Object(s.a)({},e))})):Object(N.jsx)("div",{style:{width:"100%",height:"100%",textAlign:"center",paddingTop:"30%"},children:Object(N.jsx)("h1",{children:" \u0423 \u0432\u0430\u0441 \u043d\u0435\u0442\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435:("})}),Object(N.jsxs)("div",{className:"Order_item",children:[Object(N.jsx)("div",{className:"Order_item__title",children:a.length>0?Object(N.jsx)("h1",{style:{color:"goldenrod"},children:"\u0421\u0443\u043c\u0430 \u043a \u043e\u043f\u043b\u0430\u0442\u0435: $"+r}):null}),Object(N.jsx)("div",{children:a.length>0?Object(N.jsx)(l.a,{size:"large",style:{marginRight:"25px"},onClick:function(){c()},danger:!0,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}):null})]})]})})},T=r(3),E=r(357),R=r(182),C=r.n(R),y=r(139),k=r.n(y),I=r(358),D=r(189),B=r(360);function M(e){return e.discount===O.ON_3_KG&&(e.countValue+1)%3===0?e.price/2:e.price}var U,V=function(e){var t=e.product,r=t.img,c=t.price,n=t.productName,a=t.discount,o=g(),s=o.localStorageOrders,d=o.pushProduct,u=Object(i.useState)(1),j=Object(T.a)(u,2),O=j[0],b=j[1],m=Object(i.useState)(c),p=Object(T.a)(m,2),h=p[0],f=p[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(I.a,{title:"\u0417\u0430\u043a\u0430\u0437",visible:e.isModalVisible,onOk:function(){0!==O&&(e.setIsModalVisible(!1),s({img:r,productName:n,countValue:O,totalPrice:h,price:c,inBasket:!0}),d({productName:n,img:r,price:c,totalPrice:h,inBasket:!0,discount:a}))},okText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onCancel:function(){e.setIsModalVisible(!1),b(1),f(c)},children:Object(N.jsxs)("div",{className:"ModalContent",children:[Object(N.jsxs)("div",{className:"ModalContent__info",children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:r,alt:""})}),Object(N.jsx)("div",{children:Object(N.jsx)("span",{children:n})})]}),Object(N.jsxs)("div",{className:"ModalContent__PriceInfo",children:[Object(N.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(N.jsx)(l.a,{onClick:function(){return function(){b((function(e){return e+1}));var e=M({countValue:O,discount:a,price:c});f((function(t){return Number(t)+Number(e)}))}()},type:"primary",shape:"circle",icon:Object(N.jsx)(D.a,{})})}),Object(N.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(N.jsx)("span",{children:O})}),Object(N.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(N.jsx)(l.a,{onClick:function(){return function(){if(O>1){b((function(e){return e-1}));var e=M({countValue:O,discount:a,price:c});f((function(t){return Number(t)-Number(e)}))}}()},type:"primary",shape:"circle",icon:Object(N.jsx)(B.a,{})})}),Object(N.jsxs)("div",{className:"ModalContent__PriceInfo__item",children:[Object(N.jsx)("h1",{style:{fontWeight:"normal"},children:"\u0421\u0443\u043c\u043c\u0430"}),Object(N.jsxs)("h2",{style:{fontWeight:"bold",color:"chocolate"},children:["$",h]})]})]})]})})})},z=function(e){var t=Object(i.useState)(!1),r=Object(T.a)(t,2),c=r[0],n=r[1],a=Object(i.useState)(!1),o=Object(T.a)(a,2),s=o[0],d=o[1];Object(i.useEffect)((function(){var t=localStorage.getItem("orders")||"[]",r=JSON.parse(t);r.length>0&&r.map((function(t){t.productName===e.productName&&d(!0)}))}));var u=function(){n(!0)};return Object(N.jsxs)("div",{className:k.a.item,children:[Object(N.jsxs)(E.a,{hoverable:!0,style:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center",flex:"0 1 33.333%"},cover:Object(N.jsx)("div",{className:k.a.CardImg,children:Object(N.jsx)("img",{alt:"imgProduct",src:e.img})}),children:[Object(N.jsx)(C.a,{title:e.productName,description:"$"+e.price,style:{textAlign:"center",marginBottom:"15px"}}),!0===s?Object(N.jsx)(l.a,{disabled:!0,type:"dashed",onClick:function(){return u()},children:" \u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 "}):Object(N.jsx)(l.a,{disabled:!1,type:"dashed",danger:!0,onClick:function(){return u()},children:" \u041a\u0443\u043f\u0438\u0442\u044c "})]}),Object(N.jsx)(V,{product:e,isModalVisible:c,setIsModalVisible:n})]})},J=function(){var e=g().getProductsThunk,t=v((function(e){return e.ProductContent})).products;return Object(i.useEffect)((function(){e()}),[]),Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"ProductContent_items",style:{paddingTop:"20px"},children:t.map((function(e){return Object(N.jsx)(z,Object(s.a)({},e))}))})})};!function(e){e.BASKET="/basket",e.PRODUCT_CONTENT="/productContent"}(U||(U={}));var A=[{path:U.BASKET,component:P,exact:!0},{path:U.PRODUCT_CONTENT,component:J,exact:!0}],w=function(){return Object(N.jsxs)(o.d,{children:[A.map((function(e){return Object(N.jsx)(o.b,{path:e.path,component:e.component,exact:e.exact})})),Object(N.jsx)(o.a,{to:U.PRODUCT_CONTENT})]})},K=r(361),G=r(362),$=r(356),H=r(81),L=r(359),W=function(){var e=Object(o.g)();return Object(N.jsx)($.a.Header,{children:Object(N.jsxs)(H.a,{justify:"space-between",className:"container",align:"middle",children:[Object(N.jsx)(L.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(N.jsx)(L.a.Item,{onClick:function(){return e.push(U.PRODUCT_CONTENT)},icon:Object(N.jsx)(K.a,{style:{fontSize:"2em",color:"antiquewhite"}})},1)}),Object(N.jsx)(L.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(N.jsx)(L.a.Item,{onClick:function(){return e.push(U.BASKET)},icon:Object(N.jsx)(G.a,{className:"Basket_icon",style:{fontSize:"2em",color:"gold"},title:"1"})},1)})]})})};var q=function(){var e=g(),t=e.setOrders,r=e.setTotalPrice;return Object(i.useEffect)((function(){var e=localStorage.getItem("orders")||"[]",c=localStorage.getItem("totalPrice")||"0",n=JSON.parse(e);n.length>0&&(t(n),r(JSON.parse(c)))}),[]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(W,{}),Object(N.jsx)(w,{})]})},F=r(187),Q=r(184),X=Object(x.c)({ProductContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_PRODUCTS:return Object(s.a)(Object(s.a)({},e),{},{products:Object(u.a)(t.products)});case b.PUSH_PRODUCT:return Object(s.a)(Object(s.a)({},e),{},{products:e.products.map((function(e){return e.productName===t.product.productName?Object(s.a)(Object(s.a)({},e),{},{inBasket:e.inBasket=t.product.inBasket}):e}))});default:return e}},Basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_ORDER:return Object(s.a)(Object(s.a)({},e),{},{orders:[].concat(Object(u.a)(e.orders),[t.order]),totalPrice:Number(e.totalPrice)+Number(t.order.totalPrice)});case c.SET_ORDERS:return Object(s.a)(Object(s.a)({},e),{},{orders:Object(u.a)(t.orders)});case c.SET_TOTAL_PRICE:return Object(s.a)(Object(s.a)({},e),{},{totalPrice:t.totalPrice});case c.REMOVE_ORDER:return Object(s.a)(Object(s.a)({},e),{},{orders:e.orders.filter((function(e){return e.productName!=t.order.productName})),totalPrice:Number(e.totalPrice)-Number(t.order.totalPrice)});default:return e}}}),Y=Object(x.d)(X,Object(x.a)(Q.a));a.a.render(Object(N.jsx)(F.a,{basename:"/test.github.io-",children:Object(N.jsx)(_.a,{store:Y,children:Object(N.jsx)(q,{})})}),document.getElementById("root"))}},[[354,1,2]]]);
//# sourceMappingURL=main.8e2e8c50.chunk.js.map
(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{223:function(e,t,c){"use strict";c(0);var n=c(259),i=c(340),r=c(224),o=c(7);t.a=function(e){var t=e.countValue,c=e.upValue,a=e.downValue;return Object(o.jsxs)("div",{className:"ModalContent__PriceInfo__ChangeValue___item",children:[Object(o.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(o.jsx)(r.a,{onClick:function(){return c()},type:"primary",shape:"circle",icon:Object(o.jsx)(n.a,{})})}),Object(o.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(o.jsx)("span",{children:t})}),Object(o.jsx)("div",{className:"ModalContent__PriceInfo__item",children:Object(o.jsx)(r.a,{onClick:function(){return a()},type:"primary",shape:"circle",icon:Object(o.jsx)(i.a,{})})})]})}},234:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=c(64).c},237:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(3),i=c(0),r=c(85),o=c(89);function a(e){return e.discount===o.a.ON_3_KG?{priceWithDiscount:Number(e.price)/2,valueRule:3}:{priceWithDiscount:Number(e.price),valueRule:null}}function s(e){var t=e.price,c=e.discount,o=e.productName,s=e.countValue,l=Object(i.useState)(s||1),u=Object(n.a)(l,2),d=u[0],b=u[1],j=Object(i.useState)(e.totalPrice||e.price),p=Object(n.a)(j,2),h=p[0],m=p[1],f=Object(r.a)().changeValueOrder;Object(i.useEffect)((function(){f(o,h,d)}),[d]);return{countValueInHook:d,setCountValue:b,totalPriceInHook:h,setTotalPrice:m,upValue:function(){b((function(e){return e+1}));var e=a({countValueInHook:d,discount:c,price:t});console.log("totalPriceInHook "+h),console.log("price "+t),console.log("newPrice.priceWithDiscount "+e.priceWithDiscount),c&&Number(d+1)%Number(e.valueRule)===0?m((function(t){return Number(t)+Number(e.priceWithDiscount)})):m((function(e){return Number(e)+Number(t)}))},downValue:function(){if(d-1!==0){if(c){var e=a({countValueInHook:d,discount:c,price:t});Number(d)%Number(e.valueRule)===0?m((function(t){return Number(t)-Number(e.priceWithDiscount)})):m((function(e){return Number(e)-Number(t)}))}else m((function(e){return Number(e)-Number(t)}));b((function(e){return e-1}))}}}}},268:function(e,t,c){e.exports={CardImg:"ProductCard_CardImg__Q7044"}},346:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(0),r=c(238),o=c(3),a=c(344),s=c(224),l=c(273),u=c.n(l),d=c(268),b=c.n(d),j=c(345),p=c(85),h=c(223),m=c(237),f=c(7),x=function(e){var t=e.product,c=t.img,n=t.price,i=t.productName,r=t.discount,o=Object(p.a)(),a=o.localStorageOrders,s=o.pushProduct,l=Object(m.a)({productName:i,discount:r,price:n}),u=l.countValueInHook,d=l.setCountValue,b=l.totalPriceInHook,x=l.setTotalPrice,O=l.upValue,g=l.downValue;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{title:"\u0417\u0430\u043a\u0430\u0437",visible:e.isModalVisible,onOk:function(){0!==u&&(e.setIsModalVisible(!1),a({img:c,productName:i,countValue:u,totalPrice:b,price:n,inBasket:!0,discount:r}),s({productName:i,img:c,price:n,totalPrice:b,inBasket:!0,discount:r}))},okText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onCancel:function(){e.setIsModalVisible(!1),d(1),x(n)},children:Object(f.jsxs)("div",{className:"ModalContent",children:[Object(f.jsxs)("div",{className:"ModalContent__info",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:c,alt:""})}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{children:i})})]}),Object(f.jsxs)("div",{className:"ModalContent__PriceInfo",children:[Object(f.jsx)(h.a,{countValue:u,upValue:O,downValue:g}),Object(f.jsxs)("div",{className:"ModalContent__PriceInfo__item",children:[Object(f.jsx)("h1",{style:{fontWeight:"normal"},children:"\u0421\u0443\u043c\u043c\u0430"}),Object(f.jsxs)("h2",{style:{fontWeight:"bold",color:"chocolate"},children:["$",b]})]})]})]})})})},O=function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),n=c[0],r=c[1],l=Object(i.useState)(!1),d=Object(o.a)(l,2),j=d[0],p=d[1];Object(i.useEffect)((function(){var t=localStorage.getItem("orders")||"[]",c=JSON.parse(t);c.length>0&&c.map((function(t){t.productName===e.productName&&p(!0)}))}));var h=function(){r(!0)};return Object(f.jsxs)("div",{className:b.a.item,children:[Object(f.jsxs)(a.a,{hoverable:!0,style:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center",flex:"0 1 33.333%"},cover:Object(f.jsx)("div",{className:b.a.CardImg,children:Object(f.jsx)("img",{alt:"imgProduct",src:e.img})}),children:[Object(f.jsx)(u.a,{title:e.productName,description:"$"+e.price,style:{textAlign:"center",marginBottom:"15px"}}),!0===j?Object(f.jsxs)(s.a,{disabled:!0,type:"dashed",onClick:function(){return h()},children:[" ","\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"," "]}):Object(f.jsxs)(s.a,{disabled:!1,type:"dashed",danger:!0,onClick:function(){return h()},children:[" ","\u041a\u0443\u043f\u0438\u0442\u044c"," "]})]}),Object(f.jsx)(x,{product:e,isModalVisible:n,setIsModalVisible:r})]})},g=c(234);t.default=function(){var e=Object(p.a)().getProductsThunk,t=Object(g.a)((function(e){return e.ProductContent})).products;Object(i.useEffect)((function(){e()}),[]);window.location.pathname,window.location.search;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(r.a,{defer:!1,onChangeClientState:function(e){return console.log(e)},children:[Object(f.jsx)("title",{children:"Hello"}),Object(f.jsx)("meta",{name:"title",content:"Hello"}),Object(f.jsx)("meta",{name:"description",content:"Its my website"}),Object(f.jsx)("meta",{property:"og:type",content:"website"}),Object(f.jsx)("meta",{property:"og:url",content:"https://https://liu1331.github.io/test.github.io-/"}),Object(f.jsx)("meta",{property:"og:title",content:"Hello"}),Object(f.jsx)("meta",{property:"og:description",content:"Its my website"}),Object(f.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(f.jsx)("meta",{property:"twitter:url",content:"https://https://liu1331.github.io/test.github.io-/"}),Object(f.jsx)("meta",{property:"twitter:title",content:"Hello"}),Object(f.jsx)("meta",{property:"twitter:description",content:"Its my website"})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"ProductContent_items",style:{paddingTop:"20px"},children:[t.map((function(e){return Object(f.jsx)(O,Object(n.a)({},e),e.productName)})),Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{href:"https://www.facebook.com/sharer.php?u=https://liu1331.github.io/test.github.io-/",target:"_blank",style:{display:"flex",width:"15px",height:"15px",background:"black"},children:Object(f.jsx)("i",{className:"fab fa-facebook fa-3x"})}),Object(f.jsx)("a",{href:"https://twitter.com/share?url=https://liu1331.github.io/test.github.io-/",target:"_blank",style:{display:"flex",width:"15px",height:"15px",background:"black"},children:Object(f.jsx)("i",{className:"fab fa-twitter-square fa-3x"})}),Object(f.jsx)("a",{href:"https://www.linkedin.com/shareArticle?url=https://liu1331.github.io/test.github.io-/",target:"_blank",style:{display:"flex",width:"15px",height:"15px",background:"black"},children:Object(f.jsx)("i",{className:"fab fa-linkedin fa-3x"})})]})]})})]})}}}]);
//# sourceMappingURL=6.257924cd.chunk.js.map
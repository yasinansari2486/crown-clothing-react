(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{70:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),a=n(43),i=n.n(a),s=n(29),l=n(18),o=n(54),u=n(32),d=n(48),b=n(55),p=n.n(b),m=n(56),h=n.n(m),j=n(14),g="SET_CURRENT_USER",O={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload}):e},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},x=n(25),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(x.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={key:"root",storage:h.a,whitelist:["cart"]},S=Object(u.b)({user:f,cart:N,directory:C,shop:I}),A=Object(d.a)(T,S),M=[p.a],B=Object(u.c)(A,u.a.apply(void 0,M)),R=Object(d.b)(B),_=(n(70),n(0)),P=n.n(_),D=n(1),G=n(2),H=n(3),W=n(10),q=n(11),V=n(16),J=n(15),L=(n(72),n(39)),z=(n(73),n(99),function(){var e=Object(D.a)(P.a.mark((function e(t,n){var c,r,a,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=Y.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(j.a)({displayName:r,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());L.a.initializeApp({apiKey:"AIzaSyAxYs_FfhPeKeW1ckvaI24vrk4VH9wHFtg",authDomain:"crown-db-f7e14.firebaseapp.com",projectId:"crown-db-f7e14",storageBucket:"crown-db-f7e14.appspot.com",messagingSenderId:"409340409404",appId:"1:409340409404:web:fc7497c8b9312544407539",measurementId:"G-VXEYY1V1JX"});var F=L.a.auth(),Y=L.a.firestore(),X=new L.a.auth.GoogleAuthProvider;X.setCustomParameters({prompt:"select_account"});var K,Q,$,Z,ee,te,ne,ce,re,ae,ie,se,le,oe,ue,de=function(){return F.signInWithPopup(X)},be=(L.a,function(){return{type:v.TOGGLE_CART_HIDDEN}}),pe=function(e){return{type:v.ADD_ITEM,payload:e}},me=function(e){return e.cart},he=Object(J.a)([me],(function(e){return e.cartItems})),je=Object(J.a)([me],(function(e){return e.hidden})),ge=Object(J.a)([he],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Oe=Object(J.a)([he],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),fe=["title","titleId"];function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},ve.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ye(e,t){var n=e.title,r=e.titleId,a=xe(e,fe);return c.createElement("svg",ve({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),K||(K=c.createElement("g",null)),Q||(Q=c.createElement("g",null)),$||($=c.createElement("g",null)),Z||(Z=c.createElement("g",null)),ee||(ee=c.createElement("g",null)),te||(te=c.createElement("g",null)),ne||(ne=c.createElement("g",null)),ce||(ce=c.createElement("g",null)),re||(re=c.createElement("g",null)),ae||(ae=c.createElement("g",null)),ie||(ie=c.createElement("g",null)),se||(se=c.createElement("g",null)),le||(le=c.createElement("g",null)),oe||(oe=c.createElement("g",null)),ue||(ue=c.createElement("g",null)))}var we,ke,Ne=c.forwardRef(ye),Ee=(n.p,n(76),n(6)),Ce=Object(J.b)({itemCount:ge}),Ue=Object(l.b)(Ce,(function(e){return{toggleCartHidden:function(){return e(be())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(Ee.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(Ee.jsx)(Ne,{className:"shopping-icon"}),Object(Ee.jsx)("span",{className:"item-count",children:n})]})})),Ie=n(34),Te=(n(78),["children","isGoogleSignIn"]),Se=function(e){var t=e.children,n=e.isGoogleSignIn,c=Object(Ie.a)(e,Te);return Object(Ee.jsx)("button",Object(j.a)(Object(j.a)({className:"".concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))},Ae=(n(79),function(e){var t=e.item,n=t.imageUrl,c=t.price,r=t.name,a=t.quantity;return Object(Ee.jsxs)("div",{className:"cart-item",children:[Object(Ee.jsx)("img",{src:n,alt:"item"}),Object(Ee.jsxs)("div",{className:"item-details",children:[Object(Ee.jsx)("span",{className:"name",children:r}),Object(Ee.jsxs)("span",{className:"price",children:[a," x $",c]})]})]})}),Me=(n(80),Object(J.b)({cartItems:he})),Be=Object(V.g)(Object(l.b)(Me)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(Ee.jsxs)("div",{className:"cart-dropdown",children:[Object(Ee.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(Ee.jsx)(Ae,{item:e},e.id)})):Object(Ee.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(Ee.jsx)(Se,{onClick:function(){n.push("/checkout"),c(be())},children:"CHECKOUT"})]})}))),Re=Object(J.a)([function(e){return e.user}],(function(e){return e.currentUser})),_e=["title","titleId"];function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Pe.apply(this,arguments)}function De(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ge(e,t){var n=e.title,r=e.titleId,a=De(e,_e);return c.createElement("svg",Pe({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,we||(we=c.createElement("desc",null,"Created with Sketch.")),ke||(ke=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var He=c.forwardRef(Ge),We=(n.p,n(84),Object(J.b)({currentUser:Re,hidden:je})),qe=Object(l.b)(We)((function(e){var t=e.currentUser,n=e.hidden;return Object(Ee.jsxs)("div",{className:"header",children:[Object(Ee.jsx)(s.c,{className:"logo-container",to:"/",children:Object(Ee.jsx)(He,{className:"logo"})}),Object(Ee.jsxs)("div",{className:"options",children:[Object(Ee.jsx)(s.c,{className:"option",to:"/shop",children:"SHOP"}),Object(Ee.jsx)(s.c,{className:"option",to:"/signin",children:"CONTACT"}),t?Object(Ee.jsx)("div",{className:"option",onClick:function(){return F.signOut()},children:Object(Ee.jsx)("i",{className:"fas fa-sign-out-alt",style:{color:"var(--ter)",fontSize:"22px"}})}):Object(Ee.jsx)(s.c,{className:"option",to:"/signin",children:"SIGN IN"}),Object(Ee.jsx)(Ue,{})]}),n?null:Object(Ee.jsx)(Be,{})]})})),Ve=(n(85),Object(V.g)(Object(l.b)(null,(function(e){return{addItem:function(t){return e(pe(t))}}}))((function(e){var t=e.item,n=e.addItem,c=e.history,r=t.name,a=t.price,i=t.imageUrl;return Object(Ee.jsxs)("div",{className:"collection-item",children:[Object(Ee.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(Ee.jsxs)("div",{className:"collection-footer",children:[Object(Ee.jsxs)("div",{className:"collection-info",children:[Object(Ee.jsx)("span",{className:"name",children:r}),Object(Ee.jsxs)("span",{className:"price",children:["$ ",a]})]}),Object(Ee.jsxs)("div",{className:"collection-btn",children:[Object(Ee.jsx)("i",{className:"fas fa-shopping-cart fa-1x",onClick:function(){return n(t)}}),Object(Ee.jsx)("button",{onClick:function(){n(t),c.push("/checkout")},children:"Buy Now"})]})]})]})})))),Je=(n(86),function(e){var t=e.title,n=e.items;return Object(Ee.jsxs)("div",{className:"collection-preview",children:[Object(Ee.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Ee.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(Ee.jsx)(Ve,{item:e},e.id)}))})]})}),Le=Object(J.a)([function(e){return e.shop}],(function(e){return e.collections})),ze=Object(J.a)([Le],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Fe=(n(87),["id"]),Ye=Object(J.b)({collections:ze}),Xe=Object(l.b)(Ye)((function(e){var t=e.collections;return Object(Ee.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Ie.a)(e,Fe);return Object(Ee.jsx)(Je,Object(j.a)({},n),t)}))})})),Ke=(n(88),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(J.a)([Le],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(Ee.jsxs)("div",{className:"collection-page",children:[Object(Ee.jsx)("h2",{className:"title",children:n}),Object(Ee.jsx)("div",{className:"items",children:c.map((function(e){return Object(Ee.jsx)(Ve,{item:e},e.id)}))})]})}))),Qe=function(e){var t=e.match;return Object(Ee.jsxs)("div",{className:"shop-page",children:[Object(Ee.jsx)(V.b,{exact:!0,path:"".concat(t.path),component:Xe}),Object(Ee.jsx)(V.b,{path:"".concat(t.path,"/:collectionId"),component:Ke})]})},$e=n(4),Ze=(n(89),["handleChange","label"]),et=function(e){var t=e.handleChange,n=e.label,c=Object(Ie.a)(e,Ze);return Object(Ee.jsxs)("div",{className:"group",children:[Object(Ee.jsx)("input",Object(j.a)({className:"form-input",onChange:t},c)),n?Object(Ee.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},tt=(n(90),function(e){Object(W.a)(n,e);var t=Object(q.a)(n);function n(e){var c;return Object(G.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(D.a)(P.a.mark((function e(t){var n,r,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,r=n.email,a=n.password,e.prev=2,e.next=5,F.signInWithEmailAndPassword(r,a);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:c.setState({email:"",password:""});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,r=t.name;c.setState(Object($e.a)({},r,n))},c.state={email:"",password:""},c}return Object(H.a)(n,[{key:"render",value:function(){return Object(Ee.jsxs)("div",{className:"sign-in",children:[Object(Ee.jsx)("h2",{children:"I already have an account"}),Object(Ee.jsx)("span",{children:"Sign in with your email and password"}),Object(Ee.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(Ee.jsx)(et,{type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),Object(Ee.jsx)(et,{type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(Ee.jsxs)("div",{className:"buttons",children:[Object(Ee.jsx)(Se,{type:"submit",children:"Sign In"}),Object(Ee.jsxs)(Se,{onClick:de,isGoogleSignIn:!0,children:["","Sign in with Google",""]})]})]})]})}}]),n}(r.a.Component)),nt=tt,ct=(n(91),function(e){Object(W.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(P.a.mark((function t(n){var c,r,a,i,s,l,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,r=c.displayName,a=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,F.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,z(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,r=n.value;e.setState(Object($e.a)({},c,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(H.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,r=e.confirmPassword;return Object(Ee.jsxs)("div",{className:"sign-up",children:[Object(Ee.jsx)("h2",{className:"title",children:"I don't have an account"}),Object(Ee.jsx)("span",{children:"Sign up with your email and password"}),Object(Ee.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(Ee.jsx)(et,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(Ee.jsx)(et,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(Ee.jsx)(et,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(Ee.jsx)(et,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(Ee.jsx)(Se,{type:"submit",children:"Sign Up"})]})]})}}]),n}(r.a.Component)),rt=ct,at=(n(92),function(){return Object(Ee.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(Ee.jsx)(nt,{}),Object(Ee.jsx)(rt,{})]})}),it=(n(93),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(pe(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,r=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(Ee.jsxs)("div",{className:"checkout-item",children:[Object(Ee.jsx)("div",{className:"image-container",children:Object(Ee.jsx)("img",{src:i,alt:"item"})}),Object(Ee.jsx)("span",{className:"name",children:a}),Object(Ee.jsxs)("span",{className:"quantity",children:[Object(Ee.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(Ee.jsx)("span",{className:"value",children:l}),Object(Ee.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(Ee.jsxs)("span",{className:"price",children:["$",s]}),Object(Ee.jsx)("span",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),st=(n(94),Object(J.b)({cartItems:he,total:Oe})),lt=Object(l.b)(st)((function(e){var t=e.cartItems,n=e.total;return Object(Ee.jsxs)("div",{className:"checkout-page",children:[Object(Ee.jsxs)("div",{className:"checkout-header",children:[Object(Ee.jsx)("div",{className:"header-block",children:Object(Ee.jsx)("span",{children:"Product"})}),Object(Ee.jsx)("div",{className:"header-block",children:Object(Ee.jsx)("span",{children:"Description"})}),Object(Ee.jsx)("div",{className:"header-block",children:Object(Ee.jsx)("span",{children:"Quantity"})}),Object(Ee.jsx)("div",{className:"header-block",children:Object(Ee.jsx)("span",{children:"Price"})}),Object(Ee.jsx)("div",{className:"header-block",children:Object(Ee.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(Ee.jsx)(it,{cartItem:e},e.id)})),Object(Ee.jsx)("div",{className:"total",children:Object(Ee.jsxs)("span",{children:["TOTAL: $",n]})})]})})),ot=Object(J.a)([function(e){return e.directory}],(function(e){return e.sections})),ut=(n(95),Object(V.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,r=e.history,a=e.match,i=e.linkUrl;return Object(Ee.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return r.push("".concat(a.url).concat(i))},children:[Object(Ee.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(Ee.jsxs)("div",{className:"content",children:[Object(Ee.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Ee.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),dt=(n(96),["id"]),bt=Object(J.b)({sections:ot}),pt=Object(l.b)(bt)((function(e){var t=e.sections;return Object(Ee.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Ie.a)(e,dt);return Object(Ee.jsx)(ut,Object(j.a)({},n),t)}))})})),mt=(n(97),function(){return Object(Ee.jsx)("div",{className:"homepage",children:Object(Ee.jsx)(pt,{})})}),ht=function(e){Object(W.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=F.onAuthStateChanged(function(){var t=Object(D.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,z(n);case 3:t.sent.onSnapshot((function(t){e(Object(j.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(Ee.jsxs)(s.b,{children:[Object(Ee.jsx)(qe,{}),Object(Ee.jsxs)(V.d,{children:[Object(Ee.jsx)(V.b,{exact:!0,path:"/",component:mt}),Object(Ee.jsx)(V.b,{path:"/shop",component:Qe}),Object(Ee.jsx)(V.b,{exact:!0,path:"/checkout",component:lt}),Object(Ee.jsx)(V.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(Ee.jsx)(V.a,{to:"/"}):Object(Ee.jsx)(at,{})}})]})]})}}]),n}(r.a.Component),jt=Object(J.b)({currentUser:Re}),gt=Object(l.b)(jt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(ht);i.a.render(Object(Ee.jsx)(l.a,{store:B,children:Object(Ee.jsx)(s.a,{children:Object(Ee.jsx)(o.a,{persistor:R,children:Object(Ee.jsx)(gt,{})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.222ea973.chunk.js.map
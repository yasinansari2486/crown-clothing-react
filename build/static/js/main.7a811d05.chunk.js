(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{53:function(e,t,i){},54:function(e,t,i){},59:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){"use strict";i.r(t);var n=i(12),a=i.n(n),c=i(45),r=i.n(c),s=i(26),l=(i(53),i(2)),o=i(3),p=i(8),b=i(9),m=i(15),d=(i(54),i(33));i(56),i(78);d.a.initializeApp({apiKey:"AIzaSyAxYs_FfhPeKeW1ckvaI24vrk4VH9wHFtg",authDomain:"crown-db-f7e14.firebaseapp.com",projectId:"crown-db-f7e14",storageBucket:"crown-db-f7e14.appspot.com",messagingSenderId:"409340409404",appId:"1:409340409404:web:fc7497c8b9312544407539",measurementId:"G-VXEYY1V1JX"});var h=d.a.auth(),u=(d.a.firestore(),new d.a.auth.GoogleAuthProvider);u.setCustomParameters({prompt:"select_account"});var g,j,O=function(){return h.signInWithPopup(u)},f=(d.a,["title","titleId"]);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},v.apply(this,arguments)}function x(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function k(e,t){var i=e.title,a=e.titleId,c=x(e,f);return n.createElement("svg",v({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},c),void 0===i?n.createElement("title",{id:a},"Group"):i?n.createElement("title",{id:a},i):null,g||(g=n.createElement("desc",null,"Created with Sketch.")),j||(j=n.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},n.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},n.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),n.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var w=n.forwardRef(k),U=(i.p,i(59),i(11)),N=function(e){var t=e.currentUser;return Object(U.jsxs)("div",{className:"header",children:[Object(U.jsx)(s.c,{className:"logo-container",to:"/",children:Object(U.jsx)(w,{className:"logo"})}),Object(U.jsxs)("div",{className:"options",children:[Object(U.jsx)(s.c,{className:"option",to:"/shop",children:"SHOP"}),Object(U.jsx)(s.c,{className:"option",to:"/signin",children:"CONTACT"}),t?Object(U.jsx)("div",{className:"option",onClick:function(){return h.signOut()},children:"SIGN OUT"}):Object(U.jsx)(s.c,{className:"option",to:"/signin",children:"SIGN IN"})]})]})},y=i(4),S=i(25),B=i(28),C=(i(68),["handleChange","label"]),I=function(e){var t=e.handleChange,i=e.label,n=Object(B.a)(e,C);return Object(U.jsxs)("div",{className:"group",children:[Object(U.jsx)("input",Object(S.a)({className:"form-input",onChange:t},n)),i?Object(U.jsx)("label",{className:"".concat(n.value.length?"shrink":""," form-input-label"),children:i}):null]})},T=(i(69),["children","isGoogleSignIn"]),J=function(e){var t=e.children,i=e.isGoogleSignIn,n=Object(B.a)(e,T);return Object(U.jsx)("button",Object(S.a)(Object(S.a)({className:"".concat(i?"google-sign-in":""," custom-button")},n),{},{children:t}))},W=(i(70),function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,i=t.value,a=t.name;n.setState(Object(y.a)({},a,i))},n.state={email:"",password:""},n}return Object(o.a)(i,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"sign-in",children:[Object(U.jsx)("h2",{children:"I already have an account"}),Object(U.jsx)("span",{children:"Sign in with your email and password"}),Object(U.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(U.jsx)(I,{type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(U.jsx)(I,{type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(U.jsxs)("div",{className:"buttons",children:[Object(U.jsx)(J,{type:"submit",children:"Sign In"}),Object(U.jsxs)(J,{onClick:O,isGoogleSignIn:!0,children:["","Sign in with google",""]})]})]})]})}}]),i}(a.a.Component)),E=(i(71),function(){return Object(U.jsx)("div",{className:"sign-in-and-sign-up",children:Object(U.jsx)(W,{})})}),P=(i(72),Object(m.f)((function(e){var t=e.title,i=e.imageUrl,n=e.size,a=e.history,c=e.match,r=e.linkUrl;return Object(U.jsxs)("div",{className:"".concat(n," menu-item"),onClick:function(){return a.push("".concat(c.url).concat(r))},children:[Object(U.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(i,")")}}),Object(U.jsxs)("div",{className:"content",children:[Object(U.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(U.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),A=(i(73),["id"]),G=function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,i=Object(B.a)(e,A);return Object(U.jsx)(P,Object(S.a)({},i),t)}))})}}]),i}(a.a.Component),F=(i(74),function(){return Object(U.jsx)("div",{className:"homepage",children:Object(U.jsx)(G,{})})}),M=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],V=(i(75),function(e){e.id;var t=e.name,i=e.price,n=e.imageUrl;return Object(U.jsxs)("div",{className:"collection-item",children:[Object(U.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(U.jsxs)("div",{className:"collection-footer",children:[Object(U.jsxs)("div",{className:"collection-info",children:[Object(U.jsx)("span",{className:"name",children:t}),Object(U.jsxs)("span",{className:"price",children:["$ ",i]})]}),Object(U.jsxs)("div",{className:"collection-btn",children:[Object(U.jsx)("i",{class:"fas fa-shopping-cart fa-1x"}),Object(U.jsx)("button",{children:"Buy Now"})]})]})]})}),z=(i(76),["id"]),D=function(e){var t=e.title,i=e.items;return Object(U.jsxs)("div",{className:"collection-preview",children:[Object(U.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(U.jsx)("div",{className:"preview",children:i.filter((function(e,t){return t<4})).map((function(e){var t=e.id,i=Object(B.a)(e,z);return Object(U.jsx)(V,Object(S.a)({},i),t)}))})]})},H=["id"],R=function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this)).state={collections:M},n}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state.collections;return Object(U.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,i=Object(B.a)(e,H);return Object(U.jsx)(D,Object(S.a)({},i),t)}))})}}]),i}(a.a.Component),L=function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=h.onAuthStateChanged((function(t){e.setState({currentUser:t}),console.log(t)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(U.jsxs)(s.b,{children:[Object(U.jsx)(N,{currentUser:this.state.currentUser}),Object(U.jsxs)(m.c,{children:[Object(U.jsx)(m.a,{exact:!0,path:"/",component:F}),Object(U.jsx)(m.a,{exact:!0,path:"/shop",component:R}),Object(U.jsx)(m.a,{exact:!0,path:"/signin",component:E})]})]})}}]),i}(a.a.Component);r.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(s.a,{children:Object(U.jsx)(L,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.7a811d05.chunk.js.map
(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},102:function(e,t,i){},103:function(e,t,i){},104:function(e,t,i){},105:function(e,t,i){},106:function(e,t,i){},107:function(e,t,i){"use strict";i.r(t);var n,a,c=i(11),r=i.n(c),s=i(57),l=i.n(s),o=i(26),p=(i(66),i(15)),b=(i(67),["title","titleId"]);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function h(e,t){var i=e.title,r=e.titleId,s=d(e,b);return c.createElement("svg",m({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},s),void 0===i?c.createElement("title",{id:r},"Group"):i?c.createElement("title",{id:r},i):null,n||(n=c.createElement("desc",null,"Created with Sketch.")),a||(a=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var u=c.forwardRef(h),g=(i.p,i(68),i(12)),j=function(){return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)(o.c,{className:"logo-container",to:"/",children:Object(g.jsx)(u,{className:"logo"})}),Object(g.jsxs)("div",{className:"options",children:[Object(g.jsx)(o.c,{className:"option",to:"/shop",children:"SHOP"}),Object(g.jsx)(o.c,{className:"option",to:"/signin",children:"CONTACT"})]})]})},f=i(0),O=i.n(f),v=i(1),k=i(4),x=i(2),w=i(3),U=i(8),y=i(9),N=i(27),B=i(29),S=(i(78),["handleChange","label"]),C=function(e){var t=e.handleChange,i=e.label,n=Object(B.a)(e,S);return Object(g.jsxs)("div",{className:"group",children:[Object(g.jsx)("input",Object(N.a)({className:"form-input",onChange:t},n)),i?Object(g.jsx)("label",{className:"".concat(n.value.length?"shrink":""," form-input-label"),children:i}):null]})},E=(i(79),["children"]),J=function(e){var t=e.children,i=Object(B.a)(e,E);return Object(g.jsx)("button",Object(N.a)(Object(N.a)({className:"custom-button"},i),{},{children:t}))},P=i(34);i(80),i(108);P.a.initializeApp({apiKey:"AIzaSyAxYs_FfhPeKeW1ckvaI24vrk4VH9wHFtg",authDomain:"crown-db-f7e14.firebaseapp.com",projectId:"crown-db-f7e14",storageBucket:"crown-db-f7e14.appspot.com",messagingSenderId:"409340409404",appId:"1:409340409404:web:fc7497c8b9312544407539",measurementId:"G-VXEYY1V1JX"});P.a.auth(),P.a.firestore();var T=new P.a.auth.GoogleAuthProvider;T.setCustomParameters({prompt:"select_account"});P.a;var A=i(42),I=i.n(A),W=(I.a.create({baseURL:"http://192.168.0.14:8000/",timeout:5e3,headers:{"Content-Type":"application/json",accept:"application/json"}}),i(60)),z=i.n(W),F=function(e){console.log(e),I.a.post("http://192.168.0.14:8000/auth/convert-token",{token:e,backend:"facebook",grant_type:"convert_token",client_id:"NXzKzR38bHU20Pl8PRSz1xO6O0mQbAkadUclPRTr",client_secret:"WnhZO0S4qaSz15sYUFvw8ejOhUQA3iLFFkXAkN353x5uhVmDEaFySAFpzYNblvpSFPM6APfdL74DpIB05iAezXF1LjCeeKJKCfxMtvCwUe4fkEHb484XwEOpb24JUe2p"}).then((function(e){localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token)}))},M=(i(100),function(e){Object(U.a)(i,e);var t=Object(y.a)(i);function i(e){var n;return Object(x.a)(this,i),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,i=t.value,a=t.name;n.setState(Object(k.a)({},a,i))},n.state={email:"",password:""},n}return Object(w.a)(i,[{key:"render",value:function(){var e=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),F(t.accesstoken);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"sign-in",children:[Object(g.jsx)("h2",{children:"I already have an account"}),Object(g.jsx)("span",{children:"Sign in with your email and password"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)(C,{type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(g.jsx)(C,{type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(g.jsx)(J,{type:"submit",children:"Sign In"}),Object(g.jsx)(z.a,{appId:"410495577459528",fields:"name,email,picture",callback:e})]})]})}}]),i}(r.a.Component)),R=M,L=(i(101),function(){return Object(g.jsx)("div",{className:"sign-in-and-sign-up",children:Object(g.jsx)(R,{})})}),V=(i(102),Object(p.f)((function(e){var t=e.title,i=e.imageUrl,n=e.size,a=e.history,c=e.match,r=e.linkUrl;return Object(g.jsxs)("div",{className:"".concat(n," menu-item"),onClick:function(){return a.push("".concat(c.url).concat(r))},children:[Object(g.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(i,")")}}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(g.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),H=(i(103),["id"]),X=function(e){Object(U.a)(i,e);var t=Object(y.a)(i);function i(){var e;return Object(x.a)(this,i),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(w.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,i=Object(B.a)(e,H);return Object(g.jsx)(V,Object(N.a)({},i),t)}))})}}]),i}(r.a.Component),D=(i(104),function(){return Object(g.jsx)("div",{className:"homepage",children:Object(g.jsx)(X,{})})}),Y=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],G=(i(105),function(e){e.id;var t=e.name,i=e.price,n=e.imageUrl;return Object(g.jsxs)("div",{className:"collection-item",children:[Object(g.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(g.jsxs)("div",{className:"collection-footer",children:[Object(g.jsxs)("div",{className:"collection-info",children:[Object(g.jsx)("span",{className:"name",children:t}),Object(g.jsxs)("span",{className:"price",children:["$ ",i]})]}),Object(g.jsxs)("div",{className:"collection-btn",children:[Object(g.jsx)("i",{class:"fas fa-shopping-cart fa-1x"}),Object(g.jsx)("button",{children:"Buy Now"})]})]})]})}),K=(i(106),["id"]),_=function(e){var t=e.title,i=e.items;return Object(g.jsxs)("div",{className:"collection-preview",children:[Object(g.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(g.jsx)("div",{className:"preview",children:i.filter((function(e,t){return t<4})).map((function(e){var t=e.id,i=Object(B.a)(e,K);return Object(g.jsx)(G,Object(N.a)({},i),t)}))})]})},Q=["id"],q=function(e){Object(U.a)(i,e);var t=Object(y.a)(i);function i(e){var n;return Object(x.a)(this,i),(n=t.call(this)).state={collections:Y},n}return Object(w.a)(i,[{key:"render",value:function(){var e=this.state.collections;return Object(g.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,i=Object(B.a)(e,Q);return Object(g.jsx)(_,Object(N.a)({},i),t)}))})}}]),i}(r.a.Component);var Z=function(){return Object(g.jsxs)(o.b,{children:[Object(g.jsx)(j,{}),Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/",component:D}),Object(g.jsx)(p.a,{exact:!0,path:"/shop",component:q}),Object(g.jsx)(p.a,{exact:!0,path:"/signin",component:L})]})]})};l.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(Z,{})})}),document.getElementById("root"))},66:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){}},[[107,1,2]]]);
//# sourceMappingURL=main.38cb1b90.chunk.js.map
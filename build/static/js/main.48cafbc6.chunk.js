(this["webpackJsonpdiscord-react"]=this["webpackJsonpdiscord-react"]||[]).push([[0],{153:function(e,c,t){},154:function(e,c,t){},189:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),s=t(32),r=t.n(s),i=t(12),o=t(5),d=t(95),l=t.n(d);function j(){return l.a.get("https://sevinco.herokuapp.com/api/auth",{withCredentials:!0})}var h=t(2);function b(e){var c=e.history,t=a.a.useState(null),n=Object(o.a)(t,2),s=(n[0],n[1]),r=a.a.useState(!0),i=Object(o.a)(r,2),d=i[0],l=i[1];return a.a.useEffect((function(){j().then((function(e){var c=e.data;console.log(c),s(c),l(!1)})).catch((function(e){c.push("/"),l(!1)}))}),[]),!d&&Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Dashboard Page"})})}var u=t(115);t(153);function x(e){var c=e.guilds,t=a.a.useState(!0),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"my-5",children:Object(h.jsx)("h1",{className:"text-center fs-1 fw-bold server",children:"Servers"})}),Object(h.jsx)("div",{className:"container-fluid mb-5",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-10 mx-auto",children:Object(h.jsx)("div",{className:"row gy-4",children:c.map((function(e){return Object(h.jsx)(F,{icon:"https://cdn.discordapp.com/icons/".concat(e.id,"/").concat(e.icon,".png?size=128"),guildId:e.id,guildName:e.name})}))})}),Object(h.jsxs)("div",{className:"text-center gy-10",children:[Object(h.jsx)(u.a,{href:"https://discord.com/api/oauth2/authorize?client_id=903172310150815745&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=bot%20applications.commands",target:"_blank",onClick:function(){r(!1)},children:"Add to Server"}),Object(h.jsx)("p",{style:{color:"white"},hidden:s,children:"Please Refresh"})]})]})})]})}t(154);function O(e){var c=e.user,t=e.logged;return Object(h.jsx)("div",{children:t?Object(h.jsx)(N,{user:c}):Object(h.jsx)(k,{})})}var p=t(71),m=t.n(p),v=t(209),f=t(205),g=t(213),S=t(208);function N(e){var c=e.user;return Object(h.jsx)("div",{style:m.a,children:Object(h.jsx)(v.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(v.a.Brand,{href:"#home",children:Object(h.jsx)("img",{alt:"Sevinco",src:"https://cdn.discordapp.com/attachments/747451632534683679/904995247510151198/SevincoMusic.png",width:"90",height:"72",className:"d-inline-block align-top"})}),Object(h.jsx)(v.a.Brand,{href:"#home",style:{fontSize:"40px"},className:"Brand",children:"Sevinco"}),Object(h.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(g.a,{className:"me-auto",children:[Object(h.jsx)(g.a.Link,{href:"#features",children:"Support Server"}),Object(h.jsx)(g.a.Link,{href:"#pricing",children:"About"})]}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(S.a,{title:c.discordUser,id:"collasible-nav-dropdown",children:[Object(h.jsx)(S.a.Item,{href:"/menu",children:"Servers"}),Object(h.jsx)(S.a.Item,{href:"#action/3.2",children:"Add to Server"}),Object(h.jsx)(S.a.Divider,{}),Object(h.jsx)(S.a.Item,{style:{color:"red"},href:"#action/3.4",children:"Log Out"})]})})]})]})})})}var y=t(210);function k(){return Object(h.jsx)("div",{style:m.a,children:Object(h.jsx)(v.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(v.a.Brand,{href:"#home",children:Object(h.jsx)("img",{alt:"Sevinco",src:"https://cdn.discordapp.com/attachments/747451632534683679/904995247510151198/SevincoMusic.png",width:"90",height:"72",className:"d-inline-block align-top"})}),Object(h.jsx)(v.a.Brand,{href:"#home",style:{fontSize:"40px"},className:"Brand",children:"Sevinco"}),Object(h.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(g.a,{className:"me-auto",children:[Object(h.jsx)(g.a.Link,{href:"#features",children:"Support Server"}),Object(h.jsx)(g.a.Link,{href:"#pricing",children:"About"})]}),Object(h.jsx)(g.a,{children:Object(h.jsx)(y.a,{onClick:function(){return window.location.href="https://sevinco.herokuapp.com/api/auth/discord"},colorScheme:"orange",children:"Login"})})]})]})})})}var w=t(58);function F(e){var c=e.icon,t=e.guildName,n=e.guildId;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-md-4 col-10 mx-auto",children:Object(h.jsxs)("div",{className:"card bg-secondary bg-gradient mycard",children:[Object(h.jsx)("img",{src:c,alt:"",className:"card-img-top icon center"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title guild",children:t}),Object(h.jsx)(u.a,{children:Object(h.jsx)(w.b,{to:"/dashboard/".concat(n),className:"dash_button",children:"Dashboard"})})]})]})})})}function C(e){var c=a.a.useState(null),t=Object(o.a)(c,2),n=t[0],s=t[1],r=a.a.useState(!1),i=Object(o.a)(r,2),d=i[0],l=i[1];return a.a.useEffect((function(){j().then((function(e){var c=e.data;console.log(c),s(c),l(!0)})).catch((function(e){l(!1)}))}),[]),document.body.style.backgroundColor="#192530",Object(h.jsx)("div",{children:Object(h.jsx)(O,{user:n,logged:d})})}function B(e){var c=e.history,t=a.a.useState(null),n=Object(o.a)(t,2),s=n[0],r=n[1],i=a.a.useState(!0),d=Object(o.a)(i,2),b=d[0],u=d[1],O=a.a.useState([]),p=Object(o.a)(O,2),m=p[0],v=p[1];return a.a.useEffect((function(){j().then((function(e){var c=e.data;return console.log(c),r(c),u(!1),l.a.get("https://sevinco.herokuapp.com/api/discord/guilds",{withCredentials:!0})})).then((function(e){var c=e.data;console.log(c),v(c)})).catch((function(e){c.push("/"),u(!1)}))}),[]),document.body.style.backgroundColor="#192530",!b&&Object(h.jsxs)("div",{children:[Object(h.jsx)(N,{user:s}),Object(h.jsx)(x,{guilds:m})]})}t(167),t(168);var L=function(){return Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",exact:!0,component:C}),Object(h.jsx)(i.b,{path:"/menu",exact:!0,component:B}),Object(h.jsx)(i.b,{path:"/dashboard/:id",exact:!0,component:b}),Object(h.jsx)(i.a,{to:"/"})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,214)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))},A=t(211),z=t(207);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsxs)(A.a,{children:[Object(h.jsx)(z.a,{}),Object(h.jsx)(w.a,{children:Object(h.jsx)(L,{})})]})}),document.getElementById("root")),I()},71:function(e,c,t){}},[[189,1,2]]]);
//# sourceMappingURL=main.48cafbc6.chunk.js.map
(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),n(3)),i=(n(10),n(11),n(12),n(0)),u=function(e){var t=e.monster,n=t.name,c=t.email,r=t.id;return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(r,"?set=set2&size=180x180")}),Object(i.jsx)("h2",{children:n}),Object(i.jsx)("p",{children:c})]})},j=function(e){return Object(i.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(i.jsx)(u,{monster:e},e.id)}))})},h=(n(14),function(e){return Object(i.jsx)("input",{className:"search",type:"search",placeholder:e.placeholder,onChange:e.onSearch})});var l=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),u=o[0],l=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json().then((function(e){return r(e)}))}))}),[n]);var d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Monsters Rolodex"}),Object(i.jsx)(h,{onSearch:function(e){l(e.target.value)},placeholder:"Search Monsters"}),Object(i.jsx)(j,{monsters:d})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.d8ccd89e.chunk.js.map
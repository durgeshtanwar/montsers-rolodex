(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2$size=180*85")}),Object(l.jsx)("h1",{children:e.monster.name},e.key),Object(l.jsx)("h2",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(16),function(e){return Object(l.jsx)("input",{type:"search",className:"search",placeholder:e.placeholder,onChange:e.handleChange})}),p=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h4",{children:"Monster Rolodex"}),Object(l.jsx)(m,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(s.Component));o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.11bf881f.chunk.js.map
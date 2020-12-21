(this["webpackJsonpevent-app"]=this["webpackJsonpevent-app"]||[]).push([[0],{39:function(t,e,n){},58:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),c=n.n(a),s=n(32),i=n.n(s),o=(n(39),n(14)),u=n.n(o),l=n(17),j=n(4),d=n(15),h=n(2),b=n(13),v=n.n(b),p=n(8),O=n(9),f=n(12),x=n(11),m=(n(58),Object(a.createContext)(null));function g(){var t=Object(a.useContext)(m),e=t.userData,n=t.setUserData,c=Object(h.f)();return Object(r.jsx)("nav",{className:"authOptions",children:e.user?Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)("button",{onClick:function(){return c.push("/eventList")},children:" View Events "}),Object(r.jsx)("button",{onClick:function(){return c.push("/userAccount")},children:" Account "}),Object(r.jsx)("button",{onClick:function(){n({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),c.push("/")},children:" Log Out "})," "]}):Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)("button",{onClick:function(){return c.push("/register")},children:"Register"}),Object(r.jsx)("button",{onClick:function(){return c.push("/login")},children:"Log in"})," "]})})}var k=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(d.b,{to:"/",children:Object(r.jsx)("h1",{className:"title",children:"Event App"})}),Object(r.jsx)(g,{})]})})}}]),n}(c.a.Component),E=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Home"})})}}]),n}(a.Component);function y(){var t=Object(a.useState)(),e=Object(j.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(a.useState)(),p=Object(j.a)(b,2),O=p[0],f=p[1],x=Object(a.useContext)(m).setUserData,g=Object(h.f)(),k=function(){var t=Object(l.a)(u.a.mark((function t(e){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,r={username:n,password:o},t.next=5,v.a.post("http://localhost:5000/users/login",r);case 5:a=t.sent,x({token:a.data.token,user:a.data.user}),localStorage.setItem("auth-token",a.data.token),g.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0.response.data.msg&&f(t.t0.response.data.msg);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Login"}),O&&Object(r.jsx)("errorNotice",{message:O,clearError:function(){return f(void 0)}}),Object(r.jsxs)("form",{className:"form",onSubmit:k,children:[Object(r.jsx)("label",{htmlFor:"login-username",children:"Username"}),Object(r.jsx)("input",{id:"login-username",type:"text",onChange:function(t){return c(t.target.value)}}),Object(r.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(r.jsx)("input",{id:"login-password",type:"password",onChange:function(t){return d(t.target.value)}}),Object(r.jsx)("input",{type:"submit",value:"Login"})]})]})}function C(){var t=Object(a.useState)(),e=Object(j.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(a.useState)(),p=Object(j.a)(b,2),O=p[0],f=p[1],x=Object(a.useState)(),g=Object(j.a)(x,2),k=g[0],E=g[1],y=Object(a.useState)(),C=Object(j.a)(y,2),w=C[0],S=C[1],I=Object(a.useContext)(m).setUserData,L=Object(h.f)(),D=function(){var t=Object(l.a)(u.a.mark((function t(e){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={email:n,username:o,password:O,passwordCheck:k},t.next=4,v.a.post("http://localhost:5000/users/register",r);case 4:return t.next=6,v.a.post("http://localhost:5000/users/login",{username:o,password:O});case 6:a=t.sent,I({token:a.data.token,user:a.data.user}),localStorage.setItem("auth-token",a.data.token),L.push("/");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h2",{children:"Register"}),w&&Object(r.jsx)("errorNotice",{message:w,clearError:function(){return S(void 0)}}),Object(r.jsxs)("form",{className:"form",onSubmit:D,children:[Object(r.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(r.jsx)("input",{id:"register-email",type:"email",onChange:function(t){return c(t.target.value)}}),Object(r.jsx)("label",{htmlFor:"register-username",children:"Username"}),Object(r.jsx)("input",{id:"register-username",type:"text",onChange:function(t){return d(t.target.value)}}),Object(r.jsx)("label",{htmlFor:"register-password",children:"Password"}),Object(r.jsx)("input",{id:"register-password",type:"password",onChange:function(t){return f(t.target.value)}}),Object(r.jsx)("input",{type:"password",placeholder:"Verify password",onChange:function(t){return E(t.target.value)}}),Object(r.jsx)("input",{type:"submit",value:"Register"})]})]})}function w(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:" User details: "})})}var S="http://localhost:5000/",I=function(){function t(){Object(p.a)(this,t)}return Object(O.a)(t,[{key:"APICall",value:function(t,e,n,r){return v()({method:t,url:e,headers:{"x-auth-token":n},data:r})}},{key:"getEvents",value:function(t){return this.APICall("get","".concat(S,"events"),t)}},{key:"addEvent",value:function(t,e,n,r,a){return this.APICall("post","".concat(S,"events"),t,{eventname:e,location:n,info:r,date:a})}},{key:"editEvent",value:function(t,e,n,r,a,c){return this.APICall("patch","".concat(S,"events/").concat(e),t,{eventname:n,location:r,info:a,date:c})}},{key:"deleteEvent",value:function(t,e){return this.APICall("delete","".concat(S,"events/").concat(e),t)}}]),t}(),L=(n(64),n(65),function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"submitHandler",value:function(t){var e=this;t.preventDefault(),(this.props.currentEvent?this.props.client.editEvent(this.props.token,this.props.currentEvent._id,t.target.eventname.value,t.target.location.value,t.target.info.value,t.target.date.value):this.props.client.addEvent(this.props.token,t.target.eventname.value,t.target.location.value,t.target.info.value,t.target.date.value)).then((function(){document.getElementById("eventform").reset(),e.props.refreshList()}))}},{key:"render",value:function(){var t,e,n,a,c,s=this;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"eventform",className:"form",onSubmit:function(t){return s.submitHandler(t)},children:[Object(r.jsx)("label",{htmlFor:"eventname",children:"Event Name"}),Object(r.jsx)("input",{id:"eventname",type:"text",defaultValue:null===(t=this.props.currentEvent)||void 0===t?void 0:t.eventname}),Object(r.jsx)("label",{htmlFor:"location",children:"Location"}),Object(r.jsx)("input",{id:"location",type:"text",defaultValue:null===(e=this.props.currentEvent)||void 0===e?void 0:e.location}),Object(r.jsx)("label",{htmlFor:"info",children:"Information"}),Object(r.jsx)("input",{id:"info",type:"text",defaultValue:null===(n=this.props.currentEvent)||void 0===n?void 0:n.info}),Object(r.jsx)("label",{htmlFor:"date",children:"Date"}),Object(r.jsx)("input",{id:"date",type:"date",defaultValue:null===(a=this.props.currentEvent)||void 0===a?void 0:a.date}),Object(r.jsx)("label",{htmlFor:"time",children:"Time"}),Object(r.jsx)("input",{id:"time",type:"time",defaultValue:null===(c=this.props.currentEvent)||void 0===c?void 0:c.date}),Object(r.jsx)("input",{id:"submit",type:"submit"})]})})}}]),n}(a.Component)),D=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(t){var r;return Object(p.a)(this,n),(r=e.call(this,t)).state={listItems:[],token:void 0,currentEvent:void 0},r.client=new I,r}return Object(O.a)(n,[{key:"refreshList",value:function(){var t=this;this.client.getEvents(this.state.token).then((function(e){return t.setState({listItems:e.data})}))}},{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("auth-token");this.setState({token:e||[]},(function(){return t.refreshList()}))}},{key:"editEvent",value:function(t){this.setState({currentEvent:t})}},{key:"deleteEvent",value:function(t){var e=this;this.client.deleteEvent(this.state.token,t).then((function(){return e.refreshList()}))}},{key:"buildList",value:function(){var t=this;return this.state.listItems.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.eventname}),Object(r.jsx)("td",{children:e.location}),Object(r.jsx)("td",{children:e.info}),Object(r.jsx)("td",{children:e.date}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return t.editEvent(e)},children:" Edit Event "})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return t.deleteEvent(e._id)},children:" Delete Event "})})]},e._id)}))}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:" Events: "}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Event Name"}),Object(r.jsx)("td",{children:"Location"}),Object(r.jsx)("td",{children:"Information"}),Object(r.jsx)("td",{children:"Date"}),Object(r.jsx)("td",{children:"Edit"}),Object(r.jsx)("td",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:this.buildList()})]}),Object(r.jsx)(L,{token:this.state.token,client:this.client,refreshList:function(){t.refreshList(),t.setState({currentEvent:void 0})},currentEvent:this.state.currentEvent})]})}}]),n}(c.a.Component),F=function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:" Event Creation "})})}}]),n}(a.Component);function N(t){var e=this;s(t);var n=Object(a.useState)([]),c=Object(j.a)(n,2),s=(c[0],c[1]),i=Object(a.useState)(""),o=Object(j.a)(i,2);o[0],o[1],new I;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:" Event editor "}),Object(r.jsx)(L,{token:this.state.token,client:this.client,refreshList:function(){e.refreshList(),e.setState({currentEvent:void 0})},currentEvent:this.state.currentEvent})]})}function A(){var t=Object(a.useState)({token:void 0,user:void 0}),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===(e=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),e=""),t.next=4,v.a.post("http://localhost:5000/users/tokenIsValid",null,{headers:{"x-auth-token":e}});case 4:if(!t.sent.data){t.next=10;break}return t.next=8,v.a.get("http://localhost:5000/users/",{headers:{"x-auth-token":e}});case 8:n=t.sent,c({token:e,user:n.data});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)(d.a,{children:Object(r.jsxs)(m.Provider,{value:{userData:n,setUserData:c},children:[Object(r.jsx)(k,{}),Object(r.jsx)("br",{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{path:"/",exact:!0,component:E}),Object(r.jsx)(h.a,{path:"/login",component:y}),Object(r.jsx)(h.a,{path:"/register",component:C}),Object(r.jsx)(h.a,{path:"/userAccount",component:w}),Object(r.jsx)(h.a,{path:"/eventList",component:D}),Object(r.jsx)(h.a,{path:"/createEvent",component:F}),Object(r.jsx)(h.a,{path:"/editEvent",component:N})]})]})})}i.a.render(Object(r.jsx)(A,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.575a2f8a.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),s=a.n(r),o=a(5),i=a(4),l=a(0),u=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"jumbotron m4-5",children:[Object(l.jsx)("h1",{className:"display-4",children:"Welcome to Auth System!"}),Object(l.jsx)("p",{className:"lead",children:"This is an incredible authentication system with production level features!"}),Object(l.jsx)("hr",{className:"my-4"}),Object(l.jsx)("p",{children:"Click the Log In button"}),Object(l.jsx)(o.b,{className:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},j=a(14),b=a(2),p=a(7),d=a(6),h=a(8),m=a.n(h),O=a(17),x=a(15),f=a.n(x),v="LOGIN_SUCCESS",g="LOGIN_FAIL",y="SIGNUP_SUCCESS",N="SIGNUP_FAIL",S="ACTIVATION_SUCCESS",w="ACTIVATION_FAIL",_="USER_LOADED_SUCCESS",A="USER_LOADED_FAIL",C="AUTHENTICATED_SUCCESS",k="AUTHENTICATED_FAIL",E="PASSWORD_RESET_FAIL",I="PASSWORD_RESET_SUCCESS",T="PASSWORD_RESET_CONFIRM_FAIL",L="PASSWORD_RESET_CONFIRM_SUCCESS",R="LOGOUT",U=function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,f.a.get("".concat("http://localhost:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:_,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:A});case 12:e.next=15;break;case 14:t({type:A});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},D=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,authError:e.auth.authError}}),{login:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,r,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,f.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=a.sent,n({type:v,payload:s.data}),n(U()),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0),n({type:g,payload:a.t0.response.data.detail});case 14:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=e.authError,r=Object(n.useState)(),s=Object(p.a)(r,2),u=s[0],d=s[1],h=Object(n.useState)({email:"",password:""}),m=Object(p.a)(h,2),O=m[0],x=m[1],f=O.email,v=O.password;Object(n.useEffect)((function(){d(c)}),[c]),console.log(c);var g=function(e){return x(Object(b.a)(Object(b.a)({},O),{},Object(j.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("p",{children:"Sign into your Account"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(f,v)}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:f,onChange:function(e){return g(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:v,onChange:function(e){return g(e)},minLength:"6",required:!0})}),u&&Object(l.jsx)("div",{className:"alert alert-danger",children:u}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Don't have an account?",Object(l.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Forgot your Password?",Object(l.jsx)(o.b,{to:"/reset-password",children:"Reset password"})]})]})})),P=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,n){return function(){var c=Object(O.a)(m.a.mark((function c(r){var s,o,i;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:a,re_password:n}),c.prev=2,c.next=5,f.a.post("".concat("http://localhost:8000","/auth/users/"),o,s);case 5:i=c.sent,r({type:y,payload:i.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:N});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(p.a)(c,2),s=r[0],u=r[1],d=Object(n.useState)({name:"",email:"",password:"",re_password:""}),h=Object(p.a)(d,2),m=h[0],O=h[1],x=m.name,f=m.email,v=m.password,g=m.re_password,y=function(e){return O(Object(b.a)(Object(b.a)({},m),{},Object(j.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(i.a,{to:"/"}):s?Object(l.jsx)(i.a,{to:"/login"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsx)("p",{children:"Create your Account"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v===g&&(t(x,f,v,g),u(!0))}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"text",placeholder:"Name*",name:"name",value:x,onChange:function(e){return y(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:f,onChange:function(e){return y(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:v,onChange:function(e){return y(e)},minLength:"6",required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:g,onChange:function(e){return y(e)},minLength:"6",required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Already have an account?",Object(l.jsx)(o.b,{to:"/login",children:"Sign In"})]})]})})),F=Object(d.b)(null,{verify:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,f.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:n({type:S}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),n({type:w});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,c=Object(n.useState)(!1),r=Object(p.a)(c,2),s=r[0],o=r[1];return s?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(l.jsx)("h1",{children:"Verify your Account:"}),Object(l.jsx)("button",{onClick:function(e){var n=a.params.uid,c=a.params.token;t(n,c),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),q=Object(d.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,f.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,n);case 5:a({type:I}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:E});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(n.useState)(!1),c=Object(p.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)({email:""}),u=Object(p.a)(o,2),d=u[0],h=u[1],m=d.email;return r?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Request Password Reset:"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(m),s(!0)}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:m,onChange:function(e){return function(e){return h(Object(b.a)(Object(b.a)({},d),{},Object(j.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),J=Object(d.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(O.a)(m.a.mark((function c(r){var s,o;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,f.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:L}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r({type:T});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,c=Object(n.useState)(!1),r=Object(p.a)(c,2),s=r[0],o=r[1],u=Object(n.useState)({new_password:"",re_new_password:""}),d=Object(p.a)(u,2),h=d[0],m=d[1],O=h.new_password,x=h.re_new_password,f=function(e){return m(Object(b.a)(Object(b.a)({},h),{},Object(j.a)({},e.target.name,e.target.value)))};return s?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=t.params.uid,c=t.params.token;a(n,c,O,x),o(!0)}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:O,onChange:function(e){return f(e)},minLength:"6",required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:x,onChange:function(e){return f(e)},minLength:"6",required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})})),W=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){f.a.get("".concat("http://localhost:8000","/post/post-list")).then((function(e){c(e.data)}))}),[]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"#"}),Object(l.jsx)("th",{scope:"col",children:"Title"}),Object(l.jsx)("th",{scope:"col",children:"Description"}),Object(l.jsx)("th",{scope:"col",children:"Tarihi"}),Object(l.jsx)("th",{scope:"col",children:"\u0130mage"}),Object(l.jsx)("th",{scope:"col",children:"Yazar"}),Object(l.jsx)("th",{scope:"col",children:"Kategori"})]})}),Object(l.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:e.id}),Object(l.jsx)("td",{children:e.title}),Object(l.jsx)("td",{children:e.description}),Object(l.jsx)("td",{children:e.publishing_date}),Object(l.jsx)("td",{children:e.post_image}),Object(l.jsx)("td",{children:e.username}),Object(l.jsx)("td",{children:e.categoryname})]},e.id)}))})]})})},G=a(16),M=a(37),V=a(38),H={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null,authError:null},z=Object(G.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0});case v:return localStorage.setItem("access",n.access),Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case y:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!1});case _:return Object(b.a)(Object(b.a)({},e),{},{user:n});case k:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!1});case A:return Object(b.a)(Object(b.a)({},e),{},{user:null});case g:return Object(b.a)(Object(b.a)({},e),{},{authError:n});case N:case R:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(b.a)(Object(b.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case I:case E:case L:case T:case S:case w:return Object(b.a)({},e);default:return e}}}),B=[V.a],Y=Object(G.createStore)(z,{},Object(M.composeWithDevTools)(G.applyMiddleware.apply(void 0,B))),K=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:R})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),a?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"nav-link",to:"/post/post-list",children:"Post"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#!",onClick:t,children:"Logout"})})]}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/signup",children:"Sign Up"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/post/post-list",children:"Post"})})]})]})})]})})})})),Q=Object(d.b)(null,{checkAuthenticated:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,f.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:C}):t({type:k}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:k});case 13:e.next=16;break;case 15:t({type:k});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:U})((function(e){return Object(n.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(K,{}),e.children]})})),X=a(39),Z=function(e){var t=e.component,a=Object(X.a)(e,["component"]);return Object(l.jsx)(i.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return localStorage.getItem("access")?Object(l.jsx)(t,Object(b.a)({},e)):Object(l.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h2",{children:"SAYFA BULUNAMADI!"})})},ee=function(){return Object(l.jsx)(d.a,{store:Y,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(Q,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/login",component:D}),Object(l.jsx)(i.b,{exact:!0,path:"/signup",component:P}),Object(l.jsx)(i.b,{exact:!0,path:"/reset-password",component:q}),Object(l.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:J}),Object(l.jsx)(i.b,{exact:!0,path:"/activate/:uid/:token",component:F}),Object(l.jsx)(Z,{exact:!0,path:"/post/post-list",component:W}),Object(l.jsx)(i.b,{exact:!0,component:$})]})})})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ee,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.8198944e.chunk.js.map
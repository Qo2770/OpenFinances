webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,a){e.exports=a("NHnr")},"4+hh":function(e,t){},"79EM":function(e,t){},CkQR:function(e,t){},HlSa:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("/5sW"),r=a("/ocq"),i=a("Lgyv"),n=a.n(i),o=(a("tzNG"),a("4+hh"),a("giDI"),{name:"main-dashboard",components:{}}),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-dashboard"}},[e._v("\n  HI! I'm the dashboard of project "+e._s(e.$route.params.project)+"\n")])},d=[],l=a("XyMi");function c(e){a("rAiK")}var u=!1,p=c,f=null,v=null,b=Object(l["a"])(o,m,d,u,p,f,v),h=b.exports,g={name:"addproject",components:{},data:function(){return{features:[]}}},_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"addproject"}},[a("form",{staticClass:"md-layout",attrs:{action:"/addproject/submit",method:"post"}},[a("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Add Project")])]),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",[a("label",{attrs:{for:"project-name"}},[e._v("Project Name")]),a("md-input",{attrs:{name:"project-name",id:"project-name",required:""}})],1),a("div",[a("md-title",{staticClass:"md-title"},[e._v("Select required features (can be changed later)")]),a("br"),a("md-checkbox",{attrs:{value:"cashflow"},model:{value:e.features,callback:function(t){e.features=t},expression:"features"}},[e._v("Balance / Cashflow")]),a("br"),a("md-checkbox",{attrs:{value:"guv"},model:{value:e.features,callback:function(t){e.features=t},expression:"features"}},[e._v("Profit / Loss calculations")]),a("br"),a("md-checkbox",{attrs:{value:"charts"},model:{value:e.features,callback:function(t){e.features=t},expression:"features"}},[e._v("Charts")]),a("br"),a("md-checkbox",{attrs:{value:"public"},model:{value:e.features,callback:function(t){e.features=t},expression:"features"}},[e._v("Publishing")]),a("br")],1),a("md-card-actions",[a("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Create project")])],1)],1)])])],1)],1)])},C=[];function w(e){a("gKTd")}var $=!1,j=w,y=null,x=null,q=Object(l["a"])(g,_,C,$,j,y,x),N=q.exports,k=a("ESwS"),P=a("+cKO"),V={name:"login",mixins:[k["validationMixin"]],components:{},data:function(){return{form:{username:null,password:null,rememberMe:!1},sending:!1,invalid:!1}},validations:{form:{username:{required:P["required"]},password:{required:P["required"]}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.form.username=null,this.form.password=null,this.form.rememberMe=!1},authUser:function(){var e=this;this.sending=!0,window.setTimeout(function(){e.lastUser="".concat(e.form.firstName," ").concat(e.form.lastName),e.sending=!1,e.clearForm()},1500)},validateUser:function(){this.$v.$touch(),this.$v.$invalid||this.authUser()}}},S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("form",{staticClass:"md-layout",attrs:{action:"/auth",method:"post",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser(t)}}},[a("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Login")])]),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:e.getValidationClass("username")},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("md-input",{attrs:{name:"username",id:"username",autocomplete:"username",disabled:e.sending},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e.$v.form.username.required?e._e():a("span",{staticClass:"md-error"},[e._v("Please enter your username")])],1),a("md-field",{class:e.getValidationClass("password")},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("md-input",{attrs:{name:"password",id:"password",type:"password",disabled:e.sending},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.$v.form.password.required?e._e():a("span",{staticClass:"md-error"},[e._v("Please enter you password")])],1),a("div",[a("md-checkbox",{attrs:{disabled:e.sending},model:{value:e.form.rememberMe,callback:function(t){e.$set(e.form,"rememberMe",t)},expression:"form.rememberMe"}},[e._v("Remember Me")])],1),e.invalid?a("div",{staticClass:"md-error red right",staticStyle:{color:"red"}},[a("small",[e._v("Invalid username or password!")])]):e._e(),e.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("md-card-actions",[a("md-button",{staticClass:"md-accent center",attrs:{type:"submit",disabled:e.sending}},[e._v("Login")])],1)],1)])])],1)],1)])},O=[];function L(e){a("79EM")}var U=!1,z=L,M=null,A=null,E=Object(l["a"])(V,S,O,U,z,M,A),I=E.exports,T={name:"signup",mixins:[k["validationMixin"]],components:{},data:function(){return{form:{email:null,username:null,firstName:null,lastName:null,password:null,repeatPassword:null,tos:!1},sending:!1}},validations:{form:{username:{required:P["required"],minLength:Object(P["minLength"])(3)},firstName:{required:P["required"],minLength:Object(P["minLength"])(3)},lastName:{required:P["required"],minLength:Object(P["minLength"])(3)},email:{required:P["required"],email:P["email"]},password:{required:P["required"],minLength:Object(P["minLength"])(6)},repeatPassword:{sameAsPassword:Object(P["sameAs"])("password")},tos:{required:P["required"]}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.form.firstName=null,this.form.lastName=null,this.form.username=null,this.form.email=null,this.form.password=null,this.form.repeatPassword=null,this.form.tos=!1},saveUser:function(){var e=this;this.sending=!0,window.setTimeout(function(){e.lastUser="".concat(e.form.firstName," ").concat(e.form.lastName),e.sending=!1,e.clearForm()},1500)},validateUser:function(){this.$v.$touch(),this.$v.$invalid||this.saveUser()}}},F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"signup"}},[a("form",{staticClass:"md-layout",attrs:{action:"/ads/adduser",method:"post",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser(t)}}},[a("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Sign Up")])]),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:e.getValidationClass("email")},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("md-input",{attrs:{type:"email",name:"email",id:"email",autocomplete:"email",disabled:e.sending},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e.$v.form.email.required?e.$v.form.email.email?e._e():a("span",{staticClass:"md-error"},[e._v("Invalid email")]):a("span",{staticClass:"md-error"},[e._v("The email is required")])],1),a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:e.getValidationClass("firstName")},[a("label",{attrs:{for:"first-name"}},[e._v("First Name")]),a("md-input",{attrs:{name:"first-name",id:"first-name",autocomplete:"given-name",disabled:e.sending},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}}),e.$v.form.firstName.required?e.$v.form.firstName.minlength?e._e():a("span",{staticClass:"md-error"},[e._v("Invalid first name")]):a("span",{staticClass:"md-error"},[e._v("The first name is required")])],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100"},[a("md-field",{class:e.getValidationClass("lastName")},[a("label",{attrs:{for:"last-name"}},[e._v("Last Name")]),a("md-input",{attrs:{name:"last-name",id:"last-name",autocomplete:"family-name",disabled:e.sending},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}}),e.$v.form.lastName.required?e.$v.form.lastName.minlength?e._e():a("span",{staticClass:"md-error"},[e._v("Invalid last name")]):a("span",{staticClass:"md-error"},[e._v("The last name is required")])],1)],1)]),a("md-field",{class:e.getValidationClass("username")},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("md-input",{attrs:{name:"username",id:"username",autocomplete:"username",disabled:e.sending},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e.$v.form.username.required?e.$v.form.username.minlength?e._e():a("span",{staticClass:"md-error"},[e._v("Invalid username")]):a("span",{staticClass:"md-error"},[e._v("A username is required")])],1),a("md-field",{class:e.getValidationClass("password")},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("md-input",{attrs:{name:"password",id:"password",type:"password",disabled:e.sending},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.$v.form.password.required?e._e():a("span",{staticClass:"md-error"},[e._v("A password is required")]),e.$v.form.password.minLength?e._e():a("span",{staticClass:"md-error"},[e._v("Password is too short")])],1),a("md-field",{class:e.getValidationClass("repeatPassword")},[a("label",{attrs:{for:"repassword"}},[e._v("Re-Password")]),a("md-input",{attrs:{name:"repassword",id:"repassword",type:"password",required:"",disabled:e.sending},on:{input:function(t){e.$v.repeatPassword.$touch()}},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}}),e.$v.form.repeatPassword.sameAsPassword?e._e():a("span",{staticClass:"md-error"},[e._v("Passwords must match")])],1),a("div",{class:e.getValidationClass("tos")},[a("md-checkbox",{attrs:{disabled:e.sending},model:{value:e.form.tos,callback:function(t){e.$set(e.form,"tos",t)},expression:"form.tos"}},[e._v("I Agree with the Terms of Service")])],1),e.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("md-card-actions",[a("md-button",{staticClass:"md-accent center",attrs:{type:"submit",disabled:e.sending}},[e._v("Sign Up")])],1)],1)])])],1)],1)])},K=[];function D(e){a("HlSa")}var H=!1,G=D,R=null,B=null,Q=Object(l["a"])(T,F,K,H,G,R,B),J=Q.exports,W={name:"navbar",components:{},data:function(){return{menuVisible:!1,projects:[{title:"Finanzauschuss",id:"1"},{title:"Personal",id:"2"}]}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}}},X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container",attrs:{id:"navbar"}},[a("md-app",{staticStyle:{height:"100vh"}},[a("md-app-toolbar",{staticClass:"md-accent",attrs:{"md-elevation":"1"}},[a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-section-start"},[a("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[a("md-icon",[e._v("menu")])],1),a("router-link",{staticClass:"md-title center",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[e._v("OpenFinances")])],1),a("md-menu",{staticClass:"md-toolbar-section-end",attrs:{"md-direction":"bottom-end"}},[a("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[a("md-icon",[e._v("more_vert")])],1),a("md-menu-content",[a("md-menu-item",{attrs:{to:"/login"}},[e._v("Login")]),a("md-menu-item",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)],1)],1),e.$route.params.project?a("div",{staticClass:"md-toolbar-row",staticStyle:{width:"100%"}},[a("md-tabs",{staticClass:"md-transparent",staticStyle:{width:"100%"},attrs:{"md-alignment":"left"}},[a("md-tab",{attrs:{id:"tab-home","md-label":"Dashboard","md-icon":"dashboard",to:{name:"projects",params:{project:e.$route.params.project}}}}),a("md-tab",{attrs:{id:"tab-pages","md-label":"Charts","md-icon":"insert_chart",to:{name:"charts",params:{project:e.$route.params.project}}}}),a("md-tab",{attrs:{id:"tab-posts","md-label":"Settings","md-icon":"settings",to:{name:"settings",params:{project:e.$route.params.project}}}}),a("md-tab",{attrs:{id:"tab-favorites","md-label":"Favorites","md-icon":"dashboard",to:{name:"dashboard",params:{project:e.$route.params.project}}}})],1)],1):e._e()]),a("md-app-drawer",{attrs:{"md-active":e.menuVisible,"md-persistent":"full"},on:{"update:mdActive":function(t){e.menuVisible=t}}},[a("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[a("span",{staticClass:"md-title"},[e._v("Projects")]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button md-dense",on:{click:e.toggleMenu}},[a("md-icon",[e._v("keyboard_arrow_left")])],1)],1)]),a("md-list",[e._l(e.projects,function(t){return a("md-list-item",{key:t.id,attrs:{to:{name:"projects",params:{project:t.id}}}},[a("md-icon",[e._v("arrow_right")]),a("span",{staticClass:"md-list-item-text"},[e._v(e._s(t.title))])],1)}),a("md-list-item",{attrs:{to:"/addproject"}},[a("md-icon",[e._v("add")]),a("span",{staticClass:"md-list-item-text"},[e._v("Add Project")])],1)],2)],1),a("md-app-content",{staticStyle:{height:"100%"}},[a("router-view",{staticStyle:{height:"100%"}})],1)],1)],1)},Y=[];function Z(e){a("pKhO")}var ee=!1,te=Z,ae=null,se=null,re=Object(l["a"])(W,X,Y,ee,te,ae,se),ie=re.exports,ne={name:"app",components:{NavBar:ie}},oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar")],1)},me=[];function de(e){a("+VGo"),a("CkQR")}var le=!1,ce=de,ue=null,pe=null,fe=Object(l["a"])(ne,oe,me,le,ce,ue,pe),ve=fe.exports;s["default"].config.productionTip=!1,s["default"].use(n.a),s["default"].use(r["a"]);var be=new r["a"]({routes:[{path:"/",component:null},{path:"/projects/:project",name:"projects",component:h},{path:"/projects/:project/charts",name:"charts",component:null},{path:"/projects/:project/settings",name:"settings",component:null},{path:"/addproject",component:N},{path:"/login",component:I},{path:"/signup",component:J}]});new s["default"]({router:be,render:function(e){return e(ve)}}).$mount("#app")},gKTd:function(e,t){},giDI:function(e,t){},pKhO:function(e,t){},rAiK:function(e,t){},tzNG:function(e,t){}},[0]);
//# sourceMappingURL=app.4e646bc1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0a9ba5"],{a9e32:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"group"},[n("ul",[e._m(0),n("li",[n("el-input",{attrs:{type:"text",clearable:!0,"prefix-icon":"el-icon-user",placeholder:" 请输入用户名"},model:{value:e.obj.name,callback:function(t){e.$set(e.obj,"name",t)},expression:"obj.name"}})],1)]),n("ul",[e._m(1),n("li",[n("el-input",{attrs:{type:"password",clearable:!0,"prefix-icon":"el-icon-warning",placeholder:" 请输入密码"},model:{value:e.obj.pwd,callback:function(t){e.$set(e.obj,"pwd",t)},expression:"obj.pwd"}})],1)])]),n("div",{staticClass:"register"},[n("el-button",{on:{click:e.btnClick}},[e._v("注册")])],1)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("label",[e._v("用户名")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("label",[e._v("密码")])])}],i=n("1bab"),o={name:"Register",data:function(){return{obj:{name:"",pwd:""}}},methods:{btnClick:function(){var e=this,t=JSON.stringify(this.obj);Object(i["a"])({url:"/add",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(t){console.log(t),e.$router.push("/login")})).catch((function(t){console.log(t),e.$router.push("/register")}))}}},c=o,s=(n("b859"),n("2877")),r=Object(s["a"])(c,a,l,!1,null,"20038c92",null);t["default"]=r.exports},afd5:function(e,t,n){},b859:function(e,t,n){"use strict";var a=n("afd5"),l=n.n(a);l.a}}]);
//# sourceMappingURL=chunk-1d0a9ba5.f3e2b212.js.map
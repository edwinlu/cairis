(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d746"],{f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-jumbotron",{attrs:{id:"about",header:"CAIRIS",lead:t.theVersion,"container-fluid":""}})},s=[],i=n("bc3a"),o=n.n(i),r=n("61da"),u={data:function(){return{theVersion:""}},mounted:function(){var t=this,e="/api/version";o.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){t.theVersion=e.data}).catch(function(t){r["a"].$emit("operation-failure",t)})}},c=u,d=n("2877"),l=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22d746.d353945a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21787d"],{c6b6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"vulDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?n("b-container",[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[n("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1),n("b-form-group",{attrs:{label:"Severity","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theSeverity"}},[n("b-form-input",{attrs:{readonly:"",id:"theSeverity"},model:{value:t.severity,callback:function(e){t.severity=e},expression:"severity"}})],1),n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[n("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:4,"max-rows":6,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),n("b-table",{attrs:{bordered:"",small:"",items:t.assets,fields:t.assetTableFields}})],1):t._e()],1)},o=[],r={name:"vulnerability-modal",props:{environment:String,vulnerability:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.vulnerability,assetTableFields:{name:{label:"Asset"}}}},watch:{vulnerability:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Vulnerability"},assets:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theAssets.map(function(t){return{name:t}}):[]},severity:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theSeverity:""}},methods:{show:function(){this.$refs.vulDialog.show()},updateData:function(){this.objt=this.vulnerability,this.theEnvironmentName=this.environment}}},l=r,s=n("2877"),a=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21787d.5075be4f.js.map
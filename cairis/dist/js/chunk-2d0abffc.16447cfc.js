(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abffc"],{1854:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"ucDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.actors,fields:t.actorTableFields}}),o("b-form-group",{attrs:{label:"Preconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePreconditions"}},[o("b-form-textarea",{attrs:{id:"thePreconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.preconditions,callback:function(e){t.preconditions=e},expression:"preconditions"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.steps,fields:t.stepTableFields}}),o("b-form-group",{attrs:{label:"Postconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePostconditions"}},[o("b-form-textarea",{attrs:{id:"thePostconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.postconditions,callback:function(e){t.postconditions=e},expression:"postconditions"}})],1)],1):t._e()],1)},i=[],s={name:"use-case-modal",props:{environment:String,usecase:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.usecase,actorTableFields:{actor:{label:"Actor"}},stepTableFields:{no:{label:"No"},step:{label:"Step"}}}},watch:{usecase:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Use Case"},actors:function(){return void 0!=this.objt?this.objt.theActors.map(function(t){return{actor:t}}):[]},preconditions:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePreCond:""},postconditions:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePostCond:""},steps:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theSteps.map(function(t,e){return{no:e+1,step:t.theStepText}}):[]}},methods:{show:function(){this.$refs.ucDialog.show()},updateData:function(){this.objt=this.usecase,this.theEnvironmentName=this.environment}}},r=s,a=o("2877"),l=Object(a["a"])(r,n,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0abffc.16447cfc.js.map
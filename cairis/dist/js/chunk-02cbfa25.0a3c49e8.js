(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02cbfa25","chunk-6f821dda"],{"3f53":function(e,t,a){"use strict";var o=a("bc3a"),i=a.n(o),s=a("61da");t["a"]={methods:{commitObject:function(e,t,a,o,n){var r=this;"undefined"==typeof o&&(o={post:{},put:{}}),"Update"==this.commitLabel?i.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),void 0!=n?r.$router.push({name:a,params:{dimension:n}}):r.$router.push({name:a})}).catch(function(e){s["a"].$emit("operation-failure",e)}):i.a.post(t,{session_id:this.$store.state.session,object:this.objt},{params:o["post"]}).then(function(e){s["a"].$emit("operation-success",e.data.message),void 0!=n?r.$router.push({name:a,params:{dimension:n}}):r.$router.push({name:a})}).catch(function(e){s["a"].$emit("operation-failure",e)})}},postImage:function(e){var t="/api/upload/image?session_id="+this.$store.state.session;i.a.post(t,e).then(function(e){s["a"].$emit("operation-success",e.data.message)}).catch(function(e){s["a"].$emit("operation-failure",e)})}}},"94cc":function(e,t,a){"use strict";var o=a("bc3a"),i=a.n(o),s=a("61da");t["a"]={methods:{commitObject:function(e,t,a,o){var n=this;"Update"==this.commitLabel?i.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),void 0!=o?n.$router.push({name:a,params:{dimension:o}}):n.$router.push({name:a})}).catch(function(e){s["a"].$emit("operation-failure",e)}):i.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),void 0!=o?n.$router.push({name:a,params:{dimension:o}}):n.$router.push({name:a})}).catch(function(e){s["a"].$emit("operation-failure",e)})}}}},a87c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"domainpropertyview"},[a("b-breadcrumb",{attrs:{items:e.bcItems}}),a("value-type",{attrs:{object:this.objt,label:this.commitLabel},on:{"valuetype-commit":e.commitValueType}})],1)},i=[],s=a("bc3a"),n=a.n(s),r=a("3f53"),m=a("b3aa"),c=a("4360"),l=a("61da"),u={props:{objectName:String,dimName:String,envName:String},mixins:[r["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:this.valueTypesLabel(),to:{name:"valuetypes",params:{dimension:this.dimName}}},{text:this.objectName,to:{name:"valuetype",params:{objectName:this.objectName,dimName:this.dimName,envName:this.envName}}}]}},components:{ValueType:m["default"]},data:function(){return{objt:{theName:"",theDescription:"",theType:"",theScore:0,theRationale:"None",theEnvironmentName:"all"},theDimension:"",commitLabel:"Create"}},beforeRouteEnter:function(e,t,a){if(0==e.params.objectName.indexOf("New"))a(function(t){t.objt.theType=e.params.dimName});else{var o="/api/value_types/type/"+e.params.dimName+"/environment/"+e.params.envName+"/name/"+encodeURIComponent(e.params.objectName);n.a.get(o,{baseURL:c["a"].state.url,params:{session_id:c["a"].state.session}}).then(function(t){a(function(a){a.commitLabel="Update",a.objt=t.data,""==a.objt.theEnvironmentName&&(a.objt.theEnvironmentName="all",a.objt.theType=e.params.dimName)})}).catch(function(e){l["a"].$emit("operation-failure",e)})}},methods:{commitValueType:function(e){this.objt=e;var t=this.$store.state.url+"/api/value_types/type/"+this.objt.theType+"/environment/"+this.objt.theEnvironmentName+"/name/"+this.objectName+"?session_id="+this.$store.state.session,a=this.$store.state.url+"/api/value_types/";this.commitObject(t,a,"valuetypes",void 0,this.dimName)},valueTypesLabel:function(){return"asset_value"==this.dimName?"Asset Values":"asset_type"==this.dimName?"Asset Types":"access_right"==this.dimName?"Access Rights":"protocol"==this.dimName?"Protocols":"privilege"==this.dimName?"Privileges":"surface_type"==this.dimName?"Surface Types":"vulnerability_type"==this.dimName?"Vulnerability Types":"severity"==this.dimName?"Vulnerability Severities":"capability"==this.dimName?"Attacker Capabilities":"motivation"==this.dimName?"Attacker Motivations":"threat_type"==this.dimName?"Threat Types":"likelihood"==this.dimName?"Threat Likelihoods":"threat_value"==this.dimName?"Threat Values":"Unknown value type"}}},h=u,p=a("2877"),b=Object(p["a"])(h,o,i,!1,null,null,null);t["default"]=b.exports},b3aa:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"valuetype"},[e.errors.length?a("p",[a("b",[e._v("Please correct the following error(s):")]),a("ul",e._l(e.errors,function(t){return a("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),a("b-form",[a("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},["asset_value"==e.objt.theDimension?a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Environment","label-class":"font-weight-bold text-md-left","label-for":"theValueTypeEnvironmentInput"}},[a("b-form-input",{attrs:{id:"theValueTypeNameInput",type:"text",readonly:""},model:{value:e.objt.theEnvironmentName,callback:function(t){e.$set(e.objt,"theEnvironmentName",t)},expression:"objt.theEnvironmentName"}})],1)],1)],1):e._e(),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left","label-for":"theValueTypeNameInput"}},[a("b-form-input",{attrs:{id:"theValueTypeNameInput",type:"text",required:""},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescriptionInput"}},[a("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:"4","max-rows":"4",required:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1)],1)],1),e.componentValueType?a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Score","label-class":"font-weight-bold text-md-left","label-for":"theValueTypeScoreInput"}},[a("b-form-input",{attrs:{id:"theValueTypeScoreInput",type:"number",required:""},model:{value:e.objt.theScore,callback:function(t){e.$set(e.objt,"theScore",t)},expression:"objt.theScore"}})],1)],1)],1):e._e(),e.componentValueType?a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-md-left","label-for":"theValueTypeRationaleText"}},[a("b-form-textarea",{attrs:{id:"theValueTypeRationaleText",type:"text",rows:"2","max-rows":"2",required:""},model:{value:e.objt.theRationale,callback:function(t){e.$set(e.objt,"theRationale",t)},expression:"objt.theRationale"}})],1)],1)],1):e._e()],1),a("b-container",{attrs:{fluid:""}},[a("b-form-row",[a("b-col",{attrs:{md:"4","offset-md":"5"}},[a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),a("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},i=[],s=a("94cc"),n={name:"value-type",props:{object:Object,label:String,dimName:String,envName:String},computed:{componentValueType:function(){return"access_right"==this.objt.theType||"protocol"==this.objt.theType||"privilege"==this.objt.theType||"surface_type"==this.objt.theType}},watch:{object:"setObject"},mixins:[s["a"]],data:function(){return{errors:[],objt:this.object,commitLabel:"Create"}},methods:{setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&this.$emit("valuetype-commit",this.objt)},onCancel:function(e){e.preventDefault(),this.$router.push({name:"valuetypes",params:{dimension:this.objt.theType}})},checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Name is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),this.componentTypeValue&&this.objt.theScore<=0&&this.errors.push("Valid score is required"),this.componentTypeValue&&this.objt.theRationale.length<=0&&this.errors.push("Rationale is required"),!this.errors.length}}},r=n,m=a("2877"),c=Object(m["a"])(r,o,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-02cbfa25.0a3c49e8.js.map
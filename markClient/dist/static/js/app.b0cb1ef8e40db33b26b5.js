webpackJsonp([1],{"5W1q":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("NYxO"),i={name:"app",mounted:function(){var t=this;window.addEventListener("keyup",function(e){32===e.keyCode?t.$refs.child.nextTask():70!==e.keyCode&&102!==e.keyCode||t.$refs.child.previousTask()})}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{ref:"child"})],1)},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("cuBw")},null,null).exports,c=s("/ocq"),l=s("mvHQ"),d=s.n(l),u=s("//Fk"),h=s.n(u),p=s("mtWM"),b=s.n(p);b.a.defaults.timeout=5e3,b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",b.a.defaults.headers.post.Accept="application/json",b.a.defaults.baseURL="http://localhost:8087/";var m=function(t,e){var s="/user/login?username="+t+"&password="+e;return b.a.get(s)},g=function(t,e){var s="/img/getLatestWork?username="+t+"&notateType="+e;return b.a.get(s)},f=function(t){return function(t,e){return new h.a(function(s,a){b.a.post(t,e).then(function(t){s(t.data)},function(t){a(t)}).catch(function(t){a(t)})})}("/notation/submitNotation",t)},v=function(t,e,s){var a="/notation/getSample?username="+t+"&sequenceNum="+e+"&notateType="+s;return b.a.get(a)},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar navbar-dark bg-dark shadow-sm"},[s("div",{staticClass:"container d-flex justify-content-between",attrs:{id:"header"}},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-3",staticStyle:{"text-align":"center"},attrs:{id:"pgBar"}},[s("span",{attrs:{id:"username"}},[t._v(t._s(this.$store.state.username))]),t._v(":\n      "),s("span",{attrs:{id:"currentPG"}},[t._v(t._s(t.cur))]),t._v("/\n      "),s("span",{attrs:{id:"totalPG"}},[t._v(t._s(t.total))])]),t._v(" "),s("div",{staticClass:"container-right col-md-5"},[s("div",{staticClass:"navbar"},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"btn",class:t.classRetar,on:{click:t.changeType}},[t._v("Retargeting")]),t._v(" "),s("li",{staticClass:"btn",class:t.classSaliency,on:{click:t.changeType}},[t._v("显著性标注")]),t._v(" "),s("li",{staticClass:"btn",class:t.classAttribute,on:{click:t.changeType}},[t._v("属性标注")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-left col-md-3",staticStyle:{color:"darkgray"}},[e("span",[this._v("前进: 空格;  后退: f")])])}]};var _=s("VU/8")({name:"navbar",props:["total","cur"],data:function(){return{valid:!0,notateType:this.$store.state.notateType,des2type:{Retargeting:"RETARGETING","显著性标注":"SALIENCY","属性标注":"ATTRIBUTE"}}},methods:{changeType:function(t){var e=this.des2type[t.target.innerHTML];e!==this.notateType&&(this.notateType=e,this.$store.commit("alterNotateType",e))}},computed:{classRetar:function(){return{"btn-link":"RETARGETING"!==this.notateType,"btn-primary":"RETARGETING"===this.notateType}},classSaliency:function(){return{"btn-link":"SALIENCY"!==this.notateType,"btn-primary":"SALIENCY"===this.notateType}},classAttribute:function(){return{"btn-link":"ATTRIBUTE"!==this.notateType,"btn-primary":"ATTRIBUTE"===this.notateType}}}},x,!1,function(t){s("Pd2T")},"data-v-090ab1fc",null).exports,y={name:"RawImg",props:["rawPath"],computed:{showTitle:function(){return"ATTRIBUTE"!==this.$store.state.notateType},colClass:function(){var t=this.$store.state.notateType;return"RETARGETING"===t?"col-md-3":"SALIENCY"===t?"col-md-4":"col-md-5"},imgPath:function(){try{if(void 0===this.rawPath||0===this.rawPath.length)return"";var t=this.rawPath.replace(/&/g,"%26");return"http://localhost:8087/img?path="+this.$store.state.rootPath+t}catch(t){console.log(t)}}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.colClass]},[e("div",{staticClass:"card mb-6 shadow-sm"},[this.showTitle?e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",{staticClass:"btn btn-block title"},[this._v("\n        0/0\n      ")])]):this._e(),this._v(" "),e("img",{staticClass:"img_view",attrs:{src:this.imgPath,width:"100%"}})])])},staticRenderFns:[]};var w=s("VU/8")(y,k,!1,function(t){s("auoU")},"data-v-3ccb8ba4",null).exports,C={name:"MyImg",props:["path"],computed:{imgPath:function(){try{if(0===this.path.length)return"";var t=this.path.replace(/&/g,"%26");return"http://localhost:8087/img?path="+this.$store.state.rootPath+t}catch(t){console.log(t)}}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"card mb-4 shadow-sm"},[this._m(0),this._v(" "),e("img",{attrs:{src:this.imgPath,width:"100%"}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-block"},[this._v("好")]),this._v(" "),e("button",{staticClass:"btn btn-block"},[this._v("不好")])])}]};var T={name:"retargeting",components:{navbar:_,RawImg:w,MyImg:s("VU/8")(C,I,!1,function(t){s("xB1r")},"data-v-133dd9e4",null).exports},data:function(){return{total:0,sample:{images:[]}}},methods:{nextTask:function(){if(this.check()){var t=this.sample.sequenceNum;this.getTask(t+1)}},previousTask:function(){if(this.check()){var t=this.sample.sequenceNum;t<=1||this.getTask(t-1)}},check:function(){},getTask:function(t){},loadAll:function(){},submmit:function(){}},computed:{raw:function(){var t=this.sample.images[0];return t?t.path:""},results:function(){return this.sample.images.slice(1)}},created:function(){var t=this,e=this.$store.state.username,s=this.$store.state.notateType;g(e,s).then(function(e){t.sample=e.data.sample,t.total=e.data.count}).catch(function(t){console.log("error "+d()(t))})}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar"),this._v(" "),e("div",{staticClass:"jumbotron text-center"},[e("div",{staticClass:"row"},[e("RawImg",{attrs:{rawPath:this.raw}}),this._v(" "),e("div",{staticClass:"row col-md-9",staticStyle:{"padding-left":"70px"}},this._l(this.results,function(t){return e("MyImg",{key:t.path,attrs:{path:t.path}})}),1)],1)])],1)},staticRenderFns:[]};var E=s("VU/8")(T,S,!1,function(t){s("go5r")},"data-v-e3d17592",null).exports,R={name:"login",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;m(this.username,this.password).then(function(e){e.data&&(t.$router.push("/retargeting"),t.$store.commit("saveUsername",t.username))}).catch(function(t){})}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collapse bg-dark show",attrs:{id:"navbarHeader"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"flexboxgrid__row___1y_mg flexboxgrid__center-xs___1JWon",staticStyle:{"padding-top":"100px","padding-bottom":"100px"}},[s("div",{staticClass:"CenterForm__container___18i8_"},[s("div",{staticClass:"CenterForm__innerContainer___1qFj9",staticStyle:{width:"330px",margin:"auto"}},[s("div",{staticClass:"flexboxgrid__col-xs-12___phbtE Login__email___31hjn"},[s("div",{staticStyle:{"font-size":"16px","line-height":"24px",width:"100%",height:"72px",display:"inline-block",position:"relative","background-color":"transparent","font-family":"AzoSans, sans-serif",transition:"height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",cursor:"auto"}},[s("label",{staticStyle:{position:"absolute","line-height":"22px",top:"38px",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","z-index":"1",transform:"scale(0.75) translate(0px, -28px)","transform-origin":"left top","pointer-events":"none","user-select":"none",color:"rgb(221, 222, 222)","font-size":"14px"},attrs:{for:"usernameInput"}},[t._v("Username")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticStyle:{padding:"0px",position:"relative",width:"100%",border:"none",outline:"none","background-color":"rgba(0, 0, 0, 0)",color:"rgb(255, 255, 255)",cursor:"inherit","font-style":"inherit","font-variant":"inherit","font-weight":"inherit","font-stretch":"inherit","font-size":"14px","line-height":"inherit","font-family":"inherit","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)",height:"28px","box-sizing":"border-box","margin-top":"36px"},attrs:{required:"",type:"text",name:"email",value:"",id:"usernameInput"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"flexboxgrid__col-xs-12___phbtE Login__password___1EuCO",staticStyle:{"margin-bottom":"10px"}},[s("div",{staticStyle:{"font-size":"16px","line-height":"24px",width:"100%",height:"72px",display:"inline-block",position:"relative","background-color":"transparent","font-family":"AzoSans, sans-serif",transition:"height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",cursor:"auto"}},[s("label",{staticStyle:{position:"absolute","line-height":"22px",top:"38px",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","z-index":"1",transform:"scale(0.75) translate(0px, -28px)","transform-origin":"left top","pointer-events":"none","user-select":"none",color:"rgb(221, 222, 222)","font-size":"14px"},attrs:{for:"passwordInput"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticStyle:{padding:"0px",position:"relative",width:"100%",border:"none",outline:"none","background-color":"rgba(0, 0, 0, 0)",color:"rgb(255, 255, 255)",cursor:"inherit","font-style":"inherit","font-variant":"inherit","font-weight":"inherit","font-stretch":"inherit","font-size":"14px","line-height":"inherit","font-family":"inherit","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)",height:"28px","box-sizing":"border-box","margin-top":"36px"},attrs:{required:"",type:"password",name:"password",value:"",id:"passwordInput"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"flexboxgrid__col-xs-12___phbtE",staticStyle:{"padding-left":"0px"}}),t._v(" "),s("div",{staticClass:"flexboxgrid__col-xs-12___phbtE"},[s("div",{staticClass:"flexboxgrid__row___1y_mg flexboxgrid__end-xs___33Mku"},[s("div",{staticStyle:{color:"rgba(0, 0, 0, 0.87)","background-color":"rgb(255, 255, 255)",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","box-sizing":"border-box","font-family":"AzoSans, sans-serif","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","box-shadow":"rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px","border-radius":"2px",display:"inline-block","min-width":"88px",width:"100%","margin-top":"35px",height:"50px"}},[s("button",{staticClass:"mui-btn mui-btn--raised loginButton",staticStyle:{border:"10px","box-sizing":"border-box",display:"inline-block","font-family":"AzoSans, sans-serif","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)",cursor:"pointer","text-decoration":"none",margin:"0px",padding:"0px",outline:"none","font-size":"inherit","font-weight":"inherit",transform:"translate(0px, 0px)",position:"relative",height:"50px","line-height":"50px",width:"100%","border-radius":"2px",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms","background-color":"rgb(171, 204, 218)","text-align":"center"},attrs:{type:"button"},on:{click:t.login}},[t._m(2),t._v(" "),t._m(3)])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hr",{staticStyle:{"border-top":"none rgb(96, 96, 96)","border-right":"none rgb(96, 96, 96)","border-bottom":"1px solid rgb(96, 96, 96)","border-left":"none rgb(96, 96, 96)","border-image":"initial",bottom:"8px","box-sizing":"content-box",margin:"0px",position:"absolute",width:"100%"}}),this._v(" "),e("hr",{staticStyle:{"border-top":"none rgb(255, 255, 255)","border-right":"none rgb(255, 255, 255)","border-bottom":"2px solid rgb(255, 255, 255)","border-left":"none rgb(255, 255, 255)","border-image":"initial",bottom:"8px","box-sizing":"content-box",margin:"0px",position:"absolute",width:"100%",transform:"scaleX(0)",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hr",{staticStyle:{"border-top":"none rgb(96, 96, 96)","border-right":"none rgb(96, 96, 96)","border-bottom":"1px solid rgb(96, 96, 96)","border-left":"none rgb(96, 96, 96)","border-image":"initial",bottom:"8px","box-sizing":"content-box",margin:"0px",position:"absolute",width:"100%"}}),this._v(" "),e("hr",{staticStyle:{"border-top":"none rgb(255, 255, 255)","border-right":"none rgb(255, 255, 255)","border-bottom":"2px solid rgb(255, 255, 255)","border-left":"none rgb(255, 255, 255)","border-image":"initial",bottom:"8px","box-sizing":"content-box",margin:"0px",position:"absolute",width:"100%",transform:"scaleX(0)",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticStyle:{height:"50px","border-radius":"2px",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",top:"0px"}},[e("span",{staticStyle:{position:"relative",opacity:"1","font-size":"16px","letter-spacing":"0px","text-transform":"uppercase","font-weight":"500",margin:"0px","user-select":"none","padding-left":"16px","padding-right":"16px",color:"rgb(0, 0, 0)",top:"1px"}},[this._v("Log In")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mui-btn__ripple-container"},[e("span",{staticClass:"mui-ripple mui--is-animating",staticStyle:{width:"667.533px",height:"667.533px",top:"-302px",left:"-29px"}})])}]};var $=s("VU/8")(R,A,!1,function(t){s("dWf0")},"data-v-25d7309c",null).exports,z={name:"Saliency",components:{navbar:_,rawImg:w},data:function(){return{count:0,sample:{},curIndex:0,sequenceNum:0,result:0,map:{GOOD:4,MISS:2,ERROR:1,MESS_AND_ERROR:3,DEFAULT:0}}},computed:{raw:function(){return void 0===this.sample.images?"":this.sample.images[0].path},curPath:function(){if(void 0===this.sample.images)return"";var t=this.sample.images[this.curIndex].path;return this.parseUrl(t)}},methods:{parseUrl:function(t){if(void 0===t)return"";var e=t.replace(/&/g,"%26");return"http://localhost:8087/img?path="+this.$store.state.rootPath+e},notate:function(t){var e=t.target.id;"4"===e?this.result=4:"1"===e?this.result=2===this.result?3:1:"2"===e&&(this.result=1===this.result?3:2)},nextTask:function(){if(this.check())if(this.curIndex<this.sample.images.length)this.curIndex+=1,this.loadAll();else{var t=this.sample.sequenceNum;this.getTask(t+1)}},previousTask:function(){if(this.check())if(this.curIndex>1)this.curIndex-=1,this.loadAll();else{var t=this.sample.sequenceNum;if(t<=1)return;this.getTask(t-1)}},check:function(){return 0!==this.result||(alert("图片没有标注"),!1)},getTask:function(t){var e=this,s=this.$store.state.username,a=this.$store.state.notateType;this.submmit().then(function(n){v(s,t,a).then(function(s){s.data&&(e.sample=s.data,e.count=Math.max(e.count,t),e.loadAll())})})},loadAll:function(){var t=this.sample.images[this.curIndex];void 0!==t&&(this.result=this.map[t.status])},submmit:function(){return f(this.sample)}},created:function(){var t=this,e=this.$store.state.username,s=this.$store.state.notateType;g(e,s).then(function(e){t.sample=e.data.sample,t.count=e.data.count,t.curIndex=1,t.sequenceNum=t.sample.sequenceNum,t.loadAll()}).catch(function(t){return console.log(t)})}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navbar",{attrs:{cur:t.sequenceNum,total:t.count}}),t._v(" "),s("div",{staticClass:"jumbotron text-center"},[s("div",{staticClass:"row"},[s("raw-img",{attrs:{rawPath:t.raw}}),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mb-7 shadow-sm"},[t._m(0),t._v(" "),s("img",{staticClass:"img_view",attrs:{src:t.curPath,width:"100%"}})])]),t._v(" "),s("div",{staticClass:"box col-md-4 align-self-center"},[s("ul",[s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block",4===t.result?"btn-info":""],attrs:{id:"4"},on:{click:t.notate}},[t._v("效果较好")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block",2===t.result||3===t.result?"btn-info":""],attrs:{id:"2"},on:{click:t.notate}},[t._v("遗漏显著物体")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block",1===t.result||3===t.result?"btn-info":""],attrs:{id:"1"},on:{click:t.notate}},[t._v("误报不显著区域")])])]),t._v(" "),t._m(1)])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",{staticClass:"btn btn-block title"},[this._v("View")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-4",staticStyle:{"padding-top":"20px"}},[e("span",{staticStyle:{color:"gray"}},[this._v("说明：效果较好与(遗漏显著物体、误报不显著区域）矛盾，不可同时选")])])}]};var M=s("VU/8")(z,N,!1,function(t){s("VzAt")},"data-v-7dd4de28",null).exports,P={name:"Attribute",components:{navbar:_,RawImg:w},data:function(){return{count:0,sample:{attribute:{}},faceIndex:"",personIndex:"",personMap:{"不包含":"p1","一个":"p2","多个":"p3"},saliencyIndex:"",saliencyMap:{"有":"sa1","没有":"sa2"},textIndex:"",textMap:{"有":"t1","没有":"t2"},semanticsIndex:"",semanticsMap:{"不包含":"so1","一个":"so2","多个":"so3"},backgroudIndex:"",backMap:{"基本没有":"b1","少量":"b2","超过一半":"b3"}}},methods:{nextTask:function(){if(this.check()){var t=this.sample.sequenceNum;this.getTask(t+1)}},previousTask:function(){if(this.check()){var t=this.sample.sequenceNum;t<=1||this.getTask(t-1)}},check:function(){return!!(this.faceIndex.length>0&&this.personIndex.length>0&&this.saliencyIndex.length>0&&this.textIndex.length>0&&this.semanticsIndex.length>0&&this.backgroudIndex.length>0)||(alert("图片没有完全标注"),!1)},getTask:function(t){var e=this,s=this.$store.state.username,a=this.$store.state.notateType;this.submmit().then(function(n){v(s,t,a).then(function(t){t.data&&(e.sample=t.data,e.count=Math.max(e.count,e.sample.sequenceNum),e.clearAll(),e.loadAll())}).catch(function(t){return console.log(t)})})},loadAll:function(){var t=this.sample.attribute.faceCount;"不包含"===t?this.faceIndex="f1":"一个"===t?this.faceIndex="f2":"多个"===t&&(this.faceIndex="f3");var e=this.sample.attribute.personCount;this.personIndex=this.personMap[e]||"";var s=this.sample.attribute.saliencyObject;this.saliencyIndex=this.saliencyMap[s]||"";var a=this.sample.attribute.containText;this.textIndex=this.textMap[a]||"";var n=this.sample.attribute.semanticsObject;this.semanticsIndex=this.semanticsMap[n]||"";var i=this.sample.attribute.backgroudRatio;this.backgroudIndex=this.backMap[i]||""},clearAll:function(){this.faceIndex="",this.personIndex="",this.saliencyIndex="",this.textIndex="",this.semanticsIndex="",this.backgroudIndex=""},submmit:function(){return f(this.sample).then(function(t){})},face:function(t){this.sample.attribute.faceCount=t.target.innerHTML,this.faceIndex=t.target.id},person:function(t){this.sample.attribute.personCount=t.target.innerHTML,this.personIndex=t.target.id},saliency:function(t){this.sample.attribute.saliencyObject=t.target.innerHTML,this.saliencyIndex=t.target.id},text:function(t){this.sample.attribute.containText=t.target.innerHTML,this.textIndex=t.target.id},semantics:function(t){this.sample.attribute.semanticsObject=t.target.innerHTML,this.semanticsIndex=t.target.id},backgroud:function(t){this.sample.attribute.backgroudRatio=t.target.innerHTML,this.backgroudIndex=t.target.id}},computed:{raw:function(){return this.sample.path?this.sample.path:""},curPg:function(){return this.sample.sequenceNum||""}},created:function(){var t=this,e=this.$store.state.username,s=this.$store.state.notateType;g(e,s).then(function(e){t.sample=e.data.sample,t.count=e.data.count,t.loadAll()}).catch(function(t){return console.log(t)})}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navbar",{attrs:{cur:t.curPg,total:t.count}}),t._v(" "),s("div",{staticClass:"row align-content-center",staticStyle:{"padding-left":"10%"}},[s("RawImg",{staticClass:"jumbotron",attrs:{rawPath:t.raw}}),t._v(" "),s("div",{staticClass:"align-content-between",staticStyle:{"padding-top":"1%"}},[s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("人脸")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","f1"===t.faceIndex?"btn-info":""],attrs:{id:"f1"},on:{click:t.face}},[t._v("不包含")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","f2"===t.faceIndex?"btn-info":""],attrs:{id:"f2"},on:{click:t.face}},[t._v("一个")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","f3"===t.faceIndex?"btn-info":""],attrs:{id:"f3"},on:{click:t.face}},[t._v("多个")])])]),t._v(" "),s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("人体")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","p1"===t.personIndex?"btn-info":""],attrs:{id:"p1"},on:{click:t.person}},[t._v("不包含")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","p2"===t.personIndex?"btn-info":""],attrs:{id:"p2"},on:{click:t.person}},[t._v("一个")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","p3"===t.personIndex?"btn-info":""],attrs:{id:"p3"},on:{click:t.person}},[t._v("多个")])])]),t._v(" "),s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("几何特征显著物")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","sa1"===t.saliencyIndex?"btn-info":""],attrs:{id:"sa1"},on:{click:t.saliency}},[t._v("有")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","sa2"===t.saliencyIndex?"btn-info":""],attrs:{id:"sa2"},on:{click:t.saliency}},[t._v("没有")])])]),t._v(" "),s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("文本")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","t1"===t.textIndex?"btn-info":""],attrs:{id:"t1"},on:{click:t.text}},[t._v("有")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","t2"===t.textIndex?"btn-info":""],attrs:{id:"t2"},on:{click:t.text}},[t._v("没有")])])]),t._v(" "),s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("语义显著物")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","so1"===t.semanticsIndex?"btn-info":""],attrs:{id:"so1"},on:{click:t.semantics}},[t._v("不包含")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","so2"===t.semanticsIndex?"btn-info":""],attrs:{id:"so2"},on:{click:t.semantics}},[t._v("一个")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","so3"===t.semanticsIndex?"btn-info":""],attrs:{id:"so3"},on:{click:t.semantics}},[t._v("多个")])])]),t._v(" "),s("ul",{staticClass:"d-flex"},[s("h6",{staticClass:"align-self-center mb-2 barStyle",staticStyle:{"padding-right":"20px"}},[t._v("背景占比")]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","b1"===t.backgroudIndex?"btn-info":""],attrs:{id:"b1"},on:{click:t.backgroud}},[t._v("基本没有")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","b2"===t.backgroudIndex?"btn-info":""],attrs:{id:"b2"},on:{click:t.backgroud}},[t._v("少量")])]),t._v(" "),s("li",{staticClass:"card mb-2 shadow-sm"},[s("button",{class:["btn","btn-block","b3"===t.backgroudIndex?"btn-info":""],attrs:{id:"b3"},on:{click:t.backgroud}},[t._v("超过一半")])])])])],1)],1)},staticRenderFns:[]};var L=s("VU/8")(P,U,!1,function(t){s("rL4z")},"data-v-486f9caf",null).exports;a.a.use(c.a);var q=new c.a({routes:[{path:"/",name:"Login",component:$},{path:"/retargeting",name:"retargeting",component:E},{path:"/saliency",name:"saliency_view",component:M},{path:"/attribute",name:"attribute",component:L}]});s("K3J8"),s("Jmt5"),s("5W1q");a.a.use(n.a),a.a.config.productionTip=!1;var G={RETARGETING:"/retargeting",SALIENCY:"/saliency",ATTRIBUTE:"/attribute"},j=new n.a.Store({state:{username:localStorage.getItem("username"),notateType:localStorage.getItem("notateType")||"RETARGETING",rootPath:"/Users/loick/Documents/magus/"},mutations:{saveUsername:function(t,e){t.username=e,localStorage.setItem("username",e),console.log(e)},alterNotateType:function(t,e){t.notateType=e,localStorage.setItem("notateType",e),q.push(G[e])}}});new a.a({el:"#app",router:q,store:j,template:"<App/>",components:{App:o}})},Pd2T:function(t,e){},VzAt:function(t,e){},auoU:function(t,e){},cuBw:function(t,e){},dWf0:function(t,e){},go5r:function(t,e){},rL4z:function(t,e){},xB1r:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b0cb1ef8e40db33b26b5.js.map
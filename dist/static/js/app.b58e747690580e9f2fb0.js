webpackJsonp([8],{"9x9x":function(t,n){},"G/2H":function(t,n,e){t.exports=e.p+"static/img/loading.63f3931.gif"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a=e("NYxO"),o={data:function(){return{}},computed:(Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t})({},Object(a.d)({show:function(t){return t.loading}})),methods:{},mounted:function(){}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"loading",attrs:{id:"loading"}},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("img",{attrs:{src:e("G/2H"),alt:""}}),this._v(" "),n("p",[this._v("加载中")])])}]};var c={name:"APP",data:function(){return{}},components:{loading:e("VU/8")(o,r,!1,function(t){e("z+q3")},null,null).exports}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("loading")],1)},staticRenderFns:[]};var s=e("VU/8")(c,u,!1,function(t){e("9x9x")},null,null).exports,l=e("/ocq"),d=e("sax8"),m=e.n(d),f=e("gyMJ"),h={namespaced:!0,state:{homelist:[]},mutations:{uphomelist:function(t,n){var e={};n.forEach(function(t){var n=t.Spelling.slice(0,1);e[n]||(e[n]={title:n,list:[]}),e[n].list.push(t)});var i=[];for(var a in e)i.push(e[a]);t.homelist=i}},actions:{gethomelist:function(t){var n=t.commit;Object(f.a)().then(function(t){n("uphomelist",t.data)})}}},p={namespaced:!0,state:{lowpriceList:[]},mutations:{uppriceList:function(t,n){t.lowpriceList=n}},actions:{priceList:function(t,n){var e=t.commit;Object(f.h)(n).then(function(t){e("uppriceList",t.data)})}}},g={namespaced:!0,state:{inquiryList:[]},mutations:{updateinquiry:function(t,n){t.inquiryList=n}},actions:{getinquiryList:function(t,n){var e=t.commit;Object(f.g)(n).then(function(t){e("inquiryList",t.data)})}}},v={namespaced:!0,state:{ImgList:[],Page:1,isFetching:!1,current:0,showSwiper:!1},mutations:{updateImgList:function(t,n){t.ImgList=t.ImgList.concat(n.List),t.Page++,t.isFetching=!1},stateisFetching:function(t){t.isFetching=!0},changSwiper:function(t,n){t.showSwiper=n.show,t.current=n.id}},actions:{getlazyImgList:function(t,n){var e=t.commit,i=t.state;n.Page=i.Page,i.isFetching||(e("stateisFetching"),Object(f.i)(n).then(function(t){e("updateImgList",t.data)}))}}},y={namespaced:!0,state:{citylist:[],citylistid:[]},mutations:{updatacitylist:function(t,n){t.citylist=n},updatacitylistid:function(t,n){t.citylistid=n}},actions:{getcitylist:function(t,n){var e=t.commit;Object(f.d)().then(function(t){e("updatacitylist",t.data)})},getcitylistid:function(t,n){var e=t.commit;Object(f.e)(n).then(function(t){e("updatacitylistid",t.data)})}}},I={namespaced:!0,state:{colorList:[],obj:[]},mutations:{updatacolor:function(t,n){t.colorList=n,console.log("payload1",n);var e=Object.keys(n);t.obj=e}},actions:{getcolorlists:function(t,n){var e=t.commit;Object(f.f)(n).then(function(t){e("updatacolor",t.data)})}}},L={namespaced:!0,state:{moneylist:[],carList:[],yearArr:[]},mutations:{updatamoney:function(t,n){t.moneylist=n;var e=[],i=[{year:"",list:[]}];n.list.forEach(function(t,n){var a=t.market_attribute.year;-1===e.indexOf(a)?(e.push(a),i.push({year:a,list:[t]})):i.forEach(function(n){-1!=n.year.indexOf(a)&&n.list.push(t)}),i[0].list.push(t)}),t.yearArr=e,t.carList=i}},actions:{getmoneylists:function(t,n){var e=t.commit;Object(f.c)(n).then(function(t){e("updatamoney",t.data)})}}},b={namespaced:!0,state:{samplelist:[]},mutations:{updatasample:function(t,n){t.samplelist=n}},actions:{getdatasamplelist:function(t,n){var e=t.commit;Object(f.j)(n).then(function(t){e("updatasample",t.data)})}}};i.default.use(a.a);var w=new a.a.Store({state:{loading:!0},mutations:{loadingImg:function(t,n){t.loading=n}},modules:{app:h,details:p,inquiry:g,lazyLoad:v,city:y,color:I,money:L,sample:b},plugins:[m()()]});i.default.use(l.a);var j=new l.a({routes:[{path:"/index",name:"index",component:function(){return e.e(3).then(e.bind(null,"8hXn"))}},{path:"/Details",name:"detail",component:function(){return e.e(6).then(e.bind(null,"JrXK"))}},{path:"/Inquiry",name:"inquiry",component:function(){return e.e(1).then(e.bind(null,"5knw"))}},{path:"/color",name:"color",component:function(){return e.e(5).then(e.bind(null,"u0hk"))}},{path:"/money",name:"money",component:function(){return e.e(4).then(e.bind(null,"Jm4r"))}},{path:"/lazyLoad",name:"lazyLoad",component:function(){return e.e(0).then(e.bind(null,"MdEn"))}},{path:"/cartype",name:"cartype",component:function(){return e.e(2).then(e.bind(null,"vgr1"))}},{path:"*",redirect:"/index"}]});j.beforeEach(function(t,n,e){w.commit("loadingImg",!0),e()}),j.afterEach(function(){setTimeout(function(){w.commit("loadingImg",!1)},500)});var O=j,x=e("zL8q"),S=e.n(x);e("tvR6");i.default.config.productionTip=!1,i.default.use(S.a),new i.default({el:"#app",router:O,store:w,components:{App:s},template:"<App/>"})},gyMJ:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"h",function(){return c}),e.d(n,"g",function(){return u}),e.d(n,"i",function(){return s}),e.d(n,"d",function(){return l}),e.d(n,"e",function(){return d}),e.d(n,"f",function(){return m}),e.d(n,"c",function(){return f}),e.d(n,"j",function(){return h});var i=/localhost/.test(window.location.host)?"https://baojia.chelun.com":"http://baojia.chelun.com";function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={method:n};return"POST"==n&&(a.body=JSON.stringify(e)),-1==t.indexOf("?")?t+="?_="+ +new Date:t+="&_="+ +new Date,fetch(i+t,a).then(function(t){return t.json()}).then(function(t){return t})}var o=function(){return a("/v2-car-getMasterBrandList.html")},r=function(t){return a("/v2-car-getMakeListByMasterBrandId.html?MasterID="+t)},c=function(t){return a("/v2-car-getInfoAndListById.html?SerialID="+t)},u=function(t){return a("/v2-dealer-alllist.html?carId="+t+"&cityId=201")},s=function(t){var n="";for(var e in t)n+="&"+e+"="+t[e];return t.Page||(n+="&Page=1"),t.PageSize||(n+="&PageSize=30"),a("/v2-car-getCategoryImageList.html?"+n.slice(1,n.length))},l=function(){return a("/v1-city-alllist.html")},d=function(t){return a("/v1-city-alllist.html?provinceid="+t)},m=function(t){return a("/v2-car-getModelImageYearColor.html?SerialID="+t)},f=function(t){return a("/v2-car-getInfoAndListById.html?SerialID="+t)},h=function(t){return t.ColorId?a("/v2-car-getImageList.html?SerialID="+t.SerialID+"&ColorId="+t.ColorId):a("/v2-car-getImageList.html?SerialID="+t)}},tvR6:function(t,n){},"z+q3":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.b58e747690580e9f2fb0.js.map
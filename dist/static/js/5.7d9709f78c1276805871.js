webpackJsonp([5],{az0i:function(t,n){},u0hk:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o("NYxO"),e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c={data:function(){return{ind:0,num:0}},computed:e({},Object(r.d)({colorList:function(t){return t.color.colorList},obj:function(t){return t.color.obj}}),{list:function(){return this.colorList[this.obj[this.num]]}}),methods:e({},Object(r.b)({}),{oncolor:function(t){this.num=t,this.ind=t},oncolorvalue:function(t,n){this.$router.push({path:"/cartype",query:{ColorId:t,Name:n,SerialID:this.$route.query.id}})}}),mounted:function(){}},i={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"color-wrap"},[o("p",{staticClass:"color-wrap-p"},[t._v("全部颜色")]),t._v(" "),o("div",{staticClass:"section"},[o("p",{staticClass:"c-type"},t._l(t.obj,function(n,r){return o("span",{key:r,class:r==t.ind?"typeAction":"",attrs:{"data-index":r},on:{click:function(n){t.oncolor(r)}}},[t._v(t._s(n))])})),t._v(" "),o("ul",{staticClass:"c-type-ul"},t._l(t.list,function(n,r){return o("li",{on:{click:function(o){t.oncolorvalue(n.ColorId,n.Name)}}},[o("span",{style:"background:"+n.Value}),t._v("\n                "+t._s(n.Name)+"\n            ")])}))])])},staticRenderFns:[]};var s=o("VU/8")(c,i,!1,function(t){o("az0i")},null,null);n.default=s.exports}});
//# sourceMappingURL=5.7d9709f78c1276805871.js.map
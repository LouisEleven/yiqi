(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad7d4b20"],{"1c62":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"event"},[a("div",{staticClass:"eventbox louis-radius louis-longshadowin"},[a("div",{staticClass:"louis-topbar louis-bold"},[a("div",{staticClass:"icoxnbo"},[a("icon"),a("span",[t._v("最新疫情(数据来源:天行数据) UI设计(范蕴昌)")])],1)]),a("maps"),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.indexff,expression:"indexff==true"}],staticClass:"list"},[a("div",{staticClass:"tablebox"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",height:"60vh"}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{align:"center",prop:"provinceName",label:"疫情发生省"}}),a("el-table-column",{attrs:{align:"center",prop:"confirmedCount",label:"疑似病例"}}),a("el-table-column",{attrs:{align:"center",prop:"deadCount",label:"死亡"}}),a("el-table-column",{attrs:{align:"center",prop:"deadCount",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",{staticClass:"louis-buttom",on:{click:function(a){return t.more(e.$index)}}},[t._v("详情")])])]}}])})],1)],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.indexff,expression:"indexff==false"}],staticClass:"list"},[a("div",{staticClass:"tablebox"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.newtable,border:"",height:"60vh"}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{align:"center",prop:"cityName",label:"城市"}}),a("el-table-column",{attrs:{align:"center",prop:"confirmedCount",label:"疑似病例"}}),a("el-table-column",{attrs:{align:"center",prop:"deadCount",label:"死亡"}}),a("el-table-column",{attrs:{align:"center",prop:"deadCount",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",{staticClass:"louis-buttom",on:{click:t.fh}},[t._v("返回")])])]}}])})],1)],1)])])],1)])},o=[],l=a("4ca4"),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"myChartChina"}})])}],r={name:"",components:{},props:{},data:function(){return{tableda:[]}},created:function(){},mounted:function(){var t=this;this.get(),setTimeout((function(){t.drawLine()}),1e3)},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{drawLine:function(){var t=document.getElementById("myChartChina"),e=function(){t.style.width=document.body.offsetWidth/1.15+"px"};e();var a=this.$echarts.init(t);var n={tooltip:{},legend:{orient:"vertical",left:"left",data:[""]},visualMap:{min:0,max:800,left:"10%",top:"bottom",text:["高","低"],calculable:!0,color:["red","#c3e2f4"]},selectedMode:"single",series:[{name:"",type:"map",mapType:"china",itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:{shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},showLegendSymbol:!0,label:{normal:{show:!0},emphasis:{show:!0}},data:this.tableda}]};a.setOption(n),window.onresize=function(){e(),a.resize()}},get:function(){var t=this;this.$axios({method:"get",url:"https://api.tianapi.com/txapi/ncovcity/index?key=2eb3ea9ffed4c6947be0f6fef9979d35",data:{}}).then((function(e){console.log(e);var a=e.data.newslist;t.tableda=[];for(var n=0;n<a.length;n++){var i={};i.name=e.data.newslist[n].provinceShortName,i.value=e.data.newslist[n].confirmedCount,t.tableda.push(i)}console.log(t.tableda),t.drawLine()}))}},filter:{},computed:{},watch:{}},d=r,u=(a("b31b"),a("5511")),f=Object(u["a"])(d,s,c,!1,null,"78d05938",null),b=f.exports,h=(n={name:"",components:{},data:function(){return{newtable:[],indexff:!0,tableData:[],navlist:[{name:"事件列表"},{name:"TOP20问题企业"}],navindex:0,value:"",input:"",tiem:[],pagenum:1,pagesize:25,total:1e3}},mounted:function(){this.get()},methods:{more:function(t){console.log(t),this.indexff=!1,this.newtable=this.tableData[t].cities},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},fh:function(){this.indexff=!0,this.get()},get:function(){var t=this;this.$axios({method:"get",url:"https://api.tianapi.com/txapi/ncovcity/index?key=2eb3ea9ffed4c6947be0f6fef9979d35",data:{}}).then((function(e){console.log(e),t.tableData=e.data.newslist}))}},computed:{}},Object(l["a"])(n,"components",{maps:b}),Object(l["a"])(n,"watch",{}),n),p=h,m=(a("8042"),a("ee8c"),Object(u["a"])(p,i,o,!1,null,"7e80e7e3",null));e["default"]=m.exports},"4ca4":function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))},"7d6d":function(t,e,a){},8042:function(t,e,a){"use strict";var n=a("9a3b"),i=a.n(n);i.a},"9a3b":function(t,e,a){},b31b:function(t,e,a){"use strict";var n=a("fa2b"),i=a.n(n);i.a},ee8c:function(t,e,a){"use strict";var n=a("7d6d"),i=a.n(n);i.a},fa2b:function(t,e,a){}}]);
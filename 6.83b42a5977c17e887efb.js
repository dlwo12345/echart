(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aqe0:function(t,n,o){"use strict";o.r(n),o.d(n,"GaugeChartModule",(function(){return u}));var e=o("tyNb"),a=o("PCNd"),r=o("MT78"),i=o("fXoL"),c=o("DKVz");const s=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){this.options={series:[{type:"gauge",startAngle:180,endAngle:0,data:[{value:0}],detail:{formatter:"{value}%",color:"#fff"},splitLine:{show:!1},splitNumber:1,axisLabel:{formatter:"{value} kW",color:"rgba(255,255,255,0.5)",padding:[25,0,0,0],fontSize:12},axisTick:{show:!1},axisLine:{lineStyle:{width:90,color:[[0,new r.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00acff"},{offset:1,color:"#00ffb7"}])],[1,"rgba(0,0,0,0.2)"]]}},pointer:{length:"30%",width:3},animation:!1}]},setInterval(()=>{(100*Math.random()).toFixed(2),this.startAnimation((100*Math.random()).toFixed(2))},1e3)}startAnimation(t){const n=this.options.series[0].data[0].value;this.loopAnimation(n,t,0!==n&&n>=t?"-":"+")}loopAnimation(t,n,o){const e=Object.assign({},this.options);"+"===o&&t<=n&&(e.series[0].axisLine.lineStyle.color[0][0]=t/100,e.series[0].data[0].value=t,setTimeout(()=>{this.options=e,this.loopAnimation(t+1,n,o)},5)),"-"===o&&t>=n&&(e.series[0].axisLine.lineStyle.color[0][0]=t/100,e.series[0].data[0].value=t,setTimeout(()=>{this.options=e,this.loopAnimation(t-1,n,o)},5))}onChartEvent(t,n){console.log("chart event:",n,t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-gauge-chart"]],decls:2,vars:1,consts:[[2,"background-image","linear-gradient(to bottom, #0b74e2 0%, #0051a6 98%)"],["echarts","",1,"demo-chart",3,"options","chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom"]],template:function(t,n){1&t&&(i.Kb(0,"div",0),i.Kb(1,"div",1),i.Qb("chartInit",(function(t){return n.onChartEvent(t,"chartInit")}))("chartClick",(function(t){return n.onChartEvent(t,"chartClick")}))("chartDblClick",(function(t){return n.onChartEvent(t,"chartDblClick")}))("chartMouseDown",(function(t){return n.onChartEvent(t,"chartMouseDown")}))("chartMouseUp",(function(t){return n.onChartEvent(t,"chartMouseUp")}))("chartMouseOver",(function(t){return n.onChartEvent(t,"chartMouseOver")}))("chartMouseOut",(function(t){return n.onChartEvent(t,"chartMouseOut")}))("chartGlobalOut",(function(t){return n.onChartEvent(t,"chartGlobalOut")}))("chartContextMenu",(function(t){return n.onChartEvent(t,"chartContextMenu")}))("chartDataZoom",(function(t){return n.onChartEvent(t,"chartDataZoom")})),i.Jb(),i.Jb()),2&t&&(i.xb(1),i.Sb("options",n.options))},directives:[c.a],encapsulation:2}),t})()}];let u=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(n){return new(n||t)},imports:[[a.a,e.c.forChild(s)]]}),t})()}}]);
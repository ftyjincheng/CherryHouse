(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/homeLeiBo/homeLeiBo"],{1666:function(t,e,i){},"4ee6":function(t,e,i){"use strict";i.r(e);var s=i("8126"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},8126:function(t,e,i){"use strict";(function(t){function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){i.e("pages/home/homeGod/homeGod").then(function(){return resolve(i("698e"))}.bind(null,i)).catch(i.oe)},n=function(){i.e("components/homeListItem/homeListItem").then(function(){return resolve(i("4cc3"))}.bind(null,i)).catch(i.oe)},o={data:function(){var t;return t={mengban:0,titlearray:["","","",""],cdiqu:"",cdiquindex:0,cjiage:"",cjiageindex:0,chuxing:"",chuxingindex:0,cmianji:"",cmianjiindex:0,cleixing:"",cleixingindex:0,showarray:[0,0,0,0],mimg:["/static/assets/home/Commis01.png","/static/assets/home/Commis02.jpg"],homeListItemFd:[{id:"1",zd:"1",img:"/static/assets/home/homeListItem/01.png",title:"海港广场，精装标准套三出售，带家具家电靠地铁",stmel:"芙蓉区",stmels:"长房东立",number:"700000",specifications:"2室1厅",squaremeter:"67.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s01.png",type:"个人"},{id:"2",img:"/static/assets/home/homeListItem/02.png",title:"中心广场中心.领包入住，精装修房东直租",stmel:"开福区",stmels:"宽属大厦",number:"900000",specifications:"3室1厅",squaremeter:"77.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s02.png",type:"个人"},{id:"3",img:"/static/assets/home/homeListItem/03.png",title:"南儿街顶楼地段好地铁房双林小学 带花园",stmel:"梅溪湖",stmels:"鼎奥国际",number:"1450000",specifications:"2室",squaremeter:"127.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s03.png",type:"个人"},{id:"4",img:"/static/assets/home/homeListItem/04.png",title:"溪岛精装套三，靠地铁",stmel:"长沙县",stmels:"小遂溪岛",number:"900000",specifications:"3室1厅",homesuper:"精装修",squaremeter:"57.7",avatar:"/static/assets/home/Headportrait/s04.png",type:"个人"}],homeListItemYx:[{id:"1",zd:"1",img:"/static/assets/home/homeListItem/1231.jpg",title:"海港广场，精装标准套三出售，带家具家电靠地铁",stmel:"芙蓉区",stmels:"长房东立",number:"700000",specifications:"2室1厅",squaremeter:"67.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s01.png",type:"个人"},{id:"2",img:"/static/assets/home/homeListItem/1231.jpg",title:"中心广场中心.领包入住，精装修房东直租",stmel:"开福区",stmels:"宽属大厦",number:"900000",specifications:"3室1厅",squaremeter:"77.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s02.png",type:"个人"},{id:"3",img:"/static/assets/home/homeListItem/1231.jpg",title:"南儿街顶楼地段好地铁房双林小学 带花园",stmel:"梅溪湖",stmels:"鼎奥国际",number:"1450000",specifications:"2室",squaremeter:"127.7",homesuper:"精装修",avatar:"/static/assets/home/Headportrait/s03.png",type:"个人"},{id:"4",img:"/static/assets/home/homeListItem/1231.jpg",title:"溪岛精装套三，靠地铁",stmel:"长沙县",stmels:"小遂溪岛",number:"900000",specifications:"3室1厅",homesuper:"精装修",squaremeter:"57.7",avatar:"/static/assets/home/Headportrait/s04.png",type:"个人"}],homeS:[{id:1,title:"房主直卖"},{id:2,title:"优选房源"}],currentInexs:0,currentInex:0,selectInex:0,dropList:[{id:1,img:"/static/assets/svg/Bottom.svg",title:"全部"},{id:2,img:"/static/assets/svg/Bottom.svg",title:"价格"},{id:3,img:"/static/assets/svg/Bottom.svg",title:"户型"},{id:4,img:"/static/assets/svg/Bottom.svg",title:"更多"}]},s(t,"homeS",[{id:1,title:"房主直卖"},{id:2,title:"优选房源"}]),s(t,"diqu",["黑龙江","长春","哈尔滨","黑龙江","长春","哈尔滨","黑龙江","长春","哈尔滨"]),s(t,"jiage",["70万以下","70-80万","80-100万","100-120万","120-140万","140-160万"]),s(t,"huxing",["1室","2室","3室","4室","5室","5室以上"]),s(t,"mianji",["50以下","50-70","70-90","90-110","110以上"]),s(t,"leixing",["住宅","别墅","商铺","写字楼","其他"]),t},components:{homeGod:a,homeListItem:n},props:{},onLoad:function(t){null==t.id&&(t.id=0),this.setData({currentInexs:t.id})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onTaps:function(t){var e=t.currentTarget.dataset.index;this.setData({showarray:[0,0,0,0],mengban:"0",titlearray:["","","",""],currentInexs:e}),console.log(this.currentInexs)},selectToggle:function(t){var e=t.currentTarget.dataset.index;this.setData({showarray:[0,0,0,0],mengban:1}),0==e?this.setData({showarray:[1,0,0,0]}):1==e?this.setData({showarray:[0,1,0,0]}):2==e?this.setData({showarray:[0,0,1,0]}):3==e&&this.setData({showarray:[0,0,0,1]}),console.log(this.showarray),this.setData({currentInex:e})},select:function(t){var e=t.currentTarget.dataset.index,i=t.currentTarget.dataset.type;0==i?this.setData({cdiquindex:e}):1==i?this.setData({cjiageindex:e}):2==i?this.setData({chuxingindex:e}):3==i?this.setData({cmianjiindex:e}):4==i&&this.setData({cleixingindex:e})},diquok:function(t){this.setData({mengban:0,cdiqu:this.diqu[this.cdiquindex]}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji],showarray:[0,0,0,0]})},jiageok:function(t){this.setData({mengban:0,cjiage:this.jiage[this.cjiageindex]}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji],showarray:[0,0,0,0]})},huxingok:function(t){this.setData({mengban:0,chuxing:this.huxing[this.chuxingindex]}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji],showarray:[0,0,0,0]})},gengduook:function(t){this.setData({mengban:0,cmianji:this.mianji[this.cmianjiindex],cleixing:this.leixing[this.cleixingindex]}),null==this.cmianji&&this.setData({cmianji:""}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji],showarray:[0,0,0,0]})},gotolistSellBuy:function(e){t.navigateTo({url:"/pages/home/listSellBuy/listSellBuy"})},mengbanok:function(){this.setData({showarray:[0,0,0,0],mengban:"0"})},buxian:function(){this.setData({chuxingindex:-1,showarray:[0,0,0,0],mengban:"0",chuxing:""}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji]})},chongzhi:function(){this.setData({cmianjiindex:-1,cleixingindex:-1,showarray:[0,0,0,0],mengban:"0",cmianji:"",cleixing:""}),this.setData({titlearray:[this.cdiqu,this.cjiage,this.chuxing,this.cmianji]})}}};e.default=o}).call(this,i("543d")["default"])},"859d":function(t,e,i){"use strict";var s=i("1666"),a=i.n(s);a.a},beae:function(t,e,i){"use strict";i.r(e);var s=i("ca02"),a=i("4ee6");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("859d");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=r.exports},ca02:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={homeListItem:function(){return i.e("components/homeListItem/homeListItem").then(i.bind(null,"4cc3"))}},a=function(){var t=this,e=t.$createElement;t._self._c},n=[]},d563:function(t,e,i){"use strict";(function(t){i("9357");s(i("66fd"));var e=s(i("beae"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])}},[["d563","common/runtime","common/vendor"]]]);
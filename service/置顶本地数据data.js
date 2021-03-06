/** 置顶的数据状态 
 * 置顶image里的路径根据需求改
 * 
*/

/**房东直出 */
var ZhiDhomeListItem01 = [{
  id: '1',
  img: "/static/assets/home/homeListItem/01.png",
  title: '海港广场，精装标准套三出售，带家具家电靠地铁',
  stmel: '芙蓉区',
  stmels: '长房东立',
  number: '700000',
  specifications: '2室1厅',
  squaremeter: '67.7',
  homesuper: '精装修',
  avatar: "/static/assets/home/Headportrait/s01.png",
  type: '个人'
}, {
  id: '2',
  img: "/static/assets/home/homeListItem/02.png",
  title: '中心广场中心.领包入住，精装修房东直租',
  stmel: '开福区',
  stmels: '宽属大厦',
  number: '900000',
  specifications: '3室1厅',
  squaremeter: '77.7',
  homesuper: '精装修',
  avatar: "/static/assets/home/Headportrait/s02.png",
  type: '个人'
}, {
  id: '3',
  img: "/static/assets/home/homeListItem/03.png",
  title: '南儿街顶楼地段好地铁房双林小学 带花园',
  stmel: '梅溪湖',
  stmels: '鼎奥国际',
  number: '1450000',
  specifications: '2室',
  squaremeter: '127.7',
  homesuper: '精装修',
  avatar: "/static/assets/home/Headportrait/s03.png",
  type: '个人'
}, {
  id: '4',
  img: "/static/assets/home/homeListItem/04.png",
  title: '溪岛精装套三，靠地铁',
  stmel: '长沙县',
  stmels: '小遂溪岛',
  number: '900000',
  specifications: '3室1厅',
  homesuper: '精装修',
  squaremeter: '57.7',
  avatar: "/static/assets/home/Headportrait/s04.png",
  type: '个人'
}];
/**精选新房 */

var ZhiDhomeListItem02 = [{
  id: '1',
  img: "/static/assets/home/homeListItem/home01.png",
  title: '合力达卓越南城',
  stmel: '北海区',
  stmels: '东路101号',
  number: '15000',
  specifications: '2室1厅',
  squaremeter: '67.7',
  homesuper: '精装修',
  q1: "海景",
  q2: "别墅",
  homeN: 1,
  homeS: "停售"
}, {
  id: '2',
  img: "/static/assets/home/homeListItem/home01.png",
  title: '中心海城',
  stmel: '途家丛',
  stmels: '赤岭路110路',
  number: '11000',
  q1: "海景",
  q2: "别墅",
  homeN: 2,
  homeS: "在售"
}, {
  id: '3',
  img: "/static/assets/home/homeListItem/home01.png",
  title: '广夏大楼',
  stmel: '梅溪湖',
  stmels: '鼎奥国际',
  number: '14000',
  q1: "海景",
  q2: "别墅",
  homeN: 2,
  homeS: "在售"
}, {
  id: '4',
  img: "/static/assets/home/homeListItem/home01.png",
  title: '溪岛精装套三，靠地铁',
  stmel: '长沙县',
  stmels: '小遂溪岛',
  number: '900000',
  q1: "海景",
  q2: "别墅",
  homeN: 2,
  homeS: "在售"
}];
/**优选二手房 */

var ZhiDhomeListItem03 = [{
  id: '1',
  img: "/static/assets/home/homeListItem/1231.jpg",
  title: '海港广场，精装标准套三出售，带家具家电靠地铁',
  stmel: '芙蓉区',
  stmels: '长房东立',
  number: '700000',
  specifications: '2室1厅',
  squaremeter: '10625元',
  avatar: "/static/assets/home/Headportrait/s01.png",
  type: '个人',
  ifTo: "优选"
}, {
  id: '2',
  img: "/static/assets/home/homeListItem/1231.jpg",
  title: '中心广场中心.领包入住，精装修房东直租',
  stmel: '开福区',
  stmels: '宽属大厦',
  number: '900000',
  specifications: '3室1厅',
  squaremeter: '10610元',
  avatar: "/static/assets/home/Headportrait/s02.png",
  type: '个人'
}, {
  id: '3',
  img: "/static/assets/home/homeListItem/1231.jpg",
  title: '南儿街顶楼地段好地铁房双林小学 带花园',
  stmel: '梅溪湖',
  stmels: '鼎奥国际',
  number: '1450000',
  specifications: '2室',
  squaremeter: '10225元',
  avatar: "/static/assets/home/Headportrait/s03.png",
  type: '个人'
}, {
  id: '4',
  img: "/static/assets/home/homeListItem/1231.jpg",
  title: '溪岛精装套三，靠地铁',
  stmel: '长沙县',
  stmels: '小遂溪岛',
  number: '900000',
  specifications: '3室1厅',
  squaremeter: '11625元',
  avatar: "/static/assets/home/Headportrait/s04.png",
  type: '个人'
}];
/**导出数据接口 在js文件中导入数据接口文件
 * wx:for 绑定idnex下标 根据下标动态接收数据
 * 通过setDsata()动态接收更新
 */

moudle.express = {
  ZhiDhomeListItem01: ZhiDhomeListItem01,
  ZhiDhomeListItem02: ZhiDhomeListItem02,
  ZhiDhomeListItem03: ZhiDhomeListItem03
};
<template>
<view class="container">
	<swiper class="t1" @tap="previewImage" :swiperImg="images"></swiper>
	<view class="top">
		<view class="t2">
			<view>
				<text class="icon-fangwu"></text>
				<text class="main">优选好房</text>
			</view>
			<view class="t">
				<text class="icon-dui"></text>
				<text>实地查验</text>
			</view>
			<view class="t">
				<text class="icon-dui"></text>
				<text>高性价比</text>
			</view>
			<view class="t">
				<text class="icon-dui"></text>
				<text>交易保障</text>
			</view>
		</view>
	</view>
	<view class="content">
		<view class="c1">
			<view class="l">
				1室1厅1卫0阳台2000/月正规高性价比
			</view>
			<view class="r">
				<view class="r1">
					<text class="icon-fenxiang"></text>
					<text class="rt1">分享</text>
					<button class="share" open-type="share"></button>
				</view>
				<view @tap="collectFun" class="r1">
					<text :class="'icon-shoucang1 ' + (collect?'red':'')"></text>
					<text :class="'rt1 ' + (collect?'red':'')">收藏</text>
				</view>
			</view>
		</view>
		<view class="pt">
			<view class="inputItem">
				<text>110万</text>
				<text class="c">售价</text>
			</view>
			<view class="inputItem be">
				<text>2室2厅1卫</text>
				<text class="c">户型</text>
			</view>
			<view class="inputItem be">
				<text>64.96m²</text>
				<text class="c">面积</text>
			</view>
		</view>
		<view class="i">
			<view v-for="(item, index) in houseInfo" :key="index" class="it">
				<text>{{item.name}}：</text>
				<text>{{item.price}}</text>
			</view>
		</view>
		<view class="side tp">
			<text>服务保障</text>
			<text>服务费不超过差价9%，欢迎联系咨询</text>
		</view>
		<image @tap="serve" class="pc1" :src="images1" mode="widthFix"></image>
		<view class="side">服务顾问</view>

		<view class="ml">
			<image :src="info.img" mode="widthFix"></image>
			<view class="center">
				<view class="ct">
					<text class="icon-huizhang"></text>
					<text>{{info.name}}</text>
				</view>
				<text class="info">本人专注服务于该小区，24欢迎来电</text>
			</view>
			<view @tap="call" class="r2">
				<view class="cs">
					<text class="icon-xinxi"></text>
				</view>
				<text class="ct1">联系</text>
			</view>
		</view>
		<view class="side">房源描述</view>
		<view class="sideInfo">{{msg}}</view>
		<view class="side">实勘详情</view>
		<view class="i1">
			<view v-for="(item, index) in observe" :key="index" class="w">
				<text>{{item.name}}：</text>
				<text>{{item.price}}</text>
			</view>
		</view>
		<image class="sd" @tap="other" src="/static/assets/home/Commission.png" mode="aspectFill"></image>
		<image class="sd" @tap="other" src="/static/assets/home/Commission.png" mode="aspectFill"></image>

		<view @tap="goodHouse" class="side1 f">
			<text class="title">优选房源</text>
			<view class="sideL">
				<text>查看全部</text>
				<text class="icon-you"></text>
			</view>
		</view>
		<excellentHouse :excellentHouse="excellentHouse"></excellentHouse>

		<view @tap="personal" class="side1 f">
			<text class="title">房源直卖</text>
			<view class="sideL">
				<text>查看全部</text>
				<text class="icon-you"></text>
			</view>
		</view>
		<personalHousing :personalHousing="personalHousing"></personalHousing>

		<view @tap="newHouse" class="side1 f">
			<text class="title">周边新房</text>
			<view class="sideL">
				<text>查看全部</text>
				<text class="icon-you"></text>
			</view>
		</view>
		<nearbyNewHouse :nearbyNewHouse="nearbyNewHouse"></nearbyNewHouse>
	</view>
	<view class="g"></view>
	<view class="footer2 ">
		<view class="n">
			<image :src="info.img" mode="aspectFill"></image>
			<view class="n1">
				<text>{{info.name}}</text>
				<text>服务顾问</text>
			</view>
		</view>
		<button @tap="serve" class="btn2">交易服务</button>
		<button class="btn3" @tap="call">预约看房</button>
	</view>
</view>
</template>

<script>
import excellentHouse from "../../../../components/excellentHouse/excellentHouse";
import nearbyNewHouse from "../../../../components/nearbyNewHouse/nearbyNewHouse";
import personalHousing from "../../../../components/personalHousing/personalHousing";
import swiper from "../../../../components/swiper/swiper";

export default {
  data() {
    return {
      info: {
        name: "周某人",
        img: "/static/assets/home/Headportrait/s01.png",
        phone: 10086
      },
      images1: "/static/assets/0bb3c290e353d785fa1bd27391cab43.png",
      images: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg"],
      // name不赋值  只赋值price
      houseInfo: [{
        name: "单价",
        price: "56914.5元/m²"
      }, {
        name: "挂牌",
        price: "2019.07.19"
      }, {
        name: "面积",
        price: "62.55m²"
      }, {
        name: "户型",
        price: "2室2厅1卫"
      }, {
        name: "朝向",
        price: "东"
      }, {
        name: "楼层",
        price: "6/16"
      }, {
        name: "装修",
        price: "精装"
      }, {
        name: "权属",
        price: "商品房"
      }, {
        name: "用途",
        price: "普通住宅"
      }, {
        name: "电梯",
        price: "有电梯"
      }, {
        name: "首付预算",
        price: "首付约 25万元"
      }, {
        name: "小区",
        price: "左方坊"
      }],
      observe: [{
        name: "房源户型",
        price: "2室1厅1卫"
      }, {
        name: "建筑面积",
        price: "62.55m²"
      }, {
        name: "套内面积",
        price: "50.32m²"
      }, {
        name: "户型结构",
        price: "平层"
      }, {
        name: "梯户结构",
        price: "平层"
      }, {
        name: "梯户结构",
        price: "六梯三十五户"
      }, {
        name: "供暖方式",
        price: "自供暖"
      }, {
        name: "房屋年限",
        price: "满五年"
      }, {
        name: "房屋用途",
        price: "普通住宅"
      }, {
        name: "交易权属",
        price: "商品房"
      }, {
        name: "产权所属",
        price: "非共有"
      }],
      excellentHouse: [{
        id: '1',
        zd: '1',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '70',
        specifications: '2室1厅',
        squaremeter: '67.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s01.png",
        type: '个人'
      }, {
        id: '2',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '中心广场中心.领包入住，精装修房东直租',
        stmel: '开福区',
        stmels: '宽属大厦',
        number: '90',
        specifications: '3室1厅',
        squaremeter: '77.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s02.png",
        type: '个人'
      }],
      personalHousing: [{
        id: '1',
        zd: '1',
        img: "/static/assets/home/homeListItem/01.png",
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '70',
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
        number: '90',
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
        number: '145',
        specifications: '2室',
        squaremeter: '127.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s03.png",
        type: '个人'
      }],
      nearbyNewHouse: [{
        id: '1',
        zd: '1',
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
      }],
      collect: false,
      currentInexs: 0
    };
  },

  components: {
    excellentHouse,
    nearbyNewHouse,
    personalHousing,
    swiper
  },
  props: {},
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    collectFun() {
      if (this.collect) {
        this.setData({
          collect: false
        });
        uni.showToast({
          title: "取消收藏成功",
          icon: "none"
        });
      } else {
        this.setData({
          collect: true
        });
        uni.showToast({
          title: "收藏成功",
          icon: "none"
        });
      }
    },

    call() {
      uni.makePhoneCall({
        phoneNumber: this.info.phone
      });
    },

    previewImage() {
      uni.previewImage({
        urls: this.images
      });
    },

    goodHouse() {
      uni.navigateBack({
        delta: 1
      });
    },

    personal() {
      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];
      let prevPage = pages[pages.length - 2];
      prevPage.setData({
        currentInexs: 0
      });
      uni.navigateBack({
        delta: 1
      });
    },

    newHouse() {
      uni.navigateTo({
        url: "/pages/home/newHouseList/newHouseList"
      });
    },

    serve() {
      uni.navigateTo({
        url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailOther/homeGodDetailOther'
      });
    },

    other() {
      uni.navigateTo({
        url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailServe/homeGodDetailServe'
      });
    }

  }
};
</script>
<style>
@import "./homeGodDetail.css";
</style>
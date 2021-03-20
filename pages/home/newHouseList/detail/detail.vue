<template>
<view class="container">
	<swiper>
		<swiper-item v-for="(item, index) in swiperImg" :key="index">
			<image :data-index="index" @tap="previewImage" :src="item"></image>
		</swiper-item>
	</swiper>
	<view class="info">
		<view class="left">
			<text class="title">君豪新城</text>
			<view class="middle">
				<view class="price">
					<view><text>{{price}}</text>/m²</view>
					<text class="average">参考均价</text>
				</view>
			</view>
			<text class="location">{{locations}}</text>
		</view>
		<view class="right">
			<view class="icon">
				<text class="icon-fenxiang"></text>
				<text>分享</text>
				<button class="share" open-type="share"></button>
			</view>
			<view @tap="collectFun" class="icon">
				<text :style="collect?'color:red;':''" class="icon-shoucang1"></text>
				<text :style="collect?'color:red;':''">收藏</text>
			</view>
		</view>
	</view>
	<!-- <view class="side">
		优惠活动
	</view>
	<view class="apply">
		<view class="left1">
			<text>看房不打烊，实时了解{{location}}</text>
			<text>优惠活动提前招募中，抢先报名</text>
		</view>
		<button @tap="apply" class="applyBtn" hover-class="none">立即报名</button>
	</view> -->

	<!-- <view class="mask" :hidden="close">
		<view @tap="closeFun" class="icon-cuo"></view>
		<view class="wrap3">
			<view class="t3">
				<text class="t4">团购报名</text>
				<text class="info2">请您填写信息，如果有优惠即时通知您</text>
			</view>
			<input @input="bindinput" data-item="name" @tap="name" placeholder="请输入您的姓名" :value="name"></input>
			<input @input="bindinput" data-item="phone" type="number" maxlength="11" placeholder="请输入您的手机号" :value="phone"></input>
			<button @tap="submit" hover-class="none" class="aplly">立即报名</button>
		</view>
	</view>
	<view :hidden="isMakes" class="mask1"></view> -->

	<!-- <image v-if="advertising==''" @tap="goTo" class="pictrue" :src="imgs" mode="aspectFill"></image> -->
	<view class="side">
		楼盘信息
	</view>
	<view class="houseInfo">
		<view class="houseInfoItem">
			<text>预售证</text>
			<text>{{yushouzheng}}</text>
		</view>
		<view class="houseInfoItem">
			<text>售楼地址</text>
			<text>{{dizhi}}</text>
		</view>
		<view class="houseInfoItem">
			<text>开发商</text>
			<text>{{kaifashang}}</text>
		</view>
		<view class="houseInfoItem">
			<text>开盘时间</text>
			<text>{{shijian}}</text>
		</view>
	</view>
	<button @tap="detail" class="look" hover-class="none">查看楼盘详细信息</button>
	<view class="side bold">
		楼盘图库
	</view>

	<scroll-view scroll-x="true" id="housePictrue">
		<view id="housePictrueItem">
			<image @tap="priview1" :src="resultPictrue[0]" mode="aspectFill"></image>
			<view class="bottom1">效果图</view>
		</view>
		<view id="housePictrueItem">
			<image @tap="priview2" :src="trafficPictrue[0]" mode="aspectFill"></image>
			<view class="bottom1">交通图</view>
		</view>
		<view id="housePictrueItem">
			<image @tap="priview3" :src="housePictrue[0]" mode="aspectFill"></image>
			<view class="bottom1">户型图</view>
		</view>
	</scroll-view>



	<view class="side bold">
		位置及周边
	</view>
	<map :longitude="longitude" :latitude="latitude" :markers="markers"></map>

	<view class="side rim bold">
		<text>周边新房</text>
		<view class="right1">
			<text>查看全部</text>
			<text class="icon-you"></text>
		</view>
	</view>
	<!-- 周边新房 -->
	<view style="padding: 0rpx 40rpx;">
		<nearbyNewHouse style="margin: auto;" :nearbyNewHouse="nearbyNewHouse"></nearbyNewHouse>
	</view>

	<view class="side rim bold">
		<text>优选房源</text>
		<view class="right1">
			<text>查看全部</text>
			<text class="icon-you"></text>
		</view>
	</view>
	<!-- 优选房源 -->
	<view style="padding: 0rpx 40rpx;">
		<excellentHouse :excellentHouse="excellentHouse"></excellentHouse>
	</view>
	<view class="side rim bold">
		<text>房主直卖</text>
		<view class="right1">
			<text>查看全部</text>
			<text class="icon-you"></text>
		</view>
	</view>
	<!--房主直卖 -->
	<view style="padding: 0rpx 40rpx;">
		<personalHousing :personalHousing="personalHousing"></personalHousing>
	</view>

	<view class="fictitious"></view>
	<view class="footer2 ">
		<view @tap="attentionFun" class="collect ">
			<text :class="'icon-shoucang1 ' + (attention?'red':'')"></text>
			<text :style="attention?'color:red;':''">关注</text>
		</view>
		<button @tap="apply" class="btn2">购房报备</button>
		<button @tap="phoneFun" class="btn3">联系销售</button>
	</view>

</view>
</template>

<script>
import excellentHouse from "../../../../components/excellentHouse/excellentHouse";
import nearbyNewHouse from "../../../../components/nearbyNewHouse/nearbyNewHouse";
import personalHousing from "../../../../components/personalHousing/personalHousing";
import hSwiper from "../../../../components/h-swiper/h-swiper";

export default {
  data() {
    return {
      phone: 15522651500,
      imgs: "/static/assets/home/homeListItem/123.jpg",
      price: 25000,
      // 楼盘名称
      locations: "哈尔滨松北新区利民大道888号",
      location: "君豪新城",
      isMakes: true,
      close: true,
      info: {
        yushouzheng: "HL0082/HL0083/HL0084",
        dizhi: "哈尔滨松北新区利民大道888号",
        kaifashang: "君豪集团-哈尔滨君豪置业房地产有限公司",
        shijian: "2017年08月12日"
      },
      //楼盘经纬度
      longitude: 104.07,
      latitude: 30.67,
      attention: false,
      collect: false,
      advertising: [],
      // 报名信息
      name: "",
      phone: "",
      // 效果图
      resultPictrue: ["http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg", "http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg", "http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg", "http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg", "http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg", "http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg"],
      // 交通图
      trafficPictrue: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg"],
      // 户型图
      housePictrue: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg"],
      // 轮播图
      swiperImg: ["/static/assets/home/newHouseList/swiper.jpg", "/static/assets/home/newHouseList/swiper.jpg", "/static/assets/home/newHouseList/swiper.jpg"],
      //地图标记点
      markers: [{
        id: 0,
        latitude: 30.67,
        longitude: 104.07,
        iconPath: "/static/assets/biaojidianwei.png",
        width: 30,
        height: 30,
        label: {
          content: '君豪新城',
          //文本
          color: '#FF0202',
          //文本颜色
          borderRadius: 3,
          //边框圆角
          borderWidth: 1,
          //边框宽度
          borderColor: '#FF0202',
          //边框颜色
          bgColor: '#ffffff',
          //背景色
          padding: 5,
          //文本边缘留白
          textAlign: 'center' //文本对齐方式。有效值: left, right, center

        }
      }],
      // 房东直卖
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
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/04.png",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '90',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: "/static/assets/home/Headportrait/s04.png",
        type: '个人'
      }],
      // 优质房源
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
      }, {
        id: '3',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '南儿街顶楼地段好地铁房双林小学 带花园',
        stmel: '梅溪湖',
        stmels: '鼎奥国际',
        number: '145',
        specifications: '2室',
        squaremeter: '127.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s03.png",
        type: '个人'
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '90',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: "/static/assets/home/Headportrait/s04.png",
        type: '个人'
      }],
      // 周边新房
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
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/home01.png",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '90000',
        q1: "海景",
        q2: "别墅",
        homeN: 2,
        homeS: "在售"
      }]
    };
  },

  components: {
    excellentHouse,
    nearbyNewHouse,
    personalHousing,
    hSwiper
  },
  props: {},
  methods: {
    phoneFun() {
      uni.makePhoneCall({
        phoneNumber: this.phone
      });
    },

    priview1(e) {
      let that = this;
      uni.previewImage({
        urls: that.resultPictrue
      });
    },

    priview2() {
      let that = this;
      uni.previewImage({
        urls: that.trafficPictrue
      });
    },

    priview3() {
      let that = this;
      uni.previewImage({
        urls: that.housePictrue
      });
    },

    closeFun() {
      this.setData({
        close: true,
        isMakes: true
      });
    },

    apply() {
      this.setData({
        close: false,
        isMakes: false
      });
    },

    bindinput(e) {
      let that = this;

      if (e.currentTarget.dataset.item == "name") {
        that.setData({
          name: e.detail.value
        });
      } else {
        that.setData({
          phone: e.detail.value
        });
      }
    },

    submit() {
      var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

      if (!patrn.exec(this.name)) {
        uni.showToast({
          title: "请输入正确的名字",
          icon: "none"
        });
        return;
      } else if (this.phone.length < 11) {
        uni.showToast({
          title: "请输入正确的手机号",
          icon: "none"
        });
        return;
      } else {
        console.log(this.name);
        console.log(this.phone);
      }
    },

    previewImage(e) {
      let index = e.currentTarget.dataset.index;
      console.log(index);
      let that = this;
      uni.previewImage({
        urls: that.swiperImg,
        current: that.swiperImg[index]
      });
    },

    detail() {
      uni.navigateTo({
        url: 'detailInfo/detailInfo'
      });
    },

    attentionFun() {
      if (this.attention) {
        this.setData({
          attention: false
        });
        uni.showToast({
          title: '取消关注成功',
          icon: 'none'
        });
      } else {
        this.setData({
          attention: true
        });
        uni.showToast({
          title: '关注成功',
          icon: 'none'
        });
      }
    },

    collectFun() {
      if (this.collect) {
        this.setData({
          collect: false
        });
        uni.showToast({
          title: '取消收藏成功',
          icon: 'none'
        });
      } else {
        this.setData({
          collect: true
        });
        uni.showToast({
          title: '收藏成功',
          icon: 'none'
        });
      }
    },

    goTo() {
      uni.navigateTo({
        url: '/pages/home/homeGods/homeGods'
      });
    }

  }
};
</script>
<style>
@import "./detail.css";
</style>
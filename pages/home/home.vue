<template>
	<view>
		<!--轮播图组件-->
		<h-swiper :swiperImg="swiperImg"></h-swiper>
		<!--输入框 绝对定位-->
		<view class="swiper-input">
			<input class="input-item" placeholder="您想住在哪里?" type="text"></input>
			<icon type="search" class="search-icon" size="50rpx"></icon>
		</view>


		<!--房主直卖-->
		<view class="bow">
			<block v-for="(item, index) in maifangImg" :key="index">
				<view class="bow-item" @tap="gotoSelf" hover-class="none" hover-stop-propagation="false" :data-index="index">
					<view>
						<image class="bow-image" :src="item.img"></image>
					</view>
					<view>{{item.title}}</view>
				</view>
			</block>
		</view>

		<!--精选新房-->
		<!-- <home-god-list></home-god-list> -->
		<view class="conent-item" hover-class="none">
			<view class="data01">
				<view class="d1">精选新房</view>
				<view class=" d2" @tap="more">查看更多
					<image src="/static/assets/svg/fhui.svg" style="width:10px;height:10px"></image>
				</view>
			</view>
			<view class="item-list" hover-class="none" hover-stop-propagation="false">
				<nearbyNewHouse @tap="detail" :newHouse="newHouse"></nearbyNewHouse>
				<view class="li01">
					<button type="primary" class="list-gods" @tap="more">查看更多精选新房房源</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hSwiper from "../../components/h-swiper/h-swiper";
	import nearbyNewHouse from "../../components/nearbyNewHouse/nearbyNewHouse";

	export default {
		data() {
			return {
				newHouse: [],
				img: ["/static/assets/home/butie.png", "/static/assets/home/Commission.png"],
				info: ["我是数据一", "我是数据二", "我是数据三", "我是数据四"],

				/**轮播图数据接口 */
				swiperImg: [{
					img: "/static/assets/swiper/01.png"
				}, {
					img: "/static/assets/swiper/01.png"
				}],

				/**房东直卖  优选房源 图标接口数据 */
				maifangImg: [{
					img: "/static/assets/home/homeIcon/02.png",
					title: '新房'
				}, {
					img: "/static/assets/home/homeIcon/03.png",
					title: '二手房'
				}, {
					img: "/static/assets/home/homeIcon/02.png",
					title: '租房'
				}, {
					img: "/static/assets/home/homeIcon/01.png",
					title: '加入'
				}]


			};
		},
		created: function() {
			//页面一启动就加载list数据
			uni.request({
				url: getApp().globalData.appDomainName + '/web/webHouseListLimit',
				method: 'GET',
				success: (res) => {
					console.log(res.data);
					if (res.data && res.data.code === 0) {
						this.newHouse = res.data.data
					} else {
						uni.showToast({
							title: '加载列表失败！',
							icon: "none"
						});
					}
				}
			});
		},
		onLoad: function() {
			this.login();
		},
		components: {
			hSwiper,
			nearbyNewHouse
		},
		props: {},
		methods: {
			login() {
				// uni.showLoading({
				// 	title: '登录中...'
				// });
				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						console.log(code);
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						uni.request({
							url: getApp().globalData.appDomainName+'/Home/logInPre',
							data: {
								code: code,
							},
							method: 'GET',
							header: {
								'content-type': 'application/json'
							},
							success: (res) => {
								//openId、或SessionKdy存储//隐藏loading
								console.log("信息", res);
								uni.setStorage({
									key: 'openid',
									data: res.data.openid,
									success: function() {
										console.log('success');
									}
								});
								uni.hideLoading();
							},
							fail: (err) => {
								uni.hideLoading();
								uni.showModal({
									content: "登录失败，请重试！" + JSON.stringify(err),
									showCancel: false
								});
							}
						});
					},
					fail:function(err){
						console.log(err);
					}
				});
			},
			more() {
				uni.navigateTo({
					url: "/pages/home/newHouseList/newHouseList"
				});
			},
			gotoWyue: function() {
				uni.navigateTo({
					url: "/pages/home/homeWYue/homeWYue"
				});
			},
			gotoSellBuy: function() {
				uni.navigateTo({
					url: '/pages/home/homeSellBuy/homeSellBuy'
				});
			},
			gotoGods: function() {
				uni.navigateTo({
					url: '/pages/home/homeGods/homeGods'
				});
			},
			gotoSelf: function(e) {
				var num = e.currentTarget.dataset.index;

				if (num == 0) {
					uni.navigateTo({
						url: '/pages/home/newHouseList/newHouseList'
					});
				} else if (num == 1) {
					uni.navigateTo({
						url: '/pages/publish/buy/buyOld'
					});
				} else if (num == 2) {
					uni.navigateTo({
						url: '/pages/publish/buy/rent'
					});
				} else if (num == 3) {
					uni.navigateTo({
						url: '/pages/publish/join'
					});
				}
			},

			phone() {
				uni.makePhoneCall({
					phoneNumber: "10086"
				});
			},
			detail() {
				uni.navigateTo({
					url: 'newHouseList/detail/detail'
				});
			},

		}
	};
</script>
<style>
	@import "./home.css";
	@import "./homeGodList.css"; 
</style>

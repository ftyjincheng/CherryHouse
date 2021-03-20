<template>
	<view class="container">
		<view class="search">
			<text class="icon-xingtaiduICON_sousuo--"></text>
			<input :value="residence" @input="input" placeholder="请输入小区或商圈名称"></input>
		</view>
		<image @tap="to" class="top1" :src="img"></image>
		<filtration style="font-size: 28rpx;"></filtration>
		<nearbyNewHouse @tap="detail" :newHouse="newHouse"></nearbyNewHouse>
		<image @tap="map" class="map" src="/static/assets/home/newHouseList/map.jpg"></image>
	</view>
</template>

<script>
	import filtration from "../../../components/filtration/filtration";
	import nearbyNewHouse from "../../../components/nearbyNewHouse/nearbyNewHouse";

	export default {
		data() {
			return {
				img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2515003666,548988553&fm=26&gp=0.jpg",
				newHouse: []
			};
		},

		components: {
			filtration,
			nearbyNewHouse
		},
		props: {},
		created: function() {
			//页面一启动就加载list数据
			uni.request({
				url: getApp().globalData.appDomainName + '/web/webHouseListLimit',
				method: 'GET',
				success: (res) => {
					console.log(res.data);
					if (res.data&&res.data.code === 0) {
						this.newHouse=res.data.data
					} else {
						uni.showToast({
							title: '加载列表失败！',
							icon: "none"
						});
					}
				}
			});
		},
		methods: {
			detail() {
				uni.navigateTo({
					url: 'detail/detail'
				});
			},

			map() {
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.userLocation']) {
							uni.chooseLocation();
						}
					}

				});
				uni.chooseLocation();
			},

			to() {
				uni.navigateTo({
					url: '/pages/home/homeGods/homeGods'
				});
			}

		}
	};
</script>
<style>
	@import "./newHouseList.css";
</style>

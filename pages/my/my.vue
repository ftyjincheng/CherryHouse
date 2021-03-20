<template>
	<view class="container">
		<view class="top">
			<view class="login">
				<image class="portrait" src="/static/assets/home/Headportrait/s01.png"></image>
				<button @getuserinfo="getuserinfo" open-type="getUserInfo"></button>
			</view>
			<view class="info">
				<view class="nickname">
					<text>浩海星空</text>
					<image @tap="rotate" :animation="animationData" class="circle}}" src="/static/assets/my/circle.png">
					</image>
				</view>
				<text class="phone">绑定电话号码</text>
			</view>
		</view>
		<!-- <view class="middle">
			 			<view @tap="recommend" class="item">
				<image src="/static/assets/my/menu2.png"></image>
				<text>推荐</text>
			</view>
			<view @tap="agent" class="item">
				<image src="/static/assets/my/menu1.png"></image>
				<text>代办</text>
			</view> 
			<view @tap="question" class="item">
				<image src="/static/assets/my/menu4.png"></image>
				<text>常见问题</text>
			</view>
			<view @tap="attention" class="item">
				<image src="/static/assets/my/menu3.png"></image>
				<text>关注/收藏</text>
			</view>
		</view> -->
		<view class="sever">用户服务</view>
		<view class="userSever">
			<view @tap="calculate" class="userSeverItem">
				<image src="/static/assets/my/menu4.png"></image>
				<text>常见问题</text>
			</view>
			<view @tap="calculate" class="userSeverItem">
				<image src="/static/assets/my/menu3.png"></image>
				<text>关注/收藏</text>
			</view>
			<view @tap="agreement" class="userSeverItem">
				<image src="/static/assets/my/sever1.png"></image>
				<text>用户协议</text>
			</view>
			<view @tap="AboutUs" class="userSeverItem">
				<image src="/static/assets/my/sever2.png"></image>
				<text>关于我们</text>
			</view>
			<view @tap="MyRecommend" class="userSeverItem">
				<image src="/static/assets/my/sever6.png"></image>
				<text>我的推荐</text>
			</view>
		</view>
		<view class="sever">我的客服</view>
		<view class="footer">
			<view @tap="gotoFun" class="footer1">
				<view class="footerTop">
					<image src="/static/assets/my/sever4.png"></image>
					<text>签约服务网点</text>
				</view>
				<text class="info1">一触即达，分分钟解决您的疑问</text>
			</view>
			<view @tap="phone" class="footer1">
				<view class="footerTop">
					<image src="/static/assets/my/sever5.png"></image>
					<text>客服电话</text>
				</view>
				<text class="info1">400-890-8890</text>
			</view>
		</view>
		<view class="sever">我的推广二维码</view>
		<view class="userSever">
			<canvas style="width: 200px; height: 200px;" canvas-id="myQrcode"></canvas>
			<!-- <image src="/static/assets/my/qrcode.jpg" class="qrcode"></image> -->
		</view>
	</view>
</template>

<script>
	// import QRCode from 'qrcodejs2'
	import drawQrcode from 'weapp-qrcode'
	// const qrCode = require('@/common/weapp-qrcode.min.js')
	export default {
		data() {
			return {
				animationData: {},
				isShow: [0, 0, 0]
			};
		},

		components: {},
		props: {},
		onShow: function() {},
		methods: {
			// 二维码生成工具
			creatQrCode() {
				drawQrcode({
					width: 200,
					height: 200,
					canvasId: 'myQrcode',
					text: 'https://github.com/yingye'
				})
			},
			rotate() {
				var animation = uni.createAnimation({
					duration: 1000,
					timingFunction: "ease"
				});
				this.animation = animation;
				animation.rotate(760).step();
				this.setData({
					animationData: animation.export()
				});
				uni.showToast({
					title: "更新成功",
					icon: "none"
				});
				setTimeout(() => {
					animation.rotate(0).step();
					this.setData({
						animationData: animation.export()
					});
				}, 1200);
			},

			question() {
				uni.navigateTo({
					url: 'commonQuestion/commonQuestion'
				});
			},

			attention() {
				uni.navigateTo({
					url: 'attention/attention'
				});
			},

			agent() {
				uni.navigateTo({
					url: '/pages/publish/transfer'
				});
			},

			recommend() {
				uni.navigateTo({
					url: "/pages/publish/buy/buy"
				});
			},

			getuserinfo() {
				uni.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							uni.login({
								success(res) {
									uni.request({
										url: "",
										method: "POST",
										data: {
											code: res.code
										},

										success(res) {
											console.log(res); // 换取openId  然后换取获取token
										}

									});
								}

							});
						} else {
							uni.showToast({
								title: "授权失败",
								icon: "none"
							});
							uni.openSetting({
								success(res) {
									console.log(res);
								}

							});
						}
					}

				});
			},

			gotoFun() {
				uni.navigateTo({
					url: "pages/home/homeWYue/homeWYue"
				});
			},

			phone() {
				uni.makePhoneCall({
					phoneNumber: "10086"
				});
			},

			/**
			 * 生命周期函数--监听页面显示
			 */
			calculate() {
				uni.navigateTo({
					url: "calculate/calculate"
				});
			},

			AboutUs() {
				uni.navigateTo({
					url: 'AboutUs/AboutUs'
				});
			},

			MyRecommend() {
				uni.navigateTo({
					url: 'MyRecommend'
				});
			},

			agreement() {
				uni.navigateTo({
					url: 'agreement/agreement'
				});
			}

		},
		mounted() {
			this.creatQrCode();
		}
	};
</script>
<style>
	@import "./my.css";

	/* .qrcode{
	width: 440rpx;height: 440rpx;
} */
	.qrcode {
		display: inline-block;

	}

	img {
		width: 132px;
		height: 132px;
		background-color: #fff; //设置白色背景色
		padding: 6px; // 利用padding的特性，挤出白边
		box-sizing: border-box;
	}
</style>

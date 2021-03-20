<template>
	<view class="container">
		<!-- 发布头部图片 -->
		<image :src="img" mode="aspectFill"></image>
		<view class="content">
			<view class="commission-title">期待您的加入</view>

			<br>
			<text class="info">称呼</text>
			<view class="phone">
				<input v-model="name" class="phone1" placeholder="请输入称呼"></input>
				<view>
					<radio-group @change="radioChange">
						<radio value="0">先生</radio>
						<radio value="1">女士</radio>
					</radio-group>
				</view>
			</view>
			<text class="info">手机号</text>
			<input v-model="phone" maxlength="11" class="phone1" placeholder="请输入手机号"></input>

		</view>
		<button @tap="publish" class="btn" hover-class="none">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: ["/static/assets/publish/02.jpg"],
				name: "",
				phone: "",
				currentTypeChoose: 0,
				currentFitmentChoose: 0,
				currentSpecificationChoose: 0,
				picked: true,
				sex: 0
			};
		},

		components: {},
		props: {},
		methods: {
			radioChange: function(evt) {
				this.sex = evt.target.value
				console.log(this.sex)
			},
			publish() {
				let that = this;
				let reg = /^[\u4E00-\u9FA5]+$/;

				if (!reg.test(that.name)) {
					uni.showToast({
						title: '请输入正确的称呼',
						icon: "none"
					});
					return;
				}

				if (that.phone.length < 11) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: "none"
					});
					return;
				};

				uni.request({
					url: getApp().globalData.appDomainName + '/web/addWebJoin',
					data: {
						name: this.name,
						phone: this.phone,
						sex: this.sex
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						console.log("信息", res);
						uni.showModal({
							title: '提交成功',
							content: '服务顾问将尽快与您联系'
						});
					}
				});
			}
		}
	};
</script>
<style>
	.commission-title {
		margin: 20px 0;
		letter-spacing: 2px;
		font-size: 44rpx;
		color: #101d36;
		line-height: 70rpx;
		font-weight: 700;
		text-align: center;
	}

	image {
		width: 100%;
		height: 300rpx;
	}

	.content {
		padding: 20rpx 40rpx;
	}

	.content .info {
		position: relative;
		font-weight: bold;
		font-size: 34rpx;
		margin-left: 30rpx;
	}

	.info::before {
		content: "";
		position: absolute;
		display: block;
		width: 12rpx;
		height: 40rpx;
		background-color: #3fbaa6;
		border-radius: 10rpx;
		top: -2rpx;
		left: -27rpx;
	}

	.ma::before {
		content: "";
		position: absolute;
		display: block;
		width: 12rpx;
		height: 40rpx;
		background-color: #3fbaa6;
		border-radius: 10rpx;
		top: 3rpx;
		left: -27rpx;
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}

	.item {
		width: 100%;
		padding: 10rpx 20rpx;
		background-color: #ececec;
		font-size: 28rpx;
		font-weight: 400;
		width: 108rpx;
		height: 40rpx;
		line-height: 40rpx;
		float: left;
		margin-right: 20rpx;
		margin-bottom: 25rpx;
		text-align: center;
		font-size: 24rpx !important;
		border-radius: 5rpx;
		border: 1rpx solid transparent;
	}

	.item:active {
		filter: brightness(90%);
	}

	.item:nth-child(4n) {
		margin-right: 0rpx;
	}

	.middle {
		margin-top: 40rpx;
		overflow: hidden;
		margin-bottom: 20rpx !important;
	}

	.blue {
		background-color: #3fbaa6;
		color: #fff;
	}

	.search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 40rpx 0rpx;
		border-radius: 10rpx;
		border: 1rpx solid #ccc;
	}

	input {
		width: 80%;
	}

	.icon-xingtaiduICON {
		color: #c1c1c1;
		margin: 0rpx 20rpx;
	}

	input[placeholder] {
		font-size: 28rpx;
	}

	.btn {
		width: 90% !important;
		border-radius: 50rpx;
		font-weight: normal;
		background-color: #3fbaa6;
		color: white;
		margin-top: 40rpx;
		margin-bottom: 60rpx;
	}

	.btn:active {
		filter: brightness(90%);
	}

	.big {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}

	.ma {
		margin: 40rpx 0rpx;
	}

	.title {
		font-size: 28rpx;
	}

	.price {
		display: flex;
		justify-content: space-around;
		margin: 20rpx 0rpx 40rpx;
		font-size: 25rpx;
		color: #b3b3b3;
	}

	.phone {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0rpx;
		align-items: center;
	}

	radio {
		margin-left: 20rpx;
	}

	.item input {
		border-bottom: 1rpx solid #ccc;
	}

	.phone1 {
		width: 300rpx;
		font-size: 30rpx;
		text-align: left;
		border-bottom: 1rpx solid #ccc;
		padding-left: 20rpx;
		margin: 30rpx 0rpx;
	}

	.phone1[placeholder] {
		font-size: 36rpx;
	}
</style>

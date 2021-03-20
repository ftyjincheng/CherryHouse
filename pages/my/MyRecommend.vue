<template>
	<view class="container">
		<view class="title">我的推荐</view>
		<view class="time">03月28日</view>
		<!-- <nearbyNewHouse :nearbyNewHouse="nearbyNewHouse"></nearbyNewHouse> -->
		<view>
			<block v-for="(item, index) in nearbyNewHouse" :key="index">
				<view :class="'item-lsti-conent ' + ( index==2 ? 'sw1':'')">
					<view class="data02-tupian">
						<image class="portrait" :src='item.img'></image>
					</view>
					<view class="data02-title">
						<view class="s1">{{item.title}}</view>
						<view class="s2">联系电话：{{item.phone}} </view>
						<view class="s2">比例：{{item.percent}} </view>
						<view class="s2" v-show="item.money!=''" style="font-weight: bold;">可获佣金：{{item.money}} </view>
					</view>
					<view class="xs1">
						<view :class="(item.status=='已成交'?'xs2':'xs4')">
							<text >{{item.status}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	// import nearbyNewHouse from "../../../components/nearbyNewHouse/nearbyNewHouse";


	export default {
		data() {
			return {
				nearbyNewHouse: [{
					id: '1',
					zd: '1',
					img: "/static/assets/home/Headportrait/s01.png",
					title: '张先生',
					phone: '155XXXXXXXX',
					percent: '0.5%',
					money: '',
					specifications: '2室1厅',
					squaremeter: '67.7',
					homesuper: '精装修',
					q1: "海景",
					q2: "别墅",
					homeN: 1,
					status: "未成交"
				}, {
					id: '2',
					img: "/static/assets/home/Headportrait/s04.png",
					title: '李先生',
					phone: '155XXXXXXXX',
					percent: '0.5%',
					money: '',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					status: "未成交"
				}, {
					id: '3',
					img: "/static/assets/home/Headportrait/s03.png",
					title: '张先生',
					phone: '155XXXXXXXX',
					percent: '0.5%',
					money: '',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					status: "未成交"
				}, {
					id: '4',
					img: "/static/assets/home/Headportrait/s02.png",
					title: '张先生',
					phone: '155XXXXXXXX',
					percent: '0.5%',
					money: '￥9000',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					status: "已成交"
				}]
			};
		},

		components: {
		},
		props: {},
		methods: {}
	};
</script>
<style>
	.xs1{
	    width: 60rpx;
	    height: 60rpx;
	    position: absolute;
	    right: 18px;
	}
	.xs4{
	    background: red !important;
	}
	.xs2 , .xs4{
	    width: 80rpx;
	    height: 44rpx;
	    text-align: center;
	    line-height: 44rpx;
	    background:#3fbaa6 ;
	    letter-spacing: 2rpx;
	    border: none;
	    font-size: 24rpx;
	    color: whitesmoke;
	}
	.portrait{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	.data02-tupian{
	  /* height: 160rpx; */
		position: relative;
	}
	.data02-title{
	    display: flex;
	    flex-direction: column;
	    width: 100vw;
	    letter-spacing: 2rpx;
	    padding-left: 30rpx;
	    color: #05070ade;
	    font-size: 24rpx;
	    font-weight: 500;
	}
	.item-list {
		display: flex;
		margin-top: 26rpx;
		width: 90%;
		flex-direction: column;
		margin: auto;
	}

	.item-lsti-conent {
		border-bottom: 4rpx solid whitesmoke;
		display: flex;
		width: 90vw;
		padding: 15px 0;
		padding-left: 0px;
		margin: 10rpx 0;
	}

	.container {
		padding: 30rpx;
	}

	.title {
		font-weight: bold;
	}

	.time {
		font-size: 22rpx;
		color: #ccc;
		margin-top: 20rpx;
	}

	sup {
		font-size: 10px;
		vertical-align: text-top;
	}

	.item {
		display: flex;
		padding: 30rpx 0rpx;
		border-bottom: 1rpx solid #eeeeee;
	}

	.item image {
		width: 350rpx;
		height: 180rpx;
		margin-right: 20rpx;
	}

	.info {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
	}

	.top {
		display: flex;
		width: 100%;
	}

	.sell {
		margin-left: auto;
		font-size: 25rpx;
		color: white;
		background-color: #3096cc;
		height: 35rpx;
		padding: 0rpx 5rpx;
	}

	.sell1 {
		margin-left: auto;
		font-size: 25rpx;
		color: white;
		background-color: #e2b81e;
		height: 35rpx;
		padding: 0rpx 5rpx;
	}

	.title {
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.location {
		font-size: 25rpx;
	}

	.residence {
		font-size: 25rpx;
		margin-right: 20rpx;
	}

	.tags {
		background-color: #f3f3f3;
		font-size: 22rpx;
		color: #3ebecc;
		padding: 10rpx;
		margin-right: 5rpx;
		border-radius: 5rpx;
	}

	.price {
		color: red;
	}

	.money {
		font-weight: bold;
	}



	/* 模板2 */

	.item1 {
		display: flex;
		padding: 30rpx 0rpx;
		border-bottom: 1rpx solid #eeeeee;
	}

	.item1 image {
		width: 350rpx;
		height: 180rpx;
		margin-right: 20rpx;
	}

	.item1 {
		padding-bottom: 10rpx;
	}

	.item1 .title {
		margin-bottom: 34rpx;
	}

	.item1 .tag {
		margin-bottom: 10rpx;
	}

	.wrap {
		display: flex;
		font-size: 26rpx;
	}

	.wrap .money {
		font-size: 30rpx;
	}

	.area {
		color: #a2a2a2;
		margin: 0rpx 20rpx;
	}

	.wrap .sup {
		font-size: 10px;
		vertical-align: text-top
	}

	.size {
		margin-right: 20rpx;
	}

	.choose {
		position: absolute;
		background-color: #3fbaa6;
		color: white;
		padding: 5rpx;
		font-size: 28rpx;
	}

	/* 模板3 */

	.item2 {
		display: flex;
		padding: 30rpx 0rpx;
		border-bottom: 1rpx solid #eeeeee;
	}

	.item2 image {
		width: 350rpx;
		height: 180rpx;
		margin-right: 20rpx;
	}

	.item2 .price {
		margin-right: 20rpx;
	}

	.item2 .title {
		margin-bottom: 40rpx;
	}

	.proprietor {
		display: flex;
		font-size: 28rpx;
		align-items: center;
		color: #a7a7a7;
		margin-top: 10rpx;
	}

	.proprietor image {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	.name {
		margin-right: 20rpx;
	}
</style>

<template>
<view class="container">

	<view class="sell">
		<image :src="imgas1" mode="widthFix"></image>
		<button @tap="newRecommend">新房报备</button>
	</view>
	<view class="sell">
		<image :src="imgas3" mode="widthFix"></image>
		<button @tap="rentRecommend" style="left:430rpx;">推荐租房</button>
	</view>
	<view class="buy">
	<image :src="imgas2" mode="widthFix"></image>
		<button @tap="oldRecommend" hover-class="none">推荐二手房</button>
	</view>

</view>
</template>

<script>

export default {
  data() {
    return {
      imgas1: ["/static/assets/publish/new.png"],
      imgas2: ["/static/assets/publish/old.png"],
      imgas3: ["/static/assets/publish/rent.png"]
    };
  },
  components: {},
  methods: {
    newRecommend() {
      uni.navigateTo({
        url: 'buy/buy'
      });
    },

    oldRecommend() {
      uni.navigateTo({
        url: 'buy/buyOld'
      });
    },

    rentRecommend() {
      uni.navigateTo({
        url: 'buy/rent'
      });
    }

  }
};
</script>
<style>
.container{
	height: 100vh;
	padding: 30rpx;
}
image{
	width: 100%;
	height: 350rpx;
	border-radius: 20rpx;
}
image:nth-of-type(1){
	margin-bottom: 20rpx;
}
.sell,
.buy{
	position: relative;
}
button{
	position: absolute;
	bottom: 77rpx;
	width: 190rpx !important;
	left: 58rpx;
	height: 55rpx;
	line-height: 43rpx !important;
	border-radius: 50rpx !important;
	font-size: 26rpx !important;
	background-color: #3fbaa6;
	color: #fff;
	box-shadow: #ccc 0rpx 0rpx 20rpx 0rpx;
	padding: 8rpx 0rpx !important;
}
button:active{
	filter: brightness(90%);
}

</style>
<template>
<view class="container">
	
	<view v-for="(item, index) in houseInfo" :key="index" class="item">
		<view class="top">
			<image :src="item.images"></image>
			<view class="right">
				<text class="title" space="warn">{{item.title}}</text>
				<view class="middle">
					<text class="show">{{item.status==0?'显示中':''}}</text>
					<view>
						<text>浏览</text>
						<text class="num">{{item.num}}</text>
						<text>次</text>
					</view>
				</view>
				<view class="bm">
					<text class="price">{{item.price}}</text>
					<text class="unit">万</text>
					<text class="type">{{item.type}}</text>
					<text class="area">{{item.area}}</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<text v-if="item.status1==1">刷新</text>
			<text v-if="item.status2==1">下架</text>
			<text>房源管理</text>
		</view>
	</view>
	
</view>
</template>

<script>

export default {
  data() {
    return {
      houseInfo: [{
        title: "福顺上郡  1室1厅1卫",
        images: "/static/assets/home/homeListItem/1231.jpg",
        status: 0,
        num: 110,
        price: "70",
        type: "2室1厅",
        area: "67.7m²",
        status1: 1,
        status2: 1
      }, {
        title: "福顺上郡  1室1厅1卫",
        images: "/static/assets/home/homeListItem/1231.jpg",
        status: 0,
        num: 110,
        price: "70",
        type: "2室1厅",
        area: "67.7m²",
        status1: 0,
        status2: 0
      }, {
        title: "福顺上郡  1室1厅1卫",
        images: "/static/assets/home/homeListItem/1231.jpg",
        status: 0,
        num: 110,
        price: "70",
        type: "2室1厅",
        area: "67.7m²",
        status1: 0,
        status2: 0
      }]
    };
  },

  components: {},
  props: {},
  methods: {}
};
</script>
<style>
@import "./release.css";
</style>
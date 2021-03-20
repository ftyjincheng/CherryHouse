<template>
<view class="container">
	<view class="title">君豪新城</view>
	<view class="title1">销售信息</view>
	<view class="sellInfo">
		<view class="item">
			<text>物业类型:</text>
			<text>{{info.type}}</text>
		</view>
		<view class="item">
			<text>售楼地址:</text>
			<text>{{info.location}}</text>
		</view>
		<view class="item">
			<text>物业公司:</text>
			<text>{{info.wuliu}}</text>
		</view>
	</view>
	
	
	<view class="title1">建筑规划</view>
	<view class="construction">
		<view class="item">
			<text>建筑类型:</text>
			<text>{{info.jianzhu}}</text>
		</view>
		<view class="item">
			<text>开发商:</text>
			<text>{{info.kaifashang}}</text>
		</view>
		<view class="item">
			<text>占地面积:</text>
			<view>{{info.area}}m<sup>2</sup></view>
		</view>
		<view class="item">
			<text>建筑面积:</text>
			<view>{{info.jzmj}}m<sup>2</sup></view>
		</view>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      info: {
        type: "普通住宅，公寓，别墅，酒店式公寓，商铺",
        location: "哈尔滨松北新区利民大道888号",
        wuliu: "哈尔滨义乌中国小商品城东北市场管理有限公司",
        jianzhu: "板楼 独栋 别墅 多层 高层",
        kaifashang: "君豪集团-哈尔滨君豪置业房地产有限公司",
        area: 2400000,
        jzmj: 6000000
      }
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
  methods: {}
};
</script>
<style>
@import "./detailInfo.css";
</style>
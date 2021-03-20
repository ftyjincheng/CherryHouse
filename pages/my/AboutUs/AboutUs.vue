<template>
<view class="container">
	<view class="top">
		<image :src="data.img" mode="aspectFill"></image>
		<text>{{data.title}}</text>
	</view>
	<text class="content" space="warn">{{data.content}}</text>
	<view class="wrap">
		<view class="buttom">
			客服电话{{data.phone}}
		</view>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      data: {
        img: "/static/assets/home/homeIcon/04.png",
        title: "樱桃找房",
        content: "樱桃找房 , 全国物业房源 , 覆盖全国365个城市 , 业务涵盖新房 、二手房 、整租 、合租 、公寓等业务 , 每日更新上万条物业房源为您提供专业安全找房服务",
        phone: "400-890-8890转1"
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
@import "./AboutUs.css";
</style>
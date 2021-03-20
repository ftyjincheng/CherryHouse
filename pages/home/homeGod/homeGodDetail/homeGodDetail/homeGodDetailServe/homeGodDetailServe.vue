<template>
<view class="contser">
	<view class="sds1" hover-class="none" hover-stop-propagation="false">
		<image class mode="widthFix" style="width:100%;height:100%;background-color:black;" src="/static/assets/home/homeGods/04.jpg">
		</image>
	</view>
	<view class="ds">
		<button @tap="back" class="button01" type="primary" style="width:85%">返回</button>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {};
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
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    }

  }
};
</script>
<style>
@import "./homeGodDetailServe.css";
</style>
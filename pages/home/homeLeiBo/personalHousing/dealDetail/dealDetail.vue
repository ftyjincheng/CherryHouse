<template>
<view class="container">
	<image :src="img" mode="widthFix"></image>
	<view class="buttom-item">
		<button @tap="back" class="bu1" type="primary" style="width:40%">我知道了</button>
		<button @tap="call" class="bu2" type="primary" style="width:40%;background:#0da7ce">联系客服</button>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      img: ["/static/assets/home/homeGods/04.jpg"]
    };
  },

  components: {},
  props: {},
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
    /**
     * 生命周期函数--监听页面加载
     */
    call() {
      uni.makePhoneCall({
        phoneNumber: '10086'
      });
    },

    back() {
      uni.navigateBack({
        delta: 1
      });
    }

  }
};
</script>
<style>
@import "./dealDetail.css";
</style>
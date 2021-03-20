<template>
<view class="container">
	<image src="/static/assets/publish/02.jpg" mode="aspectFill"></image>
	<view class="content">
		<text class="info">选择你的出售方式？</text>
		<view class="entrust">
			<view data-show="1" @tap="tab" :class="'diamonds ' + (isShow?'':'blue') + ' '">委托方式</view>
			<view data-show="2" @tap="tab" :class="'diamonds ' + (isShow?'blue':'') + ' '">自由买房</view>
		</view>
		<view :style="isShow?'display: none;':''" class="text">
			<text space="warn" class="title">
				客源更多 ,  免骚扰 ,  出售快
			</text>
			<view class="footer">
				平台负责对您出售的房源进行真实核验，待核验后方可上架进行出售，服务顾问将在24小时与您取得联系，请注意接听服务顾问电话
			</view> 
		</view>
		<view :style="isShow?'':'display: none;'" class="text">
			<text space="warn" class="title">
				自由交易 ,  直接找买家 ,  自己谈
			</text>
			<view class="footer">
				自己和买家谈，不想要第三方打扰，手递手的把房子卖给需要的人
			</view> 
		</view>
		<button @tap="publish" class="btn" hover-class="none">发布</button>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      ischecked: true,
      isShow: false
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
  methods: {
    tab(e) {
      // e.currentTarget.dataset.show==1?this.setData({ischecked:true}):this.setData({ischecked:false})
      this.setData({
        isShow: !this.isShow
      });
    },

    publish() {
      let token = uni.getStorageSync('token');

      if (token == "") {
        uni.showModal({
          title: '请登录',
          content: '仅对注册用户开放。'
        });
        return;
      }

      uni.showModal({
        title: '发布成功',
        content: '交易过程中有任何疑问可以随时与我们联系，我们将为您提供完善的交易服务',

        success(res) {
          if (res.confirm) {
            uni.showModal({
              title: '发布成功',
              content: '服务顾问会在24小时之内与您取得联系，对您所出售的房源进行详细查验，请注意接听电话'
            });
          }
        }

      });
    }

  }
};
</script>
<style>
@import "./entrust.css";
</style>
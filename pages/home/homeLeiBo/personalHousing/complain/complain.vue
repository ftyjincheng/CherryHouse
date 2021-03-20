<template>
<view class="container">
	<view class="top">
		请选择举报原因
	</view>
	<view class="content">
			<view v-for="(item, index) in msg" :key="index" @tap="choose" :data-index="index" :class="'item ' + (cueerentChoose==index?'color':'')">
			{{item}}
			<text :class="cueerentChoose==index?'icon-dui':''"></text>
		</view>
	</view>
	<view class="b">
		<button @tap="submit" hover-class="none">提交</button>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      msg: ["房屋已售", "价格不真实", "图片不真实", "中介冒充"],
      cueerentChoose: -1
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
    choose(e) {
      this.setData({
        cueerentChoose: e.currentTarget.dataset.index
      });
    },

    submit() {
      if (this.cueerentChoose == -1) {
        console.log(this.cueerentChoose);
        uni.showToast({
          title: "请选择举报原因",
          icon: "none"
        });
        return;
      }

      uni.showModal({
        title: '感谢您得反馈',
        content: '系统已经记录您得反馈，信息核实后违规房源将被下架处理',
        confirmText: "返回房源",
        cancelText: "返回列表",

        success(res) {
          if (res.cancel) {
            uni.navigateBack({
              delta: 2
            });
          } else {
            uni.navigateBack({
              delta: 1
            });
          }
        }

      });
    }

  }
};
</script>
<style>
@import "./complain.css";
</style>
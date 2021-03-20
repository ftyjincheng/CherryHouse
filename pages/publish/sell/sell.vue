<template>
<view class="container">
	<image :src="imags" mode="aspectFill"></image>
	<view class="content">
		<text class="info">你想卖哪的房子</text>
		<view class="items">
			<text v-for="(item, index) in site" :key="index" @tap="areaFun" :class="'item ' + (area==index?'color':'')" :data-index="index">{{item}}</text>
		</view>
		<text class="info">你想出售的房屋类型？</text>
		<view class="middle">
			<text v-for="(item, index) in houseType" :key="index" @tap="typeFun" :data-index="index" :class="'item ' + (type==index?'color':'')">{{item}}</text>
		</view>
		<text class="info">房屋所在小区？</text>
		<view class="search">
			<input :value="residence" @input="input" placeholder="请输入小区名称或街道门牌号"></input>
		</view>
	</view>
	<button @tap="detail" class="btn" hover-class="none">下一步</button>
</view>
</template>

<script>

export default {
  data() {
    return {
      area: 0,
      type: 0,
      imags: ["/static/assets/publish/01.jpg"],
      site: ['道里区', '南岗区', '道外区', '香坊区', '动力区', '平方区', '松北区', '呼兰区', '伊兰区', '方正区', '宾区', '巴彦区', '宾区', '宾区', '宾区', '宾区', '宾区', '宾区', '宾区'],
      houseType: ['住宅', '别墅', '商铺'],
      residence: ""
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
    input(e) {
      this.setData({
        residence: e.detail.value
      });
    },

    detail() {
      if (this.residence.length < 3) {
        uni.showToast({
          title: "请正确输入校区名称或街道门牌号",
          icon: "none"
        });
        return;
      }

      if (this.residence == "") {
        uni.showToast({
          title: '请选择小区',
          icon: 'none'
        });
        return;
      }

      uni.navigateTo({
        url: 'detail/detail'
      });
    },

    areaFun(e) {
      this.setData({
        area: e.currentTarget.dataset.index
      });
    },

    typeFun(e) {
      this.setData({
        type: e.currentTarget.dataset.index
      });
    }

  }
};
</script>
<style>
@import "./sell.css";
</style>
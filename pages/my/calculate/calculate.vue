<template>
<view class="container">
	<view class="type ">
		<text v-for="(item, index) in type" :key="index" :class="'item ' + (isShow==index?'color bold ':'')" @tap="calculate" :data-index="index">{{item}}</text>
	</view>
	<view class="content">

		<view class="calsulate-item">
			<text class="side">房屋售价</text>
			<view class="right">
				<input @input="input" :style="ageLimitShow?'width:220rpx;':''" maxlength="5" type="number" :value="value" :placeholder="ageLimitShow?'请输入房屋售价':''" class="sellInput"></input>
				<text class="m" v-if="!ageLimitShow">万</text>
			</view>
		</view>

		<view data-index="0" class="calsulate-item">
			<view class="wrap1">
				<text class="side">首付{{toggle?'金额':'比例'}}</text>
				<text class="icon-qiehuan"></text>
				<text @tap="toggleFun" class="toggle">{{toggle?'切换首付比例':' 自定义首付金额'}}</text>
			</view>
			<!-- 首付比例 -->
			<picker :style="toggle?'display:none;':''" class="q" @change="change" :value="index" :range="c">
				<view class="t">{{c[index]}}</view>
			</picker>
			<text :style="toggle?'display:none;':''" class="icon-you"></text>
			<view :style="toggle?'':'display:none;'" class="right">
				<input @input="downPaymentFun" :style="downPayment?'width:220rpx;':''" maxlength="5" type="number" :value="value1" :placeholder="downPayment?'请输入首付金额':''" class="sellInput"></input>
				<text class="m">万</text>
			</view>
		</view>

		<view class="calsulate-item">
			<text class="side">贷款总额</text>
			<text class="price">{{total}}万</text>
		</view>

		<!--商业贷款 -->
		<view :style="isShow==2?'':'display:none;'" @tap="ageLimit" data-index="1" class="calsulate-item">
			<text class="side">商业贷款</text>
			<input placeholder="请输入商业贷款"></input>
		</view>


		<view @tap="ageLimit" data-index="1" class="calsulate-item">
			<text class="side">贷款年限</text>
			<!--  贷款年限-->
			<picker @change="yearFun" :value="index" :range="ageLimit">
				<view class="t">{{ageLimit[year]}}</view>
			</picker>
			<text class="icon-you"></text>
		</view>

		<view @tap="accumulationFund" data-index="2" :class="'calsulate-item ' + (isShow==1?'hidden':'')">
			<text class="side">公积金利率</text>
			<!-- 公积金率 -->
			<picker @change="rateFun" :value="index" :range="accumulationFund">
				<view class="t">{{accumulationFund[rate]}}</view>
			</picker>
			<text class="icon-you"></text>
		</view>

		<view @tap="accumulationFund" data-index="2" :class="'calsulate-item ' + (isShow!=0?'':'hidden')">
			<text class="side">商贷利率</text>
			<!-- 公积金率 -->
			<picker @change="rateFun" :value="index" :range="accumulationFund">
				<view class="t">{{accumulationFund[rate]}}</view>
			</picker>
			<text class="icon-you"></text>
		</view>

		<view :style="isShow==2?'':'display:none;'" class="calsulate-item">
			<text class="side">公积金贷款</text>
			<view class="right">
				<input @input="housFun" :style="hous?'width:220rpx;':''" maxlength="5" type="number" :value="value" :placeholder="hous?'请输入公积金贷款':''" class="sellInput"></input>
				<text class="m" v-if="!hous">万</text>
			</view>
		</view>

	</view>
	<button @tap="submit" hover-class="none">开始计算</button>
	<view class="bottom">此结果仅供参考，实际费用以当地缴费为准</view>
	
	<view v-if="isBootomShow" class="result">
		<view class="bt">
			<text @tap="choose" :class="curentChoose?'active':''">等额本息</text>
			<text @tap="choose" :class="!curentChoose?'active':''">等额本金</text>
		</view>
		<view class="bo">
    <view class="echart_panel">
    </view>
		<view class="box">
		<ec-canvas :ec="ec"></ec-canvas>
			</view>
			<view class="right1">
				<view class="itemq">
					<view>房屋售价</view>
					<text>{{foremData.shoujia}}万</text>
				</view>
				<view class="itemq">
					<view>首付金额</view>
					<text>{{foremData.shoufubili}}万</text> 
				</view>
				<view class="itemq qq">
					<view>贷款总额</view>
					<text>{{foremData.daikuanjine}}万</text>
				</view>
				<view class="itemq bb">
					<view>支付利息</view>
					<text>{{foremData.zhifulixi}}万</text>
				</view>
				<view class="itemq">
					<view>利率</view>
					<text>{{foremData.lilv}}</text>
				</view>
				<view class="itemq">
					<view>月供</view>
					<text>{{foremData.yuegong * 10000}}元</text>
				</view>
				<view :style="curentChoose==false?'':'display: none;'" class="itemq">
					<view>每月递减</view>
					<text>10.2元</text>
				</view>
				
			</view>
		</view>
	</view>


	
</view>
</template>

<script>
import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new

  });
  canvas.setChart(chart);
  var option = {
    backgroundColor: "#ffffff",
    color: ["#ffb44a", "#32C5E9"],
    series: [{
      label: {
        normal: {
          fontSize: 11
        }
      },
      labelLine: {
        show: false
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['28%', '60%'],
      data: [{
        value: 55
      }, {
        value: 20
      }]
    }]
  };
  chart.setOption(option);
  return chart;
}
import ecCanvas from "../../../ec-canvas/ec-canvas";

export default {
  data() {
    return {
      ec: {
        onInit: initChart
      },
      isBootomShow: false,
      curentChoose: true,
      isShow: 0,
      index: 0,
      ageLimitShow: false,
      accumulationFundShow: false,
      sellPrice: false,
      // 房屋售价
      value: "100",
      // 首付金额
      value1: "",
      total: 90,
      year: 0,
      rate: 0,
      toggle: false,
      downPayment: false,
      hous: false,
      ageLimit: ["1年12期", "2年24期", "3年36期", "4年48期", "5年60期", "1年12期", "1年12期", "1年12期", "1年12期", "1年12期", "1年12期", "1年12期"],
      accumulationFund: ["基准利率", "7折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折", "7.5折"],
      type: ["公积金贷款", "商业贷款", "组合贷款"],
      c: ["1成", "2成", "3成", "4成", "5成", "6成", "7成", "8成", "9成"],
      foremData: {
        "shoujia": "",
        "shoufubile": "",
        "daikuanjine": "",
        "zhifulixi": "",
        "lilv": "3.25%",
        "yuegong": "",
        "meiyuedijian": ""
      },
      shoujia: "",
      shoufubile: "",
      daikuanjine: "",
      lixi: "",
      yuegong: ""
    };
  },

  components: {
    ecCanvas
  },
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
    submit() {
      this.setData({
        isBootomShow: !this.isBootomShow
      });

      if (this.isBootomShow) {
        uni.pageScrollTo({
          scrollTop: 230
        });
      } // 售价


      let shoujia = 'foremData.shoujia';
      this.setData({
        [shoujia]: this.value
      }); // 金额

      let shoufubile = "foremData.shoufubili";
      this.setData({
        [shoufubile]: (this.index + 1) / 10 * this.value
      }); // 贷款总额

      let daikuanjine = "foremData.daikuanjine";
      this.setData({
        [daikuanjine]: this.total
      }); // 利息

      let lixi = "foremData.zhifulixi";
      this.setData({
        [lixi]: (this.total * 0.0325 * (this.year + 1)).toFixed(2)
      }); // 月供

      console.log(this.total);
      console.log(this.year);
      let yuegong = "foremData.yuegong";
      this.setData({
        [yuegong]: ((this.total + this.total * 0.0325) / ((parseInt(this.year) + 1) * 12)).toFixed(2)
      });
      console.log(this.foremData);
    },

    calculate(e) {
      this.setData({
        isShow: e.currentTarget.dataset.index
      });
    },

    choose() {
      this.setData({
        curentChoose: !this.curentChoose
      });
    },

    input(e) {
      console.log(e.detail.value); //value

      if (e.detail.value.length == 0) {
        this.setData({
          ageLimitShow: true
        });
      } else {
        this.setData({
          ageLimitShow: false
        });
      }

      if (!this.toggle) {
        let that = this;
        let num = parseInt(e.detail.value) - parseInt() * ((this.index + 1) / 10);
        that.setData({
          total: num
        });
      }
    },

    change(e) {
      let num = parseInt(e.detail.value);
      let num1 = this.value - this.value * ((num + 1) / 10);
      this.setData({
        index: num,
        total: num1
      });
    },

    yearFun(e) {
      this.setData({
        year: e.detail.value
      });
    },

    rateFun(e) {
      this.setData({
        rate: e.detail.value
      });
    },

    toggleFun() {
      this.setData({
        toggle: !this.toggle
      });
    },

    downPaymentFun(e) {
      console.log(e.detail.value); //value1

      if (e.detail.value.length == 0) {
        this.setData({
          downPayment: true
        });
      } else {
        this.setData({
          downPayment: false
        });
      }
    },

    housFun(e) {
      if (e.detail.value.length == 0) {
        this.setData({
          hous: true
        });
      } else {
        this.setData({
          hous: false
        });
      }
    }

  }
};
</script>
<style>
@import "./calculate.css";
</style>
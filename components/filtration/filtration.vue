<template>
<view class="container">
	<view class="top">
		<view v-for="(item, index) in title" :key="index" @tap="titleFun" :data-index="index" :class="'title ' + (currentShow==index?'color':'') + ' ' + (isColor==index?'color':'') + ' ' + (isColor1==index?'color':'') + ' ' + (isColor2==index?'color':'')">
			<text>{{item}}</text>
			<image src="/static/assets/bottom.png"></image>
		</view>
	</view>
	<!-- 区域 -->
	<view v-if="currentShow==0" class="area">
		<scroll-view class="s1" scroll-y="true">
			<view v-for="(item, index) in areas" :key="index" @tap="currentAreaFun" :data-index="index" :class="'district ' + (currentArea==index?'color':'')">{{item}}</view>
		</scroll-view>
		
	</view>
	<!-- 价格 -->
	<view v-if="currentShow==1" class="area noflex">
		<view class="wrap">
			<scroll-view class="s1" scroll-y="true">
				<view v-for="(item, index) in price" :key="index" @tap="currentProceFun" :data-index="index" :class="'district  ' + (currentProce==index?'color':'')">{{item}}</view>
			</scroll-view>
			<!-- 详细价格 -->
			<scroll-view v-if="currentAveragePrice" class="s2" scroll-y="true">
				<view v-for="(item, index) in averagePrice" :key="index" @tap="averagePriceFun" :data-index="index" :class="'district ' + (averageColor==index?'color':'')">{{item}}</view>
			</scroll-view>
			<scroll-view v-if="totalAveragePrice" class="s2" scroll-y="true">
				<view v-for="(item, index) in totalPrice" :key="index" @tap="totalPriceFun" :data-index="index" :class="'district ' + (totalColor==index?'color':'')">{{item}}</view>
			</scroll-view>
		</view>
		<view class="bottom">
			<input class="average" placeholder="最低均价"></input>
			<input class="average" placeholder="最高均价"></input>
			<button @tap="confirm" hover-class="none">确定</button>
		</view>
	</view>
	<!-- 用途 -->
	<view v-if="currentShow==2" class="area">
		<scroll-view class="s1" scroll-y="true">
			<view v-for="(item, index) in use" :key="index" @tap="currentUseFun" :data-index="index" :class="'district ' + (currentUse==index?'color':'')">{{item}}</view>
		</scroll-view>
		<!-- <scroll-view class="s2 white" scroll-y="true">
		</scroll-view> -->
	</view>
	
	
</view>
</template>

<script>

export default {
  data() {
    return {
      isShow: false,
      isColor: -1,
      isColor1: -1,
      isColor2: -1,
      currentShow: -1,
      currentArea: 0,
      currentUse: 0,
      currentProce: 0,
      currentAveragePrice: true,
      totalAveragePrice: false,
      averageColor: 0,
      totalColor: 0,
      titleName: ["", "", ""],
      priceDetail: 0,
      subAreaIsShow: false,
      subArea: "",
      currentSubArea: 0,
      areas: ["不限", "武侯区", "青羊区", "锦江区", "区域2"],
      // 筛选条件
      title: ["区域", "价格", "用途"],
      //提交的数据
      submitData: {
        area: '',
        price: 0,
        use: ''
      },
      // 价格
      price: ["均价", "总价"],
      averagePrice: ["不限", "8000以下", "8000-15000元", "15000-20000元", "15000-20000元", "20000-25000元", "25000-35000元", "35000-50000元", "50000以上"],
      totalPrice: ["不限", "30万以下", "30-50万", "50-100万", "100-150万", "150-200万", "200-250万", "250-300万", "300万以上"],
      use: ["不限", "住宅", "别墅", "商铺", "写字楼", "旅游地产"],
      currentTilt: "",
      currentTitle: ""
    };
  },

  components: {},
  props: {
    filtration: {
      type: Array,
      default: []
    }
  },
  methods: {
    titleFun(e) {
      if (this.currentShow == e.currentTarget.dataset.index) {
        this.setData({
          currentShow: -1
        });
      } else {
        this.setData({
          currentShow: e.currentTarget.dataset.index
        });
      }
    },

    currentAreaFun(e) {
      let index = e.currentTarget.dataset.index;
      let currentTilt = 'title[' + 0 + ']';
      this.setData({
        currentArea: e.currentTarget.dataset.index,
        [currentTilt]: this.areas[index],
        currentShow: -1,
        isColor: 0
      });
    },

    // 价格选择
    currentProceFun(e) {
      this.setData({
        currentProce: e.currentTarget.dataset.index,
        submitData: {
          price: this.price[e.currentTarget.dataset.index]
        }
      });

      if (e.currentTarget.dataset.index == 1) {
        this.setData({
          currentAveragePrice: false,
          totalAveragePrice: true
        });
      } else {
        this.setData({
          currentAveragePrice: true,
          totalAveragePrice: false
        });
      }
    },

    averagePriceFun(e) {
      this.setData({
        averageColor: e.currentTarget.dataset.index
      });
      var currentTitle = 'title[' + 1 + ']';
      this.setData({
        [currentTitle]: this.averagePrice[this.averageColor],
        currentShow: -1,
        isColor1: 1
      });
    },

    totalPriceFun(e) {
      this.setData({
        totalColor: e.currentTarget.dataset.index
      });
      var currentTitle = 'title[' + 1 + ']';
      this.setData({
        [currentTitle]: this.totalPrice[this.totalColor],
        currentShow: -1
      });
    },

    // 用途选择
    currentUseFun(e) {
      console.log(e.currentTarget.dataset.index);

      if (e.currentTarget.dataset.index == 0) {
        this.setData({
          isColor2: -2
        });
      }

      this.setData({
        currentUse: e.currentTarget.dataset.index,
        submitData: {
          use: this.use[e.currentTarget.dataset.index]
        }
      }); //用途的索引2

      let newTitle = [];

      for (let i = 0; i < this.title.length; i++) {
        if (i != 2) {
          newTitle.push(this.title[i]);
        } else {
          newTitle.push(this.submitData.use);
        }
      }

      this.setData({
        title: newTitle,
        currentShow: -2,
        isColor2: 2
      });
    },

    confirm() {
      this.setData({
        currentShow: -2
      });
    }

  }
};
</script>
<style>
@import "./filtration.css";
</style>
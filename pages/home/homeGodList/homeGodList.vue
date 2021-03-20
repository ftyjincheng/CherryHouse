<template>
<view class="conent-item" hover-class="none">
    <view class="data01">
        <view class="d1">精选新房</view>
        <view class=" d2" @tap="more">查看更多
        <image src="/static/assets/svg/fhui.svg" style="width:10px;height:10px"></image>
        </view>
    </view>
    <view class="item-list" hover-class="none" hover-stop-propagation="false">
    <!--一次限制3条数据展示-->
        <block v-for="(item, index) in homeListItem" :key="index" v-if="index<5">
        <view :class="'item-lsti-conent ' + ( index==2 ? 'sw1':'')">
            <view class="data02-tupian">
                <view :class="'ysex01 ' + (item.zd=='1'?'':'hidden')"><text class>正在热销</text></view>
                <image class="data02-img" :src="item.img" alt></image> 
                
            </view>
            <view class="data02-title">
                <view class="s1">{{item.title}}</view>
                <view class="s2">{{item.stmel}}  {{item.stmels}}</view>

                <view class="s3"> 
                <text class="q1">{{item.q1}}</text>
                <text class="q1">{{item.q2}}</text>
                </view>
    
                <view class="s4">
                <text style="color:red;font-weight:800;">{{item.number}}元/㎡</text>       
                </view>
            </view>
            <view class="xs1">
                <view class="xs2">
                    <text class>{{item.homeS}}</text>
                </view>
            </view>
        </view>
        </block>
        <view class="li01">
        <button type="primary" class="list-gods" @tap="more">查看更多精选新房房源</button>
        </view>  
    </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      homeListItem: [{
        id: '1',
        zd: '1',
        img: "/static/assets/home/homeListItem/home01.png",
        title: '合力达卓越南城',
        stmel: '北海区',
        stmels: '东路101号',
        number: '15000',
        specifications: '2室1厅',
        squaremeter: '67.7',
        homesuper: '精装修',
        q1: "海景",
        q2: "别墅",
        homeN: 1,
        homeS: "停售"
      }, {
        id: '2',
        img: "/static/assets/home/homeListItem/home01.png",
        title: '中心海城',
        stmel: '途家丛',
        stmels: '赤岭路110路',
        number: '11000',
        q1: "海景",
        q2: "别墅",
        homeN: 2,
        homeS: "在售"
      }, {
        id: '3',
        img: "/static/assets/home/homeListItem/home01.png",
        title: '广夏大楼',
        stmel: '梅溪湖',
        stmels: '鼎奥国际',
        number: '14000',
        q1: "海景",
        q2: "别墅",
        homeN: 2,
        homeS: "在售"
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/home01.png",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '900000',
        q1: "海景",
        q2: "别墅",
        homeN: 2,
        homeS: "在售"
      }]
    };
  },

  components: {},
  props: {},
  methods: {
	  more(){
		  uni.navigateTo({
		    url: "/pages/home/newHouseList/newHouseList"
		  });
	  }
  }
};
</script>
<style>
@import "./homeGodList.css";
</style>
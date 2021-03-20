<template>
<view class="conent-item" hover-class="none">

<!--设置动态得数据接口  在列表页可以根据自己需求改 homeFeuer -->
    <view v-for="(item, index) in homeFeuer" :key="index" class="data01">
        <view class="d1">{{item.title01}}</view>
        <view @tap="gotoLeiBo" class="d2">{{item.title02}}
        <image :src="item.img" style="width:20rpx;height:20rpx"></image>
        </view> 
    </view>
    <view class="item-list" hover-class="none" hover-stop-propagation="false">
    <!--一次限制3条数据展示-->
        <block v-if="homeListItem==''">
          <view class="list-foot">无房源信息</view>
          <button class="dz-btn">我要定制找房</button>
          <view class="list-foot">点击我要定制找房，服务顾问将为您快速找房</view>
        </block>
				
        <block v-for="(item, index) in homeListItem" :key="index" v-if="index<5">
        <view @tap="detail" :data-index="index" :class="'item-lsti-conent ' + ( index==2 ? 'sw1':'')">
            <view class="data02-tupian">
                <view :class="'ysex01 ' + (item.zd=='1'?'':'hidden')"><text class>精品直卖</text></view>
                <image class="data02-img" :src="item.img" alt></image> 
            </view>
            <view class="data02-title">
                <view class="s1">{{item.title}}</view>
                <view class="s2">{{item.stmel}}  {{item.stmels}}</view>

                <view class="s3"> 
                <span>{{item.specifications}}</span>
                <div class="vLine"></div>
                <span style="color:#384047">{{item.squaremeter}}㎡</span>
                <div class="vLine"></div>
                <span>{{item.homesuper}}</span>
                </view>
    
                <view class="s4">
                <text style="color:red;font-weight:800;">{{filters.fnMoney(item.number)}}</text>
                <text style="color:red;">万</text> 
                <image style="width:20px;height:20px" :src="item.avatar"></image>        
                <text>{{item.type}}</text>    
                </view>
            </view>
        </view>
        </block>
				
				
				
        <!--在这里改动态数据-->
        <view class="li01">
        <block v-if="homeFeuer==''">
          <view class="list-foot">房主直卖房源还在持续更新</view>
        </block>
        <block v-if="homeFeuer!=''">
          <button @tap="gotoLeiBo" type="primary" class="list-gods">查看更多房源</button>
        </block>
        
        
        </view>  
    </view>
</view>
</template>

<script module="filters" lang="wxs" src="./filterPrice.wxs"></script>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    homeListItem: {
      type: Array,
      default: []
    },
    homeFeuer: {
      type: Array,
      default: []
    }
  },
  methods: {
    detail(e) {
      console.log(e.currentTarget.dataset.index);
      uni.navigateTo({
        url: 'personalHousing/personalHousing?id=' + e.currentTarget.dataset.index
      });
    },

    gotoLeiBo: function (e) {
      uni.navigateTo({
        url: '/pages/home/homeLeiBo/homeLeiBo?id=0'
      });
    }
  }
};
</script>
<style>
@import "./homeListItem.css";
</style>
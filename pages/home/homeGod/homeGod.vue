<template>
<view class="conent-item" hover-class="none">

    <view v-for="(item, index) in homeFeuer" :key="index" class="data01">
        <view class="d1">{{item.title01}}</view>
        <view @tap="gotoLeiBo" class="d2">{{item.title02}}
        <image :src="item.img" style="width:10px;height:10px"></image>
        </view>
    </view>
    <view class="item-list" hover-class="none" hover-stop-propagation="false">
    <!--一次限制3条数据展示-->
        <block v-if="homeListItem==''">
          <view class="list-foot">抱歉暂时没有找到合适房源</view>
          <button class="dz-btn">我要定制找房</button>
          <view class="list-foot">点击我要定制找房，服务顾问将为您快速找房</view>
        </block>
        <block v-for="(item, index) in homeListItem" :key="index" v-if="index<5">
        <view @tap="detail" :data-index="index" :class="'item-lsti-conent ' + (index==2? 'sw1':'')">
            <view class="data02-tupian">
             <view class="ysex01">
                    <text class>优选</text>
             </view>
             <view :class="'ysex02 ' + (item.zd=='1'?'':'hidden')">
                    <text class>特别推荐</text>
             </view>
                <image class="data02-img" :src="item.img" alt></image> 
            </view>
            <view class="data02-title">
                <view class="s1">{{item.title}}</view>
                <view class="s2">{{item.stmel}}  {{item.stmels}}</view>

                <view class="s3"> 
                <text style="color:red;font-size:15px;font-weight:800;">{{filters.fnMoney(item.number)}}</text>
                <text style="color:red;">万</text> 
                <div class="vLine"></div>
                <span>{{item.specifications}}</span>
                <div class="vLine"></div>
                <span style="color:#384047">{{item.squaremeter}}㎡</span>
                </view>
    
                <view class="s4">
                <view class="x1"><text>免税</text></view>
                <view class="x1"><text>实勘</text></view>
                <view class="x1"><text>随时看房</text></view>      
                </view>
            </view>
        </view>
        </block>
        <view class="li01">
        <block v-if="homeFeuer==''">
          <view class="list-foot">优选房源还在持续更新</view>
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
    gotoLeiBo: function (e) {
      uni.navigateTo({
        url: '/pages/home/homeLeiBo/homeLeiBo?id=1'
      });
    },

    detail(e) {
      let id = e.currentTarget.dataset.index;
      uni.navigateTo({
        url: "/pages/home/homeGod/homeGodDetail/homeGodDetail?id=" + id
      });
    }

  }
};
</script>
<style>
@import "./homeGod.css";
</style>
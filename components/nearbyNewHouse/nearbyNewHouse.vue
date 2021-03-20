<template>
<view>
<block v-for="(item, index) in newHouse" :key="index">
	<view :class="'item-lsti-conent ' + ( index==2 ? 'sw1':'')">
		<view class="data02-tupian">
			<view class="ysex01"><text class>正在热销</text></view>
			<image class="data02-img" :src="item.images" alt></image>
		</view>
		<view class="data02-title">
			<view class="s1">{{item.title}}</view>
			<view class="s2">{{item.address}}</view>

			<view class="s3">
				<text class="q1">{{item.floor}}</text>
				<text class="q1">{{item.decoration}}</text>
			</view>

			<view class="s4">
				<text style="color:red;font-weight:800;">{{item.price}}元/㎡</text>
			</view>
		</view>
		<view class="xs1">
			<view class="xs2">
				<text class>{{item.state===1?'在售':'停售'}}</text>
			</view>
		</view>
	</view>
</block>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    newHouse: {
      type: Array,
      default: []
    }
  },
  options: {
    styleIsolation: 'isolated'
  },
  methods: {}
};
</script>
<style>
@import "./nearbyNewHouse.css";
</style>
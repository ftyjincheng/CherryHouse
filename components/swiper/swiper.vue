<template>
<view>
<swiper>
		<swiper-item v-for="(item, index) in swiperImg" :key="index">
			<image :data-index="index" @tap="previewImage" :src="item" mode="aspectFill"></image>
		</swiper-item>
</swiper>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    //注： 传递父组件轮播图的数据
    swiperImg: {
      type: Array,
      default: []
    }
  },
  methods: {}
};
</script>
<style>
@import "./swiper.css";
</style>
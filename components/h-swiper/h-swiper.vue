<template>
<!-- 插槽嵌套抽取封装，后端关联式使用
    展示轮播图,预留插槽八卦符里swiperImg占位符字节
    -->
<swiper class="swiper" circular="true" autoplay="true">
    <block>
        <swiper-item v-for="(item, index) in swiperImg" :key="index" class="siper-item">
            <image :src="item.img" mode="aspectFill" style="width:100vw;"></image>
        </swiper-item>
    </block>  
</swiper>
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
@import "./h-swiper.css";
</style>
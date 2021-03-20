<template>
<view>
<view v-for="(item, index) in info" :key="index" @tap="demo" :data-index="index" class="component">{{item}}</view>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    // 类型 数组 
    info: Array
  },
  methods: {
    demo(e) {
      console.log(e);
    }

  }
};
</script>
<style>
@import "./component.css";
</style>
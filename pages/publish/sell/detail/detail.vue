<template>
<view>
<view class="container">
	<text class="info">你的房屋基本情况</text>
	<view class="margin qingkuang topq">
		<input @input="dongFun" maxlength="5" placeholder="几栋"></input>
		<input @input="danyuanFun" maxlength="5" placeholder="几单元"></input>
		<input @input="louFun" maxlength="5" placeholder="几楼"></input>
		<input @input="haoFun" maxlength="5" placeholder="几号"></input>
	</view>
	<text class="info">户型</text>
	<text class="info info1">朝向</text>
	<text class="info info1">楼层</text>

	<!-- 户型 -->
	<view @tap="picker1" class="margin base">
		<view v-if="huxing!=0" class="left">
			<view class="left1 le">{{formData.piker[0].three[huxing[0]]}}{{formData.piker[0].three1[huxing[1]]}}{{formData.piker[0].three2[huxing[2]]}}</view>
			<view class="left1 le">{{formData.piker[1].three_1[chaoxiang]}}</view>
			<view class="left1">{{formData.piker[2].three_2[louceng[0]]}}/{{formData.piker[2].treee_3[total]}}</view>
		</view>
		<view v-else style=" color: #878787;">请选择</view>
		<text class="icon-you"></text>
	</view> 
	<text class="info">装修</text>
	<text class="info info1">供暖</text>
	<text class="info info1">电梯</text>

	<!-- 装修 -->
	<view @tap="picker2" class="margin">
		<view v-if="zhuangxiu!=0" class="left">
			<view class="left1 le">{{formData.piker[1].zhuangxiu[zhuangxiu]}}</view>
			<view class="left1 le">{{formData.piker[1].gongnuan[gongnuan]}}</view>
			<view class="left1">{{formData.piker[1].dianti[dianti]}}</view>
		</view>
		<view v-else style="color: #878787;">请选择</view>
		<text class="icon-you"></text>
	</view>
	<text class="info">房屋类型</text>
	<text class="info info1">产权类型</text>
	<text class="info info1">产权年限</text>

	<!-- 类型 -->
	<view @tap="picker3" class="margin">
		<view v-if="zhuzhai!=0" class="left">
			<view class="left1 le">{{formData.piker[2].putong[zhuzhai]}}</view>
			<view class="left1 le">{{formData.piker[2].shangpin[shanpin]}}</view>
			<view class="left1">{{formData.piker[2].nianxian[chanquan]}}</view>
		</view>
		<view style="color: #878787;" v-else>请选择</view>
		<text class="icon-you"></text>
	</view>

	<text class="info">面积</text>

	<view class="margin">
		<view class="item">
			<input @input="inputArea" placeholder="请输入面积" maxlength="5"></input>
			<view class="m">m²</view>
		</view>
	</view>

	<text class="info">售价</text>

	<view class="margin">
		<view class="item">
			<input @input="inputSell" maxlength="5" placeholder="请输入价格"></input>
			<text class="m">万元</text>
		</view>
	</view>
	<text class="info">请输入房源描述</text>
	<view class="margin">
		<textarea @input="contentFun" maxlength="300" placeholder="请输入装修配套等体现房屋亮点的简单描述(选填)"></textarea>
	</view>

	<text class="info">请输入标题</text>

	<view class="margin topq ww">
		<input style="margin-bottom: 10rpx; text-align: left; padding-left: 20rpx;" @input="titleFun" class="titleInput" placeholder="一个好的标题可以引来更多用户的关注(必填)"></input>
	</view>
	<text class="info">请上传房源图片</text>
	<view class="pictrue" style="margin-top: 30rpx;">多图房源更容易接到客户的来电哦(最多九张图)</view>
	<view class="pictures">
		<image v-for="(item, index) in images" :key="index" @tap="previewImage" :data-index="index" :src="item" mode="aspectFill"></image>
		<view @tap="chooseImage" class="icon-jia"></view>
	</view>
	<text class="info">称呼</text>
	<view class="phone">
	<input @input="nameFun" class="phone1" placeholder="请输入称呼"></input>
	<view>
		<radio-group>
			<radio checked>先生</radio>
			<radio>女士</radio>
		</radio-group>
	</view>
	</view>
	<text class="info">手机号</text>
	<input @tap="numberFun" maxlength="11" class="phone1" placeholder="请输入手机号"></input>
	
	<button @tap="next" class="btn" hover-class="none">下一步</button>
</view>
<!-- maske -->
<view :class="'marke ' + (piker1?'':'hidden')" style="width:100%; height: 100%; background-color: #333; opacity: 0.5; z-index: 100;position: fixed; top: 0;bottom: 0;left: 0;right: 0;"></view>
<!-- piker1 -->
<view :class="'guige ' + (piker1?'':'hidden')">
	<view class="picker">
		<view v-for="(item, index) in formData.piker" :key="index" @tap="choose1" :data-index="index" :class="'top ' + (titleIndex==index?'color':'')">
			<text>{{item.one}}</text>
			<text :class="index==titleIndex?'zhuti':''" style="font-size: 30rpx;">{{item.two}}</text>
		</view>
	</view>
	<view class="pikerTitle">
		<text @tap="cancel1" class="cancel">取消</text>
		<text class="choose">请选择{{titleIndex==0?'户型':titleIndex==1?'朝向':'楼层'}} </text>
		<text @tap="confirm1" class="confirm">确认</text>
	</view>
	<picker-view :class="titleIndex==0?'':'hidden'" style=" width: 100%; height: 450rpx;box-sizing: border-box;" :value="value" @change="bindchange1">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[0].three" :key="index" class="pickerIiew" style="line-height: 50px;text-align:center;">{{item}}</view>
		</picker-view-column>
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[0].three1" :key="index" class="pickerIiew" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[0].three2" :key="index" class="pickerIiew" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<!-- 第一项 -->
	<picker-view :class="titleIndex==1?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange1_1">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[1].three_1" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<picker-view :class="titleIndex==2?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange1_2">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[2].three_2" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[2].treee_3" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
</view>
<!-- 第二项 -->
<view :class="'marke ' + (piker2?'':'hidden')" style="width:100%; height: 100%; background-color: #333; opacity: 0.5; z-index: 100;position: fixed; top: 0;bottom: 0;left: 0;right: 0;"></view>
<view :class="'guige ' + (piker2?'':'hidden') + ' '">
	<view class="picker">
		<view v-for="(item, index) in formData.piker" :key="index" @tap="choose2" :data-index="index" :class="'top ' + (titleIndex_2==index?'color':'')">
			<text>{{item.one_1}}</text>
			<text :class="' ' + (titleIndex_2==index?'zhuti':'')">{{item.two_1}}</text>
		</view>
	</view>
	<view class="pikerTitle">
		<text @tap="cancel2" class="cancel">取消</text>
		<text class="choose">请选择{{titleIndex_2==0?'装修':titleIndex_2==1?'供暖':'电梯'}}</text>
		<text @tap="confirm2" class="confirm">确认</text>
	</view>
	<!-- 装修 -->
	<picker-view :class="titleIndex_2==0?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange2">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[1].zhuangxiu" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<!-- 供暖 -->
	<picker-view :class="titleIndex_2==1?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange2_1">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[1].gongnuan" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<!-- 电梯 -->
	<picker-view :class="titleIndex_2==2?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange2_2">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[1].dianti" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
</view>
<!-- 第三项 -->
<view :class="'marke ' + (piker3?'':'hidden')" style="width:100%; height: 100%; background-color: #333; opacity: 0.5; z-index: 100;position: fixed; top: 0;bottom: 0;left: 0;right: 0;"></view>
<view :class="'guige ' + (piker3?'':'hidden') + ' '">
	<view class="picker">
		<view v-for="(item, index) in formData.piker" :key="index" @tap="choose3" :data-index="index" :class="'top ' + (titleIndex_3==index?'color':'')">
			<text>{{item.one_2}}</text>
			<text :class="' ' + (titleIndex_3==index?'zhuti':'')">{{item.two_2}}</text>
		</view> 
	</view>
	<view class="pikerTitle">
		<text @tap="cancel3" class="cancel">取消</text>
		<text class="choose">请选择{{titleIndex_3==0?'住宅':titleIndex_3==1?'产权':'年限'}}</text>
		<text @tap="confirm3" class="confirm">确认</text>
	</view>
	<!-- 住宅 -->
	<picker-view :class="titleIndex_3==0?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange3">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[2].putong" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<!-- 商品 -->
	<picker-view :class="titleIndex_3==1?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange3_1">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[2].shangpin" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
	<!-- 产权 -->
	<picker-view :class="titleIndex_3==2?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange3_2">
		<picker-view-column>
			<view v-for="(item, index) in formData.piker[2].nianxian" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
		</picker-view-column>
	</picker-view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      //类目一
      titleIndex: 0,
      // 控制显示
      piker1: false,
      // 户型
      huxing: 0,
      // 朝向
      chaoxiang: 0,
      // 楼层
      louceng: 0,
      // 类目二
      titleIndex_2: 0,
      piker2: false,
      // 装修
      zhuangxiu: 0,
      // 供暖
      gongnuan: 0,
      // 电梯
      dianti: 0,
      total: "",
      sell: "",
      area: "",
      content: "",
      dong: "",
      danyuan: "",
      lou: "",
      hao: "",
      title: "",
      // 类目三
      piker3: false,
      titleIndex_3: 0,
      images: [],
      // 住宅
      zhuzhai: 0,
      // 商品
      shanpin: 0,
      // 产权
      chanquan: 0,
      name: "",
      number: "",
      formData: {
        piker: [{
          three: ["1室", "2室", "3室", "4室", "5室", "6室"],
          three1: ["0厅", "1厅", "2厅", "3厅", "4厅", "5厅", "6厅"],
          three2: ["0卫", "1卫", "2卫", "3卫", "4卫", "5卫"],
          one: "户型",
          two: "2室2厅1厅",
          one_1: "装修",
          two_1: "简单装修",
          one_2: "房屋类型",
          two_2: "普通住宅"
        }, {
          three_1: ["东南", "西北", "东北", "南北", "东西"],
          zhuangxiu: ["毛坯", "简单装修", "中等装修", "精装修", "豪华装修"],
          gongnuan: ["不供暖", "不想供暖", "凭啥供暖", "就不供暖"],
          dianti: ["有电梯", "无电梯", "有电梯", "有电梯", "有电梯", "有电梯"],
          one: "朝向",
          two: "南北",
          one_1: "供暖",
          two_1: "集中供暖",
          one_2: "产权类型",
          two_2: "商品房住宅"
        }, {
          three_2: ["1层", "2层", "3层", "4层", "5层", "6层", "7层", "8层", "9层", "10层", "11层", "12层"],
          treee_3: ["共1层", "共2层", "共3层", "共4层", "共5层", "共6层", "共7层", "共8层", "共9层", "共10层", "共11层", "共12层", "共13层", "共14层"],
          putong: ["普通住宅", "公寓", "别墅", "别墅", "别墅", "别墅", "别墅", "别墅"],
          shangpin: ["商品房", "公寓", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍"],
          nianxian: ["70年", "80年", "90年", "80年", "80年", "80年", "80年", "80年", "80年"],
          one: "楼层",
          two: "8/8",
          one_1: "电梯",
          two_1: "有电梯",
          one_2: "产权年限",
          two_2: "70年产权"
        }]
      },
      val: ""
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
    picker1() {
      this.setData({
        piker1: true
      });
    },

    cancel1() {
      this.setData({
        piker1: false
      });
    },

    confirm1() {
      this.setData({
        piker1: false
      });
    },

    choose1(e) {
      this.setData({
        titleIndex: e.currentTarget.dataset.index
      });
    },

    bindchange1(e) {
      let val = 'formData.piker[0].two';
      this.setData({
        [val]: this.formData.piker[0].three[e.detail.value[0]] + this.formData.piker[0].three1[e.detail.value[1]] + this.formData.piker[0].three2[e.detail.value[2]]
      });
      this.setData({
        huxing: e.detail.value
      });
    },

    bindchange1_1(e) {
      let val = 'formData.piker[1].two';
      this.setData({
        [val]: this.formData.piker[1].three_1[e.detail.value[0]]
      });
      this.setData({
        chaoxiang: e.detail.value
      });
    },

    bindchange1_2(e) {
      this.setData({
        total: e.detail.value[1]
      });
      let val = 'formData.piker[2].two';
      this.setData({
        [val]: this.formData.piker[2].three_2[e.detail.value[0]] + '/' + this.formData.piker[2].treee_3[e.detail.value[1]]
      });
      this.setData({
        louceng: e.detail.value
      });
    },

    // 类目2
    picker2() {
      this.setData({
        piker2: true
      });
    },

    cancel2(e) {
      this.setData({
        piker2: false
      });
    },

    confirm2(e) {
      this.setData({
        piker2: false
      });
    },

    choose2(e) {
      this.setData({
        titleIndex_2: e.currentTarget.dataset.index
      });
    },

    bindchange2(e) {
      let val = 'formData.piker[0].two_1';
      this.setData({
        [val]: this.formData.piker[1].zhuangxiu[e.detail.value]
      });
      this.setData({
        zhuangxiu: e.detail.value
      });
    },

    bindchange2_1(e) {
      let val = 'formData.piker[1].two_1';
      this.setData({
        [val]: this.formData.piker[1].gongnuan[e.detail.value]
      });
      this.setData({
        gongnuan: e.detail.value
      });
    },

    bindchange2_2(e) {
      console.log(e.detail.value);
      let val = 'formData.piker[2].two_1';
      this.setData({
        [val]: this.formData.piker[1].dianti[e.detail.value]
      });
      this.setData({
        dianti: e.detail.value
      });
    },

    // l类目三
    picker3() {
      console.log(1);
      this.setData({
        piker3: true
      });
    },

    cancel3(e) {
      this.setData({
        piker3: false
      });
    },

    confirm3(e) {
      this.setData({
        piker3: false
      });
    },

    choose3(e) {
      this.setData({
        titleIndex_3: e.currentTarget.dataset.index
      });
    },

    bindchange3(e) {
      let val = 'formData.piker[0].two_2';
      this.setData({
        [val]: this.formData.piker[2].putong[e.detail.value]
      });
      this.setData({
        zhuzhai: e.detail.value
      });
    },

    bindchange3_1(e) {
      let val = 'formData.piker[1].two_2';
      this.setData({
        [val]: this.formData.piker[2].shangpin[e.detail.value]
      });
      this.setData({
        shanpin: e.detail.value
      });
    },

    bindchange3_2(e) {
      let val = 'formData.piker[2].two_2';
      this.setData({
        [val]: this.formData.piker[2].nianxian[e.detail.value]
      });
      this.setData({
        chanquan: e.detail.value
      });
    },

    inputSell(e) {
      this.setData({
        sell: e.detail.value
      });
      console.log(this.sell);
    },

    inputArea(e) {
      this.setData({
        area: e.detail.value
      });
      console.log(this.area);
    },

    contentFun(e) {
      this.setData({
        content: e.detail.value
      });
      console.log(this.content);
    },

    dongFun(e) {
      this.setData({
        dong: e.detail.value
      });
      console.log(this.dong);
    },

    danyuanFun(e) {
      this.setData({
        danyuan: e.detail.value
      });
      console.log(this.danyuan);
    },

    louFun(e) {
      this.setData({
        lou: e.detail.value
      });
      console.log(this.lou);
    },

    haoFun(e) {
      this.setData({
        hao: e.detail.value
      });
      console.log(this.hao);
    },

    titleFun(e) {
      this.setData({
        title: e.detail.value
      });
    },

    chooseImage() {
      let that = this;
      uni.chooseImage({
        count: 9,

        success(res) {
          that.setData({
            images: that.images.concat(res.tempFilePaths)
          });
          console.log(that.images);
        }

      });
    },

    previewImage(e) {
      let index = e.currentTarget.dataset.index;
      let that = this;
      uni.previewImage({
        urls: that.images,
        current: that.images[index]
      });
    },

    bindMultiPickerChange(e) {
      console.log(e);
    },

    nameFun(e) {
      this.setData({
        name: e.detail.value
      });
    },

    numberFun(e) {
      this.setData({
        number: e.detail.value
      });
    },

    next() {
      // if (this.data.huxing == 0 || this.data.chaoxiang == 0 || this.data.louceng == 0 || this.data.zhuangxiu == 0 || this
      // 	.data.gongnuan == 0 || this.data.dianti == 0 || this.data.zhuzhai == 0 || this.data.shangpin == 0 || this.data.chanquan ==
      // 	0 || this.data.area == "" || this.data.sell == "" || this.data.content == "" || this.data.dong == "" || this.data.danyuan ==
      // 	"" || this.data.lou == "" || this.data.hao == "" || this.data.title == "") {
      // 	wx.showToast({
      // 		title: "请填写完整信息",
      // 		icon: "none"
      // 	})
      // 	return
      // }
      // if (this.data.title.length < 5 || this.data.title.length > 30) {
      // 	wx.showToast({
      // 		title: "标题字数不能少于5个字或大于30个字,请修改",
      // 		icon: "none"
      // 	})
      // 	return
      // }
      // let reg = /^[\u4E00-\u9FA5]+$/;
      // if (!reg.test(this.data.name)) {
      // 	wx.showToast({
      // 		title: '请输入正确的称呼',
      // 		icon: "none"
      // 	})
      // 	return
      // }
      // if(this.data.number.length<11){
      // 	wx.showToast({
      // 		title: '请输入正确手机号',
      // 		icon: "none"
      // 	})
      // 	return
      // }
      uni.navigateTo({
        url: 'entrust/entrust'
      });
    }

  }
};
</script>
<style>
@import "./detail.css";
</style>
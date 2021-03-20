<template>
<view>
<!--顶部botton标签-->
<view class="but-zhim">
	<view v-for="(item, index) in homeS" :key="index" class="but-item">
		<button style="width:45vw" :class="'btn12 ' + (currentInexs==index ? 'ss1':'btn1')" :data-index="index" type="primary" @tap="onTaps">
			{{item.title}}
		</button>
	</view>
</view>

<!--搜索文本框-->
<view class="swiper-input">
	<view class="da01">
		<input class="input-item" placeholder="请输入小区或区域名称" type="text"></input>
		<icon type="search" class="search-icon" size="25px"></icon>
	</view>
</view>

<!--活动-->
<view class="swiper-dadat1">
	<view class="sd1">
		<image @tap="gotolistSellBuy" data-index="currentInexs" class :src="mimg[currentInexs]" mode="widthFix" style="width:90%;height:115px" lazy-load="false" @error @load></image>
	</view>
</view>


<!--筛选条件-->
<view class="s1" hover-class="none" hover-stop-propagation="false">
	<block v-for="(item, index) in dropList" :key="index" class="com-selectBox">
		<view :class="'com-sContent ' + (currentInex==index ? 'currentNav':'')" @tap="selectToggle" :data-index="index">
			<view class="com-sTxt">{{titlearray[index]==''?item.title:titlearray[index]}}</view>
			<image :src="item.img" class="com-sImg" :animation="animationData"></image>
		</view>

	</block>
	<view :class="'content ' + (showarray[0]==0?'hidden':'')">
		<block v-for="(item, index) in diqu" :key="index">
			<view @tap="select" :class="'option ' + (cdiquindex==index ? 'currentNav':'')" :data-index="index" data-type="0">{{diqu[index]}}</view>
		</block>
		<view class="btn-ok" @tap="diquok">确认</view>
	</view>

	<view :class="'content ' + (showarray[1]==0?'hidden':'')">
		<block v-for="(item, index) in jiage" :key="index">
			<view @tap="select" :class="'option ' + (cjiageindex==index ? 'currentNav':'')" :data-index="index" data-type="1">{{jiage[index]}}</view>
		</block>
		<input type="text" placeholder="最低金额"></input><input type="text" placeholder="最高金额"></input>
		<view class="btn-ok" @tap="jiageok">确认</view>
	</view>

	<view :class="'content ' + (showarray[2]==0?'hidden':'')">
		<view class="hx">户型</view>
		<view class="m-bottom clearfix">
			<block v-for="(item, index) in huxing" :key="index">
				<view @tap="select" :class="'huxing f-left ' + (chuxingindex==index ? 'current':'')" :data-index="index" data-type="2">{{huxing[index]}}</view>
			</block>
			<view>
			</view>

		</view>

		<view @tap="buxian" class="btn-no">不限条件</view>
		<view class="btn-ok" @tap="huxingok">确认</view>
	</view>
	<view :class="'content ' + (showarray[3]==0?'hidden':'')">
		<view class="hx">面积</view>
		<view class="fix clearfix">
			<block v-for="(item, index) in mianji" :key="index">
				<view @tap="select" :class="'huxing ' + (cmianjiindex==index ? 'current':'')" :data-index="index" data-type="3">{{mianji[index]}}</view>
			</block>
			<view>
			</view>

		</view>
		<view class="hx">类型</view>
		<view class="fix clearfix">
			<block v-for="(item, index) in leixing" :key="index">
				<view @tap="select" :class="'huxing ' + (cleixingindex==index ? 'current':'')" :data-index="index" data-type="4">{{leixing[index]}}</view>
			</block>
			<view>
			</view>

		</view>
		<view @tap="chongzhi" class="btn-no">重置</view>
		<view class="btn-ok" @tap="gengduook">确认</view>
	</view>



</view>

<view @tap="mengbanok" :class="'mengban ' + (mengban==0 ? 'hidden':'')"></view>

<block v-if="currentInexs==0">
	<!--房主直卖-->
	<homeListItem :homeListItem="homeListItemFd"></homeListItem>
</block>

<block v-else>
	<!--优选房源-->
	<home-god :homeListItem="homeListItemYx"></home-god>
</block>
</view>
</template>

<script>
import homeGod from "../homeGod/homeGod"
import homeListItem from "../../../components/homeListItem/homeListItem"

export default {
  data() {
    return {
      mengban: 0,
      titlearray: ['', '', '', ''],

      /** 搜索选项标题 */
      cdiqu: '',

      /** 地区选中标题*/
      cdiquindex: 0,

      /** 地区选中索引 */
      cjiage: '',

      /** 价格选中标题 */
      cjiageindex: 0,

      /** 价格选中索引 */
      chuxing: '',

      /** 户型选中标题 */
      chuxingindex: 0,

      /** 户型选中索引 */
      cmianji: '',

      /** 面积选中标题 */
      cmianjiindex: 0,

      /** 面积选中索引 */
      cleixing: '',

      /** 类型选中标题 */
      cleixingindex: 0,

      /** 类型选中索引 */
      showarray: [
      /** 展示某个搜索栏 */
      0, 0, 0, 0],
      mimg: [
      /**搜索页搜索框上方图片 */
      "/static/assets/home/Commis01.png", "/static/assets/home/Commis02.jpg"],
      homeListItemFd: [{
        id: '1',
        zd: '1',
        img: "/static/assets/home/homeListItem/01.png",
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '700000',
        specifications: '2室1厅',
        squaremeter: '67.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s01.png",
        type: '个人'
      }, {
        id: '2',
        img: "/static/assets/home/homeListItem/02.png",
        title: '中心广场中心.领包入住，精装修房东直租',
        stmel: '开福区',
        stmels: '宽属大厦',
        number: '900000',
        specifications: '3室1厅',
        squaremeter: '77.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s02.png",
        type: '个人'
      }, {
        id: '3',
        img: "/static/assets/home/homeListItem/03.png",
        title: '南儿街顶楼地段好地铁房双林小学 带花园',
        stmel: '梅溪湖',
        stmels: '鼎奥国际',
        number: '1450000',
        specifications: '2室',
        squaremeter: '127.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s03.png",
        type: '个人'
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/04.png",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '900000',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: "/static/assets/home/Headportrait/s04.png",
        type: '个人'
      }],
      homeListItemYx: [{
        id: '1',
        zd: '1',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '700000',
        specifications: '2室1厅',
        squaremeter: '67.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s01.png",
        type: '个人'
      }, {
        id: '2',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '中心广场中心.领包入住，精装修房东直租',
        stmel: '开福区',
        stmels: '宽属大厦',
        number: '900000',
        specifications: '3室1厅',
        squaremeter: '77.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s02.png",
        type: '个人'
      }, {
        id: '3',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '南儿街顶楼地段好地铁房双林小学 带花园',
        stmel: '梅溪湖',
        stmels: '鼎奥国际',
        number: '1450000',
        specifications: '2室',
        squaremeter: '127.7',
        homesuper: '精装修',
        avatar: "/static/assets/home/Headportrait/s03.png",
        type: '个人'
      }, {
        id: '4',
        img: "/static/assets/home/homeListItem/1231.jpg",
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '900000',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: "/static/assets/home/Headportrait/s04.png",
        type: '个人'
      }],
      homeS: [{
        id: 1,
        title: '房主直卖'
      }, {
        id: 2,
        title: '优选房源'
      }],
      currentInexs: 0,
      currentInex: 0,
      selectInex: 0,
      dropList: [{
        id: 1,
        img: "/static/assets/svg/Bottom.svg",
        title: "全部"
      }, {
        id: 2,
        img: "/static/assets/svg/Bottom.svg",
        title: "价格"
      }, {
        id: 3,
        img: "/static/assets/svg/Bottom.svg",
        title: "户型"
      }, {
        id: 4,
        img: "/static/assets/svg/Bottom.svg",
        title: "更多"
      }],

      /**房东直租数据接口 */
      homeS: [{
        id: 1,
        title: '房主直卖'
      }, {
        id: 2,
        title: '优选房源'
      }],
      diqu: ['黑龙江', '长春', '哈尔滨', '黑龙江', '长春', '哈尔滨', '黑龙江', '长春', '哈尔滨'],
      jiage: ['70万以下', '70-80万', '80-100万', '100-120万', '120-140万', '140-160万'],
      huxing: ['1室', '2室', '3室', '4室', '5室', '5室以上'],
      mianji: ['50以下', '50-70', '70-90', '90-110', '110以上'],
      leixing: ['住宅', '别墅', '商铺', '写字楼', '其他']
    };
  },

  components: {
    homeGod,
    homeListItem
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id == null) {
      options.id = 0;
    }

    this.setData({
      currentInexs: options.id
    });
  },

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
    onTaps: function (e) {
      var nums = e.currentTarget.dataset.index;
      /**更新赋值 setData() */

      this.setData({
        showarray: [0, 0, 0, 0],
        mengban: '0',
        titlearray: ['', '', '', ''],
        currentInexs: nums
        /**数据源赋值 */

      });
      console.log(this.currentInexs);
    },

    /**导航标题联动 e是什么？log打印看看*/
    selectToggle: function (e) {
      var num = e.currentTarget.dataset.index;
      this.setData({
        showarray: [0, 0, 0, 0],
        mengban: 1
      });

      if (num == 0) {
        this.setData({
          showarray: [1, 0, 0, 0]
        });
      } else if (num == 1) {
        this.setData({
          showarray: [0, 1, 0, 0]
        });
      } else if (num == 2) {
        this.setData({
          showarray: [0, 0, 1, 0]
        });
      } else if (num == 3) {
        this.setData({
          showarray: [0, 0, 0, 1]
        });
      }

      ;
      console.log(this.showarray);
      /**更新赋值 setData() */

      this.setData({
        currentInex: num
      });
    },

    /**选项选中 */
    select: function (e) {
      var num = e.currentTarget.dataset.index;
      var type = e.currentTarget.dataset.type;

      if (type == 0) {
        this.setData({
          cdiquindex: num
        });
      } else if (type == 1) {
        this.setData({
          cjiageindex: num
        });
      } else if (type == 2) {
        this.setData({
          chuxingindex: num
        });
      } else if (type == 3) {
        this.setData({
          cmianjiindex: num
        });
      } else if (type == 4) {
        this.setData({
          cleixingindex: num
        });
      }
    },

    /**地区确定 */
    diquok: function (e) {
      this.setData({
        mengban: 0,
        cdiqu: this.diqu[this.cdiquindex]
      });
      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji],
        showarray: [0, 0, 0, 0]
      });
    },

    /**价格确定 */
    jiageok: function (e) {
      this.setData({
        mengban: 0,
        cjiage: this.jiage[this.cjiageindex]
      });
      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji],
        showarray: [0, 0, 0, 0]
      });
    },

    /**户型确定 */
    huxingok: function (e) {
      this.setData({
        mengban: 0,
        chuxing: this.huxing[this.chuxingindex]
      });
      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji],
        showarray: [0, 0, 0, 0]
      });
    },

    /**更多确定 */
    gengduook: function (e) {
      this.setData({
        mengban: 0,
        cmianji: this.mianji[this.cmianjiindex],
        cleixing: this.leixing[this.cleixingindex]
      });

      if (this.cmianji == null) {
        this.setData({
          cmianji: ''
        });
      }

      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji],
        showarray: [0, 0, 0, 0]
      });
    },
    gotolistSellBuy: function (e) {
      uni.navigateTo({
        url: '/pages/home/listSellBuy/listSellBuy'
      });
    },
    mengbanok: function () {
      this.setData({
        showarray: [0, 0, 0, 0],
        mengban: '0'
      });
    },
    buxian: function () {
      this.setData({
        chuxingindex: -1,
        showarray: [0, 0, 0, 0],
        mengban: '0',
        chuxing: ''
      });
      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji]
      });
    },
    chongzhi: function () {
      this.setData({
        cmianjiindex: -1,
        cleixingindex: -1,
        showarray: [0, 0, 0, 0],
        mengban: '0',
        cmianji: '',
        cleixing: ''
      });
      this.setData({
        titlearray: [this.cdiqu, this.cjiage, this.chuxing, this.cmianji]
      });
    }
  }
};
</script>
<style>
@import "./homeLeiBo.css";
</style>
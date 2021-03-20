<template>
	<view>
		<view class="container">
			<!-- 发布头部图片 -->
			<image :src="img" mode="aspectFill"></image>
			<view class="content">
				<text class="info">意向购买人称呼</text>
				<view class="phone">
					<input v-model="buyerName" class="phone1" placeholder="请输入称呼"></input>
					<view>
						<radio-group @change="radioChange">
							<radio value="0" checked="checked">先生</radio>
							<radio value="1">女士</radio>
						</radio-group>
					</view>
				</view>
				<text class="info">报备手机号</text>
				<input v-model="phone" maxlength="11" class="phone1" placeholder="请输入手机号"></input>
				<text class="info">想买什么样的房子？</text>

				<view class="items">
					<text v-for="(item, index) in type" :key="index" @tap="typeFun" :data-index="index" :class="'item ' + (currentTypeChoose==index?'blue':'')">{{item}}</text>
				</view>

				<text class="info">对装修的要求？</text>

				<view class="middle">
					<text v-for="(item, index) in fitment" :key="index" @tap="fitmentFun" :data-index="index" :class="'item ' + (currentFitmentChoose==index?'blue':'')">{{item}}</text>
				</view>

				<text class="info">想要几室的房子？</text>

				<view class="big">
					<text v-for="(item, index) in specification" :key="index" @tap="specificationFun" :data-index="index" :class="'item ' + (currentSpecificationChoose==index?'blue':'')">{{item}}</text>
				</view>

				<view class="info ma">想要多大的房子？</view>
				<slider selected-color="#32BDB5" @change="change" step="5" min="50" max="200" show-value="true"></slider>
				<view class="price">
					<text>50m²</text>
					<text>100m²</text>
					<text>140m²</text>
					<text>180m²</text>
					<text>200m²</text>
				</view>
				<view>
					<text></text>
				</view>
				<view class="info ma">预算是多少？</view>
				<view class="search">
					<input type="number" :value="budget" placeholder="请填写您的预算"></input>万元
				</view>



				<text class="info">想关注区域？</text>
				<view class="search">
					<text class="icon-xingtaiduICON"></text>
					<!-- <text class="">区域</text> -->
					<!-- <text class="info info1">地铁</text> -->
					<!-- <text class="info info1">楼层</text> -->
					<!-- 区域 -->
					<view @tap="picker1" class="margin base">
						<view v-if="huxing!=0" class="left">
							<view class="left1 le">{{formData.piker[0].three[huxing[0]]}}{{formData.piker[0].three1[huxing[1]]}}</view>
							<view class="left1 le">{{formData.piker[1].three_1[chaoxiang]}}</view>
							<view class="left1">{{formData.piker[2].three_2[louceng[0]]}}/{{formData.piker[2].treee_3[total]}}</view>
						</view>
						<view v-else style=" color: #878787;">请选择</view>
						<text class="icon-you"></text>
					</view>

					<!-- <input :value="residence" @input="input" placeholder="请填写您需求的小区或区域(选填)"></input> -->
				</view>

			</view>
			<button @tap="publish" class="btn" hover-class="none">提交</button>
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
				<text class="choose">请选择{{titleIndex==0?'区域':titleIndex==1?'地铁':'楼层'}} </text>
				<text @tap="confirm1" class="confirm">确认</text>
			</view>
			<picker-view :class="titleIndex==0?'':'hidden'" style=" width: 100%; height: 450rpx;box-sizing: border-box;" :value="value"
			 @change="bindchange1">
				<picker-view-column>
					<view v-for="(item, index) in formData.piker[0].three" :key="index" class="pickerIiew" style="line-height: 50px;text-align:center;">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view v-for="(item, index) in formData.piker[0].three1" :key="index" class="pickerIiew" style="line-height: 50px;text-align: center;">{{item}}</view>
				</picker-view-column>

			</picker-view>
			<!-- 第一项 -->
			<picker-view :class="titleIndex==1?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange1_1">
				<picker-view-column>
					<view v-for="(item, index) in formData.piker[1].three_1" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view v-for="(item, index) in formData.piker[1].three_1_1" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
				</picker-view-column>
			</picker-view>
			<!-- 		<picker-view :class="titleIndex==2?'':'hidden'" style="width: 100%; height: 450rpx;box-sizing: border-box;" @change="bindchange1_2">
			<picker-view-column>
				<view v-for="(item, index) in formData.piker[2].three_2" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
			</picker-view-column>
			<picker-view-column>
				<view v-for="(item, index) in formData.piker[2].treee_3" :key="index" style="line-height: 50px;text-align: center;">{{item}}</view>
			</picker-view-column>
		</picker-view> -->
		</view>
	</view>
</template>

<script>
	// import sempCity from "@/components/semp-city/semp-city.vue"

	export default {
		data() {
			return {
				//类目一
				titleIndex: 0,
				// 控制显示
				piker1: false,
				// 区域
				huxing: 0,
				// 地铁
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
						three: ["江岸", "江汉", "硚口", "东西湖", "武昌", "青山", "洪山", "汉阳", "东湖高新", "江夏", "蔡甸", "黄陂", "新洲", "沌口开发区", "汉南"],
						three1: ["不限", "百步亭", "大智路", "堤角", "二七", "后湖", "黄埔永清", "前进江汉"],
						one: "区域",
						two: "请选择",
						one_1: "装修",
						two_1: "简单装修",
						one_2: "房屋类型",
						two_2: "普通住宅"
					}, {
						three_1: ["1号线", "2号线", "3号线", "4号线", "6号线", "7号线", "8号线", "11号线", "8号线三期", "21号线阳逻线"],
						three_1_1: ["不限", "径河站", "三店站", "码头潭公园站", "东吴大道站", "五环大道站", "额头湾站", "竹叶海站", "舵落口站", "古田一路站", "古田二路站", "古田三路站",
							"古田四路站"
						],
						gongnuan: ["不供暖", "不想供暖", "凭啥供暖", "就不供暖"],
						dianti: ["有电梯", "无电梯", "有电梯", "有电梯", "有电梯", "有电梯"],
						one: "地铁",
						two: "请选择",
						one_1: "供暖",
						two_1: "集中供暖",
						one_2: "产权类型",
						two_2: "商品房住宅"
					}]
				},
				val: "",
				img: ["/static/assets/publish/02.jpg"],
				currentTypeChoose: 0,
				currentFitmentChoose: 0,
				currentSpecificationChoose: 0,
				type: ["住宅", "别墅", "商铺", "写字楼"],
				fitment: ["简装", "精装", "豪装", "毛坯", "不限"],
				specification: ["一室", "二室", "三室", "四室", "五室", "五室以上"],
				buyerName: '',
				phone: '',
				houseTypeId: 0,
				houseDecoration: 0,
				houseRoomNum: 1,
				houseArea: '50',
				budget: '',
				houseLocation: '',
				sex: 0
			};
		},

		components: {
			// sempCity
		},
		props: {},
		mounted: function() {},
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
					[val]: this.formData.piker[0].three[e.detail.value[0]] + this.formData.piker[0].three1[e.detail.value[1]]
				});
				this.setData({
					huxing: e.detail.value
				});
			},

			bindchange1_1(e) {
				let val = 'formData.piker[1].two';
				this.setData({
					[val]: this.formData.piker[1].three_1[e.detail.value[0]] + this.formData.piker[1].three_1_1[e.detail.value[1]]
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


			radioChange: function(evt) {
				this.sex = evt.target.value
			},
			change(e) {
				this.houseArea = e.detail.value
			},

			change1(e) {
				this.budget = e.detail.value
			},

			publish() {
				let that = this;
				let reg = /^[\u4E00-\u9FA5]+$/;

				if (!reg.test(that.buyerName)) {
					uni.showToast({
						title: '请输入正确的称呼',
						icon: "none"
					});
					return;
				}

				if (that.phone.length < 11) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: "none"
					});
					return;
				};

				uni.request({
					url: getApp().globalData.appDomainName + '/web/addWebRecommendNew',
					data: {
						buyerName: this.buyerName,
						phone: this.phone,
						sex: this.sex,
						houseTypeId: this.houseTypeId,
						houseDecoration: this.houseDecoration,
						houseRoomNum: this.houseRoomNum,
						houseArea: this.houseArea,
						budget: this.budget,
						houseLocation: this.houseLocation
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						console.log("信息", res);
						uni.showModal({
							title: '提交成功',
							content: '服务顾问将尽快与您联系'
						});
					}
				});
			},
			// 房产类型
			typeFun(e) {
				this.setData({
					currentTypeChoose: e.currentTarget.dataset.index,
				});
				this.houseTypeId = e.currentTarget.dataset.index
			},
			// 装修类型
			fitmentFun(e) {
				this.setData({
					currentFitmentChoose: e.currentTarget.dataset.index
				});
				this.houseDecoration = e.currentTarget.dataset.index
			},
			// 几室的房子
			specificationFun(e) {
				this.setData({
					currentSpecificationChoose: e.currentTarget.dataset.index
				});
				this.houseRoomNum = e.currentTarget.dataset.index
			}


		}
	};
</script>
<style>
	.container {
		padding: 40rpx;
	}

	.type {
		background-color: blue;
	}

	.topq input {
		border: 1rpx solid #ccc;
	}

	.ww input {
		height: 80rpx !important;
	}

	.qingkuang {
		justify-content: space-between;
	}

	.info {
		position: relative;
		font-weight: bold;
		font-size: 34rpx;
		margin-left: 28rpx;
	}

	.info1::after {
		content: "";
		position: absolute;
		display: block;
		width: 4rpx;
		height: 27rpx;
		background-color: #333;
		border-radius: 10rpx;
		top: 7rpx;
		left: -8px;
	}

	.info::before {
		content: "";
		position: absolute;
		display: block;
		width: 12rpx;
		height: 40rpx;
		background-color: #3fbaa6;
		border-radius: 10rpx;
		top: -2rpx;
	}

	.item {
		display: flex;
		width: 100%;
		padding-bottom: 10rpx;
	}

	.item input {
		margin-right: 20rpx;
		width: 200rpx !important;
		font-size: 36rpx;
	}

	.m {
		align-self: flex-end;
		margin-bottom: 10rpx;
	}

	.margin {
		display: flex;
		margin: 40rpx 0rpx;
	}

	input {
		width: 150rpx;
		height: 35px;
		text-align: center;
		font-size: 28rpx;
		border-radius: 7rpx;
	}

	.area {
		border-bottom: 1rpx solid #ccc;
		padding-bottom: 20rpx;
	}

	.area1 {
		display: block;
		margin: 20rpx 0rpx;
		font-size: 28rpx;
	}

	.input-item input {
		margin-right: 20rpx;
	}

	.yuan input {
		margin-right: 20rpx;
	}

	textarea {
		border: 1rpx solid #ccc;
		width: 100%;
		margin-top: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
		border-radius: 10rpx;
	}

	textarea[placeholder] {
		font-size: 28rpx;
	}

	.title {
		font-weight: bold;
		font-size: 28rpx;
		margin: 10rpx 0rpx;
	}

	.titleInput {
		width: 100%;
		margin-bottom: 20rpx;
	}

	.pictrue {
		color: #999999;
		font-size: 26rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.icon-jia {
		font-family: 'iconfont';
		width: 200rpx;
		height: 200rpx;
		background-color: #ececec;
		font-size: 80rpx;
		line-height: 200rpx;
		text-align: center;
		color: #ccc;
	}

	.pictures {
		display: flex;
		padding: 20rpx 0rpx;
		margin-bottom: 20rpx;
	}

	.phone1 {
		margin: 30rpx 0rpx;
	}

	.pictures image {
		width: 200rpx;
		height: 200rpx;
		margin: 0rpx 45rpx 34rpx 0rpx;
	}

	.pictures {
		width: 100%;
		padding: 20rpx 0rpx;
		display: flex;
		flex-wrap: wrap;
	}

	image:nth-child(3n) {
		margin-right: 0rpx;
	}

	.btn {
		width: 90% !important;
		border-radius: 50rpx;
		font-weight: normal;
		background-color: #3fbaa6;
		color: white;
		margin-top: 40rpx;
	}

	.btn:active {
		filter: brightness(90%);
	}

	.icon-you {
		font-family: 'iconfont';
		color: #ccc;
	}

	.icon-you {
		font-family: 'iconfont';
		margin-left: auto;
	}

	.picker {
		color: #b4b4b4;
	}

	.left {
		display: flex;
		align-items: baseline;
		color: #878787;
	}

	.left1 {
		margin-right: 40rpx;
	}

	.le::after {
		content: "";
		position: absolute;
		display: block;
		width: 4rpx;
		height: 27rpx;
		background-color: #878787;
		border-radius: 10rpx;
		top: 10rpx;
		right: -21rpx;
	}

	.base {
		align-items: baseline;
	}
















	/* 自定义piker */
	.hidden {
		display: none !important;
	}

	.picker {
		width: 100%;
		background-color: #fff;
		bottom: 0;
		width: 100%;
		display: flex;
	}

	.pikerTitle {
		background-color: #f9f9f9;
		display: flex;
		justify-content: space-between;
		padding: 0rpx 40rpx;
		height: 80rpx;
		align-items: center;
		font-size: 28rpx;
	}

	/* 请选择区域 */
	.choose {
		color: #acacac;
	}

	.confirm {
		color: #3fbaa6;
		font-size: 30rpx;
	}

	.zhuti {
		color: #3fbaa6 !important;
	}

	.top1 {
		border-top: 2rpx solid #3fbaa6;
	}

	picker-view {
		padding: 0rpx 40rpx;
	}

	/* 区域样式 */
	.color {
		background-color: #eeeeee;
	}

	.guige {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		background-color: #fff;
		width: 100%;
		bottom: 0;
		z-index: 10000;
	}

	.guige text:first-of-type {
		font-size: 26rpx;
		color: #cfcfcf;
	}

	.top {
		display: flex;
		flex-direction: column;
		height: 130rpx;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
	}

	.top text:last-of-type {
		font-size: 34rpx;
		margin-top: 10rpx;
		font-weight: 400;
		color: #333;
	}

	.pickerIiew {
		color: #333;
	}

	picker-view-column view {
		font-size: 36rpx;
	}



	.phone {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0rpx;
		align-items: center;
	}

	radio {
		margin-left: 20rpx;
	}

	.item input {
		border-bottom: 1rpx solid #ccc;
	}

	.phone1 {
		width: 300rpx;
		font-size: 30rpx;
		text-align: left;
		border-bottom: 1rpx solid #ccc;
		padding-left: 20rpx;
	}

	.phone1[placeholder] {
		font-size: 36rpx;
	}

	image {
		width: 100%;
		height: 300rpx;
	}

	.content {
		padding: 20rpx 40rpx;
	}

	.content .info {
		position: relative;
		font-weight: bold;
		font-size: 34rpx;
		margin-left: 30rpx;
	}

	.info::before {
		content: "";
		position: absolute;
		display: block;
		width: 12rpx;
		height: 40rpx;
		background-color: #3fbaa6;
		border-radius: 10rpx;
		top: -2rpx;
		left: -27rpx;
	}

	.ma::before {
		content: "";
		position: absolute;
		display: block;
		width: 12rpx;
		height: 40rpx;
		background-color: #3fbaa6;
		border-radius: 10rpx;
		top: 3rpx;
		left: -27rpx;
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}

	.item {
		width: 100%;
		padding: 10rpx 20rpx;
		background-color: #ececec;
		font-size: 28rpx;
		font-weight: 400;
		width: 108rpx;
		height: 40rpx;
		line-height: 40rpx;
		float: left;
		margin-right: 20rpx;
		margin-bottom: 25rpx;
		text-align: center;
		font-size: 24rpx !important;
		border-radius: 5rpx;
		border: 1rpx solid transparent;
	}

	.item:active {
		filter: brightness(90%);
	}

	.item:nth-child(4n) {
		margin-right: 0rpx;
	}

	.middle {
		margin-top: 40rpx;
		overflow: hidden;
		margin-bottom: 20rpx !important;
	}

	.blue {
		background-color: #3fbaa6;
		color: #fff;
	}

	.search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 40rpx 0rpx;
		border-radius: 10rpx;
		border: 1rpx solid #ccc;
	}

	input {
		width: 80%;
	}

	.icon-xingtaiduICON {
		color: #c1c1c1;
		margin: 0rpx 20rpx;
	}

	input[placeholder] {
		font-size: 28rpx;
	}

	.btn {
		width: 90% !important;
		border-radius: 50rpx;
		font-weight: normal;
		background-color: #3fbaa6;
		color: white;
		margin-top: 40rpx;
		margin-bottom: 60rpx;
	}

	.btn:active {
		filter: brightness(90%);
	}

	.big {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}

	.ma {
		margin: 40rpx 0rpx;
	}

	.title {
		font-size: 28rpx;
	}

	.price {
		display: flex;
		justify-content: space-around;
		margin: 20rpx 0rpx 40rpx;
		font-size: 25rpx;
		color: #b3b3b3;
	}

	.phone {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0rpx;
		align-items: center;
	}

	radio {
		margin-left: 20rpx;
	}

	.item input {
		border-bottom: 1rpx solid #ccc;
	}

	.phone1 {
		width: 300rpx;
		font-size: 30rpx;
		text-align: left;
		border-bottom: 1rpx solid #ccc;
		padding-left: 20rpx;
		margin: 30rpx 0rpx;
	}

	.phone1[placeholder] {
		font-size: 36rpx;
	}
</style>

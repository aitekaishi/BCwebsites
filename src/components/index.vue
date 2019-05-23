<template>
	<div>
		<index></index>
		<el-carousel class="name" interval="5000" height="31.25vw">
			<el-carousel-item><img src="../assets/index/banner1.jpg" style="width: 100vw;" alt="" /></el-carousel-item>
			<el-carousel-item><img src="../assets/index/banner2.jpg" style="width: 100vw;" alt="" /></el-carousel-item>
		</el-carousel>
		<top></top>
		<div class="bespeak">
			<div class="bespeak-title">佰橙优家专业装修监理</div>
			<div><input class="input" type="text" v-model="name" placeholder="姓名" /></div>
			<div><input class="input" type="text" v-model="phone" maxlength="11" placeholder="手机号" /></div>
			<div><input class="input" type="submit" @click="submit" value="立即预约" /></div>
		</div>
		<div style="text-align: center;font-size: 30px;margin-top: 21pt;color: #333333;font-weight: 600;position: relative;left: 13px;">为什么需要佰橙优家？</div>
		<div style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;"></div>
		<div style="text-align: center;font-size: 20px;margin-top: 9px;color: #666666;">规避隐患，贴心守护</div>
		<div class="why">
			<div class="why-contain why-contain1 hvr-bounce-in" @mouseenter="why(1)" @mouseleave="whyout(1)">
				<div class="why-title why-title1">忙</div>
				<figure>
					<img src="../assets/index/icon-one/icon_mang.png" alt="" />
					<figcaption>工作时间忙费力又费心</figcaption>
				</figure>
			</div>
			<div class="why-contain why-contain2 hvr-bounce-in" @mouseenter="why(2)" @mouseleave="whyout(2)">
				<div class="why-title why-title2">差</div>
				<figure>
					<img src="../assets/index/icon-one/icon_cha.png" alt="" />
					<figcaption>装修质量差品质无保障</figcaption>
				</figure>
			</div>
			<div class="why-contain why-contain3 hvr-bounce-in" @mouseenter="why(3)" @mouseleave="whyout(3)">
				<div class="why-title why-title3">假</div>
				<figure>
					<img src="../assets/index/icon-one/icon_jia.png" alt="" />
					<figcaption>材料次充好鉴别有难度</figcaption>
				</figure>
			</div>
			<div class="why-contain why-contain4 hvr-bounce-in" @mouseenter="why(4)" @mouseleave="whyout(4)">
				<div class="why-title why-title4">坑</div>
				<figure>
					<img src="../assets/index/icon-one/icon_keng.png" alt="" />
					<figcaption>合同陷阱多不懂怕被坑</figcaption>
				</figure>
			</div>
			<div class="why-contain why-contain5 hvr-bounce-in" @mouseenter="why(5)" @mouseleave="whyout(5)">
				<div class="why-title why-title5">骗</div>
				<figure>
					<img src="../assets/index/icon-one/icon_pian.png" alt="" />
					<figcaption>预算心没底多花冤枉钱</figcaption>
				</figure>
			</div>
		</div>
		<div style="margin-top: 40pt;"><img style="width: 100vw;position: absolute;height: 480pt;" src="../assets/index/icon_two/image_background.png" alt="" /></div>
		<div class="how">
			<div style="text-align: center;font-size: 30px;margin-top: 81pt;color: #333333;font-weight: 600;position: relative;left: 13px;">我们怎么做？</div>
			<div style="text-align: center;"><div style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;display: inline-block;"></div></div>
			<div style="text-align: center;font-size: 20px;margin-top: 9px;color: #666666;">专注品质，事无巨细</div>
			<div class="how-one">
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon_sqff.png" alt="" /></div>
						<b>事前防范</b>
						<figcaption>审核材料、图纸、合同、预算等，及时提醒相关注意事项，规避陷阱，避免损失。</figcaption>
					</figure>
				</div>
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon-aqgl.png" alt="" /></div>
						<b>安全管理</b>
						<figcaption>施工现场管理规范，安全措施管控，并进行安全交底。</figcaption>
					</figure>
				</div>
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon_gqgk.png" alt="" /></div>
						<b>工期管控</b>
						<figcaption>施工进度管控，排除干扰，沟通提醒，保证工期顺利进行。</figcaption>
					</figure>
				</div>
			</div>
			<div class="how-one">
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon_xcpj.png" alt="" /></div>
						<b>巡查排检</b>
						<figcaption>严格把控施工每一环节，高标准落实工作，专注质与量。</figcaption>
					</figure>
				</div>
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon_zlhc.png" alt="" /></div>
						<b>质量核查</b>
						<figcaption>全程356项服务节点，帮您核查每一个细节，高效极致。</figcaption>
					</figure>
				</div>
				<div class="how-one-one">
					<figure>
						<div class="how-one-image" style="cursor: pointer;"><img class="hvr-buzz-out" src="../assets/index/icon_two/icon_szbg.png" alt="" /></div>
						<b>数字报告</b>
						<figcaption>验收结束出具在线报告，图文并茂，通俗易懂，随时随地可查看装修动态。</figcaption>
					</figure>
				</div>
			</div>
			<div style="text-align: center;font-size: 30px;margin-top: 81pt;color: #333333;font-weight: 600;">佰橙优家提供什么服务？</div>
			<div style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;margin-bottom: 16pt;"></div>
			<el-carousel class="liupan" height="480px" autoplay="false" interval="5000">
				<el-carousel-item>
					<div class="how-one-one1 how-one-one6" @mouseenter="why(6)" @mouseleave="whyout(6)" @click="name1(6)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_gchjlxxxx.jpg" alt="" /></div>
							<b>工程监理险</b>
							<figcaption>
								因监理不到位产生的装修质量（不含软装部分），中国人寿为客户提供2万元保险赔偿。
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title6">了解更多</p>
						</figure>
					</div>
					<div class="how-one-one1 how-one-one7" @mouseenter="why(7)" @mouseleave="whyout(7)" @click="name1(7)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_hbjch.jpg" alt="" /></div>
							<b>环保检测</b>
							<figcaption>佰橙优家携手湖南省室内环境装饰材料产品质量授权监督站，为业主提供上门服务，保证安心入住。</figcaption>
							<p class="title7">了解更多</p>
						</figure>
					</div>
					<div class="how-one-one1 how-one-one8" @mouseenter="why(8)" @mouseleave="whyout(8)" @click="name1(8)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_zjtg.jpg" alt="" /></div>
							<b>资金托管</b>
							<figcaption>
								通过支付权转移保证施工方必须对违规施工行为进行整改，保障资金安全，先施工后付款
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title8">了解更多</p>
						</figure>
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="how-one-one1 how-one-one9" @mouseenter="why(9)" @mouseleave="whyout(9)" @click="name1(9)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_quanchengjianl.jpg" alt="" /></div>
							<b>全程监理服务</b>
							<figcaption>
								全程跟踪从预算到竣工，从过程到质量的整个装修过程，确保工期和施工质量。
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title9">了解更多</p>
						</figure>
					</div>

					<div class="how-one-one1 how-one-one10" @mouseenter="why(10)" @mouseleave="whyout(10)" @click="name1(10)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_yffu.jpg" alt="" /></div>
							<b>验房服务</b>
							<figcaption>
								通过专业的验房工具，全面细致的检查每一项，及早发现问题，规避整改，避免损失。
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title10">了解更多</p>
						</figure>
					</div>

					<div class="how-one-one1 how-one-one11" @mouseenter="why(11)" @mouseleave="whyout(11)" @click="name1(11)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_qianqishenhe.jpg" alt="" /></div>
							<b>前期审核服务</b>
							<figcaption>
								装修不懂怕被坑，前期帮您审核图纸、预算、合同，从源头杜绝装修猫腻。
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title11">了解更多</p>
						</figure>
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="how-one-one1 how-one-one12" @mouseenter="why(12)" @mouseleave="whyout(12)" @click="name1(12)">
						<figure>
							<div class="how-one-image"><img src="../assets/index/image_one/image_jiedianyanshou.jpg" alt="" /></div>
							<b>节点验收服务</b>
							<figcaption>
								5个节点服务划分，灵活方便，适用不同阶段的，帮助更好的体验专业的服务。
								<span style="visibility: hidden;">确保工期和施工质量。</span>
							</figcaption>
							<p class="title12">了解更多</p>
						</figure>
					</div>
				</el-carousel-item>
			</el-carousel>
			<div style="padding: 0 0 100px 0;background: #FCFCFC;margin-top: 11px;">
				<div style="height: 1px;"></div>
				<server></server>
			</div>
			<div style="text-align: center;font-size: 30px;margin-top: 21pt;color: #333333;font-weight: 600;">业主评价</div>
			<div style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;margin-bottom: 10pt;"></div>
			<div style="text-align: center;font-size: 20px;margin-top: 0;color: #666666;margin-bottom: 60px;">专注于业主口碑，用心做好每一步</div>
			<div class="swiper-container-b">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="how-one-one">
							<figure>
								<div style="display: flex;">
									<div class="how-one-image" style="cursor: pointer;"><img class="hvr-glow" src="../assets/image_plone.jpg" alt="" /></div>
									<div style="margin-left: 10pt;">
										<b>工程监理险</b>
										<p style="font-size: 8pt;color: #666666;position: relative;top: 5pt;">长沙</p>
										<p style="font-size: 8pt;color: #666666;">评分:5</p>
									</div>
								</div>
								<figcaption style="margin-top: 10pt;">非常感谢李工的专业服务，详细的讲解了监 理流程，并给出了事前注意项，避免了很多 麻烦。</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="how-one-one">
							<figure>
								<div style="display: flex;">
									<div class="how-one-image" style="cursor: pointer;"><img class="hvr-glow" src="../assets/image_pltwo.jpg" alt="" /></div>
									<div style="margin-left: 10pt;">
										<b>工程监理险</b>
										<p style="font-size: 8pt;color: #666666;position: relative;top: 5pt;">长沙</p>
										<p style="font-size: 8pt;color: #666666;">评分:5</p>
									</div>
								</div>
								<figcaption style="margin-top: 10pt;">感谢文师傅细致的检查，非常认真和负责，每 次出现问题都及时跟我沟通，总之对服务还是很 满意的。</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="how-one-one">
							<figure>
								<div style="display: flex;">
									<div class="how-one-image" style="cursor: pointer;"><img class="hvr-glow" src="../assets/image_plthree.jpg" alt="" /></div>
									<div style="margin-left: 10pt;">
										<b>工程监理险</b>
										<p style="font-size: 8pt;color: #666666;position: relative;top: 5pt;">长沙</p>
										<p style="font-size: 8pt;color: #666666;">评分:5</p>
									</div>
								</div>
								<figcaption style="margin-top: 10pt;">
									今天一大早彭老师就来了，一起处理上次发现 的整改问题，同时告知了下次施工方需要注意的 地方，一切都顺利。
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<!-- <div class="swiper-button-prev"><img src="../assets/index/image_one/icon_xiangzuo.png" alt="" /></div>
				<div class="swiper-button-next"><img src="../assets/index/image_one/icon_xiangyou.png" alt="" /></div> -->
			</div>
			<div style="padding: 0 0 100px 0;background: #FCFCFC;margin-top: 81px;">
				<div style="height: 1px;"></div>
				<visit></visit>
			</div>
			<footervue></footervue>
		</div>
	</div>
</template>

<script>
import * as AV from 'leancloud-storage/dist/av.js';
import index from './header.vue';
import footervue from './footer-vue.vue';
import server from './server-path.vue';
import top from './top.vue';
import visit from './vistit.vue';
export default {
	data() {
		return {
			name: '',
			phone: ''
		};
	},
	components: {
		index,
		footervue,
		server,
		visit,
		top
	},
	methods: {
		submit() {
			var _this = this;
			if (!/^[0-9]{11}$/.test(_this.phone)) {
				_this.$message({
					message: '手机号码不正确',
					type: 'warning'
				});
				return;
			}
			var n = (Math.random() * 1000)
				.toString()
				.replace('.', '')
				.substr(1, 2);
			console.log(n);
			var arr = (100 * Math.random())
				.toString()
				.substr(1, n)
				.split('');
			for (var i = 0; i < arr.length; i++) {
				arr[i] = ' ';
			}
			console.log(arr.toString().replace(/,/g, ''));
			var x = arr.toString().replace(/,/g, '');
			var user = new AV.User();
			user.setUsername(_this.name + x);
			user.setMobilePhoneNumber(_this.phone);
			user.setPassword('lamll999');
			user.signUp().then(
				function(loginedUser) {
					var Todo = AV.Object.extend('Booking');
					var todo = new Todo();
					todo.set('name', _this.name + x);
					todo.set('mobilePhoneNumber', _this.phone);
					todo.set('user', AV.User.current());
					//todo.set('type', 'website');
					todo.save().then(
						function(todo) {
							_this.$message({
								message: '预约成功',
								type: 'success',
								duration: 1000
							});
							_this.name = '';
							_this.phone = '';
						},
						function(error) {
							// 异常处理
						}
					);
				},
				function(error) {
					console.log(error.rawMessage)
					if (error.rawMessage == "Mobile phone number has already been taken.") {
						_this.$message({
							message: "手机号"+_this.phone+"已注册，请重新输入",
							type: 'error'
						});
						_this.phone = '';
					} else if(error.rawMessage == "Invalid username, it must be a non-blank string."){
						_this.$message({
							message: "请输入您的姓名",
							type: 'error'
						});
					}
					else{
						_this.$message({
							message: error.rawMessage,
							type: 'error'
						});
						_this.phone = '';
					} 
					
				}
			);
		},
		why(index) {
			var that = this;
			var name = '.why-contain' + index;
			var title = '.why-title' + index;
			var name1 = '.how-one-one' + index;
			var title1 = '.title' + index;
			console.log(name1);
			$(name).attr('style', 'border: 1pt solid #FF9600;');
			$(title).attr('style', 'background: #FF9600;');
			$(name1).attr('style', 'border: 1pt solid #FF9600;');
			$(title1).attr('style', 'background: #FF9600;color:#FFFFFF');
		},
		name1(index) {
			var that = this;
			$('body,html').animate({ scrollTop: 0 }, 300);
			if (index == 6) {
				that.$router.push('/3-2');
				localStorage.setItem('index', '3-2');
			}
			if (index == 7) {
				that.$router.push('/3-1');
				localStorage.setItem('index', '3-1');
			}
			if (index == 8) {
				that.$router.push('/3-3');
				localStorage.setItem('index', '3-3');
			}
			if (index == 9) {
				that.$router.push('/2-1');
				localStorage.setItem('index', '2-1');
			}
			if (index == 10) {
				that.$router.push('/2-2');
				localStorage.setItem('index', '2-2');
			}
			if (index == 11) {
				that.$router.push('/2-3');
				localStorage.setItem('index', '2-3');
			}
			if (index == 12) {
				that.$router.push('/2-4');
				localStorage.setItem('index', '2-4');
			}
		},
		whyout(index) {
			var name = '.why-contain' + index;
			var title = '.why-title' + index;
			var name1 = '.how-one-one' + index;
			var title1 = '.title' + index;
			console.log(name1);
			$(name).attr('style', 'border: 1pt solid #cccccc;');
			$(title).attr('style', 'background: #cccccc;');
			$(name1).attr('style', 'border: 1pt solid #cccccc;');
			$(title1).attr('style', 'border: 1pt solid #FF9600;color:#FF9600');
		}
	}
};
</script>

<style scoped="scoped">
@import url('../main.css');

.swiper-container {
	width: 100%;
}
.swiper-slide img {
	width: 100%;
}
.bespeak {
	width: 23vw;
	height: 22vw;
	background: rgba(0, 0, 0, 0.6);
	position: absolute;
	right: 3vw;
	top: calc(60px + 5vw);
	z-index: 2000;
	text-align: center;
	box-sizing: content-box;
}
.bespeak-title {
	font-size: 1.6666667vw;
	color: #ffffff;
	padding-top: 2.08vw;
	margin-bottom: 1.25vw;
}
input {
	width: 17.6vw;
	height: 3.54vw;
	border: none;
	outline: none;
	box-sizing: content-box;
	padding-left: 1vw;
	font-size: 1.66666667vw;
}
.input {
	margin-top: 0.9375vw;
}
input[type='submit'] {
	background: #ff9600;
	color: #ffffff;
}
.why {
	display: flex;
	justify-content: center;
	margin-top: 16pt;
	cursor: pointer;
}
.why-contain {
	width: 110pt;
	height: 130pt;
	border-radius: 4pt;
	margin-left: 10pt;
	position: relative;
}
.why-contain1,
.why-contain2,
.why-contain3,
.why-contain4,
.why-contain5 {
	border: 1pt solid #cccccc;
	top: 0;
}

.why-title {
	width: 24pt;
	height: 31pt;
	position: relative;
	left: 3pt;
	top: -1pt;
	color: #ffffff;
	text-align: center;
	line-height: 31pt;
}
.why-title1,
.why-title2,
.why-title3,
.why-title4,
.why-title5 {
	background: #cccccc;
}

.why-contain figure {
	width: 56pt;
	margin: 0 auto;
	text-align: center;
	margin-top: 15pt;
}

.why-contain figure > img {
	display: inline-block;
	margin-bottom: 12pt;
	width: 26pt;
	height: 26pt;
}
.how {
	position: relative;
	margin-top: 40pt;
	z-index: 1000;
}
.how-one {
	display: flex;
	justify-content: center;
}
.how-one figure {
	text-align: center;
	width: 280px;
	margin: 10pt 30pt 0 30pt;
}
.how-one figure img {
	width: 70pt;
	height: 70pt;
	margin-bottom: 14pt;
}
.how-one figure b {
	display: inline-block;
	font-size: 20px;
	color: #333333;
	margin-bottom: 5pt;
}
.how-one figure figcaption {
	font-size: 16px;
	width: 300px;
	color: #444444;
	text-align: center;
}
.swiper-container-a {
	width: 650pt;
	margin: 0 auto;
	display: flex;
	overflow: hidden;
}
.swiper-container-b {
	width: 650pt;
	margin: 0 auto;
	display: flex;
	overflow: hidden;
}
.swiper-container-a .how-one-one {
	width: 190pt;
	margin: 0 0 0 13pt;
	text-align: center;
	padding-bottom: 10pt;
	cursor: pointer;
}
.how-one-one6,
.how-one-one7,
.how-one-one8,
.how-one-one9,
.how-one-one10,
.how-one-one11,
.how-one-one12 {
	border: 1pt solid #999999;
}
.swiper-container-b .how-one-one {
	width: 190pt;
	margin: 0 0 0 13pt;
	text-align: left;
	padding-bottom: 10pt;
	position: relative;
	top:20px;
}
.how-one-one figcaption {
	width: 166pt;
	margin: 0 auto;
	font-size: 14px;
	color: #666666;
	margin-top: 3pt;
	margin-bottom: 3pt;
}
.how-one-one p {
	width: 53pt;
	height: 16pt;

	margin: 0 auto;
	font-size: 9pt;

	line-height: 16pt;
	cursor: pointer;
}
.title6,
.title7,
.title8,
.title9,
.title10,
.title11,
.title12 {
	border: 1pt solid #ff9900;
	color: #ff9900;
}
.how-one-one b {
	display: inline-block;
	margin-top: 5pt;
}
.bespeak div {
	text-align: center;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
	background-image: none;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
	background-image: none;
}
.swiper-container-a .swiper-button-prev img,
.swiper-container-a .swiper-button-next img {
	width: 24pt;
	height: 24pt;
	position: relative;
	top: -550px;
}
.swiper-container-b .swiper-button-prev img,
.swiper-container-b .swiper-button-next img {
	width: 24pt;
	height: 24pt;
	position: relative;
	top: 240pt;
}
.swiper-button-prev img {
	left: calc(50vw - 359pt);
}
.swiper-button-next img {
	right: calc(50vw - 355pt);
}
.swiper-container-b .how-one-image {
	display: inline-block;
}
.swiper-container-b .how-one-image img {
	width: 50pt;
	height: 50pt;
	border-radius: 50%;
}
.how-one-one1 {
	width: 300px;
	border: 1px solid #999999;
	text-align: center;
	padding-bottom: 20px;
	cursor: pointer;
	position: relative;
	top: 50px;
	left: 65px;
	display: inline-block;
	margin-right: 30px;
}
.how-one-one1 img {
	width: 298px;
	height: 250px;
}
.how-one-one1 p {
	width: 106px;
	height: 31px;
	margin: 0 auto;
	line-height: 31px;
}
.how-one-one1 figcaption {
	margin-top: 10px;
	margin-left: 5px;
	margin-right: 5px;
	text-align: left;
}
.liupan {
	width: 1100px;
	margin: 0 auto;
}
.el-carousel__container {
	width: 20vw !important;
}
.how-one-one12 {
	position: relative;
	left: 400px;
}
.name {
	width: 100vw !important;
}
</style>

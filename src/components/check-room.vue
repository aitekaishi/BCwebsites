<template>
	<div>
		<index></index>
		<img src="../assets/2-2/banner.jpg" @click="index" alt="" style="width: 100vw;cursor: pointer;" />
		<top></top>
		<img src="../assets/2-2/2-2-1.png" alt="" style="width: 100vw;" />
		<img src="" alt="" />
		<div style="background: #FCFCFC;padding: 106px 0;">
			<div style="display: flex;justify-content: center;">
				<div style="margin-left: 10px;"><img src="../assets/2-2/question/dianlu/image_dianlu.png" :class="tupian == 1 ? '' : 'none'" alt="" style="width: 580px;height: 598px;" /></div>
				<div><img src="../assets/2-2/question/menchuang/image_menchuang.jpg" :class="tupian == 2 ? '' : 'none'" alt="" style="width: 580px;height: 598px;" /></div>
				<div><img src="../assets/2-2/question/lousui/image_loushui.jpg" alt="" :class="tupian == 3 ? '' : 'none'" style="width: 580px;height: 598px;" /></div>
				<div><img src="../assets/2-2/question/wailou/image_gangjinwailou.jpg" :class="tupian == 4 ? '' : 'none'" alt="" style="width: 580px;height: 598px;" /></div>
				<div><img src="../assets/2-2/question/anquan/image_zhuhuoquan.jpg" :class="tupian == 5 ? '' : 'none'" alt="" style="width: 580px;height: 598px;" /></div>
				<div style="margin-left: 87px;">
					<div style="font-size: 32px;color: #333333;">常见问题</div>
					<div style="margin-top: 18px;cursor: pointer;" :class="tupian1 == 1 ? '' : 'left'" @mouseenter="index1(1)">
						<img src="../assets/2-2/question/icon_dianlu.png" :class="tupian1 != 1 ? '' : 'none'" alt="" style="width: 80px;height: 80px;" />
						<img src="../assets/2-2/question/icon_dianlu_y.png" :class="tupian1 == 1 ? '' : 'none'" alt="" style="width: 94px;height: 80px;" />
						<div style="display: inline-block;margin-left: 2vw;">
							<div style="font-size: 20px;color: #333333;">电路</div>
							<div style="font-size: 18px;color: #666666;position: relative;top:20px">走线是否正确，插座口是否有走地线，短路等</div>
						</div>
					</div>

					<div style="margin-top: 18px;cursor: pointer;" :class="tupian1 == 2 ? '' : 'left'" @mouseenter="index1(2)">
						<img src="../assets/2-2/question/icon_mchwt.png" :class="tupian1 != 2 ? '' : 'none'" alt="" style="width: 80px;height: 80px;" />
						<img src="../assets/2-2/question/icon_mchwt_y.png" :class="tupian1 == 2 ? '' : 'none'" alt="" style="width: 94px;height: 80px;" />
						<div style="display: inline-block;margin-left: 2vw;">
							<div style="font-size: 20px;color: #333333;">门窗问题</div>
							<div style="font-size: 18px;color: #666666;position: relative;top:20px">门窗是否变形、生锈，玻璃破损。</div>
						</div>
					</div>
					<div style="margin-top: 18px;cursor: pointer;" :class="tupian1 == 3 ? '' : 'left'" @mouseenter="index1(3)">
						<img src="../assets/2-2/question/icon_lsh.png" :class="tupian1 != 3 ? '' : 'none'" alt="" style="width: 80px;height: 80px;" />
						<img src="../assets/2-2/question/icon_lsh_y.png" :class="tupian1 == 3 ? '' : 'none'" alt="" style="width: 94px;height: 80px;" />
						<div style="display: inline-block;margin-left: 2vw;">
							<div style="font-size: 20px;color: #333333;">漏水</div>
							<div style="font-size: 18px;color: #666666;position: relative;top:20px">接口是否漏水，下水是否顺畅等。</div>
						</div>
					</div>
					<div style="margin-top: 18px;cursor: pointer;" :class="tupian1 == 4 ? '' : 'left'" @mouseenter="index1(4)">
						<img src="../assets/2-2/question/iocn_w.png" :class="tupian1 != 4 ? '' : 'none'" alt="" style="width: 80px;height: 80px;" />
						<img src="../assets/2-2/question/iocn_wl_y.png" :class="tupian1 == 4 ? '' : 'none'" alt="" style="width: 94px;height: 80px;" />
						<div style="display: inline-block;margin-left: 2vw;">
							<div style="font-size: 20px;color: #333333;">外漏</div>
							<div style="font-size: 18px;color: #666666;position: relative;top:20px">铁丝网外漏，钢筋外漏等。</div>
						</div>
					</div>
					<div style="margin-top: 18px;cursor: pointer;" :class="tupian1 == 5 ? '' : 'left'" @mouseenter="index1(5)">
						<img src="../assets/2-2/question/icon_anqyh.png" :class="tupian1 != 5 ? '' : 'none'" alt="" style="width: 80px;height: 80px;" />
						<img src="../assets/2-2/question/icon_anqyh_y.png" :class="tupian1 == 5 ? '' : 'none'" alt="" style="width: 94px;height: 80px;" />
						<div style="display: inline-block;margin-left: 2vw;">
							<div style="font-size: 20px;color: #333333;">安全隐患</div>
							<div style="font-size: 18px;color: #666666;position: relative;top:20px">排水管漏装阻火圈等隐性问题.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src="../assets/2-2/2-2-2.png" alt="" style="width: 100vw;" />
		<div style="padding: 0 0 100px 0;background: #FCFCFC;margin-top: 81px;">
			<div style="height: 1px;"></div>
			<server></server>
		</div>
		<div><visit></visit></div>
		<footervue></footervue>
		<el-dialog  :visible.sync="dialogVisible" width="23%" >
			<div class="bespeak">
				<div class="bespeak-title">佰橙优家专业装修监理</div>
				<div><input class="input" type="text" v-model="name" placeholder="姓名" /></div>
				<div>
					<input class="input" type="text" v-model="phone" maxlength="11" placeholder="手机号" />
				</div>
				<div><input class="input" type="submit" @click="submit" value="立即预约"/></div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import * as AV from 'leancloud-storage/dist/av.js';
import index from './header.vue';
import footervue from './footer-vue.vue';
import server from './server-path.vue';
import visit from './vistit.vue';
import top from './top.vue';
export default {
	components: {
		index,
		footervue,
		server,
		visit,
		top
	},
	data() {
		return {
			tupian: 1,
			tupian1: 2,
			dialogVisible: false,
			name: '',
			phone: '',
		};
	},
	methods: {
		index() {
			this.dialogVisible = true;
		},
		index1(index) {
			
			this.tupian = index;
			this.tupian1 = index;
		},
		submit() {
			var _this = this;
			if (!/^[0-9]{11}$/.test(_this.phone)) {
				_this.$message({
					message: '手机号码不正确',
					type: 'warning'
				});
				return;
			}
			var n = (Math.random()*1000).toString().replace('.','').substr(1,2)
			console.log(n)
			var arr = (100*Math.random()).toString().substr(1,n).split('')
			for (var i = 0; i < arr.length; i++) {
				arr[i] = ' '
			}
			console.log(arr.toString().replace(/,/g,''))
			var x = arr.toString().replace(/,/g,'')
			var user = new AV.User();
			user.setUsername(_this.name + x);
			user.setMobilePhoneNumber(_this.phone)
			user.setPassword('lamll999');
			user.signUp().then(
				function(loginedUser) {
					_this.$message({
						message: "预约成功",
						type: 'success',
						duration:1000
					});
					_this.name = '';
					_this.phone = ''
					_this.dialogVisible = false
				},
				function(error) {
					_this.$message({
						message: error.rawMessage,
						type: 'error'
					});
					_this.phone = ''
				}
			);
			
		},
	},
	
};
</script>

<style scoped="scoped">
.none {
	display: none;
}
.left {
	position: relative;
	left: 13px;
}
.bespeak div{
		text-align: center;
	}
.bespeak {
		width: 23vw;
		height: 22vw;
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
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
	.el-dialog, .el-pager li {
    background: transparent !important;
}
	.el-dialog__headerbtn {
		z-index: 10000;
		top: 65px !important;
		left:22vw;
		width: 20px !important;
		height: 20px !important;
	}
</style>

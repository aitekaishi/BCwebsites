<template>
	<div>
		<index></index>
		<img src="../assets/2-4/banner.png" @click="index" alt="" style="width: 100vw;cursor: pointer;">
		<top></top>
		<img src="../assets/2-4/2-4-1.png" alt="" style="width: 100vw;">
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
			dialogVisible:false,
			name: '',
			phone: '',
		};
	},
	methods: {
		index() {
			this.dialogVisible = true;
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
	}
};
</script>

<style>
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
	.bespeak div{
		text-align: center;
	}
	.el-dialog__headerbtn {
		z-index: 10000;
		top: 65px !important;
		left:22vw;
		width: 20px !important;
		height: 20px !important;
	}
</style>

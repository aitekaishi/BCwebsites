<template>
	<div>
		<div class="input">
			<text class="input-text">用户名</text>
			<input type="text" v-model="name" @input="onName" class="uni-input" focus placeholder="请输入用户名" />
		</div>
		<div class="input">
			<text class="input-text">密<text style="visibility: hidden;">密</text>码</text>
			<input type="password" v-model="password" @input="onPow" class="uni-input" placeholder="请输入密码" />
		</div>
		<div class="input">
			<text class="input-text">密<text style="visibility: hidden;">密</text>码</text>
			<input type="password" v-model="passwordAgain" @input="pasAgain" class="uni-input" placeholder="请再次输入密码"/>
		</div>
		<div class="submit" @click="submit">{{clickName}}</div>
	</div>
</template>

<script>
	import * as leanCloud from 'leancloud-storage';
export default {
	data() {
		return {
			name:'',
			password:'',
			passwordAgain:'',
			clickName:'注册'
		};
	},
	onShow() {
		
	},
	methods: {
		onName(event){
			this.name = event.target.value
		},
		onPow(event){
			this.password = event.target.value
		},
		pasAgain(event){
			this.passwordAgain = event.target.value
		},
		submit(){
			let _this = this;
			if (_this.password != _this.passwordAgain) {
				alert('两次密码不一样')
			} else{
				var Supervisor = new leanCloud.Query('Supervisor');
				Supervisor.equalTo('name',_this.name).equalTo('password',_this.password)
				Supervisor.find().then(
					function(res) {
						console.log(res)
						alert('登陆成功')
						if (res.length == 1) {
							localStorage.setItem('index',1)
							console.log('老用户')
							localStorage.setItem('feishuId',res[0].attributes.name)
							localStorage.setItem('name',res[0].attributes.name)
							_this.$router.push('/');
						} else{
							localStorage.setItem('index',1)
							console.log('新用户')
							var Todo = leanCloud.Object.extend('Supervisor');
							var todo = new Todo();
							localStorage.setItem('feishuId',_this.name)
							localStorage.setItem('name',_this.name)
							todo.set('feishuId', _this.name);
							todo.set('name', _this.name);
							todo.set('password', _this.password);
							todo.save().then(
								function(todo) {
									_this.$router.push('/');
								},
								function(error) {
									
								}
							);
						}
					},
					function(error) {
						
					}
				);
			}
		}
	}
};
</script>

<style scoped>
.input {
	display: flex;
}
.uni-input {
	flex: 1;
	font-size: 28px;
}
.input-text{
	width: 100px;
	font-size: 28px;
	position: relative;
	top: 23px;
	text-align: center;
}
.submit{
	width: 95vw;
		height: 72px;
		background: #FF9900;
		border-radius: 36px;
		color: #FFFFFF;
		border: none;
		line-height: 72px;
		font-size: 28px;
		margin: 0 auto;
		text-align: center;
	}
</style>

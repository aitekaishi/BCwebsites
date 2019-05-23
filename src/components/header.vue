<template>
	<div>
		<div class="header">
			<div class="header-img">
				<img src="../assets/index/logo.png" alt="" @click="index">
			</div>
			<el-menu
				:default-active="activeIndex"
				class="el-menu-demo"
				mode="horizontal"
				@select="handleSelect"
				active-text-color="#FF9900"
				text-color='#000000'
			>
				<el-menu-item index="1" class='indexxa'>首页</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						管家服务
					</template>
					<el-menu-item index="2-1">全程监理服务</el-menu-item>
					<el-menu-item index="2-2">验房服务</el-menu-item>
					<el-menu-item index="2-3">前期审核服务</el-menu-item>
					<el-menu-item index="2-4">节点验收服务</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						特色服务
					</template>
					<el-menu-item index="3-1">环保检测</el-menu-item>
					<el-menu-item index="3-2">监理工程险</el-menu-item>
					<el-menu-item index="3-3">资金托管</el-menu-item>
				</el-submenu>
				<el-menu-item index="4" class='indexxb'>关于我们</el-menu-item>
			</el-menu>
			<div class="header-iphone">
400-611-8860
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1',
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			var that = this
			console.log(that.activeIndex)
			if(key == 1){
				that.$router.push('/')
				localStorage.setItem('index',1)
			}else if(key == 4){
				that.$router.push('/4')
				localStorage.setItem('index',4)
			}
			else{
				that.$router.push('/'+key)
				localStorage.setItem('index',keyPath[1])
				console.log(keyPath[1])
			}
		},
		index(){
			this.$router.push('/')
		}
	},
	created(){
		
		
	},
	mounted(){
		var that = this;
		that.activeIndex = localStorage.getItem('index')
		localStorage.removeItem('index')
	},
	created(){
		
	}
};
</script>

<style>
	.el-menu-demo{
		width: 43%;
		font-size: 10pt;
		
	}
	.header{
		display: flex;
		justify-content: center;
		height: 60px;
	}
	.header-img{
		height: 60px;
		width: 40%;
		text-align: center;
		line-height: 60px;
		cursor: pointer;
	}
	.header-img img{
		width: 123pt;
		height: 26pt;
	}
	.header-iphone{
		height: 60px;
		width: 17%;
		text-align: left;
		font-size: 10pt;
		line-height: 60px;
		position: relative;
		left: -5%;
	}
	.el-menu--horizontal .el-menu li,.el-menu--popup-bottom-start{
		background: rgba(0,0,0,0.6) !important;
	}
	.el-menu--horizontal .el-menu{
		background: transparent;
	}
	.el-menu--popup  .el-menu-item{
		color: #FFFFFF !important;
		border-bottom: 1px solid rgba(238,238,238,.1);
	}
	.el-menu--popup .el-menu-item:hover{
		color: rgba(255, 150, 0, 1) !important;
	}
</style>

<template>
	<div>
		<index></index>
		<img src="../assets/3-1/banner1.jpg" alt="" style="width: 100vw;">
		<top></top>
		<img src="../assets/3-1/3-1-1.png" alt="" style="width: 100vw;">
		
		<div><visit></visit></div>
		<footervue></footervue>
	</div>
</template>

<script>
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
		};
	},
	methods: {
	}
};
</script>

<style scoped="scoped">
	
</style>

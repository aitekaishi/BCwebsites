<template>
	<div>
		<index></index>
		<img src="../assets/4/banner.png" alt="" style="width: 100vw;">
		<top></top>
		<img src="../assets/4/4-1.png" alt="" style="width: 100vw;">
		<div style="padding: 0 0 100px 0;background: #FCFCFC;margin-top: 81px;">
			<div style="height: 1px;"></div>
			<visit></visit>
		</div>
		<footervue></footervue>
	</div>
</template>

<script>
	import top from './top.vue';
	import index from './header.vue';
	import footervue from './footer-vue.vue';
	import server from './server-path.vue';
	import visit from './vistit.vue';
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

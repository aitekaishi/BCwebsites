<template>
	<div style="position: fixed;z-index: 100000;right: 0;cursor: pointer;">
		<!-- <div>
			<figure style="display: inline-block;border: 1px solid #999999;padding: 3px;text-align: center;background: #FFFFFF;">
				<img src="../assets/icon_zhxzx.png" alt="">
				<figcaption>在线咨询</figcaption>
			</figure>
		</div> -->
		<div @click="top">
			<figure class="hvr-bounce-in" style="display: inline-block;border: 1px solid #999999;padding: 3px;text-align: center;background: #FFFFFF;">
				<img src="../assets/icon_hddb.png" alt="">
				<figcaption>回到顶部</figcaption>
			</figure>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods: {
			top(){
				$('body,html').animate({scrollTop:0},300)
			}
		}
	};
</script>

<style>
</style>

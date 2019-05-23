<template>
	<div>
		<index></index>
		<img src="../assets/3-2/banner.jpg" alt="" style="width: 100vw;">
		<top></top>
		<div style="text-align: center;font-size: 16pt;margin-top: 51pt;color: #333333;">
			服务说明
		</div>
		<div
			style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;margin-bottom: 40px;"
		></div>
		<div class="grad" style="width: 1200px;margin: 0 auto;">
			<div>保险责任</div>
			<div>方案一</div>
			<div>方案二</div>
			<div>方案三</div>
			<div>累计赔偿限额</div>
			<div>20000元</div>
			<div>50000元</div>
			<div>100000元</div>
			<div>每次事故赔偿限额</div>
			<div>7000元</div>
			<div>20000元</div>
			<div>30000元</div>
			<div>每次事故绝对免赔额</div>
			<div>200元</div>
			<div>200元</div>
			<div>200元</div>
			<div>保险费</div>
			<div>99元</div>
			<div>199元</div>
			<div>299元</div>
		</div>
		<div class="div">
			
                            如果竣工以后工地出现问题，优家是否会进行赔偿？<br>
监理老师每次上门都会有电子版报告，验收时三方在场进行验收规避问题产生。现优家与中国人寿保险合作，购买99元的保险服务，当您的监理服务结束后，会为您生成一个保单，最高保额为20000元。

                        
		</div>
		<div class="div">
			
                            如果竣工后工地出现问题，怎么报险？<br>
当监理服务结束后一年内，工地如果出现问题客户直接拨打中国人寿保险报险电话：95519，中国人寿安排专业定损人员上门查看，确认责任后由中国人寿指派维修服务，由专业的施工队进行维修。

                        
		</div>
		<div class="div">
			
                            保险服务怎么收费？<br>
保险服务分为三档，一档价值99元最高保20000元，二档价值199元最高保50000元，三档价值299元保100000元。
                        
		</div>
		<div style="padding: 0 0 100px 0;background: #FCFCFC;margin-top: 81px;">
			<div style="height: 1px;"></div>
			<visit></visit>
		</div>
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
	.grad{
		border: 1px solid #000000;
		display: grid;
		grid-template-columns: 300px 300px 300px 300px;
		grid-template-rows: 72px 72px 72px 72px 72px;
		text-align: center;
	}
	.grad div{
		font-size: 22px;
		line-height: 72px;
		border: 1px solid #000000;
	}
	.div{
		width: 1200px;
		margin: 0 auto;
		margin-top: 33px;
		font-size: 20px;
	}
</style>

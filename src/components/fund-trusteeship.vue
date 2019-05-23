<template>
	<div>
		<index></index>
		<img src="../assets/3-3/banner.jpg" alt="" style="width: 100vw;">
		<top></top>
		<img src="../assets/3-3/3-3-1.png" alt="" style="width: 100vw;">
		<!-- <div style="text-align: center;font-size: 16pt;margin-top: 51pt;color: #333333;">
			服务说明
		</div>
		<div
			style="width: 61pt;height: 2pt;background: #FF9900;margin: 0 auto;margin-top: 5pt;margin-bottom: 40px;"
		></div>
		<div style="width: 1200px;
		margin: 0 auto;
		margin-top: 33px;
		font-size: 20px;">
			通过银行专属托管账号，保障资金安全，先施工再付款，支付权转移保证施工方必须对违规施工行为进行整改，避免后期扯皮，犯规和卷资金跑路等现象发生。
		</div>
		<div style="width: 1200px;margin: 0 auto;margin-top: 28px;">
			<div style="display: inline-block;width: 8px;height: 28px;background: #FF9900;"></div>
			<div style="display: inline-block;font-size: 24px;line-height: 28px;height: 28px;position: relative;top:-5px;">托管支付方案一</div>
		</div>
		<div class="grad1">
			<div class="item1" style="text-align: center;padding-left: 0;line-height: 50px;">时间点</div>
			<div class="item2" style="text-align: center;padding-left: 0;line-height: 50px;">业主支付给监理方</div>
			<div class="item3" style="text-align: center;padding-left: 0;line-height: 50px;">监理方支付给施工方</div>
			<div class="item4" style="text-align: center;padding-left: 0;line-height: 50px;">三方签约</div>
			<div class="item5" style="line-height: 50px;">支付托管业务是在业主与施工方签订合同的同时，加入监理方签订三方协议，业主支付首付款合同额的30%</div>
			<div class="item6" style="text-align: center;padding-left: 0;">水电路改造</div>
			<div class="item7" style="line-height: 50px;">水电定位后（材料进场前），由施工方出具书面承诺：<br> 
（1）对水电改造结算费用做出预估；<br>
（2）承诺超出预估费用5%-10%，超出部分，由施工方自行承担。 <br>
水电改造结束且验收合格后，业主将水电改造费用直接支付给施工方。<br> 
（如施工方按照点位/平米全包则可将此款项合并到装修合同预算中）
</div>
			<div class="item8" style="text-align: center;padding-left: 0;line-height: 50px;">全部隐蔽工程验收
</div>
			<div class="item9">30%（累计支付60%）</div>
			<div class="item10" style="text-align: center;padding-left: 0;line-height: 100px;">验收合格后支付第一笔合同款30%（累计支付30%）</div>
			<div class="item11" style="text-align: center;padding-left: 0;line-height: 50px;">瓷砖完工验收</div>
			<div class="item12" style="text-align: center;padding-left: 0;line-height: 50px;">油工木工验收</div>
			<div class="item13" style="line-height: 50px;">40%（累计支付100%）</div>
			<div class="item14" style="text-align: center;padding-left: 0;line-height: 50px;">验收合格后支付第二笔合同款30%（累计支付60%）</div>
			<div class="item15">竣工验收</div>
			<div class="item16">/</div>
			<div class="item17">验收合格后支付第三笔合同款30%（累计支付90%）</div>
			<div class="item18">竣工后10个工作日</div>
			<div class="item19">/</div>
			<div class="item20">业主无任何投诉或施工方已将投诉处理完结，施工方与业主签订额外保修协议，监理方支付第四笔合同款10%（累计支付100%）</div>
			<div class="item21">备注说明</div>
			<div class="item22">如施工过程中产生业主主动增项，在托管金额外由业主单独支付；如产生减项，则从下次<br>付款中扣除，当扣除金额大于等于尚在托管的金额时，由3方协商重新拟定托管方式，无<br>法协商时可解除托管支付协议。</div>
		</div> -->
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
	.grad1{
		width: 1200px;
		margin: 0 auto;
		margin-top: 28px;
		border: 1px solid #000000;
		display: grid;
		grid-template-columns: 200px 400px 600px ;
		grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
		text-align: left;
	}
	.grad1 div{
		font-size: 21px;
		border: 1px solid #000000;
		padding-left: 20px;
	}
	.item1,.item2,.item3{
		line-height: 50px;
	}
	.item4{
		grid-row-start: 2;
		grid-row-end: 4;
		line-height: 100px;
	}
	.item5{
		grid-row-start: 2;
		grid-row-end: 4;
		grid-column-start: 2;
		grid-column-end: 4;
	}
	.item6{
		grid-row-start: 4;
		grid-row-end: 9;
		line-height: 250px;
	}
	.item7{
		grid-row-start: 4;
		grid-row-end: 9;
		grid-column-start: 2;
		grid-column-end: 4;
	}
	.item9{
		grid-row-start: 9;
		grid-row-end: 11;
		grid-column-start: 2;
		grid-column-end: 3;
		line-height: 100px;
	}
	.item10{
		grid-row-start: 9;
		grid-row-end: 11;
		grid-column-start: 3;
		grid-column-end: 4;
		line-height: 100px;
	}
	.item18{
		grid-row-start: 13;
		grid-row-end: 16;
		line-height: 150px;
	}
	.item19{
		grid-row-start: 13;
		grid-row-end: 16;
		grid-column-start: 2;
		grid-column-end: 3;
		line-height: 150px;
	}
	.item20{
		grid-row-start: 13;
		grid-row-end: 16;
		grid-column-start: 3;
		grid-column-end: 4;
		line-height: 50px;
	}
	.item21{
		grid-row-start: 16;
		grid-row-end: 19;
		line-height: 150px;
	}
	.item22{
		grid-row-start: 16;
		grid-row-end: 19;
		grid-column-start: 2;
		grid-column-end: 4;
		line-height: 50px;
	}
</style>

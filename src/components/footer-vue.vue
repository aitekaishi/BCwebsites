<template>
	<div style="background: #333333;margin-top: 40pt;">
		<div class="footer">
			<div>
				<div style="font-size: 16pt; color: #CCCCCC;">
					400-611-8860
				</div>
				<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
					周一至周六 9：00-18：00
				</div>
				<div style="font-size: 10pt; color: #CCCCCC;margin-top: 20pt;line-height: 17pt;">
					佰橙优家：让天下没有难做的装修
				</div>
				<!-- <div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
					互联网家装监理公司
				</div>
				<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
					客户至上，专注口碑
				</div> -->
				<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
					邮箱：2215544625@qq.com
				</div>
				<div style="width: 280px;display: flex;">
					<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;width: 60px;">
						地址：
					</div>
					<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;width: 220px;position: relative;left: -20px;">
						湖南省长沙市天心区湘府中路198号新南城商务中心A栋822号
					</div>
				</div>
			</div>
			<div>
				<div class="L00" style="font-size: 10pt; color: #CCCCCC;line-height: 34pt;display: inline-block;cursor: pointer;" @click="index(1)">
					首页
				</div><br>
				<div class="L00" style="font-size: 10pt; color: #CCCCCC;line-height: 34pt;display: inline-block;cursor: pointer;" @click="index(2)">
					管家服务
				</div><br>
				<div class="L00" style="font-size: 10pt; color: #CCCCCC;line-height: 34pt;display: inline-block;cursor: pointer;" @click="index(3)">
					特色服务
				</div><br>
				<div class="L00" style="font-size: 10pt; color: #CCCCCC;line-height: 34pt;display: inline-block;cursor: pointer;" @click="index(4)">
					关于我们
				</div>
				
			</div>
			<div>
				<figure style="text-align: center;">
					<div>
						<img src="../../build/logo.png" alt="" style="width: 50pt;hanging-punctuation: 50pt;">
					</div>
					<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
						互联网家装监理公司
					</div>
					<div style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
						客户至上，专注口碑
					</div>
					<!-- <figcaption style="font-size: 10pt; color: #CCCCCC;line-height: 17pt;">
						扫一扫关注二维码
					</figcaption> -->
				</figure>
			</div>
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
		index(index){
			let that = this
			$('body,html').animate({scrollTop:0},0)
			if(index == 1){
				that.$router.push('/')
				localStorage.setItem('index',1)
			}else if(index == 2){
				that.$router.push('/2-1')
				localStorage.setItem('index','2-1')
			}else if(index == 3){
				that.$router.push('/3-1')
				localStorage.setItem('index','3-1')
			}else{
				that.$router.push('/4')
				localStorage.setItem('index',4)
			}
		}
	}
};
</script>

<style scoped="scoped">
	.footer{
		width: 600pt;
		display: flex;
		padding: 52pt 0 63pt 0;
		justify-content: space-between;
		margin: 0 auto;
	}
	.L00:hover{
		color: #FF9900 !important;
		text-decoration: underline;
	}
</style>

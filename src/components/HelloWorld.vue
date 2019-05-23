<template>
	<div class="content">
		<div class="content-one">
			<div class="content-one-img"><img src="http://lc-ndknejad.cn-n1.lcfile.com/ed023933100ad5d6baca/icon-shezhi%402x.png" mode="widthFix" /></div>
			<div class="content-one-contain">
				<div class="content-one-contain-img"></div>
				<div class="content-one-contain-name">{{ username }}</div>
			</div>
		</div>

		<div class="bottom"></div>

		<div class="content-two">
			<div class="content-two-one" @click="aaa">
				<img src="http://lc-ndknejad.cn-n1.lcfile.com/a5a4b5a4bf33b0fe8ac3/icon_zhxdw%20%E6%8B%B7%E8%B4%9D%402x.png" ></img>
				<div>装修信息</div>
			</div>
			<div class="content-two-one" @click="bbb">
				<img src="http://lc-ndknejad.cn-n1.lcfile.com/695b752fa3510101665d/icon_yzhxx%20%E6%8B%B7%E8%B4%9D%402x.png"></img>
				<div>业主信息</div>
			</div>
		</div>
		<div class="bottom"></div>
		<div>
			<div @click="changeli(index,item)" v-for="(item, index) in items" :key="index">
			<div :class="[{active:item.show}]" style="font-size: 3vw;padding: 2vw;padding-top: 3vw;">
			<div style="position: relative;top: 1vw;left: 2vw;">{{item.title}}</div>
			<div :class="[{disnone:item.show}]" style="text-align: right;position: relative;top: -3vw;"><img src="http://lc-ndknejad.cn-n1.lcfile.com/2785d45f43cb988711af/icon_xiangyou%402x.png" alt="" style="width: 2vw;height: 2vw;"></div>
			<div :class="[{disnone:!item.show}]" style="text-align: right;position: relative;top: -3vw;"><img src="http://lc-ndknejad.cn-n1.lcfile.com/57f55d458f8b29b1ec33/icon_xiangxia%402x.png" alt="" style="width: 2vw;height: 2vw;"></div>
			</div>
			<div v-show="item.show" style="display: flex;height: 28vw;"> 
                        <div style="width: 24vw;border-right: 0.1vw solid #CCCCCC;display: inline-block;text-align: center;height: 24vw;padding-top: 6vw;box-sizing: border-box;cursor: pointer;" v-for="(itema,index) in item.subItem" v-on:click.stop="serverClick(itema.id)">
													<div>
														<img :src="itema.img" style="width: 10vw;height: 10vw;"></img>
													</div>
													<div style="height: 1vw;"></div>
						<div style="width: 20vw;margin: 0 auto;font-size: 2vw;">{{ itema.title }}</div>
						</div>
                    </div>
										<div class="bottom"></div>
			</div>
		</div>
	</div>
</template>

<script>
import * as leanCloud from 'leancloud-storage';
import axios from 'axios';
export default {
	data() {
		return {
			items: [
				{
					title: '验房',
					subItem: [
						{ title: '精装房验房', img: 'http://lc-ndknejad.cn-n1.lcfile.com/ab002005410d6165dbc4/icon_jingzhuang%20%E6%8B%B7%E8%B4%9D%202%402x.png', id: 1 },
						{ title: '毛坯房验房', img: 'http://lc-ndknejad.cn-n1.lcfile.com/4af72d6a86bf5e9ad99b/icon_maopi%20%E6%8B%B7%E8%B4%9D%202%402x%20%281%29.png', id: 2 }
					],
					show: false
				},
				{
					title: '前期审核',
					subItem: [
						{ title: '图纸审核', img: 'http://lc-ndknejad.cn-n1.lcfile.com/bdd9a4607759cabb9219/icon_tzhshh%402x.png', id: 3 },
						{ title: '预算审核', img: 'http://lc-ndknejad.cn-n1.lcfile.com/b136b5e6351fc994bc22/icon_ysshh%402x.png', id: 4 },
						{ title: '合同法务陪签', img: 'http://lc-ndknejad.cn-n1.lcfile.com/4c4305b9d4ccf483998f/icon_htfwpq%402x.png', id: 5 }
					],
					show: false
				},
				{
					title: '水电节点验收',
					subItem: [
						{ title: '开工交底', img: 'http://lc-ndknejad.cn-n1.lcfile.com/bf53736ccb9ef04d8fe6/icon_kgjd%402x.png', id: 6 },
						{ title: '砌墙及墙体抹灰验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/05bbc10ef12e94078092/icon_qmxt%20%E6%8B%B7%E8%B4%9D%402x.png', id: 7 },
						{ title: '水电巡检及材料验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/6ea55120209dfb0f4911/icon_shdclysh%20%E6%8B%B7%E8%B4%9D%402x.png', id: 8 },
						{ title: '水电隐蔽工程验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/43d6af94ed8d4d4ff189/icon_shdyb%20%E6%8B%B7%E8%B4%9D%402x.png', id: 9 }
					],
					show: false
				},
				{
					title: '泥木节点验收',
					subItem: [
						{ title: '防水施工验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/7d5429effcec67d37bfb/icon_fshysh%20%E6%8B%B7%E8%B4%9D%402x.png', id: 10 },
						{ title: '泥水铺贴完工验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/4da7b652b7c180629f4f/icon_zhplx%20%E6%8B%B7%E8%B4%9D%402x.png', id: 11 }
					],
					show: false
				},
				{
					title: '木作节点验收',
					subItem: [
						{ title: '木制作材料验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/d158cf523ce969af2f7e/icon_mzcl%20%E6%8B%B7%E8%B4%9D%402x.png', id: 12 },
						{ title: '木作面层工程质量验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/ff74166f3cc158618585/icon_ddmc%20%E6%8B%B7%E8%B4%9D%202%402x.png', id: 13 },
						{ title: '吊顶面层工程质量验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/7ceeda18eda459585fd0/icon_ddmc%20%E6%8B%B7%E8%B4%9D%402x.png', id: 14 },
						{ title: '木作完工验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/de4d054c2b845f3ea92c/icon_mzhmc%20%E6%8B%B7%E8%B4%9D%402x.png', id: 15 }
					],
					show: false
				},
				{ title: '中期验收', subItem: [{ title: '中期验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/65fe1eae39c3b99a4e68/icon_zhqiysh%402x.png', id: 16 }],show: false },
				{
					title: '油漆节点验收',
					subItem: [
						{ title: '油漆、墙漆材料验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/bbd3015e9fdb89986855/icon_yqyqcl%20%E6%8B%B7%E8%B4%9D%402x.png', id: 17 },
						{ title: '油漆、墙漆、施工验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/008330726fc7df8ee8bb/icon%20_tzhmc%20%E6%8B%B7%E8%B4%9D%402x.png', id: 18 }
					],
					show: false
				},
				{
					title: '成品安装',
					subItem: [
						{ title: '定制橱柜安装验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/b2df94247b744f674503/icon_zhtchg%20%E6%8B%B7%E8%B4%9D%402x.png', id: 19 },
						{ title: '木门及门套窗套安装验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/74fa00375129a278e832/icon_mjmt%20%E6%8B%B7%E8%B4%9D%402x.png', id: 20 },
						{ title: '地板安装验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/3a87063324c4cc6064a0/icon_mdbanzh%20%E6%8B%B7%E8%B4%9D%402x.png', id: 21 },
						{ title: '卫浴安装验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/8fb7d6f02eb178df64dc/icon_wyazh%402x.png', id: 22 }
					],
					show: false
				},
				{
					title: '全屋竣工质量验收',
					subItem: [{ title: '全屋竣工质量验收', img: 'http://lc-ndknejad.cn-n1.lcfile.com/423e78240fbc04e71962/icon_qwjg%20%E6%8B%B7%E8%B4%9D%402x.png', id: 23 }],
					show: false
				},
				{
					title: '竣工结算',
					subItem: [{ title: '竣工结算', img: 'http://lc-ndknejad.cn-n1.lcfile.com/fb5f53f4558aee0ab464/icon_qwjg%20%E6%8B%B7%E8%B4%9D%202%402x.png', id: 24 }],
					show: false
				}
			],
			url: [
				//验房
				{ name: 'https://jinshuju.net/f/c2SpYm' },
				{ name: 'https://jinshuju.net/f/jLdN9g' },
				//前期审核
				{ name: 'https://jinshuju.net/f/uicQb3' },
				{ name: 'https://jinshuju.net/f/WN1Itp' },
				{ name: 'https://jinshuju.net/f/jCJZgk' },
				//水电节点验收
				{ name: 'https://jinshuju.net/f/q5iXOR' },
				{ name: 'https://jinshuju.net/f/taulfp' },
				{ name: 'https://jinshuju.net/f/Gqhagg' },
				{ name: 'https://jinshuju.net/f/rvqDii' },
				//泥木节点验收
				{ name: 'https://jinshuju.net/f/EGxhAS' },
				{ name: 'https://jinshuju.net/f/cwN7Wv' },
				//木作节点验收
				{ name: 'https://jinshuju.net/f/wWVAX2' },
				{ name: 'https://jinshuju.net/f/53dqUl' },
				{ name: 'https://jinshuju.net/f/kc0vPj' },
				{ name: 'https://jinshuju.net/f/ggmb32' },
				//中期验收
				{ name: 'https://jinshuju.net/f/GPNqEu' },
				//油漆节点验收
				{ name: 'https://jinshuju.net/f/2Z2VY6' },
				{ name: 'https://jinshuju.net/f/QyTpyn' },
				//成品安装
				{ name: 'https://jinshuju.net/f/PmOGeu' },
				{ name: 'https://jinshuju.net/f/boE6qj' },
				{ name: 'https://jinshuju.net/f/pAKBMT' },
				{ name: 'https://jinshuju.net/f/yScjZe' },
				//全屋竣工质量验收
				{ name: 'https://jinshuju.net/f/NtuTMq' },
				//竣工结算
				{ name: 'https://jinshuju.net/f/5Wbts5' }
			],
			name: '',
			username: ''
		};
	},
	
	updated(){
		
	},
	methods: {
		aaa(){
			window.open('https://jinshuju.net/f/6nS1h4?x_field_1=' + this.name);
		},
		bbb(){
			window.open('https://jinshuju.net/f/ka6W3S' + '?x_field_1=' + this.name);
		},
		serverClick(index) {
			let _this = this;
			for (let i = 0; i < _this.url.length; i++) {
				if (index == i + 1) {
					window.open(_this.url[i].name + '?x_field_1=' + _this.name);
				}
			}
		},
		changeli: function(ind, item) {
                this.items.forEach(i => {
                    if (i.show !== this.items[ind].show) {
                        i.show = false;
                    };
                });
                item.show = !item.show;
            },
            doThis: function(index) {
                alert(index)
            }
	},
	created() {
		let _this = this
		/* console.log($)
		$.ajax({ url: "https://open.zjurl.cn/connect/qrconnect/page/sso/?redirect_uri=http%3a%2f%2fpre.h5.zechang360.com%2f&app_id=cli_9c5e4c186a301108",type:'GET', success: function(res){
		 console.log(res)
		}}); */
		var code = location.search.replace('?code=','').replace(/\&.*/,'')
		console.log(code)
		var code1 = code.replace('%','\%')
		console.log($)
		/* $.post("https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal", {
				app_id:"cli_9c5e4c186a301108",
				app_secret:"u1EOb5vvPlnYoWkmoJN26g7mwNE1QL0v"
			}, 
            function(data){ 
                alert(data);
            },
            function (e) {
                console.log(e)
            }
		) */
		$.ajax({
            type:"post",
            url:"https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal",
            data:{ //【这里填写是传给服务端的数据 可传可不传 数据必须是json格式】
                "app_id":"cli_9c5e4c186a301108",
                "app_secret":"u1EOb5vvPlnYoWkmoJN26g7mwNE1QL0v"
            },
            dataType:'json',  //【这里要小心啊，不要用jsonp，一定是json】
            crossDomain: true,  //【这个很重要，一定要加】
            success:function(result){
                console.log(result);
            },
            error:function(result){
                console.log(result);
            }
        });
		/* $.post("https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal",
		  {
			app_id:"cli_9c5e4c186a301108",
			app_secret:"u1EOb5vvPlnYoWkmoJN26g7mwNE1QL0v"
		  },
		  function(data,status){
			console.log(data.app_access_token)
			$.post("https://open.zjurl.cn/connect/qrconnect/oauth2/access_token/",
			  {
				"app_access_token":data.app_access_token,
				"grant_type":"authorization_code",
				"code":code
			  },
			  function(data,status){
				console.log(data)
			  });
		  }); */
		/* axios.post('https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal', {
			"app_id":"cli_9c5e4c186a301108",
			"app_secret":"u1EOb5vvPlnYoWkmoJN26g7mwNE1QL0v"
		})
		.then(function (response) {
		  console.log(response.data.app_access_token);
		  axios.post('https://open.zjurl.cn/connect/qrconnect/oauth2/access_token/', JSON.stringify({
		    "app_access_token":response.data.app_access_token,
			"grant_type":"authorization_code",
			"code":code
		  }))
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		})
		.catch(function (error) {
		  console.log(error);
		}); */
		//localStorage.removeItem('feishuId')
		/* if (localStorage.getItem('feishuId') == undefined) {
			_this.$router.push('/login');
		} else {
			_this.name = localStorage.getItem('feishuId')
			_this.username = localStorage.getItem('name');
		} */
	}
};
</script>

<style scoped>
.content-one {
	width: 90vw;
	height: 120px;
	margin: 0 auto;
	border-radius: 12px;
	background: linear-gradient(#ff9900, #f1b04d);
	box-sizing: border-box;
	padding: 20px;
}
.content-one-img {
	text-align: right;
}
.content-one-contain {
	display: flex;
	position: relative;
	top: -50px;
}
.content-one-contain-img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: #cccccc;
}
.content-one-contain-name {
	height: 120px;
	line-height: 120px;
	margin-left: 20px;
	color: #ffffff;
	font-size: 28px;
	position: relative;
	top: -20px;
}
.content-one-img img {
	width: 48px;
	height: 48px;
}
.content-two {
	display: flex;
	height: 20vw;
	width: 95vw;
	box-sizing: border-box;
}
.content-two img,
.server-contain img {
	width: 10vw;
	height: 10vw;
}
.content-two-one {
	width: 47.5vw;
	text-align: center;
	font-size: 2vw;
	cursor: pointer;
	padding-top: 3vw;
}
.bottom {
	height: 2vw;
	background: #f7f7f7;
}
.server {
	display: flex;
	justify-content: flex-start;
	height: ;
}
.server .server-contain {
	padding-top: 36px;
	width: 188.5px;
	height: 178px;
	border-right: 2px solid #cccccc;
	text-align: center;
	height: 180px;
	box-sizing: border-box;
	cursor: pointer;
}
uni-collapse-item {
	height: 180px;
}
.server-contain div {
	font-size: 24px;
	margin-top: 10px;
}
.active{
	background: #CCCCCC;
}
.disnone{
	display: none;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import supervision from '@/components/supervision'
import checkroom from '@/components/check-room'
import prioraudit from '@/components/prior-audit'
import nodecheck from '@/components/node-check'
import about from '@/components/about'
import environmental from '@/components/environmental'
import safe from '@/components/safe'
import fundtrusteeship from '@/components/fund-trusteeship'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
			meta: {
			  title: '佰橙优家'
			}
    },
		{
		  path: '/2-1',
		  name: 'supervision',
		  component: supervision,
			meta: {
        title: '全程监理服务'
      }
		},
		{
		  path: '/2-2',
		  name: 'checkroom',
		  component: checkroom,
			meta: {
        title: '验房服务'
      }
		},
		{
		  path: '/2-3',
		  name: 'prioraudit',
		  component: prioraudit,
			meta: {
        title: '前期审核服务'
      }
		},
		{
		  path: '/2-4',
		  name: 'nodecheck',
		  component: nodecheck,
			meta: {
        title: '节点验收服务'
      }
		},
		{
		  path: '/4',
		  name: 'about',
		  component: about,
			meta: {
        title: '关于我们'
      }
		},
		{
		  path: '/3-1',
		  name: 'environmental',
		  component: environmental,
			meta: {
        title: '环保检测'
      }
		},
		{
		  path: '/3-2',
		  name: 'safe',
		  component: safe,
			meta: {
        title: '监理工程险'
      }
		},
		{
		  path: '/3-3',
		  name: 'fundtrusteeship',
		  component: fundtrusteeship,
			meta: {
        title: '资金托管'
      }
		}
  ]
})

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import * as AV from 'leancloud-storage/dist/av.js'
	export default {
		created(){
			console.log('created')
			var APP_ID = 'AcsT2QV5TM3WHH3fmiN1O2yE-gzGzoHsz';
			var APP_KEY = 'd99l8Td2lkD2fnSxEsYkmNAg';
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			});
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

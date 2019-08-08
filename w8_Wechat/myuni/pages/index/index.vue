<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello Laoxie'
			}
		},
		
		// 小程序生命周期函数
		onLoad() {
			console.log('小程序生命周期函数：onLoad')
		},
		
		// Vue生命周期函数
		created(){
			console.log('Vue生命周期函数：created')
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>

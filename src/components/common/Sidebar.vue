<template>
	<div id="sidebar">
		<ul>
			<li v-for="(item,index) in sidebarList" class="list-item">
				<router-link :to="item.url">{{item.content}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {

	data() {
		return {
			sidebarList: [],
			customerSidebar: [
				{content: '用户列表', url: '/userList'},
				{content: '数据列表', url: '/dataList'},
				{content: '商品列表', url: '/shopList'},
				{content: '订单列表', url: '/orderList'},
				{content: '健康知识', url: '/healthyList'},
				{content: '固件列表', url: '/versionList'},
				{content: '反馈列表', url: '/feedbackList'},
				{content: 'banner列表', url: '/bannerList'}
			],
			adminSidebar: [
				{content: '注意事项', url: '/matters'},
				{content: '出租信息管理', url: '/renthouse'},
				{content: '出售信息管理', url: '/sellhouse'},
				{content: '求租信息管理', url: '/solicithouse'},
				{content: '购买信息管理', url: '/buyhouse'},
				{content: '会员信息管理', url: '/userlist'},
				{content: '留言板管理', url: '/msgborlist'}
			]
		}
	},

	created() {
		if (sessionStorage.userid) {
			this.sidebarList = this.sidebarList.concat(this.adminSidebar)
		} else {
			this.sidebarList = this.sidebarList.concat(this.customerSidebar)
		}
	},

	methods: {

	}
}
</script>

<style scoped>
#sidebar{
	position: fixed;
	padding-top: 30px;
	width: 180px;
	height: 100%;
	z-index: 10;
	border-right: 1px solid #fff;
  box-sizing: border-box;
}
.list-item{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-family: '微软雅黑';
}
.list-item a.active{
	display: block;
	background: rgba(7,17,27,1);
}
</style>

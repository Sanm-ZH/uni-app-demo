<template>
    <view class="page">
        <uni-title :title="tab" type="h2" align="center"></uni-title>
        <PageFooter></PageFooter>
        <TabBar @handleTabChange="handelTabChange" :tab="tab" :tabsList="tabsList" />
    </view>
</template>

<script>
export default {
    data() {
        return {
            tabsList: [
                {
                    text: '菜单1',
                    name: 'menu1',
                    icon: '/static/logo.png', //未选中图标
                    icon_a: '/static/logo.png', //选中图片
                    path: 'pages/tabBar/Home' //页面路径
                },
                {
                    text: '菜单2',
                    name: 'menu2',
                    icon: '/static/logo.png',
                    icon_a: '/static/logo.png',
                    path: 'pages/tabBar/DemoList'
                }
            ],
            tab: 'menu1'
        }
    },
    methods: {
        handelTabChange(tab) {
            this.tab = tab
        }
    }
}
</script>

<style lang="scss" scoped></style>

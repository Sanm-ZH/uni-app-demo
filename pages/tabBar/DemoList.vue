<template>
    <view>
        <uni-section class="section-title" title="项目列表" type="line"></uni-section>
        <uni-list>
            <uni-list-item
                v-for="(item, index) in projectList"
                :title="item.name"
                :note="item.component"
                :key="index"
                link
                :to="item.path"
            />
        </uni-list>
        <PageFooter></PageFooter>
    </view>
</template>

<script>
export default {
    data() {
        return {
            projectList: [
                { name: '皮卡丘', path: '/pages/demoList/Pikachu', component: 'Pikachu' },
                { name: '计数器', path: '/pages/demoList/NumberCount', component: 'NumberCount' },
                { name: '待办清单', path: '/pages/demoList/todoList/TodoList', component: 'TodoList' },
                { name: '底部菜单', path: '/pages/demoList/CustomTabs', component: 'CustomTabs' },
                { name: 'Canvas 时钟', path: '/pages/demoList/canvas/canvas-clock', component: 'CanvasClock' },
                { name: 'Gradient 按钮', path: '/pages/demoList/GradientButton', component: 'GradientButton' },
                { name: '太极 按钮', path: '/pages/demoList/canvas/TaichiCanvas', component: 'TaichiCanvas' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.section-title {
    /deep/ span {
        font-size: 18px;
    }
}
</style>

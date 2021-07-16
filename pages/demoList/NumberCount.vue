<template>
    <view class="page">
        <text class="page-info">可以用uni-ui数字输入框组件实现计数提高体验</text>
        <uni-section title="增减框" type="line"></uni-section>
        <view class="page-cont">
            <text>当前值：<text class="col-007AFF">{{ count }}</text></text>
            <uni-number-box class="margin-top-20" v-model="count" @change="changeValue" />
        </view>
        <PageFooter></PageFooter>
    </view>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        changeValue(value) {
            this.count = value
            console.log('返回数值：', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    height: auto;
    background-color: #f8f8f8;

    .page-info {
        padding: 15px;
        line-height: 20px;
        color: #3b4144;
        background-color: #ffffff;
    }

    .page-cont {
        background-color: #ffffff;
        padding: 15px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
</style>

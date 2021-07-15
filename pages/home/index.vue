<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area flex flex-column align-center">
            <text class="title">{{ title }}</text>
            <text class="age">{{ age }}</text>
            <text class="time">{{ time }}</text>
        </view>
        <PageFooter class="flex width100" />
    </view>
</template>

<script>
import { getGrowAge,dateFormat } from '../../common/utils.js'
export default {
    data() {
        return {
            title: 'uni-app-demo',
            birthday: '1990-1-1',
            age: null,
            time: null,
            intervalDate: null
        }
    },
    onShow() {
        this.age = getGrowAge(this.birthday, 'all1')
        this.time = dateFormat(new Date(), 'yyyy-M-d h:m:s')
        this.intervalDate = setInterval(() => {
            this.age = getGrowAge(this.birthday, 'all1')
            this.time = dateFormat(new Date(), 'yyyy-M-d h:m:s')
        }, 1000)
    },
    onHide() {
        clearInterval(this.intervalDate)
    },
    methods: {}
}
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60rpx;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}

.age {
    font-size: 12px;
    color: #007aff;
    margin-top: 30px;
}

.time {
    font-size: 14px;
    color: #4CD964;
    margin-top: 30px;
}
</style>

<template>
    <view class="tabbar" :style="{ 'padding-bottom': paddingBottomHeight + 'rpx' }" v-if="tabsList.length">
        <view class="tabbar-item" v-for="item in tabsList" :key="item.name" @click="tabbarChange(item)">
            <image class="item-img" :src="item.icon_a" v-if="tab === item.name && item.icon_a"></image>
            <image class="item-img" :src="item.icon" v-if="tab !== item.name && item.icon"></image>
            <view class="item-name" :class="{ tabbarActive: tab === item.name }" v-if="item.text">{{ item.text }}</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        tab: String,
        tabsList: Array
    },
    data() {
        return {
            paddingBottomHeight: 0 //苹果X以上手机底部适配高度
        }
    },
    created() {
        let that = this
        uni.getSystemInfo({
            success: function(res) {
                let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15']
                model.forEach(item => {
                    //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
                    if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
                        that.paddingBottomHeight = 40
                    }
                })
            }
        })
    },
    methods: {
        tabbarChange(item) {
            this.$emit('handleTabChange', item.name)
        }
    }
}
</script>

<style lang="scss" scoped>
.tabbarActive {
    color: #007aff !important;
}
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100rpx;
    background-color: #ffffff;
    border-top: 0.5px solid #d5d5d5;
    .tabbar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100rpx;
        .item-img {
            margin-bottom: 4rpx;
            width: 46rpx;
            height: 46rpx;
        }
        .item-name {
            font-size: 26rpx;
            color: #a3a3a3;
        }
    }
}
</style>

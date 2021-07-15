<template>
    <page-meta
        :background-text-style="bgTextStyle"
        :background-color="bgColor"
        :background-color-top="bgColorTop"
        :background-color-bottom="bgColorBottom"
        :scroll-top="scrollTop"
        page-style="color: green"
        root-font-size="16px"
    >
        <navigation-bar
            :title="nbTitle"
            :loading="nbLoading"
            :front-color="nbFrontColor"
            :background-color="nbBackgroundColor"
        />
    </page-meta>
    <view class="content"></view>
</template>

<script>
export default {
    data() {
        return {
            bgTextStyle: 'dark',
            scrollTop: '200rpx',
            bgColor: '#ff0000',
            bgColorTop: '#00ff00',
            bgColorBottom: '#0000ff',
            nbTitle: '标题',
            nbLoading: false,
            nbFrontColor: '#000000',
            nbBackgroundColor: '#ffffff'
        }
    },
    onLoad() {},
    methods: {}
}
</script>

<script>
export default {
    onLaunch: function() {
        console.log('App Launch')
    },
    onShow: function() {
        console.log('App Show')
    },
    onHide: function() {
        console.log('App Hide')
    }
}
</script>
<style>
/*每个页面公共css */
@import url('./common/common.css');

page {
    background-color: #f8f8f8;
    font-size: 14px;
}

.uni-section__head-tag.line {
    background-color: #007aff !important;
}

input,
textarea {
    color: #007aff;
    caret-color: #007aff;
}
</style>

<template>
    <view>
        <button
            type="text"
            :class="{ button: true, 'button-hover': isHover }"
            :style="{ 'min-width': '280px', '--x': cssX, '--y': cssY }"
            @touchmove="handleTouchmove"
            @touchstart="handleTouchstart"
            @mousemove="handleTouchmove"
            @touchend="handleTouchend"
        >
            My Button
        </button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            cssX: '0px',
            cssY: '0px',
            isHover: false
        }
    },
    methods: {
        handleTouchstart() {
            this.isHover = true
        },
        handleTouchend() {
            this.isHover = false
        },
        handleTouchmove(e) {
            let pageX = null
            let pageY = null

            if (e.type === 'mousemove') {
                pageX = e.pageX
                pageY = e.pageY
            }
            if (e.type === 'touchmove') {
                pageX = e.touches[0].pageX
                pageY = e.touches[0].pageY
            }

            const x = pageX - e.target.offsetLeft
            const y = pageY - e.target.offsetTop

            this.$nextTick(function() {
                this.cssX = `${x}px`
                this.cssY = `${y}px`
            })
        }
    }
}
</script>

<style scoped lang="scss">
.button {
    position: relative;
    appearance: none;
    background: #f72359;
    padding: 1em 2em;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
    margin: 1em;
}
.button span {
    position: relative;
}
.button::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4605f7c9, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
}
.button:hover::before {
    --size: 400px;
}
.button-hover {
    --size: 400px;
}
</style>

<template>
    <view>
        <div class="page-cont">
            <div id="container">
                <div id="nose"></div>
                <div class="eye eye-left"></div>
                <div class="eye eye-right"></div>
                <div class="upperLip"></div>
                <div id="lowerLip" class="lowerLip-wrapper" :style="{ display: isShow }">
                    <div class="lowerLip-cont"></div>
                </div>
                <div class="face face-left"></div>
                <div class="face face-right"></div>
            </div>
            <div class="masked">皮~皮卡丘</div>
            <div class="masked">新年快乐</div>
        </div>
    </view>
</template>

<script>
export default {
    data() {
        return {
            timeout: null,
            isShow: 'block'
        }
    },
    onLoad() {
        this.setTimeFun()
    },
    onHide() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    },
    methods: {
        setTimeFun() {
            this.timeout = setTimeout(() => {
                this.handleDiv('lowerLip')
            }, 1000)
        },
        handleDiv(divId) {
            this.$nextTick(() => {
                uni.createSelectorQuery()
                    .select(`#${divId}`)
                    .boundingClientRect(data => {
                        if (this.isShow === 'block') {
                            this.isShow = 'none'
                        } else {
                            this.isShow = 'block'
                        }
                        this.setTimeFun()
                    })
                    .exec()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-cont {
    background: #ffe000;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
}

#container {
    height: 50vh;
    width: 100vw;
    position: relative;
    box-sizing: border-box;
}

#nose {
    border: 10px solid transparent;
    position: absolute;
    left: 50%;
    top: 95px;
    transform: translateX(-50%);
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid black;
    border-radius: 50%;
    box-sizing: border-box;
}

.eye {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: #2e2e2e;
    border: 2px solid black;
    border-radius: 30px;
    top: 65px;
    box-sizing: border-box;
}

.eye-left {
    right: 50%;
    margin-right: 90px;
    box-sizing: border-box;
}

.eye-right {
    left: 50%;
    margin-left: 90px;
    box-sizing: border-box;
}

.eye::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 15px;
    left: 8px;
    position: absolute;
    border: 2px solid black;
    box-sizing: border-box;
}

.upperLip {
    position: absolute;
    top: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
}

.upperLip::before {
    content: '';
    display: block;
    width: 80px;
    height: 26px;
    border: 3px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 80px 40px;
    transform: rotateZ(-23deg);
    background: #ffe000;
    box-sizing: border-box;
}

.upperLip::after {
    content: '';
    display: block;
    width: 80px;
    height: 26px;
    border: 3px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 80px 40px;
    transform: rotateZ(23deg);
    background: #ffe000;
    box-sizing: border-box;
}

.lowerLip-wrapper {
    position: absolute;
    width: 100%;
    top: 130px;
    height: 130px;
    overflow: hidden;
}

.lowerLip-cont {
    position: absolute;
    border: 3px solid black;
    bottom: 0px;
    height: 1275px;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    border-top: none;
    border-bottom-left-radius: 100px 650px;
    border-bottom-right-radius: 100px 650px;
    border-top-left-radius: 100px 100px;
    border-top-right-radius: 100px 100px;
    background: #ff444f;
    box-shadow: inset 0 1145px 0 20px #9f000a;
    box-sizing: border-box;
}

.face {
    position: absolute;
    border: 3px solid black;
    background: red;
    top: 165px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    box-sizing: border-box;
}

.face-left {
    right: 50%;
    margin-right: 130px;
    box-sizing: border-box;
}
.face-right {
    left: 50%;
    margin-left: 130px;
    box-sizing: border-box;
}

.masked {
    text-align: center;
    margin-top: 30px;
    font-size: 35px;
    font-weight: bold;
    /*渐变背景*/
    background-image: -webkit-linear-gradient(
        left,
        #3498db,
        #f47920 10%,
        #d71345 20%,
        #f7acbc 30%,
        #ffd400 40%,
        #3498db 50%,
        #f47920 60%,
        #d71345 70%,
        #f7acbc 80%,
        #ffd400 90%,
        #3498db
    );
    color: transparent; /*文字填充色为透明*/
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; /*背景剪裁为文字，只将文字显示为背景*/
    background-size: 200% 100%; /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
    /* 动画 */
    animation: masked-animation 4s infinite linear;
    box-sizing: border-box;
}
@keyframes masked-animation {
    0% {
        background-position: 0 0; /*background-position 属性设置背景图像的起始位置。*/
    }
    100% {
        background-position: -100% 0;
    }
}
</style>

<template>
    <view class="page">
        <canvas
            id="canvasClockId"
            canvas-id="canvasClockId"
            style="width: 300px;height: 300px;"
            @error="canvasIdErrorCallback"
        ></canvas>
        <uni-dateformat :date="time" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
    </view>
</template>

<script>
export default {
    onReady() {
        this.handelCanvas()
    },
    data() {
        return {
            time: +new Date()
        }
    },
    methods: {
        handelCanvas() {
            const ctx = uni.createCanvasContext('canvasClockId', this)
            const radian180 = Math.PI / 180

            setInterval(() => {
                ctx.save()
                ctx.clearRect(0, 0, 300, 300)
                ctx.translate(150, 150) // 设置中心点，此时150，150变成了坐标的0，0
                ctx.save()

                // 画大圆
                ctx.beginPath()
                // 画圆线使用arc(中心点X,中心点Y,半径,起始角度,结束角度)
                ctx.arc(0, 0, 100, 0, 2 * Math.PI)
                ctx.stroke() // 执行画线段的操作
                ctx.closePath()

                // 画小圆
                ctx.beginPath()
                ctx.arc(0, 0, 5, 0, 2 * Math.PI)
                ctx.stroke()
                ctx.closePath()

                // 获取当前 时，分，秒
                let time = new Date()
                this.time = +time
                let hour = time.getHours() % 12
                let min = time.getMinutes()
                let sec = time.getSeconds()

                // 时针
                ctx.rotate(radian180 * (30 * hour - 90 + (30 * min) / 30))
                ctx.beginPath()
                // moveTo设置画线起点
                ctx.moveTo(-10, 0)
                // lineTo设置画线经过点
                ctx.lineTo(40, 0)
                // 设置线宽
                ctx.lineWidth = 10
                ctx.stroke()
                ctx.closePath()
                ctx.restore()
                ctx.save()

                // 分针
                ctx.rotate(radian180 * (6 * min - 90))
                ctx.beginPath()
                ctx.moveTo(-10, 0)
                ctx.lineTo(60, 0)
                ctx.lineWidth = 5
                ctx.strokeStyle = 'blue'
                ctx.stroke()
                ctx.closePath()
                ctx.restore()
                ctx.save()

                //秒针
                ctx.rotate(radian180 * (6 * sec - 90))
                ctx.beginPath()
                ctx.moveTo(-10, 0)
                ctx.lineTo(80, 0)
                ctx.lineWidth = 1
                ctx.strokeStyle = 'red'
                ctx.stroke()
                ctx.closePath()
                ctx.restore()
                ctx.save()

                // 绘制刻度，也是跟绘制时分秒针一样，只不过刻度是死的
                ctx.lineWidth = 1
                for (let i = 0; i < 60; i++) {
                    ctx.rotate((2 * Math.PI) / 60)
                    ctx.beginPath()
                    ctx.moveTo(90, 0)
                    ctx.lineTo(100, 0)
                    // ctx.strokeStyle = 'red'
                    ctx.stroke()
                    ctx.closePath()
                }
                ctx.restore()
                ctx.save()
                // 粗刻度
                ctx.lineWidth = 5
                for (let i = 0; i < 12; i++) {
                    ctx.rotate((2 * Math.PI) / 12)
                    ctx.beginPath()
                    ctx.moveTo(85, 0)
                    ctx.lineTo(100, 0)
                    // ctx.strokeStyle = 'red'
                    ctx.stroke()
                    ctx.closePath()
                }

                ctx.restore()
                ctx.restore()

                setTimeout(() => {
                    ctx.stroke()
                    ctx.draw()
                }, 200)
            }, 1000)
        },
        canvasIdErrorCallback(e) {
            console.error(e.detail.errMsg)
        }
    }
}
</script>

<style scoped lang="scss">
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
}
</style>

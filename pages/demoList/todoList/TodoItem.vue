<template>
    <view class="page" @touchstart="todoStart" @touchmove="todoMove" @touchend="todoEnd">
        <view :class="['todo-item', todo.completed ? 'completed' : '']" :style="'right:' + right + 'px'">
            <view
                type="checkbox"
                :class="['toggle', todo.completed ? 'toggle-check' : '']"
                @click="handleOptCompletedClick"
            ></view>
            <text class="todo-item-context">{{ todo.content }}</text>
        </view>
        <view class="todo-remove" :style="'right:' + delRigth + 'px'" @click="handleDelTodoCilck">删 除</view>
    </view>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            right: 0,
            delBtnWidth: 80
        }
    },
    computed: {
        delRigth() {
            return -this.delBtnWidth + this.right
        }
    },
    methods: {
        todoStart(e) {
            console.log('开始触发')
            var touch = e.touches[0]
            this.startX = touch.clientX
        },
        //触摸滑动
        todoMove(e) {
            console.log('滑动')
            this.right = 0
            var touch = e.touches[0]
            var disX = this.startX - touch.clientX
            if (disX >= 35) {
                if (disX > this.delBtnWidth) {
                    disX = this.delBtnWidth
                }
                this.right = disX
            } else {
                this.right = 0
            }
            // e.preventDefault()
        },
        //触摸滑动结束
        todoEnd(e) {
            console.log('滑动结束')
            if (Math.abs(this.right) < this.delBtnWidth) {
                this.right = 0
            }
        },

        handleDelTodoCilck() {
            this.$emit('del', this.todo.id)
        },
        handleOptCompletedClick() {
            this.$emit('opt', this.todo.id)
            this.right = 0
        }
    }
}
</script>

<style scoped lang="scss">
.page {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    overflow-x: hidden;
}
.todo-item {
    position: relative;
    background: #ffffff;
    font-size: 18px;
    width: 100%;
    transform: right 0.4s;

    .todo-item-context {
        white-space: pre-line;
        word-break: break-all;
        padding: 15px 15px 15px 5px;
        margin-left: 45px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #000;
        font-weight: 500;
    }
}
.completed {
    .todo-item-context {
        color: #c1c1c1;
    }
    color: #d9d9d9;
    text-decoration: line-through;
}
.toggle {
    text-align: center;
    width: 100%;
    height: 40px;
    position: absolute;
    top: -3px;
    bottom: 0;
    left: 0;
    margin: auto 0;
    border: none;
    outline: none;
    appearance: none;
}
.toggle:before {
    content: url('~@/static/round.png');
    position: absolute;
    left: 12px;
    top: 12px;
    cursor: pointer;
}
.toggle-check:before {
    content: url('~@/static/done.png');
    position: absolute;
    left: 12px;
    top: 12px;
    cursor: pointer;
}

.todo-remove {
    width: 80px;
    height: 100%;
    background-color: red;
    color: white;
    position: absolute;
    top: 0;
    right: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transform: right 0.4s;
}
</style>

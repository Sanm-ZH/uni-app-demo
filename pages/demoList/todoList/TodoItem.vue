<template>
    <view :class="['todo-item', todo.completed ? 'completed' : '']">
        <view
            type="checkbox"
            :class="['toggle', todo.completed ? 'toggle-check' : '']"
            :checked="todo.completed"
            @click="handleOptCompletedClick"
        />
        <label>{{ todo.content }}</label>
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
    methods: {
        handleDelTodoCilck() {
            this.$emit('del', this.todo.id)
        },
        handleOptCompletedClick() {
            this.$emit('opt', this.todo.id)
        }
    }
}
</script>

<style scoped lang="scss">
.todo-item {
    position: relative;
    background: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    label {
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
    label {
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
    content: url('/static/round.png');
    position: absolute;
    left: 12px;
    top: 12px;
    cursor: pointer;
}
.toggle-check:before {
    content: url('/static/done.png');
    position: absolute;
    left: 12px;
    top: 12px;
    cursor: pointer;
}
</style>

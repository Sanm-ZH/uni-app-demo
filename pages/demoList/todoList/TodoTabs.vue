<template>
    <view class="helper">
        <view class="left">
            <text class="margin-right-5 left-text" v-text="unFinishedNum"></text>
            iteams left
        </view>
        <view class="tabs">
            <view
                v-for="item in statusList"
                :key="item"
                :class="['tab-item', item, filter === item ? 'actived' : '']"
                @click="() => handelToggleFilterClick(item)"
                v-text="item"
            ></view>
        </view>
        <view class="clear" @click="handleClearAllCompletedClick">Clear completed</view>
    </view>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            required: true
        },
        filter: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            statusList: ['all', 'active', 'completed']
        }
    },
    computed: {
        unFinishedNum() {
            return this.todoList.filter(todo => !todo.completed).length
        }
    },
    methods: {
        handelToggleFilterClick(filter) {
            this.$emit('changeFilter', filter)
        },
        handleClearAllCompletedClick() {
            this.$emit('clearAll')
        }
    }
}
</script>

<style scoped lang="scss">
.helper {
    padding: 10px 10px 30px;
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    background-color: #ffffff;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 0 5px #d2d4da;
    margin-top: 10px;
}
.left,
.tabs {
    padding: 10px 10px 0px;
    box-sizing: border-box;
    color: #000;
    font-weight: 400;
}
.left,
.clear {
    width: 150px;
}
.left {
    text-align: left;
    .left-text {
        color: #007aff;
    }
}
.clear {
    text-align: right;
    cursor: pointer;
    border: 1px solid #e3e3e3;
    height: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 3px;
    margin-top: 10px;
    color: #b9b9b9;
    font-weight: bold;
    transition-property: text-shadow, box-shadow;
    transition-duration: 0.5s, 1s;
    &:active {
        text-shadow: 5px 3px 3px;
        box-shadow: 0 0 10px 2px;
    }
}
.tabs {
    width: 200px;
    display: flex;
    justify-content: space-around;
    & > .tab-item {
        font-weight: bold;
        display: inline-block;
        padding: 0px 10px;
        cursor: pointer;
        &.actived {
            background-color: #007aff;
            border-radius: 3px;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.5s;
        }
    }
}
@media (max-width: 28.125rem) {
    .helper {
        flex-direction: row;
        flex-wrap: wrap;
        position: sticky;
        bottom: 0;
    }
    .left {
        width: 6.25rem;
        padding: 0;
    }
    .tabs {
        padding: 0;
    }
    .clear {
        position: relative;
        left: calc(100% - 9.7rem);
    }
}
@media (max-width: 18.75rem) {
    .helper {
        flex-direction: row;
        flex-wrap: wrap;
        position: sticky;
        bottom: 0;
    }
    .left {
        padding: 0;
    }
    .tabs {
        padding: 0;
    }
    .clear {
        position: relative;
        left: 0;
    }
}
</style>

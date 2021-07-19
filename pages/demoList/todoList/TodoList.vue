<template>
    <view class="page">
        <view class="input-cont">
            <input
                placeholder="接下来要做什么？"
                v-model="inputText"
                @blur="handelAddTodo"
                @confirm="() => handelAddTodo('enter')"
                :focus="inputFocus"
                class="input-cont-input"
            />
        </view>
        <Item
            v-for="todo in filterTodoList"
            :todo="todo"
            :key="todo.id"
            @del="handleDeleteTodo"
            @opt="handelOptCompleted"
        />
        <view class="tabs-fixed">
            <Tabs
                :todoList="todoList"
                :filter="filter"
                @clearAll="handleClearAllCompleted"
                @changeFilter="handelChangeFilter"
            />
        </view>
        <PageFooter></PageFooter>
    </view>
</template>

<script>
import TodoItem from './TodoItem'
import TodoTabs from './TodoTabs'

export default {
    components: {
        Item: TodoItem,
        Tabs: TodoTabs
    },
    data() {
        return {
            inputText: '',
            inputFocus: true,
            todoList: [],
            filter: 'all'
        }
    },
    computed: {
        filterTodoList() {
            if (this.filter === 'all') {
                return this.todoList
            }
            const flag = this.filter === 'completed'
            return this.todoList.filter(todo => flag === todo.completed)
        }
    },
    methods: {
        handelAddTodo(type) {
            this.inputFocus = false
            if (!this.inputText.trim()) {
                return
            }
            this.todoList.unshift({
                id: +new Date(),
                content: this.inputText,
                completed: false
            })
            this.inputText = ''
            uni.pageScrollTo({
                duration: 100,
                scrollTop: 0
            })
            if (type === 'enter') {
                this.$nextTick(() => {
                    this.inputFocus = true
                })
            }
        },
        handleDeleteTodo(id) {
            this.todoList = this.todoList.filter(todo => todo.id !== id)
        },
        handelOptCompleted(id) {
            const activeTodoIndex = this.todoList.findIndex(todo => todo.id === id)
            this.todoList[activeTodoIndex]['completed'] = !this.todoList[activeTodoIndex]['completed']
        },

        handelChangeFilter(filter) {
            this.filter = filter
        },
        handleClearAllCompleted() {
            this.todoList = this.todoList.filter(todo => !todo.completed)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    height: 100%;
}
.input-cont {
    padding: 20px 0px;
    padding-left: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: sticky;
    top: var(--window-top);
    z-index: 99;
    box-shadow: 0 0 5px #d2d4da;
    margin-bottom: 10px;

    .input-cont-input {
        text-align: center;
    }
}
.tabs-fixed {
    z-index: 99;
    position: sticky;
    bottom: var(--window-bottom);
    background-color: #ffffff;
}
</style>

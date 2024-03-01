<template>
    <div class="task">
        <div class="task__info">
            <div v-if="!isEditing" class="task__info-head">{{ index + 1 }}.
                <span :class="{ 'done': isDone }">{{ task.title }}</span>
            </div>
            <input v-else type="text" v-model="title">

            <div v-if="!isEditing" class="task__info-body">{{ task.body }}</div>
            <div v-else>
                <input type="text" v-model="body">
                <button @click="editTask()">Обновить эту запись</button>
            </div>

        </div>
        <div class="task-options">
            <input @change="store.changeStatus(task.id)" v-model="isDone" type="checkbox" :checked="task.isDone" />
            <span @click="store.deleteTask(task.id)" class="material-symbols-outlined delete">delete</span>
            <span @click="isEditing = !isEditing" class="material-symbols-outlined edit">edit</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const { task, index } = defineProps(['task', 'index'])
import { useToDoStore } from '../stores/index'
const store = useToDoStore()

const isDone = ref(task.isDone)
const isEditing = ref(false)

const title = ref(task.title)
const body = ref(task.body)

function editTask() {
    store.editTask(task.id, title.value, body.value)
    isEditing.value = false
}
</script>

<style lang="scss" scoped>
.task {
    padding: 15px 20px;
    border: 1px solid black;
    border-radius: 12px;
    margin: 0 0 10px;

    display: flex;
    justify-content: space-between;

    &__info {
        width: 100%;

        &-head {
            font-size: 22px;
            padding: 0 0 5px;

            .done {
                text-decoration: line-through;
            }
        }

        &-body {
            padding: 10px 0 0;
            font-size: 16px;
            color: rgb(49, 49, 49);
        }
    }

    &-options {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            border: 1px solid black;
            height: 20px;
            width: 20px;
            margin: 0 0 5px;
        }

        span {
            color: black;
            cursor: pointer;
            transition: color 0.25s ease-in-out;

            &:hover {
                color: red;
            }
        }

        span.edit:hover {
            color: rgb(5, 255, 5);
        }
    }
}

input,
button {
    border: 1px solid #000;
    border-radius: 6px;
    width: 90%;

    padding: 10px 15px;
    margin: 0 0 5px;
    font-size: 16px;
}

button {
    background: transparent;
    cursor: pointer;
    margin: 0;

    &:hover {
        background: #000;
        color: #fff;
    }
}
</style>
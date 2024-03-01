<template>
    <div>
        <div class="title">Страница с задачами</div>

        <div v-if="store.tasks.length > 0" class="task-list">
            <Task v-for="(task, index) in store.tasks" :key="task.id" :task="task" :index="index" />
        </div>

        <div v-else class="empty-list">Список пока что пуст. Добавьте новую задачу!</div>

        <div class="form">
            Добавить новую задачу

            <input v-model.trim="title" type="text" placeholder="Название задачи...">
            <input v-model.trim="body" type="text" placeholder="Описание задачи...">
            <button @click="addNewTask()">Добавить запись</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Task from '../components/Task.vue'
import { useToDoStore } from '../stores/index'
const store = useToDoStore()


const title = ref('')
const body = ref('')

store.getTasksFromLocalStorage()

function addNewTask() {
    if (title.value && body.value) {
        store.addNewTask(title.value, body.value)
        title.value = ''
        body.value = ''
    }
}

</script>

<style lang="scss" scoped>
.task-list {
    width: 700px;
}

.empty-list {
    text-align: center;
    font-size: 18px;
    margin: 0 0 20px;
}


.form {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 12px;

    padding: 20px 30px;

    font-size: 20px;
    text-align: center;

    input,
    button {
        margin: 10px 0 0;
        width: 100%;
        border: 1px solid #000;
        border-radius: 6px;

        padding: 10px 15px;
        font-size: 16px;
    }

    button {
        background: transparent;
        cursor: pointer;

        &:hover {
            background: #000;
            color: #fff;

        }
    }
}
</style>
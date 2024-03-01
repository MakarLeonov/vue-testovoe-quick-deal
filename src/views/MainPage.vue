<template>
    <div>
        <div class="title">Главная страница</div>

        <p>Главная страница, созданная главным образом для демонстрации работы роутера</p>

        <p>В ходе выполнения я не стал заморачиваться со стилями, изобретать колесо, желая тем самым продемонстрировать
            именно логику, а не свои дизайнерское видение и умение начинять html различными css свойствами </p>

        <p>
            <router-link to="/tasks">Посмотреть задачи можно здесь-></router-link>
        </p>
    </div>
</template>

<style lang="scss" scoped>
p {
    font-size: 18px;
    text-align: center;
    margin: 0 0 20px;
}

a {
    display: inline-block;
    text-align: center;
    color: blue;
}
</style>
<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <router-link to="/">Tasks App</router-link>

      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/tasks">Задачи</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';

header {
  display: flex;
  justify-content: space-between;

  background-color: #292929;
  padding: 20px 50px;
  color: #fff;

  nav {
    display: flex;
    gap: 20px;
  }

  a:hover {
    color: orange;
  }
}

main {
  display: flex;
  justify-content: center;
}
</style>

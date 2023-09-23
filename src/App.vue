<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Content from './views/Content.vue'
import Footer from './views/Footer.vue'
</script>

<!-- keep alive will keep all of the components in the memory so the state persists when navigating back to them
setting a max will make the last naviagated componenet go out of memory-->
<template>
  <div class="wrapper">
    <Header />
    <Content class="content" />
    <Footer />
  </div>
</template>

<style scoped>
.content {
  margin: 0 !important;
  padding: 40px;
  background-color: rgb(233, 233, 233);
  min-height: 800px;
}
</style>
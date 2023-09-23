<script setup>
import { ref, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/Global.js'
import { useRouter } from 'vue-router';

const globalStore = useGlobalStore()

const router = useRouter()



</script>

<template>
    <div ref="home-container">
        <h2 class="text-center">something</h2>
    </div>
</template>

<style scoped>

</style>
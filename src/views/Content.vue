<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <RouterView class="content" v-slot="{ Component }">
            <keep-alive :max="10">
                <component :is="Component" />
            </keep-alive>
        </RouterView>
    </div>
</template>
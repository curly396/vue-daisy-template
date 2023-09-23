<script setup>
import { ref, computed } from 'vue'
import { useGlobalStore } from '@/stores/Global.js'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

//this is so we can v-model to the store directly
const { color } = storeToRefs(useGlobalStore())

const route = useRoute();

const inDoc = computed(()=>{
    return route.fullPath.indexOf('DocumentFramework') >= 0
}) 

</script>

<template>
    <div id="wrapper" 
    :style="{backgroundColor: color}"
    >
        <nav>
            <RouterLink to="/" active-class="active">
                <div>Home</div>
            </RouterLink>
            <RouterLink to="/Example" active-class="active">
                <div>Example</div>
            </RouterLink>
            <RouterLink to="/DocumentFramework/objGUID" :class="{ 'active': inDoc }">
                <div>Document</div>
            </RouterLink>
            <RouterLink to="/DragDrop" active-class="active">
                <div>Drag & Drop</div>
            </RouterLink>
        </nav>
        <input id="GFG_Color" type="color" class="m-4 form-control form-control-color" v-model="color">
    </div>
</template>

<style scoped>
#wrapper {
    display: flex;
    justify-content: space-between;
    height: 100px;
}

nav {
    display: flex;
    height: 100px;
}

nav a {
    color: white;
    padding: 30px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    background-color: black;
    opacity: .6;
}

.active {
    background-color: black;
    opacity: .6;
}
</style>
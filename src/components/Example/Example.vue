<script setup>
import { ref, reactive, onMounted, computed, onActivated } from 'vue'
import { useExampleStore } from '@/stores/Example'
import { useGlobalStore } from '../../stores/Global';

//this gives access to everything in the example store in Example.js
const exampleStore = useExampleStore()

const globalStore = useGlobalStore()

//variables, ref makes things reactive
//when changing a ref in the script you need to specify the value property i.e. msg.value = 'Some New Phrase'
//in the template you can just refer to the ref directly to render it or use a directive like v-model below
const msg = ref('Two Way Data Binding')

//calling an action from the store
exampleStore.getUsers()

</script>

<template>
    <div id="wrapper">
        <div id="container">
            <h2 class="my-2" style="min-height: 38.29px;">{{ msg }}</h2>
            <input v-model="msg" type="text" class="my-2">
            <div class="my-2" style="display: flex;gap: 5px;">
                <button v-on:click="exampleStore.increment()" style="width: 40px;">+</button>
                <button v-on:click="exampleStore.down()" style="width: 40px;">-</button>
                <h2 class="ms-4">{{ exampleStore.count }}</h2>
            </div>
            <div v-if="exampleStore.loading == true" class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <table v-if="exampleStore.loading == false" class="table my-2 shadow">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in exampleStore.users">
                        <td>{{ user.name.title }}</td>
                        <td>{{ user.name.first }}</td>
                        <td>{{ user.name.last }}</td>
                        <td>{{ user.login.username }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <button class="btn m-2" @click="exampleStore.getUsers()"
                        :style="{ backgroundColor: globalStore.color, color:'white' }">Refresh Users</button>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<style scoped>
table {
    border-radius: 10px;
    overflow: hidden;
}

button:hover {
    opacity: .8;
}

</style>
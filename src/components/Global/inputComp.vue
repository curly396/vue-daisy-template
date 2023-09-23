<script setup>
import { ref, computed } from 'vue'

defineProps(['type', 'modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <!-- money -->
    <div v-if="type == 1" class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" class="form-control"
            aria-label="Amount (to the nearest dollar)">
    </div>
    <!-- text -->
    <div v-if="type == 2" class="input-group mb-3">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" class="form-control"
            aria-label="text">
    </div>
    <!-- text area -->
    <div v-if="type == 3" class="input-group mb-3">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control"
            rows="3">
        </textarea>
    </div>
    <!-- file -->
    <div v-if="type == 4" class="input-group mb-3">
        <input class="form-control"
        type="file" id="formFileMultiple">
    </div>
</template>

<style scoped></style>
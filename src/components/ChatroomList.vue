<script setup lang="ts">
import { ref } from "vue";
import { allChats } from '../chatrooms';    

const chats = ref(allChats)
</script>

<template>
    <nav class="is-primary panel">
        <div v-for="chat of chats"
        class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
            {{ chat.name }}
        </div>
    </nav>
</template>
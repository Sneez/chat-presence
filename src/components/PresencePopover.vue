<script setup lang="ts">
import { Chatroom } from '../chatrooms'
import Popper from "vue3-popper";

defineProps<{
    chatroom: Chatroom
}>()

</script>

<template>

    <Popper hover arrow placement="right">
        <div>{{ chatroom.name }}</div>
        <template #content>
            <div v-for="user of chatroom.users" class="center-items">
                <img :src="user.imageUrl" class="user-image" />
                <div class="user-name">{{ user.username }}</div>
            </div>
        </template>
    </Popper>

    
</template>

<style scoped>

.center-items{
    text-align: center;
}
.user-image{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: .75px solid gray;
    object-fit: cover;
}

.user-name{
    font-size: 12px;
}
</style>
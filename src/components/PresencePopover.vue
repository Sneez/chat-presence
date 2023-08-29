<script setup lang="ts">
import { Chatroom } from '../models/chatrooms'
import Popper from "vue3-popper";

const props = defineProps<{
    chatroom: Chatroom
}>()

const max = props.chatroom.maxPresence

let leftOutNames = ''
// create string of usernames of users in the chat not shown (will show on hover of '+x more')
if(props.chatroom.users.length > max) {
    let firstFlag = true
    props.chatroom.users.slice(max).forEach( user => {
        firstFlag ? leftOutNames += user.username : leftOutNames += ', ' + user.username
        if (firstFlag) firstFlag = false
    })
}
</script>

<template>

    <Popper hover arrow placement="right">
        <div>{{ chatroom.name }}</div>
        <template #content>
            <div class="center-items">
                <div v-for="user of chatroom.users.slice(0, max)" class="bottom-spacing">
                    <img :src="user.imageUrl" class="user-image" />
                    <div class="user-name">{{ user.username }}</div>
                </div>
                <div v-if="chatroom.users.length > max" class="user-name" :title="leftOutNames">
                    +{{ chatroom.users.length - max }} more
                </div>
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

.bottom-spacing{
    margin-bottom: 10px;
}
</style>
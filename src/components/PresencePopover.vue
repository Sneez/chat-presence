<script setup lang="ts">
import { computed, watch } from 'vue'
import { Chatroom } from '../models/chatrooms'
import Popper from "vue3-popper"
import { useUsers } from '../stores/users';
import { User } from '../models/users';

const props = defineProps<{
    chatroom: Chatroom
}>()

const max = props.chatroom.maxPresence
const userStore = useUsers()
let currentUserId = computed(() => {
    if(userStore.currentUserId) {
        return userStore.currentUserId
    }
    else {
        return ''
    }
})
let leftOutNames = '' 
let chatUsers = [...props.chatroom.users]


function generateUserList( userId?: string ){
    chatUsers = [...props.chatroom.users]

    // if current user is in chat users list, remove it
    const isCurrentUser = (elem: User) => elem.id === userId
    const userIndex = chatUsers.findIndex(isCurrentUser)
    if( userIndex > -1 ){
        chatUsers.splice( userIndex, 1 )
    }

    // create string of usernames of users in the chat not shown (will show on hover of '+x more')
    leftOutNames = ''
    if(chatUsers.length > max) {
        let firstFlag = true
        chatUsers.slice(max).forEach( user => {
            firstFlag ? leftOutNames += user.username : leftOutNames += ', ' + user.username
            if (firstFlag) firstFlag = false
        })
    }
}

generateUserList( currentUserId.value )

watch(currentUserId, (newId) => {
    generateUserList( newId )
})
</script>

<template>

    <Popper hover arrow placement="right">
        <div>{{ chatroom.name }}</div>
        <template #content>
            <div class="center-items">
                <div v-for="user of chatUsers.slice(0, max)" class="bottom-spacing">
                    <img :src="user.imageUrl" class="user-image" />
                    <div class="user-name">{{ user.username }}</div>
                </div>
                <div v-if="chatUsers.length > max" class="user-name" :title="leftOutNames">
                    +{{ chatUsers.length - max }} more
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
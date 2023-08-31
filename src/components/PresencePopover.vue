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


let chatUsersExcludingCurrent = computed(() => {

    let chatUsers = [...props.chatroom.users]
    // if current user is in chat users list, remove it
    const isCurrentUser = (elem: User) => elem.id === userStore.currentUserId
    const userIndex = chatUsers.findIndex(isCurrentUser)
    if( userIndex > -1 ){
        chatUsers.splice( userIndex, 1 )
    }
    return chatUsers
})

let leftOutNames = computed(() => {
    // create string of usernames of users in the chat not shown (will show on hover of '+x more')
    let remainingNamesString = ''
    if(chatUsersExcludingCurrent.value.length > max) {
        let firstFlag = true
        chatUsersExcludingCurrent.value.slice(max).forEach( user => {
            firstFlag ? remainingNamesString += user.username : remainingNamesString += ', ' + user.username
            if (firstFlag) firstFlag = false
        })
    }

    return remainingNamesString
})

</script>

<template>

    <Popper hover arrow placement="right">
        <div>{{ chatroom.name }}</div>
        <template #content>
            <div class="center-items">
                <div v-for="user of chatUsersExcludingCurrent.slice(0, max)" class="bottom-spacing">
                    <img :src="user.imageUrl" class="user-image" />
                    <div class="user-name">{{ user.username }}</div>
                </div>
                <div v-if="chatUsersExcludingCurrent.length > max" class="user-name" :title="leftOutNames">
                    +{{ chatUsersExcludingCurrent.length - max }} more
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
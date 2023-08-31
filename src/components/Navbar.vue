<script setup lang="ts">
import { ref, watch } from 'vue';
import { allUsers } from "../models/users";
import { useUsers } from "../stores/users";
import { useChatrooms } from "../stores/chatrooms";

const usersStore = useUsers()
const selectedUserId = ref(usersStore.currentUserId)

const chatStore = useChatrooms()

let newChatroomName = ''

function handleSubmit() {
    if( newChatroomName !== ''){
        chatStore.addChatroom(newChatroomName)
        newChatroomName = ''
    }
}

watch(selectedUserId, (newId) => {
    if( newId ) usersStore.setCurrentUser( newId )
})
</script>

<template>

    <div class="box is-flex space-between is-align-items-center">
        <div class="is-flex">
            <input class="input border-radius-left" type="text" placeholder="Add new Chatroom" v-model="newChatroomName">
            <button id="submit-button" class="button is-light border-radius-right" @click="handleSubmit">Submit</button>
        </div>
        
        <div class="is-flex is-align-items-center">
            <div class="mr10">Current User:</div>
            <div class="select">
                <select v-model="selectedUserId">
                    <option v-for="user of allUsers" :value="user.id">{{ user.username }}</option>
                </select>
            </div>
        </div>
    </div>

</template>

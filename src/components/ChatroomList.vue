<script setup lang="ts">  
import { vPresence } from "../directives/vPresence";
import { Chatroom } from "../models/chatrooms";
import { User } from "../models/users";
import { useChatrooms } from '../stores/chatrooms';
import { useUsers } from "../stores/users";

const chatStore = useChatrooms()
const usersStore = useUsers()
const chatrooms = chatStore.chatrooms

function handleJoin(chatName: string) {
    chatStore.joinChatroom( chatName )
}

function handleUnsubscribe(chatName: string) {
    chatStore.unsubscribe( chatName )
}

function isCurrentUserInChatroom (chat: Chatroom) {
    const found = chat.users.find((elem: User) => elem.id === usersStore.currentUserId);
    return found ? true : false
}

</script>

<template>

    <nav class="is-primary panel">
        <div v-for="chat of chatrooms" v-presence="chat" :id="chat.id"
        class="panel-block is-flex is-align-items-center space-between">
            <button class="button" v-if="!isCurrentUserInChatroom(chat)" @click="handleJoin(chat.name)">Join</button>
            <button class="button" v-else @click="handleUnsubscribe(chat.name)">Leave</button>
        </div>
    </nav>

</template>


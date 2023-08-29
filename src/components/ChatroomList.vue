<script setup lang="ts">
import { createApp } from "vue";
import { allChats } from '../chatrooms';   
import PresencePopover from "./PresencePopover.vue"; 

const vPresence = {
    mounted: (el: HTMLElement, binding: any) => {
        const div = document.createElement('div');
        div.id ='presenceDiv'
        el.appendChild(div);
        createApp(PresencePopover, {chatroom: binding.value}).mount(div)
    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <nav class="is-primary panel">
                <div v-for="chat of allChats" v-presence="chat" :id="chat.id"
                class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
                </div>
            </nav>
        </div>
    </div>
</template>

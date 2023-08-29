<script setup lang="ts">
import { ref, createApp } from "vue";
import { allChats } from '../chatrooms';   
import PresencePopover from "./PresencePopover.vue"; 

const chats = ref(allChats)

const vPresence = {
    mounted: (el: HTMLElement, binding: any) => {
        el.addEventListener("mouseover", () => {
            const div = document.createElement('div');
            div.id ='presenceDiv'
            el.appendChild(div);
            createApp(PresencePopover, {users: binding.value}).mount(div)

        });
        el.addEventListener("mouseout", () => {
            const divToDelete = document.getElementById('presenceDiv')
            if(divToDelete !== null){
                divToDelete.remove()
            }

        })

    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <nav class="is-primary panel">
                <div v-for="chat of chats" v-presence="chat.users" :id="chat.id"
                class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
                    <span>{{ chat.name }}</span>
                </div>
            </nav>
        </div>
    </div>
</template>
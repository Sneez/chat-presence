<script setup lang="ts">
import { ref } from "vue";
import { allChats } from '../chatrooms';    

const chats = ref(allChats)

const vPresence = {
    mounted: (el: HTMLElement, binding: any) => {
        console.log(el)
        el.addEventListener("mouseover", (event) => {
            console.log(binding.value)

        });

    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <nav class="is-primary panel">
                <div v-for="chat of chats" v-presence="chat.users" :id="chat.id"
                class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
                    {{ chat.name }}
                </div>
            </nav>
        </div>
    </div>
</template>
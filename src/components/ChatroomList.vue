<script setup lang="ts">
import { allChats } from '../models/chatrooms';   
import { vPresence } from "../directives/vPresence"
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

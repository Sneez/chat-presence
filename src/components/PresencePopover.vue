<script setup lang="ts">
import { User } from '../users'

defineProps<{
    users: Array<User>
}>()

</script>

<template>
    <div class="section">
        <div class="container">
            <div v-for="user of users">
                <span>{{ user.username }}</span>
                <img :src="user.imageUrl" class="user-image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-image{
    max-width: 100px;
    max-height: 100px;
    border-radius: 50px;
}
</style>
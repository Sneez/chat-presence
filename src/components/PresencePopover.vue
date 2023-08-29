<script setup lang="ts">
import { User } from '../users'

defineProps<{
    users: Array<User>
}>()

</script>

<template>
    <div class="section box">
        <div class="container">
            <div v-for="user of users" class="center-items">
                <img :src="user.imageUrl" class="user-image" />
                <div class="user-name">{{ user.username }}</div>
            </div>
        </div>
    </div>
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

</style>
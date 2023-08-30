<script setup lang="ts">
import ChatroomList from './components/ChatroomList.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="section">
    <div class="container">
      <Navbar />
      <ChatroomList />
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

</style>

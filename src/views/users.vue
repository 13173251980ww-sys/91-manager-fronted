<script setup>
  import {onMounted} from "vue";
  import {useUserStores} from "@/stores/userStores.js";
  const userStores =useUserStores();
  onMounted(()=>{
    userStores.getUsers()
  })
</script>

<template>
  <ul class="menu">
    <li v-for="item in userStores.userList" :key="item.id">
      {{item.name}}
    </li>
  </ul>
</template>

<style scoped>

</style>
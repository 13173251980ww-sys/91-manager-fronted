<script setup>
  import {onMounted} from "vue";
  import {useChickenStores} from "@/stores/chickenStores.js";
  const chickenStores=useChickenStores();
  onMounted(()=>{
    chickenStores.getChickens()
  })
</script>

<template>
  <ul class="menu">
    <li v-for="item in chickenStores.chickList" :key="item.id">
      {{item.name}}
    </li>
  </ul>
</template>

<style scoped>

</style>
<script setup>
  import {useRoute} from 'vue-router'
  const route =useRoute();
</script>

<template>
    <el-col :span="24">
      <el-menu
        :default-active="route.path"
        text-color="black"
        active-text-color="darkorange"
        router
        style="height: 80vh;background-color:beige;"
      >
        <el-menu-item index="/index/users" >
          用户表
        </el-menu-item>
        <el-menu-item index="/index/chickens">
          鸡表
        </el-menu-item>
      </el-menu>
    </el-col>

</template>

<style scoped>

</style>
<script setup>
import Head from '@/views/head.vue'
import asideNav from '@/views/asideNav.vue'


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        style="padding: 0"
      ><Head /></el-header>
      <el-container>
        <el-aside width="200px"><asideNav /></el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>


</style>

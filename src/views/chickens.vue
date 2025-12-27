<script setup>
  import {onMounted} from "vue";
  import tableUI from "@/components/tableUI.vue"
  import {useChickenStores} from "@/stores/chickenStores.js";
  const chickenStores=useChickenStores();
  onMounted(()=>{
    chickenStores.getChickens()
  })

  const onDelete =function (){

  }

  const onEdit=function (){

  }

  const onAdd=function (){

  }
</script>

<template>
  <tableUI
      :data="chickenStores.chickList"
      @add="onAdd"
      @delete="onDelete"
      @edit="onEdit"
  >
    <el-table-column prop="ck_id" label="编号" width="100"/>
    <el-table-column prop="ck_nick" label="昵称" width="100"/>
    <el-table-column prop="ck_times" label="做鸡时长" width="100"/>
    <el-table-column prop="ck_rating" label="评分" width="100"/>
    <el-table-column prop="ck_per" label="品质" width="100"/>
    <el-table-column prop="ck_property" label="S/M" width="100"/>
    <el-table-column prop="ck_data_height" label="身高" width="100"/>
    <el-table-column prop="ck_data_weight" label="体重" width="100"/>
    <el-table-column prop="ck_data_length" label="长度" width="100"/>
  </tableUI>

</template>

<style scoped>

</style>
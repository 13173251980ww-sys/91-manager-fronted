<script setup>
  import {onMounted} from "vue";
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

  <el-table :data="chickenStores.chickList" style="width: 100%">
    <el-table-column prop="ck_id" label="编号" width="100"/>
    <el-table-column prop="ck_nick" label="昵称" width="100"/>
    <el-table-column prop="ck_times" label="做鸡时长" width="100"/>
    <el-table-column prop="ck_rating" label="评分" width="100"/>
    <el-table-column prop="ck_per" label="品质" width="100"/>
    <el-table-column prop="ck_property" label="S/M" width="100"/>
    <el-table-column prop="ck_data_height" label="身高" width="100"/>
    <el-table-column prop="ck_data_weight" label="体重" width="100"/>
    <el-table-column prop="ck_data_length" label="长度" width="100"/>
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button type="primary" @click="onEdit(row)">编辑</el-button>
        <el-button type="danger" @click="onDelete(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" @click="onAdd()">添加</el-button>
</template>

<style scoped>

</style>
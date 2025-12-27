<script setup>
defineProps({
  data:{
    type:Array,
    required:true
  }
})

const emit=defineEmits([
    'edit',
    'delete',
    'add'
])
</script>

<template>

  <el-table :data="data" style="width: 100%">

<!--    列配置插槽-->
    <slot/>

    <el-table-column label="操作">
      <template #default="slotProps">
        <el-button type="primary" @click="emit('edit',slotProps.row)">编辑</el-button>
        <el-button type="danger" @click="emit('delete',slotProps.row.user_account)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" @click="emit('add')">添加</el-button>


</template>

<style scoped>

</style>
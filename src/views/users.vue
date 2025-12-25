<script setup>
import {onMounted} from "vue";
import {useUserStores} from "@/stores/userStores.js";

const userStores = useUserStores();
onMounted(() => {
  userStores.getUsers()
})

const onDelete = function (user_account) {
  console.log(user_account)
  userStores.deleteUser(user_account)
}

const onEdit = function () {

}

const onAdd = function () {

}
</script>

<template>

  <el-table :data="userStores.userList" style="width: 100%">
    <el-table-column prop="user_nick" label="昵称" width="150"/>
    <el-table-column prop="user_pwd" label="密码" width="150"/>
    <el-table-column prop="user_sex" label="性别" width="150"/>
    <el-table-column prop="user_age" label="年龄" width="150"/>
    <el-table-column prop="user_img" label="头像URL" width="150"/>
    <el-table-column prop="user_imp" label="个性签名" width="150"/>
    <el-table-column prop="user_hobby" label="爱好" width="150"/>
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button type="primary" @click="onEdit(row)">编辑</el-button>
        <el-button type="danger" @click="onDelete(row.user_account)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" @click="onAdd()">添加</el-button>
</template>

<style scoped>

</style>
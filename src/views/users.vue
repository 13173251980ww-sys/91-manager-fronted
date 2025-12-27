<script setup>
import {defineAsyncComponent, onMounted, ref} from "vue";
import tableUI from "@/components/tableUI.vue"
import {useUserStores} from "@/stores/userStores.js";

const userStores = useUserStores();
const editVisible =ref(false)
const name=ref("")
const currentUser=ref(null)
onMounted(() => {
  userStores.getUsers()
})

const onDelete = function (user_account) {
  userStores.deleteUser(user_account)
}

const onEdit = function (row) {
  //数据回填
  currentUser.value=row;
  name.value=row.user_name
  editVisible.value=true;
}

const onAdd = function () {
  userStores.addUser()
}

const onConfirm=function (newData){
  //更新数据.....
  currentUser.value.name=newData.name;

  //调接口，传对象更新数据
  userStores.editUser(newData)

  editVisible.value=false;
}

const Edit =defineAsyncComponent(()=>
  import('@/views/edit.vue')
)
</script>

<template>

  <el-button type="primary" @click="onAdd()">添加</el-button>
  <tableUI
      :data="userStores.userList"
      @add="onAdd"
      @delete="onDelete"
      @edit="onEdit"
  >
    <el-table-column prop="user_nick" label="昵称" width="150"/>
    <el-table-column prop="user_pwd" label="密码" width="150"/>
    <el-table-column prop="user_sex" label="性别" width="150"/>
    <el-table-column prop="user_age" label="年龄" width="150"/>
    <el-table-column prop="user_img" label="头像URL" width="150"/>
    <el-table-column prop="user_imp" label="个性签名" width="150"/>
    <el-table-column prop="user_hobby" label="爱好" width="150"/>
  </tableUI>

<!--  打开编辑页面——填写数据——更新列表-->
  <Edit :displaiable="editVisible" :name="name" @on-confirm="onConfirm"/>
</template>

<style scoped>

</style>
<script setup>

import {ref, watch} from "vue";

const props=defineProps({
  displaiable:{
    type:Boolean,
    default:true
  },
  name: {
    type:String,
    default:"小明"
  }
})

const emit=defineEmits(['on-confirm'])
const sendConfirm =function (){
  emit('on-confirm',{
    name:name.value
  })
}

//用来满足父传子props只读原则
const displaiable=ref(props.displaiable)
const name=ref(props.name)

watch(
    //监听的值
    ()=>props.name,
    //val=监听的值更新后的新值
    (val)=>{
      name.value=val
    },
    //表示在组件创建时立即执行一次
    {immediate:true}
)
watch(
    ()=>props.displaiable,
    (val)=>{
      displaiable.value=val
    },
    {immediate:true}
)
</script>

<template>
  <el-dialog v-model="displaiable" title="编辑" width="400px">
    <el-form>
      <el-input v-model="name" />

    </el-form>
    <el-button type="primary" @click="sendConfirm()"
               style="width: 100%"
    >确定</el-button>
  </el-dialog>
</template>

<style>

</style>
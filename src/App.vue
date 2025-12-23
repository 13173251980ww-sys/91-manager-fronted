<script setup>
  import axios from "axios";
  import {onMounted, ref} from "vue";

  const name=ref("")
  const getName=async function (){
    const res=await axios.get("/api/test");
    name.value=res.data.name;
  }
  onMounted(()=>{
      getName()
    }
  )
</script>


<template>
  <p>
    {{name}}
  </p>
</template>

<style scoped></style>

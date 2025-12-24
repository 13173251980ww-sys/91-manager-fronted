import {defineStore} from "pinia";
import {ref} from 'vue'
import {getUsersApi} from "@/apis/user.js";

export const useUserStores =defineStore('users',()=>{
    const userList=ref([])

    const getUsers =async()=>{
        const res=await getUsersApi();
        userList.value=res.data;
    }

    return{
        userList,
        getUsers
    }
})
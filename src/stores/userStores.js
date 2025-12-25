import {defineStore} from "pinia";
import {ref} from 'vue'
import {deleteUserApi, getUsersApi} from "@/apis/user.js";

export const useUserStores =defineStore('users',()=>{
    const userList=ref([])

    const getUsers =async()=>{
        const res=await getUsersApi();
        userList.value=res.data.data;
    }
    const deleteUser =async(user_account)=>{
        await deleteUserApi(user_account);
        await getUsers()

    }

    return{
        userList,
        getUsers,
        deleteUser
    }
})
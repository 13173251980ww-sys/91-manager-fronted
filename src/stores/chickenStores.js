import {defineStore} from "pinia";
import {getChickenApi} from "@/apis/chicken.js";
import {ref} from "vue";

export const useChickenStores =defineStore('chickens',()=>{
    const chickList =ref([])

    const getChickens =async()=>{
        const res =await getChickenApi();
        chickList.value=res.data;
    }

    return{
        chickList,
        getChickens
    }
})
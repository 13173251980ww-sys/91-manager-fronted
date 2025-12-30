import {defineStore} from "pinia";
import {getChickenApi} from "@/apis/chicken.js";
import {ref} from "vue";

export const useChickenStores =defineStore('chickens',()=>{
    const chickList =ref([])

    const getChickens =async()=>{
        try {
            const res =await getChickenApi();
            chickList.value=res.data.data;
        }catch (error){
            console.log('获取鸡列表失败',error);
        }

        //早期链式调用
        // getChickenApi()
        //     .then(res=>{
        //         chickList.value=res.data.data
        //     })
        //     .catch(error=>{
        //         console.error('Error',error)
        //     });
    }

    return{
        chickList,
        getChickens
    }
})
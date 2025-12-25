import httpInstance from "@/utils/http"

export function getUsersApi(){
    return httpInstance({
        url:'/user'
    })
}


export function deleteUserApi(user_account){
    return httpInstance({
        url:`/user/${user_account}`,
        method:'DELETE'
    })
}
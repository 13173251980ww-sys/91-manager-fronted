import httpInstance from "@/utils/http"

export function getUsersApi(){
    return httpInstance({
        url:'/user',
        method:'GET'
    })
}


export function deleteUserApi(user_account){
    return httpInstance({
        url:`/user/${user_account}`,
        method:'DELETE'
    })
}

export function addUserApi(){
    return httpInstance({
        url:'/user',
        method:'POST'
    })
}

export function editUserApi(user){
    return httpInstance({
        url:'/user',
        method:'PUT',
        params:user.user_account
    })
}
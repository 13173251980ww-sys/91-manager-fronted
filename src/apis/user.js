import httpInstance from "@/utils/http"

export function getUsersApi(){
    return httpInstance({
        url:'/user'
    })
}


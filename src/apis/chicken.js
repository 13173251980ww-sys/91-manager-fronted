import httpInstance from "@/utils/http.js";

export function getChickenApi(){
    return httpInstance({
        url:"/chickens"
    })
}
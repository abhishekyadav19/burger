import { toast } from "react-toastify"

export const ADD =(item)=>{
    return {
        type: "ADD_CART",
        payload:item,

    }
}

export const REMOVE =(id)=>{
    return {
        type: "REMOVE_CART",
        payload:id
    }
}

export const DECREAMENT =(item)=>{
    return {
        type: "REMOVE_ONE_ITEMS",
        payload:item
    }
}
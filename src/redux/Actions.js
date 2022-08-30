import axios from "axios"
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

export const HANDLE_INPUT_CHANGE =(payload)=>{
    return {
        type: "HANDLE_INPUT_CHANGE",
        payload
    }
}
// export const fetchUsersSuccess =(datas)=>{
//     return {
//         type: "GET_DATA_PIZZA",
//         payload:datas
//     }
// }

// export const fetchUsers=()=>{
//     return (dispatch)=>{
//         axios.get("https://fakestoreapi.com/products").then(res=>{
//           const datas=  res.data;
//           console.log(datas);
//           dispatch(fetchUsersSuccess(datas))
//         })
//         .catch(error=>{
//             console.log(error);
//         })
//     }
// }

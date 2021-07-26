import { LOGIN_SUCCESS } from "./types"

export const login = (data) => {
    return {
        type:LOGIN_SUCCESS,
        payload:{
            token:'abcd',
            data:'this is simple'
        }
    }
}
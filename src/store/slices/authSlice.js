import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        modal:true
    },
    reducers:{
        setModal:(state,action)=>{
            state.modal = !state.modal
        },
        closeModal:(state,action)=>{
            console.log('hi')
            state.modal = false
        }
    }
})
export default authSlice.reducer

export const {setModal,closeModal}= authSlice.actions
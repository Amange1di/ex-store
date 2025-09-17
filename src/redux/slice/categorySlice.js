import { createSlice } from "@reduxjs/toolkit";



const categorySlice=createSlice({
name:"category",
initialState:{
    category:[],
},


extraReducers:(builder)=>{}
})


export const categoryReducer=categorySlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: "like",
    initialState: {
        items: []
    },
    reducers: {
        addToLike: (state, { payload }) => {
            const hasInItems = state.items.find(el => el.id === payload.id)
            if(hasInItems) {
                hasInItems.quantity += 1;
                return
            }

            const item = {
                ...payload,
                isLike: true,
            }
            state.items.push(item)
        },
        removeFromLike: (state, { payload }) => {
            // const item = state.items.find(el => el.id === payload.id)
            // item.isLike = false
            state.items = state.items.filter(item => item.id !== payload.id)
        }
    }
})

export const { addToLike, removeFromLike } = likeSlice.actions
export const likeReducer = likeSlice.reducer
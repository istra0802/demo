import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: {},
};

const ListSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addPosts : (state, {payload}) => {
            state.lists = payload;
        }
    }
})

export const {addPosts} = ListSlice.actions;
export const getAllLists = (state) => state.lists.lists;
export default ListSlice.reducer;
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    logged: "false",
    users: [],
  }
  
  export const fetchUsers = createAsyncThunk('user/fetchUsers')
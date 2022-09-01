import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const getCases = createAsyncThunk("tracker/getCases", async () => {
    const result = await axios.get(`${process.env.REACT_APP_COVID_URL}`)
    return result.data

})
export const trackerSlice = createSlice({
    name: "tracker",
    initialState: {
        cases: [],
        status: "idle",
        error: ""
    },
    reducers: {},
    extraReducers: {
        [getCases.pending]: (state, action) => {
            state.status = "pending"
        },
        [getCases.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.cases = action.payload
        },
        [getCases.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        }
    }
})

export default trackerSlice.reducer
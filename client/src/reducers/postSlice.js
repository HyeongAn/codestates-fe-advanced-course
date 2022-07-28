import { createSlice } from '@reduxjs/toolkit'

const actionName = 'postInfo';

export const initialState = {
    postInfo: {
        userId : 0,
        id : 0,
        title : "",
        body : ""
    }
}

export const postSlice = createSlice({
    name : actionName,
    initialState,
    reducers : {
        getPostInfo : (state, action) => {
            state.postInfo = action.payload.postInfo
        }
    }

})

export const {getPostInfo} = postSlice.actions;
export default postSlice.reducer;
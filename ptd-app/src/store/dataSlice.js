import { createSlice } from "@reduxjs/toolkit";

// 작업 공간 초기화 정보
const initialState = {
    category : [{},{},{},{}],
    refreshSwitch : true
}

const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers:{
        selectCategory:(state, action) => {
            state.category[action.payload.index] = action.payload.value

            for(let i = action.payload.index + 1; i < 4; i++) {
                state.category[i] = {};
            }
        },
        clearCategory:(state) => {
            state.category = [{},{},{},{}]
        },
        refresh:(state)=> {
            state.refreshSwitch = !state.refreshSwitch;
        }
    }
})

export default dataSlice;
export const { selectCategory, clearCategory, refresh } = dataSlice.actions;
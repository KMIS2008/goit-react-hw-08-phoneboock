import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

const filterSlice= createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
        changeFilter(state, action){
            return action.payload
        },
    },
})

export const {changeFilter} = filterSlice.actions;
export const filterReduser = filterSlice.reducer;

// export const getFilterValue = state => state.filter.value;
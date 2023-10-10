import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";


const filterAdapter = createEntityAdapter();

const initialState = filterAdapter.getInitialState({
    activeSearch: '',
    activeSalary: 'none',
});


const filterSlice = createSlice({
    name: 'getFilters',
    initialState,
    reducers: {
        activeSearchChange: (state, action) => {
            state.activeSearch = action.payload;
        },
        activeSalaryChange: (state, action) => {
            state.activeSalary = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = filterSlice;
export default reducer;
export const {
    activeSearchChange,
    activeSalaryChange
} = actions;
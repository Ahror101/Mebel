import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    store: [],
    products: [],
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.store = action.payload
            state.products = action.payload
        },
        handleSort: (state, action) => {
            if (action.payload === "Low") {
                state.products = [...state.products.sort((a, b) => a.price > b.price ? 1 : -1)]
            } else if (action.payload === "High") {
                state.products = [...state.products.sort((a, b) => a.price < b.price ? 1 : -1)]
            } else {
                state.products = [...state.products.sort((a, b) => a.id > b.id ? 1 : -1)]
            }
        },
        handleCategory: (state, action) => {
            if (action.payload === "All") {
                state.products = [...state.store];
            } else {
                const categoryItems = state.products.filter((item) => {
                    return item.category === action.payload;
                });
                state.products = categoryItems;
            }
        },

    },
});

export const filterReducer = filterSlice.reducer;
export const { handleSort, handleCategory, getProducts } =
    filterSlice.actions;
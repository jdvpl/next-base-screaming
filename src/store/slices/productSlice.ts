'use client'
import { SessionStorageKeys } from "@/session";
import { EncriptionSessionStorage } from "@/shared/utils/encription";
import { createSlice } from "@reduxjs/toolkit";


export const productSlice=createSlice({
    name: 'product',
    initialState: EncriptionSessionStorage.getDataCriptedSession(SessionStorageKeys.product.key,{}),
    reducers: {
        setProduct: (state, action) => {
            const formatedData={...state,...action.payload}
            EncriptionSessionStorage.setDataCriptedSession(SessionStorageKeys.product.key,formatedData);
            return formatedData;
        },
    },
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer
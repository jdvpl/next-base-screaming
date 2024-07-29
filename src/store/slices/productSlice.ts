import { SessionStorageKeys } from "@/session";
import { EncriptionSessionStorage } from "@/shared/utils/encription";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: string;
  otherState: string;
}

const data= EncriptionSessionStorage.getDataCriptedSession<ProductState>(
  SessionStorageKeys.product.key,
  {}
);
const initialState: ProductState = {
  product:data.product,
  otherState:data.otherState
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<string>) => {
      const updatedState = { ...state, product: action.payload };
      EncriptionSessionStorage.setDataCriptedSession(
        SessionStorageKeys.product.key,
        updatedState
      );
      return updatedState; 
    },
    setOtherState: (state, action: PayloadAction<string>) => {
      const updatedState = { ...state, otherState: action.payload };
      EncriptionSessionStorage.setDataCriptedSession(
        SessionStorageKeys.product.key,
        updatedState
      );
      return updatedState; 
    },
  },
});

export const { setProduct, setOtherState } = productSlice.actions;

export default productSlice.reducer;

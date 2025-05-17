import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the ProductInCart type if not already defined
type ProductInCart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  productsInCart: ProductInCart[];
  subtotal: number;
};

const initialState: CartState = {
  productsInCart: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToTheCart: (state, action: PayloadAction<ProductInCart>) => {
      const existingProduct = state.productsInCart.find(
        (p) => p.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productsInCart.push({ ...action.payload });
      }

      state.subtotal = calculateSubtotal(state.productsInCart);
    },

    removeProductFromTheCart: (state, action: PayloadAction<{ id: string }>) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload.id
      );
      state.subtotal = calculateSubtotal(state.productsInCart);
    },

    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.productsInCart.find(
        (p) => p.id === action.payload.id
      );

      if (product) {
        product.quantity = action.payload.quantity;
      }

      state.subtotal = calculateSubtotal(state.productsInCart);
    },

    clearCart: (state) => {
      state.productsInCart = [];
      state.subtotal = 0;
    },
  },
});

// Helper to keep subtotal logic clean
function calculateSubtotal(products: ProductInCart[]): number {
  return products.reduce((total, p) => total + p.price * p.quantity, 0);
}

export const {
  addProductToTheCart,
  removeProductFromTheCart,
  updateProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

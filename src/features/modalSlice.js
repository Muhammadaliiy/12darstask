import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOrderConfirmationOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openOrderConfirmation: (state) => {
      state.isOrderConfirmationOpen = true;
    },
    closeOrderConfirmation: (state) => {
      state.isOrderConfirmationOpen = false;
    },
    toggleOrderConfirmation: (state) => {
      state.isOrderConfirmationOpen = !state.isOrderConfirmationOpen;
    }
  }
});

// Action creators
export const {
  openOrderConfirmation,
  closeOrderConfirmation,
  toggleOrderConfirmation
} = modalSlice.actions;

// Selectors
export const selectIsOrderConfirmationOpen = (state) => state.modal.isOrderConfirmationOpen;

export default modalSlice.reducer;
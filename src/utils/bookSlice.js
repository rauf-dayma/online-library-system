import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: [], // Initially, the list of books will be empty
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload; // Sets the fetched books to the store
    },
    addItem: (state, action) => {
      state.items.push(action.payload); // Add new book to the items array
    },
  },
});

export const { setBooks, addItem } = bookSlice.actions;

export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state, action, append = false) => {
  state.loading = false;
  if (append) {
    state.items.push(action.payload);
  } else {
    state.items = action.payload;
  }
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => handleFulfilled(state, action))
      .addCase(fetchContacts.rejected, (state, action) => handleRejected(state, action))
      .addCase(addContact.pending, (state) => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => handleFulfilled(state, action, true))
      .addCase(addContact.rejected, (state, action) => handleRejected(state, action))
      .addCase(deleteContact.pending, (state) => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => handleRejected(state, action))
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;

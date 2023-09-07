import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactId
      );
    },
    updateContact: (state, action) => {
      const updatedContact = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
  },
});

export default cartSlice;
export const { addContact, removeContact, updateContact } = cartSlice.actions;

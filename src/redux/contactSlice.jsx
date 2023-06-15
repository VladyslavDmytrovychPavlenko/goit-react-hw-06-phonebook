import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const newContact = { id: nanoid(), name, number };
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      const contactId = action.payload.id;
      state.contacts = state.contacts.filter(contact => contact.id !== contactId);
    },
    setContactFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContactFilter } = contactSlice.actions;

export default contactSlice.reducer;

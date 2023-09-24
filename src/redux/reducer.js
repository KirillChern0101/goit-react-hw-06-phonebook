import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contracts',
  initialState: {
    contacts: {
      items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    },
  },
  reducers: { 
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    delContact(state, action) {
      const index = state.contacts.items.findIndex(
      contacts => contacts.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    setFilter(state, action) {
      state.contacts.filter = action.payload;
    },
   },
});

export default contactSlice.reducer
export const { addContact, delContact, setFilter } = contactSlice.actions

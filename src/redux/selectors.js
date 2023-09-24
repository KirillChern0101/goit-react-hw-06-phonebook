export const getContacts = state => {
  return state.reducer.contacts.items;
};

export const getFilter = state => {
  return state.reducer.contacts.filter;
};

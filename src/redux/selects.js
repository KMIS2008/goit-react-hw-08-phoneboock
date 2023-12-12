import { createSelector } from "@reduxjs/toolkit";

  export const selectContacts=state=>state.contact.items;
  export const selectFilter=state => state.filter;
  export const selectIsLoading=state=> state.contact.isLoading;
  export const selectError=state=>state.contact.error;

  export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contact, filter) => {
       return contact.filter(contacts => contacts.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )


// export const getContacts=state=>state.contact.items;
// export const getFilterValue = state => state.filter;

// export const getVisibleContacts = state => {
//     const contacts = getContacts(state); 
//     const filter = getFilterValue(state); 

//     if (!filter) {
//         return contacts;
//       }

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };




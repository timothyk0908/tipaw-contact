const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'CONTACT_REQUEST_SENT':
          return { ...state, loading: true };
       case 'CONTACT_REQUEST_SUCCESSFUL':
          return { ...state, loading: false };
       case 'CONTACT_REQUEST_FAILED':
          return { ...state, loading: false };
       default:
          return state;
     }
  };
  export default reducer;
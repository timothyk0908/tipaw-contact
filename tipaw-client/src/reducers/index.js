const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CONTACT_REQUEST_SENT':
            return { ...state };
        case 'CONTACT_REQUEST_SUCCESSFUL':
        alert('Thank you ! Your contact request has been sent to our team, which will contact you back soon');
            return { ...state, success: true };
        case 'CONTACT_REQUEST_FAILED':
            alert('There was an issue while sending your contact request, please try again later');
            return { ...state, success: false };
        default:
            return state;
    }
};
export default reducer;
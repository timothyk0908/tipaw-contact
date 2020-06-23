import { put, takeEvery } from 'redux-saga/effects';

function* sendContactRequest(action) {
  try {
    yield fetch('http://localhost:4000/contact', { method: 'POST', body: JSON.stringify(action.payload), headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});
    yield put({ type: "CONTACT_REQUEST_SUCCESSFUL", message: 'thanks' });
  } catch (e) {
    yield put({ type: "CONTACT_REQUEST_FAILED", message: e.message });
  }
}

function* contactSaga() {
  yield takeEvery("CONTACT_REQUEST_SENT", sendContactRequest);
}

export default contactSaga;
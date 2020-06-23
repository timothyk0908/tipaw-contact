import { useState } from 'react';
import { useDispatch } from 'react-redux'

const useContactForm = () => {
  const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      dispatch({type: 'CONTACT_REQUEST_SENT', payload: inputs});
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    }
}

export default useContactForm;
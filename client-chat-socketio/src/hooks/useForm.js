import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  //  Iff Remeber me check ##################################################################################
  const toggleCheck = () => {
    setFormState({
      ...formState,
      rememberme: !formState.rememberme,
    });
  };

  useEffect(() => {
    const remeberEmail =
      formState.rememberme !== undefined
        ? localStorage.getItem('email')
        : undefined;

    if (remeberEmail) {
      setFormState((formState) => ({
        ...formState,
        rememberme: true,
        email: remeberEmail,
      }));
    }
  }, []);
  //##################################################################################################

  return { ...formState, formState, onInputChange, toggleCheck, onResetForm };
};

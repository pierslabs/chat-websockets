import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from '../hooks/useForm';

const formData = {
  email: '',
  password: '',
  rememberme: '',
};
const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const { formState, onInputChange, toggleCheck } = useForm(formData);

  const { email, password, rememberme } = formState;

  const onSubmit = async (e) => {
    e.preventDefault();
    formState.rememberme
      ? localStorage.setItem('email', email)
      : localStorage.removeItem('email');

    const { ok, msg } = await login(email, password);
    if (!ok) {
      onResetForm();
      return toast.error(msg, {
        position: 'top-left',
      });
    }

    console.log('authenticado!!!');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">Login</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={() => toggleCheck()}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={rememberme}
            readOnly
          />
          <label className="label-checkbox100">Remember</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register"> new Account</Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button type="submit" className="login100-form-btn">
          Sign in
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { useContext } from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, password, email } = form;
    const { ok, msg } = await register(name, password, email);

    if (!ok) {
      return toast.error(msg, {
        position: 'top-left',
      });
    }

    console.log('registrado');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">sign up</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nombre"
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <div className="col text-right">
            <Link to="/auth/login">Do you have an account?</Link>
          </div>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button type="submit" className="login100-form-btn">
          create account
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default RegisterPage;

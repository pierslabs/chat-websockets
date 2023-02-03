import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberme: false,
  });

  useEffect(() => {
    const remeberEmail = localStorage.getItem('email');

    if (remeberEmail) {
      setForm((form) => ({ ...form, rememberme: true, email: remeberEmail }));
    }
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    form.rememberme
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email');

    const { email, password } = form;
    const { ok, msg } = await login(email, password);
    if (!ok) {
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
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
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
            checked={form.rememberme}
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

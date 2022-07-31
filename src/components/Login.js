import React from 'react';
import {Link} from 'react-router-dom';

const Login = ({onLogIn}) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name]: value});
    console.log(values);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogIn(values);
  };
  React.useEffect(() => {}, [values]);

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__form-content">
          <p className="auth__form-title">Log In</p>

          <input
            className="auth__form-input"
            name="name"
            placeholder="Email"
            id="email"
            type="text"
            value={values.email}
            required
            onChange={handleChange}
          />
          <input
            className="auth__form-input"
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            value={values.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="auth__form-content">
          <button className="auth__button" type="submit">
            Log In
          </button>
          <p className="auth__text">
            Not a member yet?{' '}
            <Link className="auth__link" to="/signin">
              Sign up here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;

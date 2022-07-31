import React from 'react';
import {Link} from 'react-router-dom';

const Login = ({onLogIn}) => {
  // const [values, setValues] = React.useState({
  //   email: '',
  //   password: '',
  // });
  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setValues((preValues) => ({...preValues, [name]: value}));
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onLogIn(values);
  //   console.log("login");
  // };
  // React.useEffect(() => {
  //   setValues('');
  // }, [values]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit=(event)=> {
    event.preventDefault();
    const loginUserData = {
      email,
      password,
    };
    onLogIn(loginUserData);
  }

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
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            //onChange={handleChange}
          />
          <input
            className="auth__form-input"
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
           // onChange={handleChange}
          />
        </div>
        <div className="auth__form-content">
          <button className="auth__button" type="submit">
            Log In
          </button>
          <p className="auth__text">
            Not a member yet?{' '}
            <Link className="auth__link" to="/signup">
              Sign up here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;

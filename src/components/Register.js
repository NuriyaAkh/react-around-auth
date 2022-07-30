import React from "react";
import * as auth from '../utils/auth';
import { Link, useHistory } from 'react-router-dom';

const Register =()=>{
  const [values, setValues] = React.useState({
    email:"",
    password:""
  });
  const handleChange=(event)=>{
    const {name, value} = event.target;
    setValues({...values,[name]:value})
console.log(values);
  }
const handleSubmit=(event)=>{
  event.preventDefault();
  if (values){
  auth.register(values);
}}
  React.useEffect(() => {
    setValues("");
  }, [values]);

  return(
  
    <div className="auth">
    <form className="auth__form" onSubmit={handleSubmit}>
      <div className="auth__form-content">
        <p className="auth__form-title">Sign up</p>

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
          Sign up
        </button>
        <p className="auth__text">
          Already a member?{' '}
          <Link className="auth__link" to="/signin">
            Log in here!
          </Link>
        </p>
      </div>
    </form>
  </div>
  )
}
export default Register;
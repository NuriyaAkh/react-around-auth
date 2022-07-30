import React from "react";
import * as auth from '../utils/auth';
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
  auth.register(values);

}
  React.useEffect(() => {
    
  }, []);

  return(
    <div className="register">
    <form className="register__form" onSubmit={handleSubmit}>
      <div className="register__form-content">
        <p className="register__form-title">Sign up</p>

        <input
          className="register__form-input"
          name="name"
          placeholder="email"
          id="email"
          type="text"
          value={values.email}
          required
          onChange={(event) => setValues(event.target.value)}
        />
        <input
          className="register__form-input"
          name="password"
          placeholder="password"
          id="password"
          type="password"
          value={values.password}
          required
          onChange={(event) => setValues(event.target.value)}
        />
      </div>
      <div className="register__form-content">
        <button className="register__button" type="submit">
          Sign up
        </button>
        <p className="register__text">
          Already a member?{' '}
          <Link className="register__link" to="/signin">
            Log in here!
          </Link>
        </p>
      </div>
    </form>
  </div>
  )
}
export default Register;
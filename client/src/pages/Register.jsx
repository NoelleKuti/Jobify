import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage' 


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false
}

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value})
  }
 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  
  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo />
          <h3>Login</h3>
          {values.showAlert && <Alert />}

          <FormRow 
            type='text' 
            name='name' 
            value={values.name} 
            handleChange={handleChange} 
          />
          <FormRow 
            type='email' 
            name='email' 
            value={values.email} 
            handleChange={handleChange} 
          />
          <FormRow 
            type='password' 
            name='password' 
            value={values.password} 
            handleChange={handleChange}
          />

          <button type='submit' className = 'btn btn-block'>Submit</button>
        </form>
    </Wrapper>
  )
}
export default Register
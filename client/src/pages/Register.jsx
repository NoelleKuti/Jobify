import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage' 
import { FormRow } from '../components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  }
 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  
  return (
    <Wrapper className='full-page'>
        <form className='form'>
          <Logo />
          <h3>Login</h3>
          
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
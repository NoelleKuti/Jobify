import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage' 

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

function Register() {
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
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' value={values.name} name='name' className='form-input'  onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' value={values.email} name='email' className='form-input' onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' value={values.password} name='password' className='form-input' onChange={handleChange} />
          </div>

          <button type='submit' className = 'btn btn-block'>Submit</button>
        </form>
    </Wrapper>
  )
}
export default Register
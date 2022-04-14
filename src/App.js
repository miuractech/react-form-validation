import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string('must be a string').email('email must look like abc@email.com').required('email is required'),
    password: yup.string().min(8,'password must be of minimum 8 characters').max(10, 'password must be of maximim 10 characters').required(),
    name: yup.string().max(50),
    age: yup.number().integer().min(18).max(125).required(),
  })
  .required();

function App() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data)
  }
  console.log('errors',errors)
  return (
    <div className="App">
      <form
      onSubmit={handleSubmit(onSubmit)}
      >
        <br/>
        <div>
          <input type="text" {...register('email')} placeholder='email' />
        </div>
        {errors.email && <div style={{color:'red'}} >
          {errors.email.message}
          </div>}
        <br/>
        <div>
          <input type="text" {...register('name')} placeholder='name' />
        </div>
        {errors.name && <div style={{color:'red'}} >
          error in name
          </div>}
        <br/>
        <div>
          <input type="text" {...register('age')} placeholder='age' />
        </div>

        {errors.age && <div style={{color:'red'}} >
          error in age
          </div>}
        <br/>
        <div>
          <input type="password" {...register('password')} placeholder='password' />
        </div>
        {errors.password && <div style={{color:'red'}} >
          {errors.password.message}
          </div>}
        <div>
          <input type="submit" value='login' />
        </div>
      </form>
    </div>
  );
}

export default App;

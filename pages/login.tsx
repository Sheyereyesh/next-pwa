import React,{FormEvent, useEffect, useState} from 'react';
import {  useAppDispatch } from "../app/hook";
import { login } from "../features/login/loginSlice";
import GuestGuard from '../components/guestGuard';
import * as ServiceWorker from '../libs/serviceWorker';
;




function Login() {


  useEffect(()=>{
            if(window.navigator && 'serviceWorker' in window.navigator){
  ServiceWorker.register();
//   window.navigator.serviceWorker.register('./service-worker.js')
}
  },[])
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  const dispatch = useAppDispatch();

  function onSubmit(e: FormEvent) {
		e.preventDefault();
		dispatch(login({ email, password }));
	}

  return <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>
      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
}

export default GuestGuard(Login)

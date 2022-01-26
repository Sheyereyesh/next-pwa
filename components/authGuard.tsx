import { useAppSelector } from "../app/hook";
import React, {  useEffect } from "react";
import Router from 'next/router';
import { NextComponentType } from "next";
import axios from "axios";


export default function AuthGuard<P>(Component:NextComponentType<P>) {
  function New(props:P){
    const user = useAppSelector((state)=>{
      return state.login.user;
    });
      useEffect(()=>{
      if(!user){
        Router.replace('/login')
      }
    },[user])
    return <Component {...props} />;
  }
  if(Component.getInitialProps){
    New.getInitialProps = async(context:any)=>{
        if(context.res){
          try{
            const response = await axios.get('/verify/session')
          }catch(e){
            context.res.writeHead(307, { Location: '/login' })
            context.res.end();
          }
        }
      const p = await Component.getInitialProps(context);
      return p;
  }
}
  return New;
}
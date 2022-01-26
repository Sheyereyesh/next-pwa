import { useAppSelector } from "../app/hook";
import React, { ReactComponentElement, useEffect } from "react";
import Router from 'next/router';
;


export default function GuestGuard(Component:React.ComponentType) {
  return function New(){
    const user = useAppSelector((state)=>{
      return state.login.user;
    });
      useEffect(()=>{
      if(user){
        Router.replace('/')
      }
    },[user])
    return <Component/>;
  }
}
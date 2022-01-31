import { NextComponentType } from 'next';
import React, { useEffect } from 'react';
import AuthGuard from '../components/authGuard';
import Header from '../components/header';

let installPrompt = null;
function Index(props:{categories:{id:string,name:string}[]}) {
  useEffect(()=>{
    window.addEventListener('beforeinstallprompt',function(e){
        e.preventDefault();
        installPrompt = e;
        return false;
    });
  },[]);

  function install(){
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt.userChoice.then(function (choice) {
          installPrompt = null;
        });
      }
  }

  return <div>
    <Header/>
    <button onClick={install}>
      click
    </button>
    <ul>
      {
        props.categories.map(category=>{
          return <li key={category.id}>{category.name}</li>
        })
      }
    </ul>
  </div>;
}

Index.getInitialProps = async (context)=> {
  const category = await fetch('http://localhost:3001/category').then(response=>{
    return response.json();
  });
  return {
      categories:category.data.items
  }
}

export default AuthGuard<{categories:{id:string,name:string}[]}>(Index as NextComponentType<{categories:{id:string,name:string}[]}>);

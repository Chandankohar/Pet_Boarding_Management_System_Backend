import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col" >
      <h1 style={{marginTop:'100px',textAlign:'center',fontSize:'35px',fontWeight:'bold',color:'#00e5ff'}}>WELCOME TO PET SHOP</h1>
        <Outlet />
       <div><Footer /></div>
      </div>
      
    </>
  );
};

export default Layout;

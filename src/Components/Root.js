import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'



function Root() {

  return (

    
 <div className='main'>
 <Header />
     <Outlet />   
</div>
   
  );
}

export default Root;
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import React from 'react';
import Immigration from './Pages/Immigration';
import ChildSupport from './Pages/ChildSupport';
import Divorce from './Pages/Divorce/Divorce';
import Home from './Pages/Home';
import Root from './Components/Root';


const router = createBrowserRouter(createRoutesFromElements(
<Route path= '/' element={<Root/>}>
    <Route index element={<Navigate to='/home' />} />
    <Route path= '/home' element={<Home />}/>
    <Route path= '/childsupport' element={ <ChildSupport />}/>
    <Route path= '/divorce' element={<Divorce />}/>
    <Route path= '/immigration' element={ <Immigration />}/>
</Route>
));

function App() {
  return (
    <RouterProvider router={router} /> 
  );

}

export default App;
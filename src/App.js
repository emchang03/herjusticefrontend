import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import React from 'react';
import UVisa from './Pages/UVisa';
import Divorce from './Pages/Divorce';
import QuizContainer from './Pages/Divorce/DivorceQuizContainer';
import Home from './Pages/Home';
import Root from './Components/Root';
import UVFQuizContainer from './Pages/UVisaFiling/UVFQuizContainer';
import UVPQuizContainer from './Pages/UVisaPostFiling/UVPQuizContainer';
import FaqPage from './Pages/Faq';


const router = createBrowserRouter(createRoutesFromElements(
<Route path= '/' element={<Root/>}>
    <Route index element={<Navigate to='/home' />} />
    <Route path= '/home' element={<Home />}/>
    <Route path= '/divorce' element={<Divorce />} /> 
    <Route path= '/divorce/quiz' element={<QuizContainer />}/>
    <Route path= '/uvisa-filing' element={ <UVisa />}/>
    <Route path= '/uvisa-filing/quiz' element={ <UVFQuizContainer />}/>
    <Route path= '/uvisa-postfiling/quiz' element={ <UVPQuizContainer/>}/>
    <Route path='/faq' element={<FaqPage/>}/>
</Route>
));

function App() {
  return (
    <RouterProvider router={router} /> 
  );

}

export default App;

// element={
//   <DivorceOutput 
//     response = {answers[questionIndex]}
//     setQuestionIndex = {setQuestionIndex}
//     setQuizFinished = {setQuizFinished}
//     setUserInput = {setUserInput}
//   />
//   } 
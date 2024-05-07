
import Practise from './components/Practise';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Router, BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom';
import TableComponent from './components/TableComponent';


function App() {
  const appRouter = [
    {
      path: "/",
      element: <Practise />,
    },
    {
      path: "/table",
      element: <TableComponent />,

    },
 
  ];

  return (
   <>
         <BrowserRouter>
          <Routes>
            {appRouter.map( (val) =>{
             return <Route exact path={val.path} element={val.element}/>
            }
            )}

          </Routes>
         </BrowserRouter>
   </>
  );
}

export default App;

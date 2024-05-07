import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Products from './component/Products';

function App() {

  const AppRouter=createBrowserRouter([
    {
    path:'/',
    element:<SignUp/>
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
  {
    path:'/products',
    element:<Products/>
  },
])
  return (
   <>
      <RouterProvider router={AppRouter}/>
   </>
  );
}

export default App;

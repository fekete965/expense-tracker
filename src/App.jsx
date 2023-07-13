
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//pages
import Error from './pages/error';
import { logoutAction } from './pages/logged-out';
import Dashboard, { dashboardLoader } from './pages/dashboard';

//layout
import Main, { MainLoader } from './layouts/main-layout';

// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Main />} loader={MainLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path='logout' action={logoutAction} />
        <Route path='*' element={<Error />} />
      </Route>

    )
  )

  return (
    <div className='app'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App

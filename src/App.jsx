
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//pages
import Error from './pages/error';
import Logout, { logoutAction } from './pages/logout';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/dashboard';

//layout
import Main, { MainLoader } from './layouts/mainLayout';

// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Main />} loader={MainLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader} action={dashboardAction} />
        <Route path='logout' element={<Logout />} action={logoutAction} />

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

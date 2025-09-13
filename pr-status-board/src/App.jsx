import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import OpenPRsPage from './pages/OpenPRsPage';
import ClosedPRsPage from './pages/ClosedPRsPage';


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path='/open-prs' element={<OpenPRsPage /> } />
      <Route path='/closed-prs' element={<ClosedPRsPage /> } />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;

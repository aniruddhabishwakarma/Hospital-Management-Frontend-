
import './App.css'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Settings from './pages/settings/Settings'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManagerDashboard from './pages/manager/ManagerDashboard'
import Login from './pages/login/Login'


const router  = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path = 'profile' element = {<Profile />}/>
            <Route path = 'settings' element = {<Settings />}/>
            <Route path= 'admin' element = {<AdminDashboard />}/>
            <Route path= 'manager' element = {<ManagerDashboard />}/>
        </Route>
        </>
  )
)

function App({routes}) {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App

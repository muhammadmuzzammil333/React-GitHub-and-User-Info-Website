import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import GitHubUserId, { fetchGitHubData } from './components/gitHub/GitHubUserId'


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/user/:userId' element={<User/>} />
        <Route
        path='/github/:gitHubUserId' 
        element={<GitHubUserId/>}
        loader={fetchGitHubData}
         />

      </Route>
    )
  )

   

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}



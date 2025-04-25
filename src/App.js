import React from 'react'
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

import './App.css'

export default function App() {

    let router = useRoutes(routes)

  return (
    <>
        <Navbar />
        <div className='container'>
            {router}
        </div>
    </>
  )
}

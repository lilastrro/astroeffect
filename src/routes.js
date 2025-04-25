import Home from './pages/home/home'
import Services from './pages/services/services'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/services', element: <Services /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
]

export default routes
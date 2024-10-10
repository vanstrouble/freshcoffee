import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    }
])

export default Router

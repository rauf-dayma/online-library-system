import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorRout from './components/ErrorRout.jsx'
import BrowseBooks from './components/BrowsBooks.jsx'
import BookDetails from './components/BookDetails.jsx'
import Details from './components/details.jsx'
import AddBookCom from './components/AddBookCom.jsx'



const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <BrowseBooks />  
      },
      {
        path: "/Add",
        element: <AddBookCom />  
      },
      {
        path: "book/:id",
        element: <BookDetails />  
      },
      {
        path: "details/:id",
        element: <Details />  
      }
    ],
    errorElement: <ErrorRout />,
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouting} />
  </StrictMode>
)

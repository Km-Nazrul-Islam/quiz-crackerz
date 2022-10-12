
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home'
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },

        {
          path: '/topics/:topicsId', 
         loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
        },
        element: <Topics></Topics>},

        {path: '/statistics', element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/about', element: <About></About>},
        {path: '*', element: <div>Not Found</div>}
        
        
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
